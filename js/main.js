(function() {
    const hours = [...document.querySelectorAll('.dropdown-menu li')];
    hours.map(item => item.addEventListener('click', () => {
        item.classList.toggle('active');
        const totalHoursSpan = item.closest('.card').querySelector('.whole-time span');
        let hoursValue = Number(totalHoursSpan.textContent);
        hoursValue = item.classList.contains('active') ? ++hoursValue : --hoursValue;
        totalHoursSpan.textContent = `${hoursValue}`;
    }));
})();