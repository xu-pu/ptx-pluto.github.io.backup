define([
    'jquery',
    'backbone',
    'marionette',
    'models/Subreddit',
    'models/Categories',
    'views/index/IndexView'
], function ($, Backbone, Marionette, Subreddit, Categories, IndexView) {
    
    'use strict';

    var IndexController = Marionette.Controller.extend({
	
	initialize: function(options){
	    this.module = options.module;
	    this.region = options.region;
	    (function(self) {
		$(window).resize(function(){
		    self.trigger('window:resize');
		});
	    }(this));
	},
	
	routeSubreddit: function(name, order){
	    order = order || 'new';
	    this.module.currentSubreddit = new Subreddit({ name: name, order: order });
	    this.region.currentView.triggerMethod(
		'route:subreddit', 
		this.module.currentSubreddit
	    );
	    this.module.currentSubreddit.fetch();
	},

	show: function() {
	    this.region.show(new IndexView({ 
		collection: this.module.categories, 
		vent: this
	    }));
	    this.module.categories.fetch();
	    Backbone.history.start();
	}
	
    });

    var IndexModule = function(self, app){
	this.categories = new Categories();
	this.subreddits = {};

	this.controller = new IndexController({ 
	    module: this,
	    region: app.page
	});

	this.router = new Marionette.AppRouter({
	    controller: this.controller,
	    appRoutes: {
		'subreddit/:name/:order': 'routeSubreddit',
		'subreddit/:name': 'routeSubreddit'
	    }
	});

	this.on('start', function(){
	    this.controller.show();
	}, this);

    };

    return IndexModule;

});
