<?php
session_start();

// Store user information in session
$_SESSION['user_name'] = 'John Doe';
$_SESSION['user_email'] = 'john.doe@example.com';

// Access session variables
$name = $_SESSION['user_name'];
$email = $_SESSION['user_email'];

// Display or use the session data as needed
echo "User Name: $name <br>";
echo "User Email: $email";
?>