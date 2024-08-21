// Star background
function createStars() {
    const starsContainer = document.getElementById('stars');
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}

createStars();

// Dynamic menu based on time
function updateMenu() {
    const now = new Date();
    const hour = now.getHours();
    let currentMenu;

    if (hour >= 6 && hour < 11) {
        currentMenu = "Breakfast";
    } else if (hour >= 11 && hour < 16) {
        currentMenu = "Lunch";
    } else {
        currentMenu = "Dinner";
    }

    document.getElementById('current-menu').textContent = currentMenu;
    return currentMenu;
}

// Menu items
const menuItems = {
    Breakfast: [
        { name: "Pancakes", description: "Fluffy pancakes with maple syrup", price: "₹200", rating: 4.5, nutrition: "Calories: 300, Protein: 5g, Carbs: 40g, Fat: 10g" },
        { name: "Omelette", description: "Three-egg omelette with cheese and vegetables", price: "₹180", rating: 4.2, nutrition: "Calories: 250, Protein: 15g, Carbs: 5g, Fat: 18g" }
    ],
    Lunch: [
        { name: "Caesar Salad", description: "Fresh romaine lettuce with Caesar dressing and croutons", price: "₹250", rating: 4.0, nutrition: "Calories: 200, Protein: 8g, Carbs: 15g, Fat: 12g" },
        { name: "Grilled Chicken Sandwich", description: "Grilled chicken breast with avocado on whole wheat bread", price: "₹300", rating: 4.3, nutrition: "Calories: 350, Protein: 25g, Carbs: 30g, Fat: 15g" }
    ],
    Dinner: [
        { name: "Steak", description: "Grilled sirloin steak with mashed potatoes", price: "₹500", rating: 4.7, nutrition: "Calories: 450, Protein: 30g, Carbs: 25g, Fat: 25g" },
        { name: "Vegetarian Pasta", description: "Penne pasta with roasted vegetables in tomato sauce", price: "₹350", rating: 4.1, nutrition: "Calories: 380, Protein: 12g, Carbs: 60g, Fat: 10g" }
    ]
};

// Load menu items
function loadMenu() {
    const currentMenu = updateMenu();
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    menuItems[currentMenu].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: ${item.price}</p>
            <div class="star-rating">Rating: ${'★'.repeat(Math.floor(item.rating))}${'☆'.repeat(5 - Math.floor(item.rating))}</div>
            <button class="nutrition-btn" data-nutrition="${item.nutrition}">Nutrition Info</button>
        `;
        menuContainer.appendChild(menuItem);
    });

    // Add event listeners to nutrition buttons
    document.querySelectorAll('.nutrition-btn').forEach(btn => {
        btn.addEventListener('click', showNutritionInfo);
    });
}

// Show nutrition information
function showNutritionInfo(event) {
    const nutritionInfo = event.target.getAttribute('data-nutrition');
    document.getElementById('nutrition-info').textContent = nutritionInfo;
    document.getElementById('nutrition-popup').style.display = 'block';
}

// Close nutrition popup
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('nutrition-popup').style.display = 'none';
});

// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

// Event listeners
document.getElementById('load-menu').addEventListener('click', loadMenu);

// Update menu every minute
setInterval(updateMenu, 60000);

// Initial load
updateMenu();
loadMenu();
