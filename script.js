// This function toggles the styling of my hamburger icon. The "open" class is used in CSS to control the appearance of the hamburger menu.
// Calling this function switches between the open and closed states of the menu and icon.
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}
