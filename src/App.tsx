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
function CategoryFilter({categoryData, onCategoryClick}) {
  return (
    <div className="category-filter" onClick={() => onCategoryClick(categoryData.name)}>
      <img src={categoryData.img}/>
      <p>{categoryData.name}</p>
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
 Component Page
 Gets prop 
 Return:  
***********************************************************************************/
export default function Page() {

  const categoriesData = [
    { name: 'Breakfast', img: breakfast },
    { name: 'Lunch', img: lunch },
  ];
  const [choosenCategory, setChoosenCategory] = useState("");

  function onCategoryClick(categoryName: string) {
    setChoosenCategory(categoryName);
  };

  return (
    <div className="page">
      <ListCategoryFilter categoriesData={categoriesData} onCategoryClick={onCategoryClick} />
      <h3>You clicked on {choosenCategory}</h3>
    </div>
  );
}