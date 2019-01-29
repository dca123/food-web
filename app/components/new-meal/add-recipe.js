import Component from '@ember/component';
import {
  inject as service
} from '@ember/service';
import {
  computed
} from '@ember/object';
import errorDisplay from '../../mixins/error-display';

export default Component.extend(errorDisplay, {
  store: service(),
  quantity: null,
  measure: null,
  ingredientModel: null,
  ingredientList: service(),
  measureList: service(),
  modalsManager: service(),
  ingredients: computed('ingredientList.ingredients', function() {
    return this.get('ingredientList.ingredients');
  }),
  measurements: computed('measureList.measurements', function() {
    return this.get('measureList.measurements');
  }),
  init() {
    this._super(...arguments);
    this.set('filteredIngredients', this.get('ingredients'))
  },
  actions: {
    anotherMeal() {
      this.sendAction("anotherMeal");
    },
    removeRecipe(id) { //removing from list
      let recipe = this.store.peekRecord('recipe', id);
      recipe.destroyRecord().then((data) => {
        this.successToast('Removed Recipe !');
      }, (error) => {
        this.errorToast(error, 8000);
      })
    },
    deleteIngredient() {
      let ingredientModel = this.get('ingredientModel');
      this.set('newIngredientOpen', false);
      ingredientModel.destroyRecord().then((data) => {
        this.successToast('Deleted Ingredient !');
        this.get('model').reload();
      }, (error) => {
        this.errorToast(error, 8000);
      });
    },
    editIngredientModal(ingredientModel) {
      this.set('editIngredient', true);
      let _ingredientModel = this.store.peekRecord('ingredient', ingredientModel.get('id'));
      this.set('ingredientModel', _ingredientModel);
      this.set('newIngredientOpen', true);
    },
    updateIngredient() {
      this.set('newIngredientOpen', false);
      let ingredientModel = this.get('ingredientModel')
      ingredientModel.save().then((data) => {
        this.successToast('Updated Ingredient !');
      }, (error) => {
        this.errorToast(error, 8000);
      });
    },
    createRecipe() {
      let ingredientModel = this.get('ingredientModel')
      let newRecipe = this.store.createRecord('recipe', {
        meal: this.get('model'),
        quantity: this.get('quantity'),
        measure: this.get('measure'),
        ingredient: ingredientModel,
        notes: this.get('notes')
      });

      newRecipe.save().then((data) => {
        this.successToast('Updated the Recipe !');
        this.set('measure', '');
        this.set('quantity', '');
        this.set('notes', '');
        this.set('selectedIngredient', '');
      }, (error) => {
        newRecipe.deleteRecord();
        this.errorToast(error, 8000);
      });
    },
    selectIngredient(ingredient) {
      if (ingredient.id == 0) {
        let name = ingredient.name.split("Create ")[1];
        this.set('ingredient_name', name);
        this.set('ingredientModel', null);
        this.set('newIngredientOpen', true);

      } else {
        this.set('selectedIngredient', ingredient);
        let ingredientModel = this.store.findRecord('ingredient', ingredient.id)
        this.set('ingredientModel', ingredientModel);
      }
    },
    createIngredient(selectedLocation, selectedCategory) {
      let newIngredient = this.store.createRecord('ingredient', {
        name: this.get('ingredient_name'),
        location: selectedLocation.toLowerCase(),
        category: selectedCategory.toLowerCase()
      });
      newIngredient.save().then((data) => {
        this.set('newIngredientOpen', false);
        this.set('ingredientModel', data);
        this.get('ingredientList').refreshData();
        this.set('selectedIngredient', data);
        this.successToast('Created New Ingredient !');
      }, (error) => {
        newIngredient.deleteRecord();
        this.errorToast(error, 8000);
      });
    },
    searchAsync(value) {
      let ingredients = this.get('ingredients');
      let filterdResults = ingredients.filter(function(data) {
        return data.name.match(new RegExp(value, "i"));
      });
      filterdResults.unshiftObject({
        id: 0,
        name: `Create ${value}`
      });
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
