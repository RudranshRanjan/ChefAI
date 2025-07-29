import { useState } from "react";
import GenerateRecipe from "./GenerateRecipe";
import "../styles/Main.css";

const Main = () => {
  const [ingredients, serIngredients] = useState([]);

  const ingredientsList = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const handleSubmit = (formData) => {
    let item = formData.get("ingredient");
    if (ingredients.includes(item)) {
      alert("Already contains");
    } else {
      serIngredients([...ingredients, item]);
    }
  };

  return (
    <main>
      <form action={handleSubmit}>
        <input
          type="text"
          name="ingredient"
          id="input-text"
          placeholder="e.g. oregano"
        />
        <button id="input-btn">+ Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <div className="main-container">
          <h1>Ingredients on hand:</h1>
          <ul>{ingredientsList}</ul>
          <GenerateRecipe ingredient={ingredients} />
        </div>
      )}
    </main>
  );
};

export default Main;
