document.addEventListener("DOMContentLoaded", function() {
    const categoryCards = document.querySelectorAll('.category-card');
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');

    categoryCards.forEach(card => {
        card.addEventListener('mouseover', function(event) {
            const info = card.getAttribute('data-info');
            popupText.textContent = info;
            popup.style.display = 'block';
            popup.style.left = `${event.pageX + 10}px`;
            popup.style.top = `${event.pageY + 10}px`;
        });

        card.addEventListener('mousemove', function(event) {
            popup.style.left = `${event.pageX + 10}px`;
            popup.style.top = `${event.pageY + 10}px`;
        });

        card.addEventListener('mouseout', function() {
            popup.style.display = 'none';
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const addToWishlistButtons = document.querySelectorAll('.add-to-wishlist');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });

    addToWishlistButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to wishlist!');
        });
    });
});




// document.addEventListener('DOMContentLoaded', () => {
//     fetch('https://your-server.com/api/reviews')
//         .then(response => response.json())
//         .then(data => {
//             const reviewsList = document.querySelector('.reviews-list');
//             reviewsList.innerHTML = '';  // Clear existing reviews

//             data.reviews.forEach(review => {
//                 const reviewElement = document.createElement('div');
//                 reviewElement.className = 'review';

//                 reviewElement.innerHTML = `
//                     <div class="review-info">
//                         <span class="reviewer">${review.reviewer}</span>
//                         <span class="review-date">${review.date}</span>
//                     </div>
//                     <div class="review-text">${review.text}</div>
//                 `;

//                 reviewsList.appendChild(reviewElement);
//             });

//             document.getElementById('reviewsCount').textContent = data.totalReviews;
//         })
//         .catch(error => console.error('Error fetching reviews:', error));
// });
