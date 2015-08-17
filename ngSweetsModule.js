(function(){

	angular.module('ngSweets',[]);

	function focus($timeout) {
		return {
			scope: {
				
			},
			restrict: 'A',
			link: function(scope, element, attributes) {
				if(attributes.focus != '') {
					element[0].focus();
				} else {
					scope.$watch($parse(attributes.focus), function(newValue) {
						if(newValue === true)
							$timeout(function(){
								element[0].focus();
							});
					});
				}
			}
		}
	}

	angular.module('ngSweets')
		.directive('focus', focus);

})();