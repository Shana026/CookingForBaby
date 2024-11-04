import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import {ListRecipeCard} from './Recipes.tsx';
import ListCategoryFilter from './Categories.tsx';
import { recipesData, categoriesData } from './AppData.tsx';
import {RecipeModal} from './AddRecipeForm.tsx';


/***********************************************************************************
 Component HomePage
 Return:  
***********************************************************************************/
function HomePage() {

    const [choosenCategory, setChoosenCategory] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
    const navigate = useNavigate();
  
    // if there is a choosenCategory - creates a new array containing only the recipes that
    // match the selected category, otherwise show all the recipes
    const filteredRecipes = choosenCategory
      ? recipesData.filter(recipe => recipe.categories.includes(choosenCategory))
      : recipesData;
  
    function onCategoryClick(categoryName) {
      setChoosenCategory(categoryName);
    };
  
    function onRecipeClick(recipeName) {
      navigate(`/recipe/${recipeName}`);
    };

    function onAddRecipeClick(newRecipe) {
        console.log(newRecipe);
    };

    // Function to open the modal
    function openModal() {
        setIsModalOpen(true);
    }

    // Function to close the modal
    function closeModal() {
        setIsModalOpen(false);
    }

    return (
    <div className="page">
      <h1 className="title">Cooking For Baby</h1>
      <ListCategoryFilter categoriesData={categoriesData} onCategoryClick={onCategoryClick} />
      <button className="add-recipe-button" onClick={openModal}>Add Recipe</button>
      <h3>Category: {choosenCategory}</h3>
      <ListRecipeCard filteredRecipes={filteredRecipes} onRecipeClick={onRecipeClick} />
      <RecipeModal isOpen={isModalOpen} onClose={closeModal} onAddRecipeClick={onAddRecipeClick} />
    </div>
    );
  }

  export default HomePage;