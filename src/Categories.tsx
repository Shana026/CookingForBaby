import React from 'react';
import './Categories.css';

/***********************************************************************************
 Component CategoryFilter - represents a category filter with its image and name
 Gets prop categoryData - an object representing the category, containing its name and img
 Gets prop onCategoryClick - a function that will be call when the category is clicked
 to filter the recipes based on the selected category
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
   Gets prop categoriesData - the data of the categories
   Gets prop onCategoryClick - a function that will be call when the category is clicked,
   a function to pass to the CategoryFilter component
   Return: a list of all the categoriesFilter components
  ***********************************************************************************/
  function ListCategoryFilter({ categoriesData, onCategoryClick }) {
  
    // for each category in the list categoriesData, create a CategoryFilter
    const listCategoryFilter = categoriesData.map((categoryData) => (
      <CategoryFilter key={categoryData.name} categoryData={categoryData} onCategoryClick={onCategoryClick} />
    ));
  
    return (
      <div className="list-category-filter">
        {listCategoryFilter}
      </div>
    );
  }

  export default ListCategoryFilter;