define([
    'underscore',
    'marionette',
    'views/index/content/FeedGridView',
    'views/index/content/LoadView',
    'text!templates/subreddit.html'
], function (_, Marionette, FeedGridView, LoadView, template) {

    'use strict';

    var SubredditView = Marionette.Layout.extend({

	tagName: 'div',

	className: 'subreddit',

	template: _.template(template),

	regions: {
	    body: '.subreddit-body',
	    load: '.subreddit-load-container'
	},

	initialize: function(options){
	    this.subreddit = this.model;
	    this.vent = options.vent;
	},

	onRender: function(){
	    this.body.show(new FeedGridView({ 
		collection: this.subreddit.get('feeds'),
		vent: this.vent 
	    }));
	    this.load.show(new LoadView({
		model: this.subreddit,
		vent: this.vent 
	    }));
	}

    });
    
    return SubredditView;

});
