// Get the DOM elements
const mealsEl = document.getElementById("meals");  // Container for displaying meals
const favoriteContainer = document.getElementById("fav-meals");  // Container for favorite meals list
const mealPopup = document.getElementById("meal-popup");  // Popup modal for meal details
const mealInfoEl = document.getElementById("meal-info");  // Meal information section inside popup
const popupCloseBtn = document.getElementById("close-popup");  // Close button for popup
const searchTerm = document.getElementById("search-term");  // Input field for search
const searchBtn = document.getElementById("search");  // Search button
// 
// fetch random meal and favourite meal frm a local db
getRandomMeal();
fetchFavMeals();


// Get a random meal from API
async function getRandomMeal() {
const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
const respData = await resp.json();
const randomMeal = respData.meals[0];

// Add the random meal to DOM
addMeal(randomMeal, true);
}

// Get meal by ID (used for favorites)
async function getMealById(id) {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
  const respData = await resp.json();
  return respData.meals[0];
}

// Get meals by search term
async function getMealsBySearch(term) {

  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
  const respData = await resp.json();
  return respData.meals;
}