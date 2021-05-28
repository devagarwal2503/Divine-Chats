const form = document.querySelector(".typing-area"),
inputField = form.querySelector(".input-field"),
sendBtn = form.querySelector("button"),
chatBox = document.querySelector(".chat-box");
form.onsubmit = (e) => {
    e.preventDefault();
}
sendBtn.onclick = () => {
    // Ajax request
    let xhr = new XMLHttpRequest(); // createing XML Object
    xhr.open("POST", "./PHP/insert-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                inputField.value = ""; //Once the msg is stored in DB clear the input field
                if(!chatBox.classList.contains("active")){
                    scrollToBottom();
                }
            }
        }
    }
    // Ajax data to PHP for form
    let formData = new FormData(form); //creating formData Object

    xhr.send(formData); // sending form data to PHP
}

chatBox.onmouseenter = () => {
    chatBox.classList.add("active");
}
chatBox.onmouseleave = () => {
    chatBox.classList.remove("active");
}

setInterval(()=>{
    // Ajax request
    let xhr = new XMLHttpRequest(); // createing XML Object
    xhr.open("POST", "PHP/get-chat.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                let data = xhr.response;
                chatBox.innerHTML = data;
                if(!chatBox.classList.contains("active")){
                    scrollToBottom();
                }
            }
        }
    }
    let formData = new FormData(form); //creating formData Object
    xhr.send(formData); // sending form data to PHP
}, 500);// this function will run frequently after 500ms.

function scrollToBottom(){
    chatBox.scrollTop = chatBox.scrollHeight;
}