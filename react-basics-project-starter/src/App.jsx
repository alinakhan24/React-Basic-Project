// App.jsx
import { useState } from "react";
import { RecipePage } from "./pages/RecipePage";

<pages></pages>;

export function App() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <div>
      <RecipePage
        selectedRecipe={selectedRecipe}
        handleRecipeSelect={handleRecipeSelect}
        setSelectedRecipe={setSelectedRecipe}
      />
    </div>
  );
}

export default App;
