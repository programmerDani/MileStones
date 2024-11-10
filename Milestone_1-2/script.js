// script.ts
// Education data
var education = [
    { degree: "Under Matriculation", institution: "School Of Knowledge (SOK)" }
];
// Skills data
var skills = [
    { name: "HTML/CSS", level: "Advanced" },
    { name: "TypeScript", level: "Intermediate" },
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Next-js", level: "Intermediate" },
];
// Experience data
var experience = [
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
function populateSection(data, elementId, createListItem) {
    var list = document.getElementById(elementId);
    if (list) {
        list.innerHTML = data.map(createListItem).join('');
    }
}
// Event listener for DOMContentLoaded
window.addEventListener('DOMContentLoaded', function () {
    populateSection(education, 'education-list', function (edu) {
        return "<li>".concat(edu.degree, " - ").concat(edu.institution, "</li>");
    });
    populateSection(skills, 'skills-list', function (skill) {
        return "<li>".concat(skill.name, " - ").concat(skill.level, "</li>");
    });
    populateSection(experience, 'experience-list', function (exp) {
        return "<li>\n            ".concat(exp.description, "\n        </li>");
    });
});
