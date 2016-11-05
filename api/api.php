<?php

    // php -S lalhost:8000 -file api.php

    $method = $_SERVER['REQUEST_METHOD'];
    $uri = $_SERVER['REQUEST_URI'];

    try {
        switch ($uri) {
            case "/word":
                switch ($method) {
                  case 'GET':
                        $mng = new MongoDB\Driver\Manager("mongodb://localhost:27017");
                        $query = new MongoDB\Driver\Query([]);
                        $rows = $mng->executeQuery("javascript_training.javascript_training", $query);
                        foreach ($rows as $row) {
                            echo "$row->word\n";
                        }
                  case 'POST':
                    try {
                        $mng = new MongoDB\Driver\Manager("mongodb://localhost:27017");
                        $bulk = new MongoDB\Driver\BulkWrite;
                        $doc = ['_id' => new MongoDB\BSON\ObjectID, 'word' => 'Elo'];
                        $bulk->insert($doc);
                        $mng->executeBulkWrite('javascript_training.javascript_training', $bulk);
                  case 'DELETE':
                    try {
                        $mng = new MongoDB\Driver\Manager("mongodb://localhost:27017");
                        $bulk = new MongoDB\Driver\BulkWrite;
                        $bulk->delete(['word' => 'example']);
                        $mng->executeBulkWrite('javascript_training.javascript_training', $bulk);
                }
                break;
            default:
                echo '{error:"not found"}';
                break;
        }
    } catch (MongoDB\Driver\Exception\Exception $e) {
        $filename = basename(__FILE__);
        echo "The $filename script has experienced an error.\n";
        echo "It failed with the following exception:\n";
        echo "Exception:", $e->getMessage(), "\n";
        echo "In file:", $e->getFile(), "\n";
        echo "On line:", $e->getLine(), "\n";
}