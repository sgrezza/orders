<?php 
$db_host = '45.56.100.209';
$db_port = '3306';
$db_user = 'spencer';
$db_pass = 'spenther97';
$db_name = 'orders';
$db = new mysqli($db_host, $db_user, $db_pass, $db_name);
    if (mysqli_connect_errno()) //connect to server
        fail('MySQL connect', mysqli_connect_errno());
?>