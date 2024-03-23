// RecipePage.jsx
import { useState } from "react";
import {
  Button,
  Box,
  Input,
  List,
  ListItem,
  VStack,
  Heading,
  AspectRatio,
} from "@chakra-ui/react";
import { data } from "../utils/data";

export function RecipePage() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleRecipeSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const filteredRecipes = data.hits.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box p="4">
      {selectedRecipe ? (
        <Box>
          <Button onClick={() => setSelectedRecipe(null)} mb="4">
            Back
          </Button>
          <Heading as="h2" mb="4">
            {selectedRecipe.recipe.label}
          </Heading>
          <AspectRatio ratio={4 / 3} mb="4">
            <img
              src={selectedRecipe.recipe.image}
              alt={selectedRecipe.recipe.label}
            />
          </AspectRatio>
          <VStack spacing="2">
            <Box>
              <strong>Meal type:</strong> {selectedRecipe.recipe.mealType}
            </Box>
            <Box>
              <strong>Dish type:</strong> {selectedRecipe.recipe.dishType}
            </Box>
            <Box>
              <strong>Total cooking time:</strong>{" "}
              {selectedRecipe.recipe.totalTime}
            </Box>
            <Box>
              <strong>Diet label:</strong>{" "}
              {selectedRecipe.recipe.dietLabels.join(", ")}
            </Box>
            <Box>
              <strong>Health labels:</strong>{" "}
              {selectedRecipe.recipe.healthLabels.join(", ")}
            </Box>
            <Box>
              <strong>Cautions:</strong>{" "}
              {selectedRecipe.recipe.cautions.join(", ")}
            </Box>
            <Box>
              <strong>Ingredients:</strong>{" "}
              {selectedRecipe.recipe.ingredientLines.join(", ")}
            </Box>
            <Box>
              <strong>Servings:</strong> {selectedRecipe.recipe.yield}
            </Box>
            <Box>
              <strong>Total nutrients:</strong> {/* Display total nutrients */}
            </Box>
          </VStack>
        </Box>
      ) : (
        <Box>
          <Input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={handleSearchChange}
            mb="4"
          />
          <List>
            {filteredRecipes.map((recipe) => (
              <ListItem
                key={recipe.recipe.label}
                onClick={() => handleRecipeSelect(recipe)}
                p="2"
                borderBottom="1px solid #E2E8F0"
                cursor="pointer"
                _hover={{ background: "#EDF2F7" }}
              >
                <Box>
                  <Heading as="h3" size="md">
                    {recipe.recipe.label}
                  </Heading>
                  <AspectRatio ratio={4 / 3} mt="2">
                    <img src={recipe.recipe.image} alt={recipe.recipe.label} />
                  </AspectRatio>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Box>
  );
}

export default RecipePage;
