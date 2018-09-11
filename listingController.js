angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {

      $scope.listings.push({"code":$scope.code, "name":$scope.name, "coordinates":{"latitude":$scope.latitude, "longitude":$scope.longitude}, "address":$scope.address}); 

      $scope.name='';
      $scope.code=0;
      $scope.latitude=0;
      $scope.longitude=0;
      $scope.address='';
    };
    

    $scope.deleteListing = function(index) {
      return($scope.listings.splice(index,1));
    };

    $scope.showDetails = function(index) 
    {
      $scope.detailedInfo = index;
      
      
      
    };
  }
]);