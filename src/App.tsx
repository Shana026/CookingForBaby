import React from 'react';
import './App.css';
import { useState } from 'react';
import babyfoursixmonths from './assets/baby4-6months.jpg'
import babysixheightmonths from './assets/baby6-8months.jpg'
import babyninetwelvemonths from './assets/baby9-12months.jpeg'
import sweet from './assets/sweet.jpg'
import meal from './assets/meal.jpg'

/***********************************************************************************
 Component CategoryFilter - represents a category filter with its image and name
 Gets prop category - an object representing the category, containing its name and img
 Gets prop onCategoryClick - a function that will be call when the category is clicked
 This function is passed down from the parent component and will handle filtering
 recipes based on the selected category.
 Return: a circular image and the category name and calls onCategoryClick when clicked 
***********************************************************************************/
function CategoryFilter({categoryData, onCategoryClick}) {
  return (
    <div className="category-filter" onClick={() => onCategoryClick(categoryData.name)}>
      <img src={categoryData.image} className="category-img"/>
      <p> {categoryData.name}</p>
    </div>
  );
}


/***********************************************************************************
 Component ListCategoryFilter - Contains all CategoryFilter components
 Gets prop 
 Return:  
***********************************************************************************/
function ListCategoryFilter({ categoriesData, onCategoryClick }) {

  // for each category in the list, create a CategoryFilter
  const listCategoryFilter = categoriesData.map((categoryData) => (
    <CategoryFilter key={categoryData.name} categoryData={categoryData} onCategoryClick={onCategoryClick} />
  ));

  return (
    <div className="list-category-filters">
      {listCategoryFilter}
    </div>
  );
}

/***********************************************************************************
 Component RecipeCard - represents a recipe with its image and name
 Gets prop recipe - an object representing the recipe, containing its id, name, age, img, description
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
 Component Page
 Return:  
***********************************************************************************/
export default function Page() {

  const categoriesData = [
    { name: '4-6 months', image: babyfoursixmonths},
    { name: '6-8 months', image: babysixheightmonths },
    { name: '9-12 months', image: babyninetwelvemonths },
    { name: '12 months and +', image: babyninetwelvemonths },
    { name: 'Sweet', image: sweet },
    { name: 'Soup', image: meal }, //snack
    { name: 'Meal', image: meal },
    { name: 'Finger Food', image: meal }
  ];
  const [choosenCategory, setChoosenCategory] = useState(null);

  const recipes = [
    { id: '1', name: 'Apple Puree', age: 6, categories: ['4-6 months', 'Sweet'], image: sweet, description: 'A tasty apple puree for 6-month-olds.' },
    { id: '2', name: 'Banana', age: 8, categories: ['Meal'], image: sweet, description: 'Nutritious oatmeal for 8-month-olds.' },
    { id: '3', name: 'Chicken Soup', age: 4, categories: ['4-6 months', '6-8 months'], image: sweet, description: 'Comforting chicken soup for 10-month-olds.' },
    // Add more recipes
  ];

  // if there is a choosenCategory - creates a new array containing only the recipes that
  // match the selected category, otherwise show all the recipes
  const filteredRecipes = choosenCategory
    ? recipes.filter(recipe => recipe.categories.includes(choosenCategory))
    : recipes;


  function onCategoryClick(categoryName) {
    setChoosenCategory(categoryName);
  };

  return (
    <div className="page">
      <ListCategoryFilter categoriesData={categoriesData} onCategoryClick={onCategoryClick} />
      <h3>Category Filter: {choosenCategory}</h3>
      <div className="recipe-list">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipeData={recipe} />
        ))}
      </div>
    </div>
  );
}


