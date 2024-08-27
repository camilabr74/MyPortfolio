// export const academic = [
//     {
//         title: "Bacharelado em Ciência de Dados - Univesp",
//         year: "agosto 2022 - agosto 2026"
//     },
//     {
//         title: "Técnico em Administração",
//         year: "janeiro 2015 - dezembro 2017"
//     }
// ];

export function renderAcademic() {
    const academicList = document.getElementById("academicList");

    let academicCard = [];

    academic.forEach((course, index) => {
        academicCard.push(`
            <div class="timeline-content">
                <h3 id=${'course-'+index}>${course.course['pt']}</h3>
                <span class="timeline-date" id=${'year-'+index}>${course.year['pt']}</span>
            </div>
            `
        );

    });

    academicList.innerHTML = academicCard.join("")

}