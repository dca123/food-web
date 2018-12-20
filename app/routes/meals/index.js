import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('meal', {
      page: {
        number: params.page,
        size: params.size
      }
    });
  },
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }
});
