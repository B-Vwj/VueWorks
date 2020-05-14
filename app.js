//********//
// NavBar //
//********//

const header = document.querySelector('.main-header');

// "Toggle" Navigation Bar
window.addEventListener('scroll', () => {
    // Keep track of position when scrolling
    const scrollPosition = window.scrollY;
    if (scrollPosition > 15) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

//****************************//
// Animate Links (responsive) //
//****************************//


//****************//
// Event Handlers //
//****************//

// function highlightLink(anchor) {
//     var active = document.querySelector('nav .active');
//     var navBar = document.querySelector('nav');

//     active.classList.remove('active');
//     navBar.classList.document.querySelector(`[dest="${anchor}"]`).add('active');
// };

// // Set class 'view-my-work' to variable pageLink
// const pageLink = document.querySelector('.view-my-work');

// // Listen for click event, and then set anchor to the attribute 'dest'
// // Navbar is set to variable navBar
// pageLink.addEventListener('click', function() {
//     var anchor = pageLink.getAttribute('dest');
//     var navBar = document.querySelector('nav');
//     var span = document.querySelector('nav span');

//     // Remove highlight color from Hero text
//     span.classList.remove('active');

//     // Find the dest attribute (we set it to about on the button)
//     // Add 'active' class to the navbar for whatever section is currently visible
//     navBar.classList.document.querySelector(`[dest="${anchor}"]`).add('active');
// });
