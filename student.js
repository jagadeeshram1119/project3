
const select = document.getElementById('activitySelect');
const para = document.getElementById('activityInfo');

select.value = 'Telugu';
showInfo(); 
select.addEventListener('change', showInfo);

function showInfo() {
    const act = select.value;
    if (act === 'Telugu') {
        para.textContent = "Activity: completed exam between 1 and 10. Subject: Telugu";
    } else if (act === 'Hindi') {
        para.textContent = "Activity: Create a project file assessment between 5 and 19. Subject: Hindi";
    } else if (act === 'English') {
        para.textContent = "Activity: completed all home work between 12 and 25. Subject: English";
    } else if (act === 'Maths') {
        para.textContent = "Activity: Create a project file containing tables between 15 and 19. Subject: Maths";
    } else if (act === 'Physics') {
        para.textContent = "Activity: Create a project lab between 11 and 20. Subject: Physics";
    } else if (act === 'Social') {
        para.textContent = "Activity: workdays  between 19 and 19. Subject: Social";
    } else {
        para.textContent = "Select a subject to view monthly activities.";
    }
}
