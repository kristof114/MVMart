/**
 * CardVault - Authentication JavaScript
 * Handles all login and registration functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const tabBtns = document.querySelectorAll('.tab-btn');
    const loginForm = document.querySelector('.login-form');
    const registerForm = document.querySelector('.register-form');
    const successMessage = document.querySelector('.success-message');
    const backToLoginBtn = document.querySelector('.back-to-login');
    const closeNotificationBtn = document.querySelector('.close-notification');
    const notificationBar = document.querySelector('.notification-bar');
    
    // Form elements
    const loginFormEl = document.getElementById('loginForm');
    const registerFormEl = document.getElementById('registerForm');
    
    // Close notification bar
    if (closeNotificationBtn && notificationBar) {
        closeNotificationBtn.addEventListener('click', function() {
            notificationBar.style.display = 'none';
        });
    }
    
    // Tab switching functionality
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons and forms
            tabBtns.forEach(b => b.classList.remove('active'));
            loginForm.classList.remove('active');
            registerForm.classList.remove('active');
            successMessage.classList.remove('active');
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding form
            const tabName = this.getAttribute('data-tab');
            if (tabName === 'login') {
                loginForm.classList.add('active');
            } else if (tabName === 'register') {
                registerForm.classList.add('active');
            }
        });
    });
    
    // Handle login form submission
    if (loginFormEl) {
        loginFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // For a static website, we'll just simulate login
            // In a real application, this would involve API calls
            
            console.log('Login attempt:', { username, password });
            
            // Simulate successful login (in a real app this would validate credentials)
            simulateSuccessfulLogin();
        });
    }
    
    // Handle register form submission
    if (registerFormEl) {
        registerFormEl.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const fullname = document.getElementById('reg-fullname').value;
            const email = document.getElementById('reg-email').value;
            const username = document.getElementById('reg-username').value;
            const password = document.getElementById('reg-password').value;
            const confirmPassword = document.getElementById('reg-confirm-password').value;
            
            // Validation
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            
            // For a static website, we'll just simulate registration
            // In a real application, this would involve API calls
            
            console.log('Registration attempt:', { fullname, email, username, password });
            
            // Show success message
            loginForm.classList.remove('active');
            registerForm.classList.remove('active');
            successMessage.classList.add('active');
            
            // Reset the form
            this.reset();
            
            // Update tab buttons to reflect current state
            tabBtns.forEach(b => b.classList.remove('active'));
        });
    }
    
    // Back to login button
    if (backToLoginBtn) {
        backToLoginBtn.addEventListener('click', function() {
            successMessage.classList.remove('active');
            loginForm.classList.add('active');
            
            // Update tab buttons
            tabBtns.forEach(b => {
                if (b.getAttribute('data-tab') === 'login') {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });
        });
    }
    
    // Simulate login (for demonstration purposes)
    function simulateSuccessfulLogin() {
        // In a real application, this would validate credentials
        // For our static demo, we'll redirect to the dashboard page
        window.location.href = 'dashboard.html';
    }
});