/*!
* Start Bootstrap - Resume v7.0.6 (undefined)
* Copyright 2013-2024 undefined
* Licensed under undefined (https://github.com/StartBootstrap/asilkan-resume/blob/master/LICENSE)
*/
//
// Scripts
//

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
window.onload = function() {
    const startDate = new Date('June 1, 2017');
    const currentDate = new Date();
    const yearsOfExperience = currentDate.getFullYear() - startDate.getFullYear();
    const monthDifference = currentDate.getMonth() - startDate.getMonth();

    const totalExperience = (monthDifference < 0) ? yearsOfExperience - 1 : yearsOfExperience;

    document.getElementById('experience-duration').textContent = `${totalExperience}+ years of experience.`;
};
