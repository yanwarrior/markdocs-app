Markdocs.directive('listdoc', function() {
	return {
		scope: true,
		replace: true,
		template: '<div><h4>{{doc.title}}</h4><p>{{ doc.created | date }}.  {{doc.author}}</p></div>'
	}
});


Markdocs.directive("document", function() {
	return {
        restrict: "A",
        require: "ngModel",
        link: function(scope, element, attrs, ngModel) {

            function read() {
                // view -> model
                var html = element.html();
                html = html.replace(/&nbsp;/g, "\u00a0");
                ngModel.$setViewValue(html);
            }


            // model -> view
            ngModel.$render = function() {
                element.html(ngModel.$viewValue || "");

            };

            element.bind("blur", function() {
                scope.$apply(read);
            });

            element.bind("keydown", function (event) {
                if(event.which === 13) {
                    this.blur();
                    event.preventDefault();
                }
            });
        }
	};
});