import { renderSkillsList} from './sections/skills.js';
import { renderSoftSkills} from './sections/softSkills.js';
import { renderProjects } from './sections/projects.js';
import { renderAcademic } from './sections/academic.js';
import { renderExperiences } from './sections/experience.js';
import {initializeTheme} from './modules/dark-mode.js'
import { renderNav } from './layout/nav.js';


document.addEventListener('DOMContentLoaded', () => {
    renderNav();
    renderSkillsList();
    renderSoftSkills();
    renderProjects();
    renderAcademic();
    renderExperiences();
    initializeTheme();  

});
