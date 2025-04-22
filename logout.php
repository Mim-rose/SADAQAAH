<?php
session_start(); // Start the session (if not already started)

// Destroy the session data
session_destroy();

// Redirect the user to the login page
header("Location: login.php");
exit;
?>