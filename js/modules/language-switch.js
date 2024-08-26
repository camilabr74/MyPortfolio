const flagMap = {
    'pt': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
    'en': 'https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg',
    'es': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
};

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


    // Atualiza a imagem da bandeira no botão dropdown
    // const flagImage = document.querySelector('.dropdown-toggle .dropdown-icon');
    // if (flagMap[lang]) {
    //     flagImage.src = flagMap[lang];
    // }
}

