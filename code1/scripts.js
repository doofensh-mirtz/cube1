// Function to open dialog
function openDialog(dialogId) {
    document.getElementById(dialogId).style.display = "block";
}

// Function to close dialog
function closeDialog(dialogId) {
    document.getElementById(dialogId).style.display = "none";
}

// Toggle between Login and Register forms
function toggleForm(formId) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    
    document.getElementById(formId).style.display = "block";
}

// Close dialog when clicking outside of it
window.onclick = function(event) {
    let dialog = document.getElementById("loginRegisterDialog");
    if (event.target === dialog) {
        dialog.style.display = "none";
    }
};

let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down → Hide header (z-index: -1)
      header.classList.add("hidden");
    } else {
      // Scrolling up → Show header (z-index: 1000)
      header.classList.remove("hidden");
    }

    lastScrollTop = scrollTop;
  });
