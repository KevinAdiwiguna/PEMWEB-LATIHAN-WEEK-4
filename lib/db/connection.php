<?php
function connectDB() {
    $host = "localhost";
    $user = "root";
    $pass = "";
    $dbname = "pemweb";

    $conn = new mysqli($host, $user, $pass, $dbname);

    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    return $conn;
}
?>
