import React from "react";

const RecipeDetails = ({ recipe, onBack }) => {
  return (
    <div className="recipe-detail">
      <button className="back-button" onClick={onBack}>← Back</button>
      <h2>{recipe.name}</h2>
      <img src={recipe.image} alt={recipe.name} />
      <h3>Ingredients</h3>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3>Process</h3>
      <p>{recipe.process}</p>
    </div>
  );
};

export default RecipeDetails;
