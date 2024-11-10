// script.ts

// Define the Education interface
interface Education {
    degree: string;
    institution: string;
}

// Define the Skill interface
interface Skill {
    name: string;
    level: string;
}

// Define the Experience interface
interface Experience {
    description: string;
}

// Education data
const education: Education[] = [
    { degree: "Under Matriculation", institution: "School Of Knowledge (SOK)" }
];

// Skills data
const skills: Skill[] = [ 
    { name: "HTML/CSS", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Next-js", level: "Intermediate" },
];

// Experience data
const experience: Experience[] = [
    {

        description: "No experience yet"
    },
   
];

/**
 * Function to populate a section of the HTML document.
 * @param data - Array of items to display.
 * @param elementId - The ID of the HTML element to populate.
 * @param createListItem - Callback function to generate HTML for each item.
 */
function populateSection<T>(data: T[], elementId: string, createListItem: (item: T) => string): void {
    const list = document.getElementById(elementId);
    if (list) {
        list.innerHTML = data.map(createListItem).join('');
    }
}

// Event listener for DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
    populateSection(education, 'education-list', (edu: Education) =>
        `<li>${edu.degree} - ${edu.institution}</li>`
    );

    populateSection(skills, 'skills-list', (skill: Skill) =>
        `<li>${skill.name} - ${skill.level}</li>`
    );

    populateSection(experience, 'experience-list', (exp: Experience) =>
        `<li>
            ${exp.description}
        </li>`
    );
})
