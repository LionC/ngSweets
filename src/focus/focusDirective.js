(function(){

  function focus($timeout) {
		return {
			restrict: 'A',
			link: function(scope, element, attributes) {
				if(attributes.focus == '') {
					$timeout(function(){
                        element[0].focus();
                    });
				} else {
					scope.$watch($parse(attributes.focus), function(newValue) {
						if(newValue === true)
							$timeout(function(){
								element[0].focus();
							});
					});
				}
			}
		};
	}

	angular.module('ngSweets')
		.directive('focus', ['$timeout', focus]);

})();
