import newController from './new'
//Extending the new controller
export default newController.extend({
  queryParams: ['isEditing'],
  isEditing: false
});
