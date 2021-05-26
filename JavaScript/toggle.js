document.addEventListener('DOMContentLoaded', () => {

    const themeStylesheet = document.getElementById('theme');
    const storedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = localStorage.getItem('theme-toggle');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
        themeToggle.src = themeIcon;    
    }
    
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('light')){
            themeStylesheet.href = 'dark-mode.css';
            themeToggle.src = "/icon/sun.png";
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'light-mode.css';
            themeToggle.src = "/icon/moon.png";
        }
        // save the preference to localStorage
        localStorage.setItem('theme',themeStylesheet.href);
        localStorage.setItem('theme-toggle',themeToggle.src);
    })
})