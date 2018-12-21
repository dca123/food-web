import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log(params);
    return this.store.query('meal', {
      page: {
        number: params.page,
        size: params.size
      },
      category: params.category
    });
  },
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    },
    category:{
      refreshModel: true
    }
  }
});
