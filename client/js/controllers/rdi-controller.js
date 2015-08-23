app.controller('rdiController', ['$scope', '$http', '$resource', function ($scope, $http, $resource) {
   var Di = $resource('/api/rdi');
   $scope.rdi = [
   {name: "wtf"}
  ,{name: "wtf33"}
  ,{name: "wtf22"}
  ]


$scope.search = function () {
    var key = $scope.rdiQuery.trim().toLowerCase();
    
        //alert("***scope = " + $scope.rdi[0].name + "\n" + $scope.rdi[0].name22); 
        
        var results = listWhereCodeEquals(key);
        //console.log (results);
        //alert(results[0].name);
        $scope.rdi = results;
        
        /***********
           [
   //response,
   //{"_id":"55b159e061c5976f7b994915"},
   {name: "me angry at the wind"}
  ,{name: "mad at the stars"}
  ,{name: "mad at the door"}
  ];
  ************/

  return;
        

//$scope.$apply();
 //"/api/rdi"
 $http.get("/rdi/fuck")
       .success(function(response)
       { 
        console.log("***response = " +response);  

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

$scope.saveDescription = function (id,count,textArea) {
        description=textArea;
        var args = $scope.rdi[count].name + "\n________\n" + "id="+id + ",  " + "count= "+ count + "\n" + description
        alert(args);
    }
    

  $scope.createRDi = function () {
console.log("__.js$scope.createRDi");
    var di = new Di();
    di.name = $scope.diName;
    //alert($scope.codes); //.rdi[0].name + ' =>' +  $scope.text );
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
//date = new Date();
//$scope.rdi.push({name: 'neQ '+ date.getTime()});

  }
  
  
  
  // Save
    $scope.save = function () {
console.log("__ scope.save = function ()");
console.log($scope.rdi[0].name);


$scope.rdi = '"asdf":"you"';

  }
  
  function listWhereCodeEquals(key)
  {
    //alert("key = " + key + "\n_______________\n" + $scope.rdi[0].name + "\n" + $scope.rdi[0].name22);
 
    var retval = [];
    var top    = [];
    var bottom = [];
    var a = $scope.rdi; //["a", "b", "c"];
        a.forEach(function(entry) {
            //console.log(entry.name22.toLowerCase() == key.toLowerCase());
            //if (entry.name22)
            if( ('name22' in entry) && (entry.name22.toLowerCase() == key.toLowerCase()) )
            {
                // append new value to the array
                top.push(entry);                
            }
            else
            {
                bottom.push(entry);
            }
        });
        
        retval = top.concat(bottom);
        //retval.push(bottom);

        
        alert("retval.length =  "+ retval.length);
        //console.log(retval);
    return retval;
  }
  
}]);