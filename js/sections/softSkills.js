// export const softSkills = [
//     { icon: "fas fa-sync-alt", name: "Adaptabilidade" },
//     { icon: "fas fa-comments", name: "Boa comunicação" },
//     { icon: "fas fa-globe", name: "Inglês - Nível B1" },
//     { icon: "fas fa-star", name: "Foco em qualidade" },
//     { icon: "fas fa-microphone-alt", name: "Gosto de fazer apresentações" },
//     { icon: "fas fa-tasks", name: "Organizada" },
//     { icon: "fas fa-brain", name: "Pensamento Crítico" },
//     { icon: "fas fa-lightbulb", name: "Proativa" },
//     { icon: "fas fa-users", name: "Trabalho em equipe" },
//     { icon: "fas fa-eye", name: "Visão Sistêmica" }
// ];

export function renderSoftSkills() {
    const softSkillsList = document.querySelector(".soft-skills-container");

    let softSkillsCards = [];

    softSkills.forEach((item, index) => {
        softSkillsCards.push(`
            <div class="soft-skill-item">
                <i class="${item.icon} soft-skill-icon"></i>
                <p class="soft-skill-name" id=${'name-'+index}>${item.name['pt']}</p>
            </div>
        `);
    });

    softSkillsList.innerHTML = softSkillsCards.join("");
}
