Markdocs.factory('DocHelper', function() {
	// source is a object, 
	// e.g: statuses from DocModel service
	// or main.statuses from DocController.

	// properti is a string.
	// This is the key of object source, e.g: 'name'.
	var buildIndex = function(source, property) {
		var tempArray = [];

        for (var i = 0, len = source.length; i < len; ++i) {
            tempArray[source[i][property]] = source[i];
        }

        // tempArray is object,
        // e.g: 
        // 		[
        // 			{name: {name: 'draf'}},
        // 			{name: {name: 'final'}},
        // 			{name: {name: 'revision'}}
        // 		]
        return tempArray;
	}

	var modal = function(idModal='myModal', show=True) {
		if (show) {
			$('#'+idModal).modal('show');
		} else {
			$('#'+idModal).modal('hide');
		}
	};

	return {
		buildIndex: buildIndex,
		modal: modal
	}



});


Markdocs.service('DocModel', function($filter) {
	var service = this;
	
	var statuses = [
		{name: 'draf'},
		{name: 'final'},
		{name: 'revision'}
	]; 

	var categories = [
		{name: 'blog'},
		{name: 'doc'}
	]

	var docs = [
		{
			title: "Title One",
			author: 'Yanwar Solahudin',
			created: $filter('date')(new Date(), "MMMM d, yy"),
			status: 'draf',
			category: 'doc',
			post: '### This is example document.'
		},
		{
			title: "Title Two",
			author: 'Yanwar Solahudin',
			created: $filter('date')(new Date(), "MMMM d, yy"),
			status: 'draf',
			category: 'doc',
			post: '## This is example document.'
		},
		{
			title: "Another Title",
			author: 'Yanwar Solahudin',
			created: $filter('date')(new Date(), "MMMM d, yy"),
			status: 'draf',
			category: 'doc',
			post: '#### This is example document.'
		}
	];

	service.getStatuses = function() {
		return statuses;
	};

	service.getCategories = function() {
		return categories;
	};

	service.getDocs = function() {
		return docs;
	};

});