// export const projects = [
//     {
//         image: "https://via.placeholder.com/300x200",
//         title: "Hub de Indicadores Globais",
//         description: "Aplicação web que consome a API do IBGE usando Flask para exibir indicadores por países. Os dados são tratados em JavaScript e renderizados dinamicamente em uma tabela. Utilizei Charts.js para gerar gráficos interativos dos indicadores.",
//         links: {
//             github: "https://github.com/camilabr74/Flask-IBGE-Data-API",
//         },
//         tags: ["JavaScript", "Flask", "HTML/CSS", "Bootstrap"]
//     },
//     {
//         image: "./images/projectImages/enem2019.jpg",
//         title: "Análise de Dados com Python - ENEM 2019",
//         description: "Este projeto envolveu a análise estatística dos dados do ENEM 2019, utilizando Python para carregar, tratar e aplicar técnicas como medidas descritivas, distribuições e regressão linear, resultando em uma análise detalhada e significativa.",
//         links: {
//             github: "https://github.com/camilabr74/Estatistica-Analise-Dados-Python",
//             google: "https://drive.google.com/file/d/1qNsYV6jvlGek_R9XzyLpTJVAu2YxJNqh/view?usp=sharing",
//         },
//         tags: ["Python", "Pandas", "Numpy", "Matpotlib", "Colab"]
//     },
//     {
//         image: "./images/projectImages/orange.JPG",
//         title: "Orange Portfólio",
//         description: "Orange Portfolio é uma aplicação desenvolvida pelo Squad 18 que permite usuários se cadastrarem, adicionarem projetos ao portfólio e explorarem trabalhos de outros membros da Comunidade Orange Juice.",
//         links: {
//             github: "https://github.com/camilabr74/orange",
//             youtube: "https://youtu.be/WJaenoGOvI8",
//             // linkedin: "https://www.linkedin.com/in/seu-perfil",
//             // deploy: "https://seu-deploy-link.com"
//         },
//         tags: ["React", "Vite", "MaterialUI", "Tailwind CSS", "Google OAuth"]
//     },
//     {
//         image: "./images/projectImages/meuPortfolio.JPG",
//         title: "Meu Portfólio",
//         description: "Este portfólio foi criado para apresentar meus projetos e habilidades de forma clara e organizada. Ele é totalmente responsivo, adaptando-se a diferentes dispositivos, e inclui um modo escuro para uma melhor experiência de visualização.",
//         links: {
//             github: "https://github.com/seu-usuario/seu-repositorio",
//             google: "https://colab.research.google.com/drive/seu-colab-link",
//             // linkedin: "https://www.linkedin.com/in/seu-perfil",
//             // deploy: "https://seu-deploy-link.com"
//         },
//         tags: ["JavaScript", "HTML", "CSS", ]
//     },
//     {
//         image: "./images/projectImages/pequenosPassos.JPG",
//         title: "Pequenos Passos - Registro diário educação infantil",
//         description: "Pequenos Passos é um software web para digitalizar o registro de observações na Educação Infantil, visando obter informações de desenvolvimento de cada criança. Seu objetivo é substituir registros manuais por uma solução digital eficiente e centralizada.",
//         links: {
//             figma: "https://www.figma.com/proto/bXzFyutCuvf3zuvJH9QRJO/Pequenos-Passos?node-id=1-2&t=LzQzYKpsMS2sPAIt-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
//             youtube: "https://youtu.be/yFUmgHMjn_g",
//         },
//         tags: ["Figma", "AdobeColor", "HTML", "CSS", "Bootstrap" ]
//     },
//     {
//         image: "./images/projectImages/petShop.JPG",
//         title: "Agenda PetShop",
//         description: "Protótipo desenvolvido utilizando Figma para agendamento de serviços de banho e tosa em PetShop.",
//         links: {
//             figma: "https://www.figma.com/proto/yCG4GvQgbnhLXmd4hCxY3V/petShop?node-id=34-414&t=i64KJ2lx7IofvPFH-0&scaling=scale-down&content-scaling=fixed&page-id=34%3A413&starting-point-node-id=34%3A414"
//         },
//         tags: ["Figma", "AdobeColor" ]
//     },
// ];



export function renderProjects() {
    const projectsList = document.getElementById("projectsList");

    let projectCards = [];

    projects.forEach((project, index) => {
        let links = '';

        if (project.links.github) {
            links += `<a href="${project.links.github}" target="_blank"><i class="fab fa-github"></i></a>`;
        }
        if (project.links.google) {
            links += `<a href="${project.links.google}" target="_blank"><i class="fab fa-google"></i></a>`;
        }
        if (project.links.linkedin) {
            links += `<a href="${project.links.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>`;
        }
        if (project.links.deploy) {
            links += `<a href="${project.links.deploy}" target="_blank"><i class="fas fa-globe"></i></a>`;
        }
        if (project.links.figma) {
            links += `<a href="${project.links.figma}" target="_blank"><i class="fa-brands fa-figma"></i></a>`;
        }
        if (project.links.youtube) {
            links += `<a href="${project.links.youtube}" target="_blank"><i class="fa-brands fa-youtube"></i></a>`;
        }


        projectCards.push(`
            <div class="card">
                <img src="${project.image}" alt="${project.title}">
                <div class="card-content">
                    <div class="card-links">
                        ${links}
                    </div>
                    <h3 id="${'title-'+index}">${project.title['pt'] }</h3>
                    <p id=${'desc-'+index}>${project.description['pt']}</p>
                    <div class="card-tags">
                        ${project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("")}
                    </div>
                </div>
            </div>
        `);
    });

    projectsList.innerHTML = projectCards.join("");
}
