import React from 'react';

const RecipeCard = ({ recipe, onClick, darkMode }) => {
  return (
    <div className={`recipe-card${darkMode ? ' dark' : ''}`} onClick={() => onClick(recipe)}>
      <img src={recipe.image} alt={recipe.name} />
      <div className="recipe-info">
        <h3>{recipe.name}</h3>
      </div>
    </div>
  );
};

export default RecipeCard;