export const skills = [
    { icon: "fab fa-bootstrap", name: "Bootstrap" },
    { icon: "fab fa-css3-alt", name: "CSS" },
    { icon: "fas fa-file-excel", name: "Excel" },
    { icon: "fa-brands fa-figma", name: "Figma" },
    { icon: "fas fa-flask", name: "Flask" },
    { icon: "fab fa-git-alt", name: "Git" },
    { icon: "fas fa-book", name: "Google Colab" },
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-js-square", name: "JavaScript" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fab fa-microsoft", name: "Power Apps & Automate" },
    { icon: "fas fa-chart-bar", name: "Power BI" },
    { icon: "fab fa-react", name: "React" },
    { icon: "fas fa-database", name: "SQL" },
    { icon: "fab fa-wpbeginner", name: "watsonx ai & Assistant" }
];

export function renderSkillsList() {
    const skillsList = document.getElementById("skillsList");

    let skillsCards = [];

    skills.forEach((item) => {
        skillsCards.push(`
            <div class="skill-item">
                <i class="${item.icon} skill-icon"></i>
                <p class="skill-name">${item.name}</p>
            </div>
        `);
    });

    skillsList.innerHTML = skillsCards.join("");
}
