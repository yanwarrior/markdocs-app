Markdocs.controller('DocController', function(DocHelper, DocModel, marked, $filter) {
	var main = this;

	main.statuses = DocModel.getStatuses();
	main.categories = DocModel.getCategories();
	main.docs = DocModel.getDocs();
	main.statusesIndex = DocHelper.buildIndex(main.statuses, 'name');
	main.categoriesIndex = DocHelper.buildIndex(main.categories, 'name');

	main.setCurrentDoc = function(doc) {
		main.currentDoc = doc;
		main.currentStatus = doc.status;
		main.currentCategory = doc.category;

		// logging
		console.log(doc);
		DocHelper.modal('myModal', true);

	};

	main.refreshPost = function(post) {
		if (typeof main.currentDoc !== 'undefined') {
			main.currentDoc.post = marked(post);
		}
	}

	main.createDoc = function() {
		// insert new object doc in 0 index.
		Array.prototype.insert = function ( index, item ) {
    		this.splice(index, 0, item );
		};

		main.docs.insert(0, {
			title: "Simple Title",
			author: 'Rebecca',
			created: $filter('date')(new Date(), "MMMM d, yy"),
			status: 'draf',
			category: 'doc',
			post: '# This is example document.'
		});
	};

	main.setCurrentStatus = function(status) {
		if (typeof main.currentDoc !== 'undefined') {
			main.currentDoc.status = status;
		}
	};

	main.setCurrentCategory = function(category) {
		if (typeof main.currentDoc !== 'undefined') {
			main.currentDoc.category = category;
		}
	};

});