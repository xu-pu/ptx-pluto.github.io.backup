define([
    'marionette',
    'modules/IndexModule',
], function(Marionette, IndexModule) {

    'use strict';

    var app = new Marionette.Application();

    app.addRegions({
	page: 'body'
    });

//    app.module('Account', AccountModule);
//    app.module('Page', PageModule);
    app.module('Index', IndexModule);

    app.addInitializer(function(){});

    return app;

});
