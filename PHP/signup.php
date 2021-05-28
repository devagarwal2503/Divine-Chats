<?php
    session_start();
    include_once "config.php";
    $fname = mysqli_real_escape_string($conn, $_POST["fname"]);
    $lname = mysqli_real_escape_string($conn, $_POST["lname"]);
    $email = mysqli_real_escape_string($conn, $_POST["email"]);
    $password = mysqli_real_escape_string($conn, $_POST["password"]);

    if(!empty($fname) && !empty($lname) && !empty($email) && !empty($password)){
        //Email Validity
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            // Checking if email is already in Database
            $sql = mysqli_query($conn, "SELECT email FROM users WHERE email = '{$email}'");
            if(mysqli_num_rows($sql) > 0){// if email already exists
                echo "$email - This email already Exist!!";
            }else{
                //To check if user has uploaded image file or not
                if(isset($_FILES['image'])){// if file is uploaded
                    $img_name = $_FILES['image']['name'];//image name
                    $img_type = $_FILES['image']['type'];// image type
                    $tmp_name = $_FILES['image']['tmp_name'];// img temp name which is used in database
                    // Get the Extension of img
                    $img_explode = explode('.', $img_name);
                    $img_ext = end($img_explode);// here we get the extension.

                    $extension = ['jpg', 'jpeg', 'png'];// Allowed extensions

                    if(in_array($img_ext, $extension) === true){// if file ext matches
                        $time = time(); //Get the current time
                                        // we need this to store all img files with unique name
                        // Lets move the img to specific folder
                        $new_img_name =$time.$img_name;
                        if(move_uploaded_file($tmp_name, "../userimg/".$new_img_name)){
                            $status = "Active now";
                            $random_id = rand(time(), 10000000);// random id for User

                            // Insert all user data into database
                            $sql2 = mysqli_query($conn, "INSERT INTO users (unique_id, fname, lname, email, password, img, status)
                                                VALUES ({$random_id}, '{$fname}', '{$lname}', '{$email}', '{$password}', '{$new_img_name}', '{$status}')");
                            if($sql2){// IF this data is inserted into database
                                $sql3 = mysqli_query($conn, "SELECT * FROM users WHERE email = '{$email}'");
                                if(mysqli_num_rows($sql3) > 0){
                                    $row = mysqli_fetch_assoc($sql3);
                                    $_SESSION['unique_id'] = $row['unique_id'];
                                    echo "Success";
                                }
                            }else{
                                echo "Something Went wrong!!!";
                            }
                        }
                    }else {
                        echo "Please select an Image file - jpeg, jpg or png!";
                    }
                }else{
                    echo "Please select an Image file";
                }
            }
        }
        else{
            echo "$email - This is not a valid email address";
        }
    }else{
        echo "All input fields are required!";
    }
?>