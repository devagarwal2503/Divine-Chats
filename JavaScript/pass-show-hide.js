const pswedField = document.querySelector(".form input[type='password']"),
toggleBtn = document.querySelector(".form .field i");

toggleBtn.onclick = ()=>{
    if(pswedField.type == "password"){
        pswedField.type = "text";
        toggleBtn.classList.add("active");
    }else{
        pswedField.type = "password";
        toggleBtn.classList.remove("active");
    }
}