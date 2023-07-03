const form = document.querySelector('form');
const foodName = document.querySelector('#food-name');
const servingSize = document.querySelector('#serving-size');
const caloriesResult = document.querySelector('#calories-result');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	const food = foodName.value.toLowerCase();
	const serving = parseFloat(servingSize.value);
	const calories = getCalories(food, serving);

	if (calories) {
		caloriesResult.innerHTML = `${food} (${serving} serving): ${calories} calories`;
	} else {
		caloriesResult.innerHTML = `Sorry, we could not find the calorie count for ${food}.`;
	}
});

function getCalories(food, serving) {


	const calorieDatabase = {
        'almonds': 5.79,
        'apple': 0.52,
        'apricot': 0.48,
        'asparagus': 0.2,
        'avocado': 1.6,
        'bacon': 5.41,
        'bagel': 2.89,
        'banana': 0.89,
        'beef': 2.5,
        'blueberries': 0.57,
        'bread_whole_wheat': 2.47,
        'broccoli': 0.34,
        'brown_rice': 1.11,
        'brussels_sprouts': 0.43,
        'butter': 7.17,
        'cabbage': 0.25,
        'carrots': 0.41,
        'cashews': 5.53,
        'cauliflower': 0.25,
        'celery': 0.16,
        'cheese_cheddar': 4.02,
        'cheese_feta': 2.64,
        'chicken_breast': 1.65,
        'chickpeas': 1.64,
        'chocolate_dark': 5.46,
        'cinnamon': 2.47,
        'coconut_milk': 2.3,
        'coffee_black': 0.001,
        'corn': 0.86,
        'cottage_cheese': 0.98,
        'cranberries': 0.46,
        'cucumber': 0.15,
        'eggs': 1.55,
        'french_fries': 3.12,
        'garlic': 1.49,
        'grapefruit': 0.42,
        'grapes': 0.69,
        'green_beans': 0.31,
        'green_tea': 0.001,
        'ham': 1.13,
        'honey': 3.04,
        'hummus': 1.66,
        'ice_cream_vanilla': 2.07,
        'kale': 0.49,
        'kiwi': 0.61,
        'lamb': 2.82,
        'lasagna': 1.32,
        'leeks': 0.61,
        'lentils': 1.16,
        'lettuce': 0.15,
        'mango': 0.6,
        'mayonnaise': 6.8,
        'milk_whole': 0.61,
        'mushrooms': 0.22,
        'mustard': 0.66,
        'oatmeal': 0.68,
        'olive_oil': 8.84,
        'onion': 0.4,
        'orange': 0.47,
        'papaya': 0.43,
        'pasta_whole_wheat': 1.24,
        'peanut_butter': 5.88,
        'peanuts': 5.67,
        'pear': 0.57,
        'peas': 0.81,
        'pepperoni': 4.94,
        'pineapple': 0.5,
        'pistachios': 5.57,
        'pork': 2.97,
        'potatoes': 0.77,
        'pumpkin_seeds': 5.59,
        'quinoa': 1.2,
        'raspberries': 0.52,
        'red_peppers': 0.31,
        'salmon': 2.08,
        'sardines': 2.08,
        'sausage_pork': 3.01,
        'shrimp': 0.99,
        'soy_milk': 0.54,
        'soy_sauce': 0.53,
        'spinach': 0.23,
        'squash': 0.4,
        'strawberries': 0.32,
        'sunflower_seeds': 5.84,
        'sweet_potato': 0.86,
        'tangerine': 0.53,
        'tofu': 1.44,
        'tomato': 0.18,
        'tuna': 1.16,
        'turkey': 1.89,
        'walnuts': 6.54,
        'watermelon': 0.3,
        'white_rice': 1
	};

	if (food in calorieDatabase) {
		return Math.round(calorieDatabase[food] * serving);
	} else {
		return null;
	}
}