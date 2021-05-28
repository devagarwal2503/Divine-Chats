const form = document.querySelector(".login form"),
continueBtn = form.querySelector(".button input"),
errorText = form.querySelector(".error-txt");

form.onsubmit = (e) => {
    e.preventDefault();
}

continueBtn.onclick = ()=>{
    // Ajax request
    let xhr = new XMLHttpRequest(); // createing XML Object
    xhr.open("POST", "./PHP/login.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                console.log(data);
                if(data == "Success"){
                    location.href = "users.php";
                    //errorText.textContent = "Test if statement";
                }else{
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    // Ajax data to PHP for form
    let formData = new FormData(form); //creating formData Object

    xhr.send(formData); // sending form data to PHP
}