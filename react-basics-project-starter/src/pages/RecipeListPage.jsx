import { useState } from "react";

function RecipeListPage({ recipes, handleRecipeSelect }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.label} onClick={() => handleRecipeSelect(recipe)}>
            <div>{recipe.label}</div>
            <img src={recipe.image} alt={recipe.label} />
            {/* Display other recipe details here */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeListPage;
