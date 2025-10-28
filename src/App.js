import React, { useState } from 'react';
import './App.css';
import recipes from './data';
import RecipeCard from './components/RecipeCard';
import RecipeDetails from './components/RecipeDetails';

function getCategories(recipes) {
  const cats = new Set();
  recipes.forEach(r => {
    if (r.category) cats.add(r.category);
  });
  return Array.from(cats);
}
function getIngredients(recipes) {
  const ings = new Set();
  recipes.forEach(r => {
    r.ingredients.forEach(i => ings.add(i));
  });
  return Array.from(ings);
}

function App() {
  const [search, setSearch] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState('');
  const [ingredient, setIngredient] = useState('');

  const categories = getCategories(recipes);
  const ingredients = getIngredients(recipes);

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category ? recipe.category === category : true;
    const matchesIngredient = ingredient ? recipe.ingredients.includes(ingredient) : true;
    return matchesSearch && matchesCategory && matchesIngredient;
  });

  return (
    <div className={`container${darkMode ? ' dark' : ''}`}>
      <header className="main-header">
        <h1 onClick={() => setSelectedRecipe(null)}>🍽️ Recipe Book 🍽️</h1>
        <button className="dark-toggle" onClick={() => setDarkMode(d => !d)}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} onBack={() => setSelectedRecipe(null)} />
      ) : (
        <>
          <div className="filters">
            <input
              type="text"
              className="search-bar"
              placeholder="Search recipe..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={category} onChange={e => setCategory(e.target.value)}>
              <option value="">All Categories</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select value={ingredient} onChange={e => setIngredient(e.target.value)}>
              <option value="">All Ingredients</option>
              {ingredients.map(ing => (
                <option key={ing} value={ing}>{ing}</option>
              ))}
            </select>
          </div>

          <div className="recipe-grid">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} onClick={setSelectedRecipe} darkMode={darkMode} />
              ))
            ) : (
              <p>No recipes found 😕</p>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;