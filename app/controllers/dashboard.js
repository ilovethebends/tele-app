import Ember from 'ember';

export default Ember.ArrayController.extend({
    sortProperties: ['id'],
    sortAscending: false,



    authenticatedUser: function() {
        return this.get('session.user');
    }.property(),

    name: function() {
        return this.get('session.user.name');
    }.property(),

    isLoggedIn: Ember.computed.alias('controllers.application.isLoggedIn'),

    actions: {
        postTweet: function() {
            
            
            var post = this.store.createRecord('post', {
                author: this.get('authenticatedUser'), 
                text: this.get('post'),
                timestamp: moment()

            });
            post.save();
            this.set('post', '');
        }
        
    }

});
