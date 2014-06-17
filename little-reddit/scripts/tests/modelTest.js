define([
    'models/Subreddit',
] ,function (Subreddit) {
    
    'use strict';

    return function () {

	var testReddit = new Subreddit({ name: 'beards' });

	testReddit.on('loaded', function(){
	    testReddit.get('feeds').each(function(feed){
	    	console.log(feed);
	    });
	    console.log(testReddit.get('feeds').pluck('id'));	    
	});

	testReddit.fetch();

    };

});
