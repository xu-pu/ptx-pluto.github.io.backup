define([
    'relational',
    'models/Subreddit',
    'models/Subreddits',
], function (Relational, Subreddit, Subreddits) {

    'use strict';

    var Category = Relational.RelationalModel.extend({

	relations: [{
	    key: 'subreddits',
	    type: 'HasMany',
	    relatedModel: Subreddit,
	    collectionType: Subreddits,
	    reverseRelation: {
		key: 'category',
		type: 'HasOne',
	    }
	}],

    });

    return Category;

});
