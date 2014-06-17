define([
    'underscore',
    'marionette',
], function (_, Marionette) {

    'use strict';

    var EmptyContentView = Marionette.ItemView.extend({

	tagName: 'div',

	className: 'subreddit-empty-content',

	template: _.template('No content yet!'),

    });

    return EmptyContentView;

});
