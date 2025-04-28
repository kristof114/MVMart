/**
 * CardVault - Dashboard JavaScript
 * Handles all dashboard functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const closeNotificationBtn = document.querySelector('.close-notification');
    const notificationBar = document.querySelector('.notification-bar');
    const searchInput = document.querySelector('.search-input');
    const paginationBtns = document.querySelectorAll('.pagination-btn');
    const buyBtns = document.querySelectorAll('.buy-btn');
    
    // Close notification bar
    if (closeNotificationBtn && notificationBar) {
        closeNotificationBtn.addEventListener('click', function() {
            notificationBar.style.display = 'none';
        });
    }
    
    // Search functionality
    if (searchInput) {
        searchInput.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const tableRows = document.querySelectorAll('.cards-table tbody tr');
            
            tableRows.forEach(row => {
                let foundMatch = false;
                const cells = row.querySelectorAll('td');
                
                cells.forEach(cell => {
                    if (cell.textContent.toLowerCase().includes(searchTerm)) {
                        foundMatch = true;
                    }
                });
                
                if (foundMatch) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
    
    // Pagination functionality
    if (paginationBtns.length > 0) {
        paginationBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                paginationBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button (except for next button)
                if (!this.classList.contains('next')) {
                    this.classList.add('active');
                }
                
                // In a real application, this would load a new page of results
                console.log('Pagination clicked:', this.textContent.trim());
            });
        });
    }
    
    // Buy button functionality
    if (buyBtns.length > 0) {
        buyBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const row = this.closest('tr');
                const cardType = row.cells[0].textContent;
                const cardHolder = row.cells[1].textContent;
                const cardNumber = row.cells[2].textContent;
                const cvv = row.cells[3].textContent;
                const country = row.cells[4].textContent;
                const transPerWeek = row.cells[5].textContent;
                const address = row.cells[6].textContent;
                const price = row.cells[7].textContent;
                
                // Redirect to product page with card details
                const expiry = this.getAttribute('data-expiry') || '02/25';
                const url = `product.html?type=${encodeURIComponent(cardType)}&holder=${encodeURIComponent(cardHolder)}&number=${encodeURIComponent(cardNumber)}&cvv=${encodeURIComponent(cvv)}&country=${encodeURIComponent(country)}&price=${encodeURIComponent(price.trim())}&expiry=${encodeURIComponent(expiry)}`;
                window.location.href = url;
            });
        });
    }
});