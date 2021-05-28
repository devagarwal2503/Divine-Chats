<?php
    $conn = mysqli_connect("localhost", "root", "", "divinechats");
    if(!$conn)
    {
        echo "Database not connected" . mysqli_connect_error();
    }
?>