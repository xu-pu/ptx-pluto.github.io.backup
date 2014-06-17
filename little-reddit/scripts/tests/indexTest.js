define([
    'jquery',
    'marionette',
    'models/Subreddit',
    'models/Categories',
    'views/index/IndexView',
] ,function ($, Marionette, Subreddit, Categories, IndexView) {
    
    'use strict';

    return function () {

	var testModel = new Subreddit({ name: 'python' });
	var testCate = new Categories();

	var testPage = new Marionette.Region({ el: 'body' });
	testPage.show(new IndexView({ collection: testCate }));
	testPage.currentView.triggerMethod('render:subreddit', testModel);

	testCate.fetch();
	testModel.fetch();

    };

});
