import { useState } from "react";
import { getRecipeFromMistral } from "../ai";
import Recipe from "./Recipe";

const GenerateRecipe = (props) => {
  const [recipe, setRecipe] = useState("");
  const length = props.ingredient.length;

  const handleClick = async () => {
    const recipeMarkdown = await getRecipeFromMistral(props.ingredient);
    setRecipe(recipeMarkdown);
  };

  if (length >= 3) {
    return (
      <>
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={handleClick}>Get a recipe</button>
      </div>
      {recipe && <Recipe recipe={recipe}/>}
    </>)
  }
};

export default GenerateRecipe;
