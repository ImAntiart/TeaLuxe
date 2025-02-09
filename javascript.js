document.getElementById('menuButton').addEventListener('click', function(event) {
    let dropdownMenu = document.getElementById('dropdownMenu');
    let overlay = document.getElementById('overlay'); 

    if (dropdownMenu.style.display === 'none') {

        

        dropdownMenu.style.display = 'block';

        overlay.style.display = 'block';

        setTimeout(function() {
            dropdownMenu.style.opacity = '1';
            dropdownMenu.style.transition = 'opacity 0.3s ease-out';
        }, 10);
    } else {
        closeDropdown(); 
    }
});

document.getElementById("closeBtn").addEventListener("click", closeDropdown);

function closeDropdown() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    const overlay = document.getElementById('overlay');

    dropdownMenu.style.display = "none"; 
    overlay.style.display = "none"; 

    setTimeout(() => {
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.transition = "opacity 0.3s ease-in";
    }, 10)
}