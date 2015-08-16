app.controller('diController', ['$scope', '$resource', function ($scope, $resource) {
  var Di = $resource('/api/dis');

  Di.query(function (results) {
    $scope.di = results;
  });

  $scope.di = [
   {name: "wtf"}
  ,{name: "wtf22"}
  ]

  $scope.createDi = function () {
    var di = new Di();
    di.name = $scope.diName;
    //alert($scope.createDi);
 //$scope.di.push({name: $scope.diName });
console.log("client AAAAAAAAAAA createDi");

/**/
    di.$save(function (result) {
      $scope.di.push(result);
      $scope.diName = '';
    });
/**/

  }
}]);