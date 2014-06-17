define([
    'underscore',
    'backbone',
    'marionette',
    'text!templates/sidebar/footer-bar.html'
], function (_, Backbone, Marionette, template) {

    'use strict';

    var ENTER_KEY = 13;

    var FooterBarView = Marionette.ItemView.extend({

	id: 'sidebar__input-box',

	tagName: 'div',

	className: 'sidebar__input-box',

	template: _.template(template),

	ui: {
	    input: '.sidebar__input',
	    submit: '.sidebar__input-submit'
	},

	events: {
	    'keypress @ui.input': 'onInput',
	    'click @ui.submit': 'onRoute'
	},

	onInput: function(event) {
	    if (event.which === ENTER_KEY ){
		this.onRoute();
	    }
	},

	onRoute: function() {
	    Backbone.history.navigate('#/subreddit/' + this.ui.input.val());	    
	    this.ui.input.val('');
	}

    });

    return FooterBarView;

});
