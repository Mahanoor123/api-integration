// Get query string from recipes data
const getqueryParam = (param) => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
};

// Get single recipe id and display its related recipe

const recipeCardDetail = async () => {
  let recipeId = getqueryParam("id");
  if (recipeId) {
    const idResponse = await fetch("https://dummyjson.com/recipes");
    const data = await idResponse.json();
    let recipe = data?.recipes?.find((rec) => rec.id === parseInt(recipeId));
    console.log(recipe);


    document.querySelector(".card_title").innerText = `${recipe.name}`;
    document.querySelector(".recipe_comment span").innerText = `${recipe.reviewCount}`
    document.querySelector(".recipe_rating span").innerText = `${recipe.rating}`
    document.querySelector(".recipe_image img").src = `${recipe.image}`;
    document.querySelector(".recipe_info").innerText = `${recipe.cuisine}`;
    document.querySelector(".recipe_serving span").innerText = `${recipe.servings} persons`;
    document.querySelector(".recipe_cooktime span").innerText = `${recipe.cookTimeMinutes} minutes`;
    let ulIngredients = "";
    recipe.ingredients.forEach((ingred)=> ulIngredients += `<li>${ingred}</li>`);
    document.querySelector(".ingredients").innerHTML = ulIngredients;
    let olInstructions = "";
    recipe.instructions.forEach((inst) => olInstructions += `<li>${inst}</li>`)
    document.querySelector(".instructions").innerHTML = olInstructions;

  }
};

recipeCardDetail();
