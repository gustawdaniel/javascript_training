<?php
// php -S localhost:8000 api.php
// http://php.net/manual/en/features.commandline.webserver.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
$uri = explode('/', strtolower(substr($_SERVER['REQUEST_URI'], 1)));
$route = $uri[0];
$parameter = $uri[1] ?? "";
$input = json_decode(file_get_contents('php://input'), true);
$post = $_POST;
$word = $input["word"] ?? $_POST["word"] ?? null;
$data = array();
$data["config"] = [
    "uri" => implode("/", $uri),
    "route" => $route,
    "parameter" => $parameter,
    "method" => $method,
    "input" => $input,
    "post" => $post,
    "word" => $word
];

try {
    switch ($route) {
        case "words":
            {
                $mng = new MongoDB\Driver\Manager("mongodb://localhost:27017"); // http://php.net/manual/en/class.mongodb-driver-query.php
                switch ($parameter) {
                    case "":
                        {
                            switch ($method) {
                                case 'GET':
                                    {
                                        $data["words"] = [];
                                        $query = new MongoDB\Driver\Query([], ['projection' => ['_id' => 1, "word" => 1]]);
                                        $rows = $mng->executeQuery("javascript_training.javascript_training", $query);
                                        foreach ($rows as $row) {
                                            $data["words"][] = ["id" => (string)$row->_id, "word" => $row->word];
                                        }
                                        break;
                                    }
                                case 'POST':
                                    {
                                        $bulk = new MongoDB\Driver\BulkWrite;
                                        $doc = ['word' => $word];
                                        $id = $bulk->insert($doc); // http://php.net/manual/en/mongodb-driver-bulkwrite.insert.php
                                        $mng->executeBulkWrite('javascript_training.javascript_training', $bulk);
                                        $data["words"] = ["id" => (string)$id, "word" => $word];
                                        break;
                                    }
                                default:
                                    {
                                        $data["error"] = ["code" => 405, "type" => "Method Not Allowed", "message" => "Method not allowed, try GET /word"];
                                        break;
                                    }
                            }
                            break;
                        }
                    default:
                        {
                            $id = new MongoDB\BSON\ObjectID($parameter);
                            switch ($method) {
                                case 'GET':
                                    {
                                        $data["words"];
                                        $query = new MongoDB\Driver\Query(['_id' => $id], ['projection' => ['_id' => 1, "word" => 1]]);
                                        $rows = $mng->executeQuery("javascript_training.javascript_training", $query);
                                        foreach ($rows as $row) {
                                            $data["words"] = ["id" => $parameter, "word" => $row->word];
                                        }
                                        break;
                                    }
                                case 'DELETE':
                                    {
                                        $bulk = new MongoDB\Driver\BulkWrite;
                                        $bulk->delete(['_id' => $id]);
                                        $mng->executeBulkWrite('javascript_training.javascript_training', $bulk);
                                        http_response_code(202);
                                        break;
                                    }
                                default:
                                    {
                                        $data["error"] = ["code" => 405, "type" => "Method Not Allowed", "message" => "Method not allowed, try GET /word"];
                                        break;
                                    }
                            }
                            break;
                        }
                }
                break;
            }
        default:
            {
                $data["error"] = ["code" => 404, "type" => "Not Found", "message" => 'Route not found, try GET /words, GET /words/{id}, POST /words with body {"word":"example"}, DELETE /words/{id}'];
                break;
            }
    }
} catch (MongoDB\Driver\Exception\Exception $e) {
    $filename = basename(__FILE__);
    echo "The $filename script has experienced an error.\n";
    echo "It failed with the following exception:\n";
    echo "Exception:", $e->getMessage(), "\n";
    echo "In file:", $e->getFile(), "\n";
    echo "On line:", $e->getLine(), "\n";
}


echo json_encode($data);