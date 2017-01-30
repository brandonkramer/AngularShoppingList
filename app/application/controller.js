'use strict';

app.controller('listCtrl', function($scope) {
  // Initial list items
  $scope.products =
  [
    'Milk',
    'bread',
    'Cheese'
  ];
  // Add item to list
  $scope.addItem = function() {
    $scope.errortext = '';
    if (!$scope.addMe) {return;}
    if ($scope.products.indexOf($scope.addMe) === -1) {
        $scope.products.push($scope.addMe);
    } else {
      $scope.errortext = 'The item is already in your shopping list.';
    }
  };
  // Remove item from list
  $scope.removeItem = function(x) {
    $scope.errortext = '';
    $scope.products.splice(x, 1);
  };
});
