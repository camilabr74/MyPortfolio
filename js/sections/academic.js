export const academic = [
    {
        title: "Bacharelado em Ciência de Dados - Univesp",
        year: "agosto 2022 - agosto 2026"
    },
    {
        title: "Técnico em Administração",
        year: "janeiro 2015 - dezembro 2017"
    }
];

export function renderAcademic() {
    const academicList = document.getElementById("academicList");

    let academicCard = [];

    academic.forEach((course) => {
        academicCard.push(`
            <div class="timeline-content">
                <h3>${course.title}</h3>
                <span class="timeline-date">${course.year}</span>
            </div>
            `
        );

    });

    academicList.innerHTML = academicCard.join("")

}