define([
    'underscore',
    'marionette',
    'text!templates/subreddit/load.html'
], function (_, Marionette, template) {

    'use strict';

    var LoadView = Marionette.ItemView.extend({

	template: _.template(template),
	
	tagName: 'div',
	
	className: 'subreddit-load',

	triggers: {
	    'click': 'load:more'
	},

	modelEvents: {
	    'change:loading': 'onLoad'
	},

	initialize: function(options) {
	    this.subreddit = options.model;
	},
	
	onLoad: function() {
	    console.log('detected');
	    if (this.subreddit.get('loading')) {
		this.$el.html('Loading');
		this.$el.addClass('loading');
	    }
	    else {
		this.$el.html('Load More');
		this.$el.removeClass('loading');
	    }
	},

	onLoadMore: function() {
	    this.subreddit.loadMore();
	}

    });

    return LoadView;

});
