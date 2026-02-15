function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

function toggleDropdown(event) {
    event.preventDefault();
    document.getElementById("dropdownInfo").classList.toggle("active");
}
