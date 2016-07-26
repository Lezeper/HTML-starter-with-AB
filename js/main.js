(function () {

  angular.module('interviewApp', [])
  .controller('mainCtrl', ['$scope', function ($scope) {

    $scope.fq_area = true;
    $scope.sq_area = true;

    $scope.resetFirst = function(){
      $scope.fq_area = true;
      $scope.fa_area = false;
    }

    $scope.resetSecond = function(){
      $scope.sq_area = true;
      $scope.sa_area = false;
    }

    doFirst = function(input_1){
      var sum = parseInt(input_1[0]);
      // if this number has second digit
      if(input_1[1]){
        for(var i = 1; i < input_1.length; i++){
          sum += parseInt(input_1[i]);
        }
        // recursive call
        return doFirst(sum.toString());
      }else{
        return sum;
      }
    }

    doSecond = function(input_2){
      for(var i = 0; i < input_2.length; i++){
        var positions = []; // store all the positions of this number
        var j = -1;
        // while this number still can be found in the rest of the array
        while((j = input_2.indexOf(input_2[i], j + 1)) !== -1){
          positions.push(j);
        }
        // if this number has only one position in this array, then this number is unique
        if(positions.length === 1){
          return input_2[i];
        }
      }
    }

    $scope.first = function(){
      var input_1 = $scope.input_1.toString();
      $scope.first_ans = doFirst(input_1);
      $scope.fq_area = false;
      $scope.fa_area = true;
    }

    $scope.second = function(){
      var input_2 = $scope.input_2;
      $scope.second_ans = doSecond(input_2);
      $scope.sq_area = false;
      $scope.sa_area = true;
    }

    }]);
})();
