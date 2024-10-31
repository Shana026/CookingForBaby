import React from 'react';
import { useState } from 'react';
import './App.css';
import ListRecipeCard from './Recipes.tsx';
import ListCategoryFilter from './Categories.tsx';
import { recipesData, categoriesData } from './AppData.tsx';


/***********************************************************************************
 Component Page
 Return:  
***********************************************************************************/
export default function Page() {

  const [choosenCategory, setChoosenCategory] = useState(null);

  // if there is a choosenCategory - creates a new array containing only the recipes that
  // match the selected category, otherwise show all the recipes
  const filteredRecipes = choosenCategory
    ? recipesData.filter(recipe => recipe.categories.includes(choosenCategory))
    : recipesData;


  function onCategoryClick(categoryName) {
    setChoosenCategory(categoryName);
  };

  return (
    <div className="page">
      <ListCategoryFilter categoriesData={categoriesData} onCategoryClick={onCategoryClick} />
      <h3>Category Filter: {choosenCategory}</h3>
      <ListRecipeCard filteredRecipes={filteredRecipes} />
    </div>
  );
}


