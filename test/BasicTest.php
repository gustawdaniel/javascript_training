<?php

use PHPUnit\Framework\TestCase;

class BasicTest extends TestCase
{
	public function testOnePlusOne() {
        var_dump("Basic");
		$this->assertEquals(1+1,2);
  	}
}

