<?php


use MongoDB\Driver\Manager;
use PHPUnit\Framework\TestCase;

class MongoTest extends TestCase
{
    public function testMongoConnection()
    {
        var_dump("MONGO");
        $problem = null;
        $mng = null;

        try {
            $mng = new MongoDB\Driver\Manager("mongodb://localhost:27017");
        } catch (\Exception $e) {
            $problem = $e;
        }

        $this->assertNull($problem);
        $this->assertNotNull($mng);
    }
}