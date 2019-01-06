import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';

export default Component.extend({
  recipes: null,
  store: service(),
  quantity: null,
  measure: null,
  ingredientModel: null,
  ingredientList: service(),
  ingredients: computed('ingredientList.ingredients', function() {
    return this.get('ingredientList.ingredients');
  }),
  init() {
    this._super(...arguments);
    this.set('recipes', [{ingredient: 'cat', quantity: 2, measure: 'cup'}]);
    this.set('filteredIngredients', this.get('ingredients'))
  },
  actions: {
    createRecipe(){
      let ingredientModel = this.get('ingredientModel')
      let newRecipe = this.store.createRecord('recipe', {
        meal: this.get('model'),
        quantity: this.get('quantity'),
        measure: this.get('measure'),
        ingredient: ingredientModel
      });

      newRecipe.save().then((data) =>  {
        let recipe = {
          ingredient: ingredientModel.get('name'),
          quantity: data.quantity,
          measure: data.measure
        };
        let recipes = this.get('recipes')
        recipes.pushObject(recipe);
        console.log('recipe Saved');
      });
    },
    selectIngredient(ingredient) {
      if (ingredient.id == 0) {
        let name = ingredient.name.split("Create ")[1];
        this.set('ingredient_name', name);
        this.set('newIngredientOpen', true);
      } else {
        this.set('selectedIngredient', ingredient);
        let ingredientModel = this.store.findRecord('ingredient', ingredient.id)
        this.set('ingredientModel', ingredientModel);
      }
    },
    createIngredient(selectedLocation){
      console.log(selectedLocation);
      let newIngredient = this.store.createRecord('ingredient', {
        name: this.get('ingredient_name'),
        location: selectedLocation.toLowerCase()
      });
      newIngredient.save().then((data) => {
        this.set('newIngredientOpen', false);
        this.set('ingredientModel', data);
        let ingredient = {
          id: data.id,
          name: data.name
        };
        this.get('ingredients').pushObject(ingredient);
        this.set('selectedIngredient', ingredient);
      });
    },
    searchAsync(value) {
      let ingredients = this.get('ingredients');
      let filterdResults = ingredients.filter(function(data) {
        return data.name.match(new RegExp(value, "i"));
      });
      if (filterdResults.length == 0) {
        filterdResults.unshiftObject({
          id: 0,
          name: `Create ${value}`
        });
      }
      this.set('filteredIngredients', filterdResults);
    },
    preventSearchesBelowThreeChars(term) {
      if (term.length < 3) {
        this.set('selectedIngredient', null);
        return false;
      }
    }
  }
});
