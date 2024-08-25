// Função para alternar entre dark mode e modo claro
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    const modeIcon = document.querySelector('.mode-toggle');
    
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.src = "https://img.icons8.com/ios/50/ffffff/sun.png";
        localStorage.setItem('theme', 'dark');
    } else {
        modeIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/bright-moon.png";
        localStorage.setItem('theme', 'light');
    }
}

// Expõe a função ao escopo global
window.toggleMode = toggleMode;

export function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const modeIcon = document.querySelector('.mode-toggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        modeIcon.src = "https://img.icons8.com/ios/50/ffffff/sun.png";
    } else {
        modeIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/bright-moon.png";
    }
}

// Chama a função ao carregar a página
// initializeTheme();
