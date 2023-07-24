import { useState } from "react";
import { Heading, VStack, Image, Box } from "@chakra-ui/react";
import { data } from "../utils/data";

export const RecipeListPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const searchRecipes = () => {
    const filteredRecipes = data.hits.filter((hit) => {
      const {
        recipe: { label, healthLabels },
      } = hit;

      const nameMatches = label
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Check if the health labels contain any of the search keywords
      const healthLabelMatches = healthLabels.some((label) =>
        label.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return nameMatches || healthLabelMatches;
    });

    return filteredRecipes;
  };

  return (
    <div style={{ textAlign: "center", backgroundColor: "#ADD8E6" }}>
      <Heading> Recipe Checker</Heading>

      <Box mt={8} width="100%" maxWidth="400px" margin="0 auto">
        <input
          style={{ width: "100%", marginBottom: "10px" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search recipes by name or health labels..."
        ></input>
      </Box>

      <VStack spacing={4} mt={8}>
        {searchRecipes().map((hit) => {
          const {
            recipe: {
              label,
              image,
              dietLabels,
              cautions,
              mealType,
              dishType,
              healthLabels,
            },
          } = hit;
          return (
            <Box key={label} borderWidth="1px" borderRadius="lg" p={4}>
              <a
                href={hit.recipe.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heading size="lg">{label}</Heading>
              </a>
              <Image src={image} alt={label} maxH="200px" />
              {dietLabels && (
                <p>
                  <strong>Diet Label:</strong> {dietLabels.join(", ")}
                </p>
              )}
              {cautions && (
                <p>
                  <strong>Cautions:</strong> {cautions.join(", ")}
                </p>
              )}
              <p>
                <strong>Meal Type:</strong> {mealType}
              </p>
              <p>
                <strong>Dish Type:</strong> {dishType}
              </p>
              {healthLabels.length > 0 && (
                <p>
                  <strong>Health Labels:</strong> {healthLabels.join(", ")}
                </p>
              )}
            </Box>
          );
        })}
      </VStack>
    </div>
  );
};
