define([
    'models/Categories',
], function (Categories) {

    'use strict';

    return function() {
	
	var testCate = new Categories();
	testCate.fetch();

    };

});
