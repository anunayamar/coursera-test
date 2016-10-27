(function(){
  'use strict';
  
  angular.module('lunchCheckModule',[])

  .controller('LunchCheckController', lunchCheckController);

  lunchCheckController.$inject = ['$scope'];

  function lunchCheckController($scope){
    $scope.dishes = "";
    $scope.messageToShow = "";

    $scope.processMessage = function(){
      var passedMessage = $scope.dishes;
      $scope.messageToShow = processAndCheckMessage(passedMessage)

    };
  }

  function processAndCheckMessage(passedMessage){

    if (!passedMessage){
      return "Please enter data first";
    }
    var messageArray = passedMessage.split(",");
    var messageLength = messageArray.length;


    if (messageLength <= 3 && messageLength > 0){
      return "Enjoy!";
    }else if(messageLength > 3){
      return "Too much!";
    }
  }

})();
