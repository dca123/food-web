import DS from 'ember-data';
var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  normalizeQueryResponse(store, clazz, payload) {
    const result = this._super(...arguments);
    result.meta = result.meta || {};
    if (payload.links) {
      result.meta.pagination = this.createPageMeta(payload.links);
      if (result.meta.pagination.self.number == result.meta.pagination.first.number) {
        delete result.meta.pagination['first'];
      }
      if (result.meta.pagination.self.number == result.meta.pagination.last.number) {
        delete result.meta.pagination['last'];
      }
    }
    return result;
  },
  keyForAttribute: function(attr) {
    return underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  },
  createPageMeta(data) {

    let meta = {};

    Object.keys(data).forEach(type => {
      const link = data[type];
      meta[type] = {};
      let a = document.createElement('a');
      a.href = link;

      a.search.slice(1).split('&').forEach(pairs => {
        const [param, value] = pairs.split('=');

        if (param == 'page%5Bnumber%5D') {
          meta[type].number = parseInt(value);
        }
        if (param == 'page%5Bsize%5D') {
          meta[type].size = parseInt(value);
        }

      });
      a = null;
    });
    return meta;

  }
});
