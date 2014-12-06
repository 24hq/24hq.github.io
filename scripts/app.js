'use strict';

var app = angular.module('app', [])

app.controller('AppController', ['$scope', '$http', function($scope, $http) {

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
}]);
