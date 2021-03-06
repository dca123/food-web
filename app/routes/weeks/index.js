import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return this.store.query('week', {
      page:{
        number: params.page,
        size: params.size
      },
      month: params.monthDestination,
      year: params.yearDestination
    });
  },
  queryParams:{
    page:{
      refreshModel: true
    },
    size:{
      refreshModel: true
    },
    monthDestination:{
      refreshModel: true
    },
    yearDestination:{
      refreshModel: true
    }
  }
});
