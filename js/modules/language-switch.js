const flagMap = {
    'pt': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
    'en': 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    'es': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
};

const softSkills = [
    { icon: "fas fa-sync-alt", name: { 'pt': "Adaptabilidade", 'en': "Adaptability", 'es': "Adaptabilidad" } },
    { icon: "fas fa-comments", name: { 'pt': "Boa comunicação", 'en': "Good Communication", 'es': "Buena comunicación" } },
    { icon: "fas fa-globe", name: { 'pt': "Inglês - Nível B1", 'en': "English - Level B1", 'es': "Inglés - Nivel B1" } },
    { icon: "fas fa-star", name: { 'pt': "Foco em qualidade", 'en': "Focus on Quality", 'es': "Enfoque en la calidad" } },
    { icon: "fas fa-microphone-alt", name: { 'pt': "Gosto de fazer apresentações", 'en': "Enjoys Making Presentations", 'es': "Disfruta hacer presentaciones" } },
    { icon: "fas fa-tasks", name: { 'pt': "Organizada", 'en': "Organized", 'es': "Organizada" } },
    { icon: "fas fa-brain", name: { 'pt': "Pensamento Crítico", 'en': "Critical Thinking", 'es': "Pensamiento Crítico" } },
    { icon: "fas fa-lightbulb", name: { 'pt': "Proativa", 'en': "Proactive", 'es': "Proactiva" } },
    { icon: "fas fa-users", name: { 'pt': "Trabalho em equipe", 'en': "Teamwork", 'es': "Trabajo en equipo" } },
    { icon: "fas fa-eye", name: { 'pt': "Visão Sistêmica", 'en': "Systemic Vision", 'es': "Visión Sistémica" } }
];

