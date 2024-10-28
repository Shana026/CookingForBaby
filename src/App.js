import React from 'react';
import './App.css';
import { useState } from 'react';
import breakfast from './assets/breakfast.jpg'
import lunch from './assets/lunch.jpg'

/***********************************************************************************
 Component CategoryFilter - represents a category filter with its image and name
 Gets prop category - an object representing the category, containing its name and img
 Gets prop onCategoryClick - a function that will be call when the category is clicked
 This function is passed down from the parent component and will handle filtering
 recipes based on the selected category.
 Return: a circular image and the category name and calls onCategoryClick when clicked 
***********************************************************************************/
function CategoryFilter({category, onCategoryClick}) {
  return (
    <div className="category-filter" onClick={() => onCategoryClick(category.name)}>
      <img src={category.img} alt={category.name}/>
      <p>{category.name}</p>
    </div>
  );
}


/***********************************************************************************
 Component ListCategoryFilter - Contains all CategoryFilter components
 Gets prop 
 Return:  
***********************************************************************************/
function ListCategoryFilter({ categories, onCategoryClick }) {

  // for each category in the list, create a CategoryFilter
  const listCategoryFilter = categories.map(category => (
    <CategoryFilter key={category.name} category={category} onCategoryClick={onCategoryClick} />
  ));

  return (
    <div className="list-category-filters">
      {listCategoryFilter}
    </div>
  );
}


/***********************************************************************************
 Component Page
 Gets prop 
 Return:  
***********************************************************************************/
export default function Page() {

  const categories = [
    { name: 'Breakfast', img: breakfast },
    { name: 'Lunch', img: lunch },
  ];

  function onCategoryClick(category) {
    alert(`You clicked on ${category.name}`);
  };

  return (
    <div className="page">
      <ListCategoryFilter categories={categories} onCategoryClick={onCategoryClick} />
      <h3>You click on {categories[0].name}</h3>
    </div>
  );
}