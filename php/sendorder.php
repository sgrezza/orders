<?php

require 'config.php';
$order = file_get_contents('php://input');
$file = 'orders.txt';
file_put_contents($file, $order);
?>