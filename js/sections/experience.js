export const experiences = [
    {
        title: "Trainee Desenvolvedora Full-Stack",
        company: "Grupo FCamara",
        date: "abril - momento",
        year: "2024",
        description: "Programa de Formação: Python, Estatística, Power BI, PowerApps&Automate, REST API com Flask, watsonx Assistant."
    },
    {
        title: "Auditora Interna - Qualidade",
        company: "Escola e Faculdade FORTEC",
        date: "agosto - novembro 2023",
        year: "2022",
        description: "Setor Qualidade: Auditorias para avaliação e análise de processos internos para garantir conformidade e eficiência operacional (setores administrativos, gerência, infraestrutura e operacional); Gestão de Não Conformidades; Aplicação e tabulação de pesquisas de qualidade."
    },
    {
        title: "Recepcionista - Pedagógico",
        company: "UPPERSIDE Idiomas",
        date: "agosto - agosto 2022",
        year: "2021",
        description: "Auxílio coordenação pedagógica: Apoio à coordenação pedagógica na administração de aulas e alunos, incluindo agendamento de aulas, acompanhamento de faltas e comunicação com pais e alunos sobre questões e atualizações acadêmicas."
    },
    {
        title: "Auxiliar Administrativo",
        company: "LUDMAR Usinagem e Caldeiraria",
        date: "setembro - agosto 2019",
        year: "2018",
        description: "Operacional: Orçamentos de serviços; relatórios operacionais; emissão de notas fiscais; fluxo de caixa."
    },
    {
        title: "Auxiliar de Escritório",
        company: "Escola e Faculdade FORTEC",
        date: "julho - agosto 2018",
        year: "2018",
        description: "Setor da Qualidade: Controle de planejamento e cronograma de atividades; assistência pedagógica e administrativa em projeto social SEMEAR; tabulação de dados para indicadores de qualidade de desempenho interno."
    },
    {
        title: "Estagiária Administração de Empresas",
        company: "Escola e Faculdade FORTEC",
        date: "dezembro - julho 2018",
        year: "2017",
        description: "Setor da Qualidade: Elaboração de planilhas e relatórios; tabulação de dados para indicadores de qualidade de desempenho; aplicação e análise de pesquisas de qualidade interna e externa; assistência pedagógica no projeto social SEMEAR; gerenciamento de cronogramas de atividades e projetos."
    },
    {
        title: "Estagiária Técnico em Administração",
        company: "Escola e Faculdade FORTEC",
        date: "março - dezembro 2017",
        year: "2016",
        description: "Setor da Qualidade: Preenchimento de planilhas; controle de documentos internos; atendimento telefônico; suporte na aplicação e tabulação de pesquisas de qualidade."
    }
];

export function renderExperiences() {
    const experienceSection = document.querySelector("#experience .steps");

    let experienceCards = [];

    experiences.forEach((experience) => {
        experienceCards.push(`
            <div class="steps-container">
                <div class="content">
                    <h2>${experience.title}</h2>
                    <span class="timeline-date">${experience.company} | ${experience.date}</span>
                    <p>${experience.description}</p>
                </div>
                <i class="step-line"></i>
                <div class="date">${experience.year}</div>
            </div>
        `);
    });

    experienceSection.innerHTML = experienceCards.join("");
}
