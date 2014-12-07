'use strict';

angular.module('app', ['ui.bootstrap']);
angular.module('app').controller('AppController', function($scope, $http, $modal) {

var emails = new Firebase('https://fiery-torch-636.firebaseio.com');


$http.get('questions.json').success(function(data) {
	var todaysDate = $.formatDateTime('yy/mm/dd', new Date());
    $scope.question = data[todaysDate]
  });

$scope.disableCheckButton = true

$scope.chooseOption = function(index) {
	if ($scope.done) {
		return;
	}
	$scope.chosenOption = index
	$scope.disableCheckButton = false
}

$scope.check = function() {
	$scope.done = true
	$scope.showOk = $scope.question.options[$scope.chosenOption].correct
	$scope.showNotOk = !($scope.question.options[$scope.chosenOption].correct)
}

$scope.subscribe = function() {
	emails.push( {email: email} );
}

  $scope.notify = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'NotifyController.html',
      controller: 'NotifyController',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {});
  };

});

angular.module('app').controller('NotifyController', function ($scope, $modalInstance, items) {
  $scope.ok = function () {
    $modalInstance.close();
  };

  $scope.cancel = function () {
    $modalInstance.dismiss();
  };
});
