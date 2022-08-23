1. Create 4 components
- Home
- Add Recipe
- Recipes
- Recipe Details
- Add Recipe

2. Add routing for all routes. The Recipe details should be a single recipe, gotten by ID.

3. In the add-recipe component, add a reactive form  where you will create a recipe. (Add name, description, ingredients)

3.1. The recipe itself should be an object with these properties

- id: number
- name: string
- description: string
- ingredients: string[]

3.2 Add a required validation for the name, description and ingredients fields.
Add a max length validation for the Description field (16 characters)

3.3 Use the validation to render proper validation error messages under each field.

4. Create a recipe service that will keep the state of an array of recipes. You should have methods
for returning all recipes, a single recipe by ID, and adding a new recipe.
The ID of a new recipe should be based on the length of the recipe array.

5. The Recipes component should display a list of recipe names. Clicking on a recipe name should navigate to the recipe details page
for that recipe.

6. The recipe details component should use the recipe ID to display all details for the recipe

Bonus: Implement a not found page in the routing.