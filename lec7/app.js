(function(){
  angular.module('sampleApp',[])

  .controller('SampleController', sampleControllerFunction)
  .filter('sample', sampleFilterFactory);

  sampleControllerFunction.$inject = ['$scope', 'sampleFilter'];

  function sampleControllerFunction($scope, sampleFilter){
    $scope.originalMessage = "Anunay likes";
    $scope.newMessage = ""

    $scope.showNewMessage = function(){
      $scope.newMessage = sampleFilter($scope.originalMessage);
    }
  };

  function sampleFilterFactory(){
    return function(input){
      input = input.replace("likes","loves");
      return input;
    };
  }

})();
