define([
    'jquery',
    'underscore',
    'relational',
    'models/Feed',
    'models/Feeds'
], function ($, _, Relational, Feed, Feeds) {

    'use strict';
    
    var Subreddit = Relational.RelationalModel.extend({

	relations: [{
	    key: 'feeds',
	    type: 'HasMany',
	    relatedModel: Feed,
	    collectionType: Feeds,
	    reverseRelation: {
		key: 'subreddit',
		type: 'HasOne'
	    }
	}],

	defaults: {
	    order: 'new',
	    before: null,
	    after: null,
	    loading: false
	},

//	initialize: function() {},

	url: function(){
	    return '/r/' + this.get('name') + '/new.json';
	},

	// override backbone fetch and sync for subreddit class

	sync: function(method, options) {

	    var params = {
		type: 'GET',
		dataType: 'jsonp',
		jsonp: 'jsonp',
		context: this
	    };

	    switch (method) {

	    case 'fetch':
		params.success = function(data){
		    this.set('after', data.data.after);
		    _.each(data.data.children, function(feed){
			this.get('feeds').add(feed.data);
		    }, this);
		    this.trigger('loaded');
		};
		break;
		
	    case 'more':
		if (this.get('after') === null) { return; }
		params.data = { after: this.get('after') };
		params.success = function(data) {
		    this.set('after', data.data.after);
		    this.set('loading', false);
		    _.each(data.data.children, function(feed){
			this.get('feeds').add(feed.data);
		    }, this);		
		};
		break;

	    case 'order':
		break;

	    default:
		break;

	    }

	    var url = 'http://reddit.com/r/' + this.get('name') + '/' + this.get('order') + '.json';

	    $.ajax(url, params);
	    
	},

	fetch: function(){
	    this.sync('fetch');
	},

	loadMore: function() {
	    if (this.get('loading')) { return; }
	    this.set('loading', true);
	    this.sync('more');
	},

//	changeOrder: function() {},


	
	
    });

    return Subreddit;

});
