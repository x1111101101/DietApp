export const MOCK_INGREDIENT = {energy: 100, carbonhydrate: 10, protein: 20, fat: 5, group: "grains", weightPerExchange: 20}
export const MOCK_RECIPE = {
    name: "레시피",
    ingredients: [{id: 0, weight: 10, ingredient: MOCK_INGREDIENT}, {id: 1, weight: 20, ingredient: MOCK_INGREDIENT}]
}
export const MOCK_MEAL = {
    name: "식사",
    recipes: [{id: 0, weight: 100, recipe: MOCK_RECIPE}, {id: 1, weight: 120, recipe: MOCK_RECIPE}]
}
export const MOCK_MEALS = [MOCK_MEAL, MOCK_MEAL, MOCK_MEAL]