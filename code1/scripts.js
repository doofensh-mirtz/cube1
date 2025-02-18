// Function to filter gallery images based on selected cube type
function filterGallery(cubeType) {
    const images = document.querySelectorAll('.cube-image');

    // If 'all' is selected, show all images
    if (cubeType === 'all') {
        images.forEach(img => img.classList.remove('hidden'));
    } else {
        // Hide images that don't match the selected cube type
        images.forEach(img => {
            if (img.getAttribute('data-cube-type') === cubeType) {
                img.classList.remove('hidden');
            } else {
                img.classList.add('hidden');
            }
        });
    }
}


function openDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.style.display = 'block';
}

function closeDialog(dialogId) {
    const dialog = document.getElementById(dialogId);
    dialog.style.display = 'none';
}

// Close the dialog when clicking outside of it
window.onclick = function(event) {
    const loginDialog = document.getElementById('loginDialog');
    const registerDialog = document.getElementById('registerDialog');
    if (event.target === loginDialog) {
        loginDialog.style.display = 'none';
    }
    if (event.target === registerDialog) {
        registerDialog.style.display = 'none';
    }
};
// Scroll to top functionality
document.querySelector('.footer-back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,  // Scroll to the top of the page
        behavior: 'smooth'  // Smooth scrolling
    });
});


