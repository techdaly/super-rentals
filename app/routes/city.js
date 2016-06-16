import Ember from 'ember';

export default Ember.Route.extend({
  model(cityparams) {
    return this.store.findRecord('city', cityparams.city_id);
  },

  actions:{
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      var city = cityparams.city;
      city.get('rentals').addObject(newRental);
      newRental.save().then(function(){
        return city.save();
      });
      this.transitionTo('city', cityparams.city);
    }
  }
});
