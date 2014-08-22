import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {

        // var loggedIn = this.get('session.isAuthenticated');
        var loggedIn = true;
        
        if (!loggedIn) {
            this.transitionTo('create-account');
        }
    },

    model: function() {
        return this.store.find('post');
    }
});
