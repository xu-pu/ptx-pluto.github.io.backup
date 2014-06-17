define([
    'backbone',
    'models/Subreddit'
], function (Backbone, Subreddit) {

    'use strict';

    var Subreddits = Backbone.Collection.extend({
	model: Subreddit
    });

    return Subreddits;

});
