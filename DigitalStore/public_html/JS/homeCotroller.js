app.controller('homeController', function($scope, $http){
    
    $http.get('../JSON/products.json')
       .then(function(result){
          $scope.products = result.data;                
        });
});

