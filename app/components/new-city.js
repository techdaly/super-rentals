import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow(){
      this.set('addNewCity', true);
    },

    savecity1() {
      var cityparams = {
        name: this.get('name'),
        country: this.get('country'),
      };
      this.set('addNewCity', false);
      this.sendAction('savecity2', cityparams);
    }
  }
});
