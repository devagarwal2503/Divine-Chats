document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = localStorage.getItem('theme-toggle');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
        themeToggle.innerText = themeIcon;    
    }
    
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark-mode.css';
            themeToggle.innerText = 'Light';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-mode.css';
            themeToggle.innerText = 'Dark';
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href);
        localStorage.setItem('theme-toggle',themeToggle.innerText);
    })
})