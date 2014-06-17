define([
    'underscore',
    'backbone',
    'models/Category',
    'tests/samples/categories'
], function (_, Backbone, Category, sample) {

    'use strict';

    var Categories = Backbone.Collection.extend({

	fetch: function(){
	    var self = this;
	    _.each(sample.categories, function(cate){
		var newCate = new Category({ name: cate.name });
		self.add(newCate);
		_.each(cate.subreddits, function(sub){
		    newCate.get('subreddits').add({ name: sub });
		});
	    });
	}

    });

    return Categories;

});
