define([
    'underscore',
    'marionette',
    'views/index/content/SubredditView',
    'views/index/sidebar/SidebarView',
    'views/index/content/EmptyContentView',
    'views/index/content/NavBarView',
    'text!templates/index.html'
], function (_, Marionette, SubredditView, SidebarView, EmptyContentView, NavBarView, template) {

    'use strict';

    var IndexView = Marionette.Layout.extend({

	id: 'content-page',

	tagName: 'div',

	className: 'content-page',

	template: _.template(template),

	regions: {
	    sidebar: '#sidebar-container',
	    content: '#main-body',
	    navbar: '.subreddit-navbar-container'
	},

	ui: {
	    main: '.main-container',
	    header: '.main-header',
	    toggle: '.sidebar-toggle'
	},

	triggers: {
	    'click @ui.toggle': 'sidebar:toggle'
	},

	initialize: function(options){
	    this.categories = this.collection;
	    this.vent = options.vent;
	    this.fullscreen = false;
	},

	onRender: function(){
	    this.sidebar.show(new SidebarView({ collection: this.categories }));
	    this.content.show(new EmptyContentView());
	},

	onSidebarToggle: function(){
	    if (this.fullscreen === true) {
		this.fullscreen = false;
		this.ui.main.removeClass('fullscreen');
	    }
	    else if (this.fullscreen === false) {
		this.fullscreen = true;
		this.ui.main.addClass('fullscreen');
	    }
	    this.vent.trigger('sidebar:toggle');
	},

	onRouteSubreddit: function(subreddit){
	    this.content.show(new SubredditView({ 
		model: subreddit,
		vent: this.vent 
	    }));
	    this.navbar.show(new NavBarView({ 
		model: subreddit,
		vent: this.vent 
	    }));
	}

    });

    return IndexView;

});
