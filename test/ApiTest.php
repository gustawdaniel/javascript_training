<?php


use PHPUnit\Framework\TestCase;

class ApiTest extends TestCase
{
    public function testWordsKeyIsAlwaysReturned()
    {
        $json = file_get_contents("http://localhost:8000/words");
        $this->assertIsString($json);

        $object = json_decode($json);
        $this->assertInstanceOf(stdClass::class, $object);

        $this->assertObjectHasAttribute('words', $object);
        $this->assertCount(0, $object->words);
    }
}