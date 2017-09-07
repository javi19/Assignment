angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    $scope.newListing = {
        coordinates:
            {
              latitude: 0,
              longitude: 0
            }
      };

    var clearNow = function () {
      $scope.newListing.code = '';
      $scope.newListing.name = '';
      $scope.newListing.coordinates.latitude = 0;
      $scope.newListing.coordinates.longitude = 0;
      $scope.newListing.address = '';
    };

    clearNow();

    $scope.addListing = function() {
        $scope.listings.push({
            name: $scope.newListing.name,
            code: $scope.newListing.code,
            address: $scope.newListing.address,
            coordinates: {
                latitude: $scope.newListing.coordinates.latitude,
                longitude: $scope.newListing.coordinates.longitude
            }
        });
        clearNow();
    };

    $scope.deleteListing = function(index) {
        $scope.listings.splice(index,1);
        $scope.selectedIndex = -1;
        $scope.detailedInfo = {};
    };

    $scope.showDetails = function(index) {
        $scope.detailedInfo = $scope.listings[index];
        $scope.selectedIndex = index;
    };
  }
]);