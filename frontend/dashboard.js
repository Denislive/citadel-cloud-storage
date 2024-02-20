document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle sidebar
    function toggleSidebar() {
        var sidebar = document.getElementById("sidebar");
        var mainContent = document.getElementById("main-content");
        if (sidebar.style.width === "250px") {
            closeSidebar();
        } else {
            openSidebar();
        }
    }

    // Function to open sidebar
    function openSidebar() {
        var sidebar = document.getElementById("sidebar");
        var mainContent = document.getElementById("main-content");
        sidebar.style.width = "250px";
        mainContent.style.marginLeft = "250px";
    }

    // Function to close sidebar
    function closeSidebar() {
        var sidebar = document.getElementById("sidebar");
        var mainContent = document.getElementById("main-content");
        sidebar.style.width = "0";
        mainContent.style.marginLeft = "0";
    }

    // Add event listener to close button
    document.getElementById("sidebar-close-btn").addEventListener("click", function() {
        closeSidebar();
    });

    // Add event listener to menu button to toggle sidebar
    document.getElementById("menu-btn").addEventListener("click", function() {
        toggleSidebar();
    });

    // Add event listener to main content to close sidebar for small devices
    document.addEventListener("click", function(event) {
        var sidebar = document.getElementById("sidebar");
        var target = event.target;
        var isMenuButton = target.id === "menu-btn";
        var isSidebar = target.id === "sidebar" || target.parentElement.id === "sidebar";
        var isMainContent = target.id === "main-content";
        var windowWidth = window.innerWidth;
        if (windowWidth <= 768 && !isMenuButton && !isSidebar && !isMainContent) {
            closeSidebar();
        }
    });
});

// Initialize Bootstrap components
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
});


document.addEventListener("DOMContentLoaded", function() {
    // Function to close all dropdowns except the provided one
    function closeAllDropdowns(except) {
        var dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(function(dropdown) {
            if (dropdown !== except && dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }

    // Add event listener to dropdown toggles
    var dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(function(toggle) {
        toggle.addEventListener('click', function(event) {
            var dropdownMenu = this.nextElementSibling;
            closeAllDropdowns(dropdownMenu);
        });
    });

    // Add event listener to dropdown items to close dropdown
    var dropdownItems = document.querySelectorAll('.dropdown-menu .dropdown-item');
    dropdownItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            var parentToggle = this.closest('.dropdown').querySelector('.dropdown-toggle');
            parentToggle.nextElementSibling.classList.remove('show'); // Hide the dropdown
        });
    });
});


// Get all progress bars
const progressBars = document.querySelectorAll('.progress-bar');

// Loop through each progress bar
progressBars.forEach(progressBar => {
    // Get the completion level from aria-valuenow attribute
    const completionLevel = parseInt(progressBar.getAttribute('aria-valuenow'));

    // Add Bootstrap background color classes based on the completion level
    if (completionLevel < 25) {
        progressBar.classList.add('bg-success'); // Green color for completion < 25%
    } else if (completionLevel < 50) {
        progressBar.classList.add('bg-info'); // Blue color for completion < 50%
    } else if (completionLevel < 75) {
        progressBar.classList.add('bg-warning'); // Orange color for completion < 75%
    } else {
        progressBar.classList.add('bg-danger'); // Red color for completion >= 75%
    }
});



// Get the "Select All" checkbox
const selectAllCheckbox = document.getElementById("select-all");

// Get all the checkboxes in the table body
const checkboxes = document.querySelectorAll("tbody input[type='checkbox']");

// Add event listener to the "Select All" checkbox
selectAllCheckbox.addEventListener("change", function () {
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAllCheckbox.checked;
    });
});
