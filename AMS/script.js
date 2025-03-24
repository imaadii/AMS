// document.addEventListener("DOMContentLoaded", function() {
//     const menuIcon = document.querySelector(".menu-icon");
//     const sideNav = document.querySelector(".side-nav");
//     const content = document.querySelector(".content");

//     menuIcon.addEventListener("click", function() {
//         sideNav.classList.toggle("open");
//         content.classList.toggle("shifted");
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const sideNav = document.querySelector(".side-nav");
    const content = document.querySelector(".content");
    const menuItems = document.getElementById("menu-items");
    const dashboardContent = document.getElementById("dashboard-content");
    const userRoleSpan = document.getElementById("user-role");

    // Simulated API response (In real scenario, fetch this from backend)
    const userRole = "admin"; // Change this to "faculty" or "student" to test

    // Update UI based on role
    function loadDashboard(role) {
        userRoleSpan.innerText = `Role: ${role.charAt(0).toUpperCase() + role.slice(1)}`;

        let menuHTML = "";
        let contentHTML = "";

        if (role === "admin") {
            menuHTML = `
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Manage Students</a></li>
                <li><a href="#">Manage Faculty</a></li>
                <li><a href="#">Manage Attendance</a></li>
                <li><a href="#">Reports</a></li>
            `;
            contentHTML = "Admin: View statistics, manage students, faculty, and attendance.";
        } 
        else if (role === "faculty") {
            menuHTML = `
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Mark Attendance</a></li>
                <li><a href="#">View Classes</a></li>
            `;
            contentHTML = "Faculty: Mark attendance, view class details.";
        } 
        else if (role === "student") {
            menuHTML = `
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">View Attendance Records</a></li>
            `;
            contentHTML = "Student: View attendance records.";
        }

        menuItems.innerHTML = menuHTML;
        dashboardContent.innerText = contentHTML;
    }

    // Load the dashboard based on user role
    loadDashboard(userRole);

    // Toggle Sidebar for Mobile
    menuIcon.addEventListener("click", function() {
        sideNav.classList.toggle("open");
        content.classList.toggle("shifted");
    });
});

document.getElementById("logout-btn").addEventListener("click", function() {
    localStorage.removeItem("authToken"); // Clear token
    window.location.href = "login.html"; // Redirect to login
});