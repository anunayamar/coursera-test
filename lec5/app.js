(function() {
'use strict';

angular.module('nameCalculatorModule',[])

.controller('NameCalculatorController', function($scope){
  
  $scope.name = "";
  $scope.totalValue = 0;

  $scope.displayNumeric = function(){
    var totalNumericValue = calculateNumericValue($scope.name);
    $scope.totalValue = totalNumericValue;
  };

  function calculateNumericValue(string){
    var totalStringValue = 0;
    for (var i=0; i < string.length; i++){
      totalStringValue += string.charCodeAt(i);
    }

    return totalStringValue
  }

});

})();
