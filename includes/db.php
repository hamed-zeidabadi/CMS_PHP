<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'cms';
$connect = mysqli_connect($host, $user, $password, $database);
if ($connect) {
    echo 'Database connection was successful';
};
