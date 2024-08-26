export const projects = [
    {
        image: "https://via.placeholder.com/300x200",
        title: "Indicadores Globais",
        description: "Descrição do projeto 1. Um breve resumo sobre o que o projeto aborda e suas tecnologias utilizadas.",
        links: {
            github: "https://github.com/seu-usuario/seu-repositorio",
            google: "https://colab.research.google.com/drive/seu-colab-link",
            linkedin: "https://www.linkedin.com/in/seu-perfil",
            deploy: "https://seu-deploy-link.com"
        },
        tags: ["JavaScript", "Flask", "HTML/CSS", "Bootstrap"]
    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "Projeto 2",
        description: "Descrição do projeto 2. Um breve resumo sobre o que o projeto aborda e suas tecnologias utilizadas.",
        links: {
            github: "https://github.com/seu-usuario/seu-repositorio",
            google: "https://colab.research.google.com/drive/seu-colab-link",
            linkedin: "https://www.linkedin.com/in/seu-perfil",
            deploy: "https://seu-deploy-link.com"
        },
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "Projeto 2",
        description: "Descrição do projeto 2. Um breve resumo sobre o que o projeto aborda e suas tecnologias utilizadas.",
        links: {
            github: "https://github.com/seu-usuario/seu-repositorio",
            google: "https://colab.research.google.com/drive/seu-colab-link",
            linkedin: "https://www.linkedin.com/in/seu-perfil",
            deploy: "https://seu-deploy-link.com"
        },
        tags: ["HTML", "CSS", "JavaScript"]
    },
    {
        image: "https://via.placeholder.com/300x200",
        title: "Projeto 2",
        description: "Descrição do projeto 2. Um breve resumo sobre o que o projeto aborda e suas tecnologias utilizadas.",
        links: {
            github: "https://github.com/seu-usuario/seu-repositorio",
            google: "https://colab.research.google.com/drive/seu-colab-link",
            linkedin: "https://www.linkedin.com/in/seu-perfil",
            deploy: "https://seu-deploy-link.com"
        },
        tags: ["HTML", "CSS", "JavaScript"]
    },
];


export function renderProjects() {
    const projectsList = document.getElementById("projectsList");

    let projectCards = [];

    projects.forEach((project) => {
        projectCards.push(`
            <div class="card">
                <img src="${project.image}" alt="${project.title}">
                <div class="card-content">
                    <div class="card-links">
                        <a href="${project.links.github}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${project.links.google}" target="_blank"><i class="fab fa-google"></i></a>
                        <a href="${project.links.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="${project.links.deploy}" target="_blank"><i class="fas fa-globe"></i></a>
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="card-tags">
                        ${project.tags.map(tag => `<span class="card-tag">${tag}</span>`).join("")}
                    </div>
                </div>
            </div>
        `);
    });

    projectsList.innerHTML = projectCards.join("");
}