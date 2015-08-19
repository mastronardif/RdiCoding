app.controller('rdiController', ['$scope', '$http', '$resource', function ($scope, $http, $resource) {
   var Di = $resource('/api/rdi');
   $scope.rdi = [
   {name: "wtf"}
  ,{name: "wtf33"}
  ,{name: "wtf22"}
  ]


$scope.search = function () {
    alert( $scope.rdiName);

//$scope.$apply();
 //"/api/rdi"
 $http.get("/rdi/fuck")
       .success(function(response)
       { 
        console.log("***response = " +response);  

        $scope.rdi = 
        //response;
/**/   
   [
   //response,
   {"_id":"55b159e061c5976f7b994915"},
   {name: "adsfasfasf zz"}
  ,{name: "zz33"}
  ,{name: "zz22"}
  ]
/*****/
    }); 
}
  
$scope.list = function () {
    //alert( $scope);

//$scope.$apply();
 //"/api/rdi"
 $http.get("/rdi/fuck")
       .success(function(response){ console.log("***response = " +response);  

   $scope.rdi = response;
/**   
   [
   //response,
   {"_id":"55b159e061c5976f7b994915"},
   {name: "adsfasfasf zz"}
  ,{name: "zz33"}
  ,{name: "zz22"}
  ]
*****/
$scope.rdi.fuck  = response; }); 
}

  $scope.createRDi = function () {
console.log("__.js$scope.createRDi");
    var di = new Di();
    di.name = $scope.diName;
    //alert($scope.createDi);
 //$scope.di.push({name: $scope.diName });
console.log("BB createRDi");

/******/
    di.$save(function (result) {
     //$scope.rdi.push(result);
      $scope.rdiName = '';
var sss = JSON.stringify(result);
console.log("BB " + sss );

    });
/**************/
date = new Date();
$scope.rdi.push({name: 'new '+ date.getTime()});

//$scope.fuck = 'KKKKK';
//$scope.rdi.push({fuck: 'new '+ date.getTime()});

  }

}]);