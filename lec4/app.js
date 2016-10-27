(function() {
'use strict';

angular.module('myFirstApp',[])

.controller('MyFirstController', function($scope){
  $scope.name = "Anunay";
  $scope.sayHello = function (){
    return "Hello Coursera!";
  };
});

})();
