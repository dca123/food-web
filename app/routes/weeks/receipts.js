import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    return this.store.findRecord('week', params.week_id, {include: 'receipts'})
  }
});