const projects = [
    {
        image: "https://via.placeholder.com/300x200",
        title: {
            'pt': "Hub de Indicadores Globais",
            'en': "Global Indicators Hub",
            'es': "Centro de Indicadores Globales"
        },
        description: {
            'pt': "Aplicação web que consome a API do IBGE usando Flask para exibir indicadores por países. Os dados são tratados em JavaScript e renderizados dinamicamente em uma tabela. Utilizei Charts.js para gerar gráficos interativos dos indicadores.",
            'en': "Web application that consumes the IBGE API using Flask to display indicators by country. Data is processed in JavaScript and dynamically rendered in a table. I used Charts.js to generate interactive charts for the indicators.",
            'es': "Aplicación web que consume la API del IBGE usando Flask para mostrar indicadores por país. Los datos se procesan en JavaScript y se renderizan dinámicamente en una tabla. Utilicé Charts.js para generar gráficos interactivos de los indicadores."
        },
        links: {
            github: "https://github.com/camilabr74/Flask-IBGE-Data-API"
        },
        tags: ["JavaScript", "Flask", "HTML/CSS", "Bootstrap"]
    },
    {
        image: "./images/projectImages/enem2019.jpg",
        title: {
            'pt': "Análise de Dados com Python - ENEM 2019",
            'en': "Data Analysis with Python - ENEM 2019",
            'es': "Análisis de Datos con Python - ENEM 2019"
        },
        description: {
            'pt': "Este projeto envolveu a análise estatística dos dados do ENEM 2019, utilizando Python para carregar, tratar e aplicar técnicas como medidas descritivas, distribuições e regressão linear, resultando em uma análise detalhada e significativa.",
            'en': "This project involved statistical analysis of the 2019 ENEM data, using Python to load, process, and apply techniques such as descriptive measures, distributions, and linear regression, resulting in a detailed and meaningful analysis.",
            'es': "Este proyecto involucró el análisis estadístico de los datos del ENEM 2019, utilizando Python para cargar, procesar y aplicar técnicas como medidas descriptivas, distribuciones y regresión lineal, resultando en un análisis detallado y significativo."
        },
        links: {
            github: "https://github.com/camilabr74/Estatistica-Analise-Dados-Python",
            google: "https://drive.google.com/file/d/1qNsYV6jvlGek_R9XzyLpTJVAu2YxJNqh/view?usp=sharing"
        },
        tags: ["Python", "Pandas", "Numpy", "Matplotlib", "Colab"]
    },
    {
        image: "./images/projectImages/orange.JPG",
        title: {
            'pt': "Orange Portfólio",
            'en': "Orange Portfolio",
            'es': "Portafolio Orange"
        },
        description: {
            'pt': "Orange Portfolio é uma aplicação desenvolvida pelo Squad 18 que permite usuários se cadastrarem, adicionarem projetos ao portfólio e explorarem trabalhos de outros membros da Comunidade Orange Juice.",
            'en': "Orange Portfolio is an application developed by Squad 18 that allows users to register, add projects to their portfolio, and explore works from other members of the Orange Juice Community.",
            'es': "Orange Portfolio es una aplicación desarrollada por el Squad 18 que permite a los usuarios registrarse, agregar proyectos a su portafolio y explorar trabajos de otros miembros de la Comunidad Orange Juice."
        },
        links: {
            github: "https://github.com/camilabr74/orange",
            youtube: "https://youtu.be/WJaenoGOvI8"
            // linkedin: "https://www.linkedin.com/in/seu-perfil",
            // deploy: "https://seu-deploy-link.com"
        },
        tags: ["React", "Vite", "MaterialUI", "Tailwind CSS", "Google OAuth"]
    },
    {
        image: "./images/projectImages/meuPortfolio.JPG",
        title: {
            'pt': "Meu Portfólio",
            'en': "My Portfolio",
            'es': "Mi Portafolio"
        },
        description: {
            'pt': "Este portfólio foi criado para apresentar meus projetos e habilidades de forma clara e organizada. Ele é totalmente responsivo, adaptando-se a diferentes dispositivos, e inclui um modo escuro para uma melhor experiência de visualização.",
            'en': "This portfolio was created to showcase my projects and skills in a clear and organized way. It is fully responsive, adapting to different devices, and includes a dark mode for a better viewing experience.",
            'es': "Este portafolio fue creado para presentar mis proyectos y habilidades de manera clara y organizada. Es totalmente responsivo, adaptándose a diferentes dispositivos, e incluye un modo oscuro para una mejor experiencia de visualización."
        },
        links: {
            github: "https://github.com/seu-usuario/seu-repositorio",
            google: "https://colab.research.google.com/drive/seu-colab-link"
            // linkedin: "https://www.linkedin.com/in/seu-perfil",
            // deploy: "https://seu-deploy-link.com"
        },
        tags: ["JavaScript", "HTML", "CSS"]
    },
    {
        image: "./images/projectImages/pequenosPassos.JPG",
        title: {
            'pt': "Pequenos Passos - Registro diário educação infantil",
            'en': "Little Steps - Daily Record for Early Childhood Education",
            'es': "Pequeños Pasos - Registro Diario de Educación Infantil"
        },
        description: {
            'pt': "Pequenos Passos é um software web para digitalizar o registro de observações na Educação Infantil, visando obter informações de desenvolvimento de cada criança. Seu objetivo é substituir registros manuais por uma solução digital eficiente e centralizada.",
            'en': "Little Steps is a web software designed to digitize observation records in Early Childhood Education, aiming to gather development information for each child. Its goal is to replace manual records with an efficient and centralized digital solution.",
            'es': "Pequeños Pasos es un software web diseñado para digitalizar el registro de observaciones en la Educación Infantil, con el objetivo de recopilar información de desarrollo para cada niño. Su objetivo es sustituir los registros manuales por una solución digital eficiente y centralizada."
        },
        links: {
            figma: "https://www.figma.com/proto/bXzFyutCuvf3zuvJH9QRJO/Pequenos-Passos?node-id=1-2&t=LzQzYKpsMS2sPAIt-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
            youtube: "https://youtu.be/yFUmgHMjn_g"
        },
        tags: ["Figma", "AdobeColor", "HTML", "CSS", "Bootstrap"]
    },
    {
        image: "./images/projectImages/petShop.JPG",
        title: {
            'pt': "Agenda PetShop",
            'en': "PetShop Schedule",
            'es': "Agenda PetShop"
        },
        description: {
            'pt': "Protótipo desenvolvido utilizando Figma para agendamento de serviços de banho e tosa em PetShop.",
            'en': "Prototype developed using Figma for scheduling grooming services in PetShop.",
            'es': "Prototipo desarrollado utilizando Figma para agendar servicios de baño y corte en PetShop."
        },
        links: {
            figma: "https://www.figma.com/proto/yCG4GvQgbnhLXmd4hCxY3V/petShop?node-id=34-414&t=i64KJ2lx7IofvPFH-0&scaling=scale-down&content-scaling=fixed&page-id=34%3A413&starting-point-node-id=34%3A414"
        },
        tags: ["Figma", "AdobeColor"]
    }
];

const academic = [
    {
        course: {
            'pt': "Bacharelado em Ciência de Dados - Univesp",
            'en': "Bachelor's Degree in Data Science - Univesp",
            'es': "Licenciatura en Ciencia de Datos - Univesp"
        },
        year: {
            'pt': "agosto 2022 - agosto 2026",
            'en': "August 2022 - August 2026",
            'es': "agosto 2022 - agosto 2026"
        }
    },
    {
        course: {
            'pt': "Técnico em Administração",
            'en': "Technical Course in Administration",
            'es': "Técnico en Administración"
        },
        year: {
            'pt': "janeiro 2015 - dezembro 2017",
            'en': "January 2015 - December 2017",
            'es': "enero 2015 - diciembre 2017"
        }
    }
];

