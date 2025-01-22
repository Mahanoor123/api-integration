const fetchData = async () => {
  try {
    const dataResponse = await fetch("https://dummyjson.com/recipes");
    return dataResponse.json();
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

const getData = async () => {
  try {
    const dataResult = await fetchData();
    const recipes = dataResult.recipes;
    console.log(recipes);
    displayRecipes(recipes);
  } catch (error) {
    throw new Error("Something went wrong");
  }
};

getData();

const recipeContainer = document.querySelector(".cards_display");
const displayRecipes = (data) => {
  if (data && data.length > 0) {
    data.forEach((recipe) => {
      const singleCard = document.createElement("div");
      singleCard.className = "single_card";
      singleCard.innerHTML = `
                <div class="card_image">
                    <img src="${recipe.image}" alt="${recipe.name}">
                </div>
                <div class="card_content">
                    <h2>${recipe.name}</h2>
                    <small>${recipe.cuisine}</small>
                    <p>${recipe.rating}</p>
                <a href="./assets/html/product-view.html?id=${recipe.id}"><button class="card_btn">View recipe</button></a>
                </div>
                `;
      recipeContainer.appendChild(singleCard);
    });
  } else {
    recipeContainer.innerHTML = `<h4>Data not found</h4>`;
  }
};
