<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $checkbox = isset($_POST['check']) ? 'Checked' : 'Unchecked';
    $radio = isset($_POST['radio']) ? $_POST['radio'] : 'N/A';

    // Display processed data
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Checkbox: $checkbox</p>";
    echo "<p>Radio: $radio</p>";

}
?>
