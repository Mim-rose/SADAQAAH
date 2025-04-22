<?php
// MySQL connection establish koro
$servername = "localhost";
$username = "root"; // tumi jodi default user use koro, tahole username='root' hobe
$password = " ";
$database = "sadaqaah";

$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// User signup function
function signup($email, $password, $conn) {
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";
    if ($conn->query($sql) === TRUE) {
        echo "Signup Successful!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
function close_connection($conn) {
    $conn->close();
}

// Process the signup form
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    signup($email, $password, $conn);
}

close_connection($conn);
?>