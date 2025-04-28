/**
 * CardVault - Product Details JavaScript
 * Handles product details functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const closeNotificationBtn = document.querySelector('.close-notification');
    const notificationBar = document.querySelector('.notification-bar');
    const checkoutBtn = document.querySelector('.checkout-btn');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const selectPaymentBtn = document.querySelector('.select-payment-btn');

    // Close notification bar
    if (closeNotificationBtn && notificationBar) {
        closeNotificationBtn.addEventListener('click', function() {
            notificationBar.style.display = 'none';
        });
    }

    // Get URL parameters to display the correct card details
    const urlParams = new URLSearchParams(window.location.search);
    const cardType = urlParams.get('type') || 'DISCOVER';
    const cardHolder = urlParams.get('holder') || 'Marmaduc Mrton';
    const cardNumber = urlParams.get('number') || '6011********';
    const cvv = urlParams.get('cvv') || '544';
    const country = urlParams.get('country') || 'UNITED STATES';
    const price = urlParams.get('price') || '19.00';
    const expiry = urlParams.get('expiry') || '02/25';
    const bank = urlParams.get('bank') || 'Discover Bank';
    const balance = urlParams.get('balance') || '1695';
    const limit = urlParams.get('limit') || '1000';

    // Update the displayed card information
    updateCardDisplay(cardType, cardHolder, cardNumber, cvv, country, price, expiry, bank, balance, limit);

    // Handle payment method selection
    if (selectPaymentBtn) {
        selectPaymentBtn.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'payment-modal';
            modal.innerHTML = `
                <div class="payment-modal-content">
                    <div class="payment-modal-header">
                        <h3>Select Payment Method</h3>
                        <span class="close-modal">&times;</span>
                    </div>
                    <div class="payment-options">
                        <label class="payment-option">
                            <input type="radio" name="payment" value="MoMo Pay">
                            <img src="assets/momo.png" alt="MoMo Pay">
                            <span>MoMo Pay</span>
                        </label>
                        <label class="payment-option">
                            <input type="radio" name="payment" value="Bitcoin">
                            <img src="assets/bitcoin.png" alt="Bitcoin">
                            <span>Bitcoin</span>
                        </label>
                    </div>
                    <button class="confirm-payment">Confirm</button>
                </div>
            `;
            document.body.appendChild(modal);

            const closeBtn = modal.querySelector('.close-modal');
            const confirmBtn = modal.querySelector('.confirm-payment');

            closeBtn.onclick = function() {
                modal.remove();
            }

            confirmBtn.onclick = function() {
                const selectedPayment = modal.querySelector('input[name="payment"]:checked');
                if (selectedPayment) {
                    document.querySelector('.payment-method h3').innerHTML = `Payment Method: <span style="color: #27ae60; font-weight: 500;">${selectedPayment.value}</span>`;
                    document.querySelector('.payment-method').setAttribute('data-selected', 'true');
                    modal.remove();

                    const urlParams = new URLSearchParams(window.location.search);
                    const paymentParams = new URLSearchParams({
                        type: urlParams.get('type') || '',
                        number: urlParams.get('number') || '',
                        holder: urlParams.get('holder') || '',
                        cvv: urlParams.get('cvv') || '',
                        country: urlParams.get('country') || '',
                        expiry: urlParams.get('expiry') || '',
                        price: urlParams.get('price') || '',
                        payment_method: selectedPayment.value
                    });

                    window.location.href = `https://2dc7ccff-ed1b-4bbf-8046-68beddb82180-00-3tii111sohhoz.janeway.replit.dev/payment/momo?${paymentParams.toString()}`;
                }
            }
        });
    }

    // Handle checkout button
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const paymentMethodSelected = document.querySelector('.payment-method').getAttribute('data-selected') === 'true';
            if (!paymentMethodSelected) {
                alert('Please select a payment method before proceeding to checkout.');
                return;
            }

            const urlParams = new URLSearchParams(window.location.search);
            const checkoutUrl = `checkout.html?type=${urlParams.get('type')}&number=${urlParams.get('number')}&price=${urlParams.get('price')}&holder=${urlParams.get('holder')}&cvv=${urlParams.get('cvv')}&country=${urlParams.get('country')}&expiry=${urlParams.get('expiry')}`;
            window.location.href = checkoutUrl;
        });
    }

    // Handle add to cart button
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // For a static website, we'll just show a confirmation
            alert('Card added to cart!\n\nThis is a demo. In a real application, this would add the card to your shopping cart.');

            // Update cart count (for visual effect)
            const cartCount = document.querySelector('.cart-count');
            if (cartCount) {
                cartCount.textContent = '1';
            }
        });
    }


    // Function to update all card display elements
    function updateCardDisplay(type, holder, number, cvv, country, price, expiry, bank, balance, limit) {
        // Update card visual
        if (document.getElementById('cardBankLogo')) {
            document.getElementById('cardBankLogo').textContent = type;
        }

        if (document.getElementById('cardNumberDisplay')) {
            document.getElementById('cardNumberDisplay').textContent = number;
        }

        if (document.getElementById('cardHolderDisplay')) {
            document.getElementById('cardHolderDisplay').textContent = holder;
        }

        if (document.getElementById('cardExpiryDisplay')) {
            document.getElementById('cardExpiryDisplay').textContent = expiry;
        }

        // Update product info section
        if (document.getElementById('cardTypeDisplay')) {
            document.getElementById('cardTypeDisplay').textContent = `${type} Card - ${country}`;
        }

        if (document.getElementById('cardTypeInfo')) {
            document.getElementById('cardTypeInfo').textContent = type;
        }

        if (document.getElementById('cardExpiryInfo')) {
            document.getElementById('cardExpiryInfo').textContent = expiry.includes('/20') ? expiry : expiry.replace('/', '/20');
        }

        if (document.getElementById('cardBankInfo')) {
            document.getElementById('cardBankInfo').textContent = bank;
        }

        if (document.getElementById('cardBalanceInfo')) {
            document.getElementById('cardBalanceInfo').textContent = `$${balance}`;
        }

        if (document.getElementById('cardLimitsInfo')) {
            document.getElementById('cardLimitsInfo').textContent = `$${limit} per day`;
        }

        // Update order information
        if (document.getElementById('cardPriceInfo')) {
            document.getElementById('cardPriceInfo').textContent = `$${price}`;
        }

        if (document.getElementById('cardNumberInfo')) {
            document.getElementById('cardNumberInfo').textContent = number;
        }

        if (document.getElementById('cardCvvInfo')) {
            document.getElementById('cardCvvInfo').textContent = cvv;
        }

        if (document.getElementById('cardCountryInfo')) {
            document.getElementById('cardCountryInfo').textContent = country;
        }

        // Set card background color based on type
        const productCard = document.querySelector('.product-card');
        if (productCard) {
            switch(type) {
                case 'VISA':
                    productCard.style.background = 'linear-gradient(45deg, #0165b0 0%, #2986cc 100%)';
                    break;
                case 'MASTERCARD':
                    productCard.style.background = 'linear-gradient(45deg, #cc0000 0%, #ff9900 100%)';
                    break;
                case 'DISCOVER':
                    productCard.style.background = 'linear-gradient(45deg, #3461ff 0%, #4f00bc 100%)';
                    break;
                default:
                    productCard.style.background = 'linear-gradient(45deg, #3461ff 0%, #4f00bc 100%)';
            }
        }
    }
});