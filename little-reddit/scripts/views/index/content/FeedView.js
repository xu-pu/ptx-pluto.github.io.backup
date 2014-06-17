define([
    'underscore',
    'marionette',
    'text!templates/feed.html'
], function (_, Marionette, template) {

    'use strict';

    var FeedView = Marionette.ItemView.extend({

	tagName: 'li',

	className: 'feed',

	template: _.template(template),
	
	ui: {
	    image: 'img',
	    details: '.feed__details',
	    detailsToggle: '.feed__details-toggle'
	},

	triggers: {
	    'click @ui.detailsToggle': 'details:toggle'
	},

	initialize: function() {
	    this.detailsToggle = false;
	},

	onRender: function(){
	    var self = this;
	    this.ui.image.hide();
	    this.ui.details.hide();
	    this.ui.image.load(function(){
		self.ui.image.show();
//		self.trigger('loaded');
		self.trigger('size:change');
	    });
	},

	onDetailsToggle: function() {
	    console.log('toggle');
	    if (this.detailsToggle) {
		this.detailsToggle = false;
		this.ui.details.hide();
	    }
	    else {
		this.detailsToggle = true;
		this.ui.details.show();
	    }
	    this.trigger('size:change');
	}

    });

    return FeedView;
    
});
