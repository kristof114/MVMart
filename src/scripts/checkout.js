
document.addEventListener('DOMContentLoaded', function() {
    // Get card details from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const cardType = urlParams.get('type') || '';
    const cardNumber = urlParams.get('number') || '';
    const price = urlParams.get('price') || '0.00';
    
    // Update the checkout page with card details
    const cardDetailsElement = document.getElementById('checkoutCardDetails');
    const totalAmountElement = document.getElementById('totalAmount');
    
    if (cardDetailsElement) {
        const holder = urlParams.get('holder') || '';
        const cvv = urlParams.get('cvv') || '';
        const country = urlParams.get('country') || '';
        const expiry = urlParams.get('expiry') || '';
        
        cardDetailsElement.innerHTML = `
            <p><strong>Card Type:</strong> ${cardType}</p>
            <p><strong>Card Number:</strong> ${cardNumber}</p>
            <p><strong>Card Holder:</strong> ${holder}</p>
            <p><strong>CVV:</strong> ${cvv}</p>
            <p><strong>Country:</strong> ${country}</p>
            <p><strong>Expiry:</strong> ${expiry}</p>
        `;
    }
    
    if (totalAmountElement) {
        totalAmountElement.textContent = `$${price}`;
    }
    
    // Handle form submission
    const paymentForm = document.getElementById('paymentForm');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Payment processed successfully!\nThis is a demo website.');
            window.location.href = 'dashboard.html';
        });
    }
});
