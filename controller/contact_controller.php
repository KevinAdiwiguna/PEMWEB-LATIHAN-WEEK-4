<?php
require_once __DIR__ . "/../lib/db/connection.php";

function createMessage($data) {
    $conn = connectDB();

    $stmt = $conn->prepare(
        "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)"
    );

    if (!$stmt) {
        die("PREPARE ERROR: " . $conn->error);
    }

    $stmt->bind_param(
        "ssss",
        $data['name'],
        $data['email'],
        $data['subject'],
        $data['message']
    );

    if (!$stmt->execute()) {
        die("EXECUTE ERROR: " . $stmt->error);
    }

    return true;
}
?>
