var local = {
    jquery:     'libs/jquery-2.0.2.min',
    underscore: 'libs/underscore-min',
    backbone:   'libs/backbone-min',
    relational: 'libs/backbone-relational',
    marionette: 'libs/backbone.marionette.min',
    wookmark:   'libs/jquery.wookmark.min',
    text:       'libs/text'
};

var vender = {
    jquery:     'vender/jquery/dist/jquery',
    underscore: 'vender/underscore/underscore',
    backbone:   'vender/backbone/backbone',
    relational: 'vender/backbone-relational/backbone-relational',
    marionette: 'vender/marionette/lib/backbone.marionette',
    wookmark:   'vender/wookmark-jquery/jquery.wookmark',
    text:       'vender/requirejs-text/text'
};

require.config({

    shim: {

	'backbone': {
	    deps: [
		'underscore', 
		'jquery'
	    ],
	    exports: 'Backbone'
	},

	'underscore': {
	    exports: '_'
	},

	'marionette': {
	    deps: [
		'backbone'
	    ],
	    exports: 'Backbone.Marionette'
	},

	'relational': {
	    deps: [
		'backbone'
	    ],
	    exports: 'Backbone'
	},

	'jquery': {
	    exports: 'jQuery'
	},

	'wookmark': {
	    deps: [
		'jquery'
	    ],
	    exports: '$'
	}
    },

    paths: vender

});

require([
    'app'
], function (app) {
  
    'use strict';

    app.start();

}); 
