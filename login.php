<?php 
    session_start();
    if(isset($_SESSION['unique_id'])){
        header("Location: ./users.php");
    }
?>
<?php include_once "./header.php"; ?>
<body>
    <div class="wrapper">
        <section class="form login">
            <header>
                <img src="./Logo.png" alt="" height="60px" width="60px" />
                Divine Chats<a href="#" class="logout" id="theme-toggle">Dark</a>
            </header>
            <form action="#">
                <div class="error-txt"></div>
                <div class="field input">
                    <label>Email Address</label>
                    <input type="text" name="email" placeholder="Enter your email">
                </div>
                <div class="field input">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Enter your password">
                    <i class="fas fa-eye"></i>
                </div>
                <div class="field button">
                    <input type="submit" value="Continue to Chat">
                </div>
            </form>
            <div class="link">Not a user? <a href="index.php">Join now</a></div>
        </section>
    </div>
    <script src="./JavaScript/toggle.js"></script>
    <script src="JavaScript/pass-show-hide.js"></script>
    <script src="./JavaScript/login.js"></script>
</body>
</html>