const translations = {
    'pt': {
        'title': '</Camis>',
        'nav-about': 'Sobre mim',
        'nav-habilits': 'Habilidades',
        'nav-projects': 'Projetos',
        'nav-academic': 'Formação',
        'nav-experience': 'Experiência',
        'about-heading': 'Quem sou eu',
        'about-text': `Prazer, me chamo Camila! 😊<br>
                Curiosa, de mente filosófica, movida por desafios e fascinada por como as coisas se
                <strong>conectam</strong>.<br>
                Atualmente, sou Trainee em Desenvolvimento Full-stack e Bacharelanda em Ciência de Dados,
                 onde busco entender como a análise de informações pode transformar <strong>processos</strong>
                  e <strong>otimizar resultados</strong>. Meu objetivo é explorar o mundo do <strong>desenvolvimento</strong>
                   e dos <strong>dados</strong> e aplicar esses conhecimentos para criar soluções que aprimorem a <strong>eficiência</strong>
                    e a <strong> tomada de decisões</strong>.
`,
        'projects-heading': 'Projetos',
        'education-heading': 'Formação',
        'experience-heading': 'Experiência Profissional'
    },
    'en': {
        'title': '</Camis>',
        'nav-about': 'About Me',
        'nav-habilits': 'Habilits',
        'nav-projects': 'Projects',
        'nav-academic': 'Education',
        'nav-experience': 'Experience',
        'about-heading': 'Who am I',
        'about-text': `Hi, my name is Camila! 😊<br>
                Curious, with a philosophical mind, driven by challenges, and fascinated by how things
                <strong>connect</strong>.<br>
                Currently, I am a Full-stack Development Trainee and a Data Science undergraduate, 
                where I seek to understand how information analysis can transform <strong>processes</strong> 
                and <strong>optimize results</strong>. My goal is to explore the world of <strong>development</strong>
                 and <strong>data</strong> and apply this knowledge to create solutions that enhance 
                 <strong>efficiency</strong> and <strong>decision-making</strong>.
`, 
        'experience-heading': 'Experience',
        'projects-heading': 'Projects',
        'education-heading': 'Education',
        'experience-heading': 'Professional experience'

    },
    'es': {
        'title': '</Camis>',
        'nav-about': 'Sobre Mí',
        'nav-habilits': 'Habilidades',
        'nav-projects': 'Proyectos',
        'nav-academic': 'Educación',
        'nav-experience': 'Experiencia',
        'about-heading': 'Quién soy yo',
        'about-text': `¡Hola, mi nombre es Camila! 😊<br>
                Curiosa, con una mente filosófica, impulsada por desafíos y fascinada por cómo las cosas
                <strong>se conectan</strong>.<br>
                Actualmente, soy Trainee en Desarrollo Full-stack y estudiante de licenciatura en Ciencia de Datos, 
                donde busco entender cómo el análisis de información puede transformar <strong>procesos</strong> 
                y <strong>optimizar resultados</strong>. Mi objetivo es explorar el mundo del <strong>desarrollo</strong>
                 y de los <strong>datos</strong> y aplicar estos conocimientos para crear soluciones que mejoren la <strong>eficiencia</strong>
                  y la <strong>toma de decisiones</strong>.
`,

        'projects-heading': 'Proyectos',
        'education-heading': 'Educación',
        'experience-heading': 'Experiencia profesional'


    }
};

function changeSkillsLanguage(lang){
     softSkills.forEach((item,index)=>{
         document.querySelector('#name-'+index).innerHTML=item.name[lang];
     })
}
function changeCardLanguage(lang){
    projects.forEach((project,index)=>{
        document.querySelector('#title-'+index).innerHTML=project.title[lang];
        document.querySelector('#desc-'+index).innerHTML=project.description[lang];
    })
}
function changeAcademicLanguage(lang){
    academic.forEach((course,index)=>{
        document.querySelector('#course-'+index).innerHTML=course.course[lang];
        document.querySelector('#year-'+index).innerHTML=course.year[lang];
    })
}

function changeLanguage(lang) {
    document.title = translations[lang]['title'];

    document.getElementById('nav-about').textContent = translations[lang]['nav-about'];
    document.getElementById('nav-habilits').textContent = translations[lang]['nav-habilits'];
    document.getElementById('nav-projects').textContent = translations[lang]['nav-projects'];
    document.getElementById('nav-experience').textContent = translations[lang]['nav-experience'];
    document.getElementById('nav-academic').textContent = translations[lang]['nav-academic'];
    document.getElementById('about-heading').textContent = translations[lang]['about-heading'];
    document.getElementById('about-text').innerHTML = translations[lang]['about-text'];
    document.getElementById('projects-heading').textContent = translations[lang]['projects-heading'];
    document.getElementById('education-heading').textContent = translations[lang]['education-heading'];
    document.getElementById('experience-heading').textContent = translations[lang]['experience-heading'];
    changeCardLanguage(lang);
    changeSkillsLanguage(lang);
    changeAcademicLanguage(lang);


    // Atualiza a imagem da bandeira no botão dropdown
     const flagImage = document.querySelector('.dropdown-toggle .dropdown-icon');
     if (flagMap[lang]) {
        flagImage.src = flagMap[lang];
    }
}

