<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    setcookie('session',md5(rand()),time()+60*60*24*30,'/');

?>
<html>
<head>
</head>
<body>
OK php
</body>
</html>