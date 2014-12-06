'use strict';

var app = angular.module('app', [])

app.controller('AppController', ['$scope', function($scope) {

  $scope.done = false	
  $scope.chosenOption = null
  $scope.disableCheckButton = true

  $scope.question = {
		"title": "What DevOps really is?",
		"options": [
			{
				"title": "IT position / role",
				"text": "DevOps is a special guy in a team, usually referred as System Engineer, which is responsible for development tooling maintanence, improving development and ops communication, release management and much more",
				"correct" : false
			},
			{
				"title": "A set of practices",
				"text": "DevOps is a set of practices which aims to enhance the software delivery by creating tighter links between the different IT people including Developers and Operations through the use of automation and communication.",
				"correct" : true
			}  	
		]
	}

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

  // var correct = $(".list-group-item.active").hasClass('correct')

  //       if (correct) {
  //           $("#ok").removeClass("hide")
  //       } else {
  //           $("#notok").removeClass("hide")
  //       }
  //   });
