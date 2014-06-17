define([
    'underscore',
    'marionette',
    'text!templates/subreddit/navbar.html'
], function(_, Marionette, template) {

    'use strict';

    var NavBarView = Marionette.ItemView.extend({

	template: _.template(template),

	tagName: 'ul',

	className: 'subreddit-navbar'

    });

    return NavBarView;

});
