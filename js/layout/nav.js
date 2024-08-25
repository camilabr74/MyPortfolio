export function renderNav() {
    const navContainer = document.createElement('nav');
    navContainer.className = 'navbar';

    navContainer.innerHTML = `
        <div class="logo-container">
            <img src="images/logo.png" alt="Logo" class="logo">
        </div>
        <div class="nav-links">
            <a href="#sobre" id="nav-about">Sobre Mim</a>
            <a href="#habilits" id="nav-habilits">Habilidades</a>
            <a href="#projects" id="nav-projects">Projetos</a>
            <a href="#academic" id="nav-academic">Formação</a>
            <a href="#experience" id="nav-experience">Experiência</a>
        </div>
        <div class="navbar-extras">
            <div class="dropdown">
                <button class="dropdown-toggle" type="button" id="dropdownMenuButton" aria-haspopup="true"
                    aria-expanded="false">
                    <i class="fa-solid fa-language"></i>
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#" onclick="changeLanguage('pt')">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
                            alt="Português"> Português
                    </a>
                    <a class="dropdown-item" href="#" onclick="changeLanguage('en')">
                        <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                            alt="English"> English
                    </a>
                    <a class="dropdown-item" href="#" onclick="changeLanguage('es')">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" alt="Español">
                        Español
                    </a>
                </div>
            </div>
            <img src="https://img.icons8.com/ios-filled/50/ffffff/sun.png" alt="Modo Escuro/Claro"
                class="mode-toggle" onclick="toggleMode()">
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;

    document.body.insertBefore(navContainer, document.body.firstChild);

    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
    });
}
