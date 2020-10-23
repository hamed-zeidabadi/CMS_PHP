<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'cms';
$connect = mysqli_connect($host, $user, $password, $database);
mysqli_set_charset($connect, 'utf8');
if (!$connect) {
    die("Connection failed: " . mysqli_connect_error());
}
// if ($connect) {
//     echo 'Database connection was successful';
// };
