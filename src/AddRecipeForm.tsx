import React, { useState } from 'react';
import './AddRecipeForm.css';

/***********************************************************************************
  Component AddRecipeForm: form
  Return: form to add a new recipe
***********************************************************************************/
function AddRecipeForm({ onAddRecipeClick }) {

  // State variables for form inputs
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');
  const [categories, setCategories] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the page from refreshing

    // Create a new recipe object
    const newRecipe = {
      id: Date.now().toString(), // Generate a unique ID based on timestamp
      name,
      age: parseInt(age), // Convert age to a number
      image,
      categories: categories.split(',').map((cat) => cat.trim()), // Split and trim categories
      description,
      ingredients: ingredients.split(',').map((ing) => ing.trim()), // Split and trim ingredients
    };

    onAddRecipeClick(newRecipe);

    // Clear the form fields after submission
    setName('');
    setAge('');
    setImage('');
    setCategories('');
    setDescription('');
    setIngredients('');
  }

  return (
    <form onSubmit={handleSubmit} className="add-recipe-form">
      <h3>Add a New Recipe</h3>
      <input type="text" placeholder="Recipe Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
      <input type="text" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required />
      <input type="text" placeholder="Categories (comma separated)" value={categories} onChange={(e) => setCategories(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
