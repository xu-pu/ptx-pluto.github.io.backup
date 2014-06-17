define([
    'underscore',
    'marionette',
    'text!templates/sidebar/status-bar.html',
], function (_, Marionette, template) {

    'use strict';

    var StatusBarView = Marionette.ItemView.extend({

	id: 'sidebar-status-bar',

	tagName: 'div',
	
	className: 'sidebar-status-bar',

	template: _.template(template),

    });

    return StatusBarView;

});
