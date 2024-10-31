import React from 'react';
import './Recipes.css';

/***********************************************************************************
 Component RecipeCard - represents a recipe with its image and name
 Gets prop recipeData - an object representing the recipe, containing its id, name, age,
 image and description
 Return: a circular image and the category name and calls onCategoryClick when clicked 
***********************************************************************************/
function RecipeCard({recipeData}) {

    return (
      <div className="recipe-card" >
        <img src={recipeData.image} className="recipe-card-image"/>
        <p> {recipeData.name}</p>
        <p>from {recipeData.age} months</p>
      </div>
    );
  }
  
  
  /***********************************************************************************
   Component ListRecipeCard - Contains all RecipeCard components
   Gets prop filteredRecipes - a list of the recipes to display
   Return: a list of the recipes to display
  ***********************************************************************************/
  function ListRecipeCard({filteredRecipes}) {
  
    // for each recipe in the list, create a RecipeCard
    const listRecipeCard = filteredRecipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipeData={recipe} />
    ));
  
    return (
      <div className="list-recipe-card">
        {listRecipeCard}
      </div>
    );
  }

  export default ListRecipeCard;