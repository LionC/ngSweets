(function() {

  angular.module('ngSweets')
    .directive('validate', [validateDirective]);

  function validateDirective() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: validateLink
    }

    function validateLink(scope, element, attributes, ngModelController) {
      var validateFunction = scope.$eval(attributes.validate);

      ngModelController.$parsers.push(applyValidation);
      ngModelController.$formatters.push(applyValidation);

      function applyValidation(newValue) {
        var validationResult = validateFunction(newValue);

        for(var i in validationResult) {
          ngModelController.$setValidity(i, !!validationResult[i]);
        }

        return newValue;
      }
    }
  }

})();
