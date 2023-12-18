<?php
// Save to the database
include('dbconfig.php');

$sql = "INSERT INTO user_data (name, email, checkbox_status, radio_value, browser_info, ip_address)
        VALUES ('$name', '$email', '$checkbox', '$radio', '$_SERVER[HTTP_USER_AGENT]', '$_SERVER[REMOTE_ADDR]')";

if ($conn->query($sql) === TRUE) {
    echo "Data has been saved to the database successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
