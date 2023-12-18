<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $checkbox = isset($_POST['check']) ? 'Checked' : 'Unchecked';
    $radio = isset($_POST['radio']) ? $_POST['radio'] : 'N/A';

    // Perform server-side validation here

    // Display processed data
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Checkbox: $checkbox</p>";
    echo "<p>Radio: $radio</p>";

    // Save to the database and log browser information and IP address
    // Database connection and query execution code here
}
?>