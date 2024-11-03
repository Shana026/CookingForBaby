import React from 'react';
import './Recipes.css';
import { recipesData } from './AppData.tsx';
import { useParams } from 'react-router-dom';

/***********************************************************************************
 Component RecipeCard - represents a recipe with its image and name
 Gets prop recipeData - an object representing the recipe, containing its id, name, age,
 image and description
 Return: a circular image and the category name and calls onCategoryClick when clicked 
***********************************************************************************/
export function RecipeCard({recipeData, onRecipeClick}) {

    return (
      <div className="recipe-card" onClick={() => onRecipeClick(recipeData.name)}>
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
  export function ListRecipeCard({filteredRecipes, onRecipeClick}) {

  
    // for each recipe in the list, create a RecipeCard
    const listRecipeCard = filteredRecipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipeData={recipe} onRecipeClick={onRecipeClick} />
    ));
  
    return (
      <div className="list-recipe-card">
        {listRecipeCard}
      </div>
    );
  }


  /***********************************************************************************
   Component RecipePage
   Return: 
  ***********************************************************************************/
    export function RecipePage() {
    // Extract the recipe name from the URL
    const { recipeName } = useParams();
    // Find the recipe object in the data that matches the name in the URL
    const recipe = recipesData.find(r => r.name === recipeName);
  
    // If no matching recipe is found, display an error message
    if (!recipe) {
      return <p>Recipe not found</p>;
    }
  
    // Display the recipe's details if a matching recipe is found
    return (
      <div className="recipe-page">
        <h2>{recipe.name}</h2>
        <img src={recipe.image} alt={recipe.name} className="recipe-page-image" />
        <p>Age: from {recipe.age} months</p>
        <p>{recipe.description}</p>
      </div>
    );
  }