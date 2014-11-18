import Ember from 'ember';
/* global $ */

export default Ember.ObjectController.extend({
    
    followUnfollow: function() {
        return this.get('isFollowed') ? 'Unfollow' : 'Follow';
    }.property('isFollowed'),

    isCurrentUser: function() {
        return this.get('id') === this.get('session.user.id');
    }.property('id'),

    actions: {
        follow: function() {
            Ember.Logger.log('Controller requesting route to refresh...');
            var self = this;
            if (!this.get('isFollowed')) {
                console.log('follow!');
                $.ajax({
                    type: "POST",
                    url: '/api/users/follow',
                    data: {
                        id: this.get('id')
                    }, //json object -> req.body.id
                    success: function (data) {
                        self.set('isFollowed', true);
                        console.log('data: ', data);
                    },
                    dataType: 'json'
                });    
            } else {
                console.log('unfollow!');
                $.ajax({
                    type: "POST",
                    url: '/api/users/unfollow',
                    data: {
                        id: this.get('id')
                    }, //json object -> req.body.id
                    success: function (data) {
                        self.set('isFollowed', false);
                        console.log('data: ', data);
                    },
                    dataType: 'json'
                });
            }
            
            
            // var updateEvent = { id: this.get('id'), { $push: { followers: this.get('session.user.id') }}}
            // this.store.update('user', updateEvent);
            //api follow / unfollow ajax call similar to logout. 
            
        }
    }
});
