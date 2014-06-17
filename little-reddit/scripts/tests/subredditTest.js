define([
    'jquery',
    'models/Subreddit',
    'views/index/content/SubredditView',
] ,function ($, Subreddit, SubredditView) {
    
    'use strict';

    return function () {

	var testRegion = new Marionette.Region({ el: 'body' });
	var testReddit = new Subreddit({ name: 'beards' });
	var testView = new SubredditView({ model: testReddit });

	testRegion.show(testView);
	testReddit.fetch();

    };

});

