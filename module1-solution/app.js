(function(){
	'use strict';
	angular.module('LunchCheck',[])
	.controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject = ["scope"];

	function LunchCheckController($scope){
		$scope.menu = "";
		$scope.message = ""
		$scope.check = function(){
			menu = $scope.menu.split(',');
			if (!$scope.menu) {
				$scope.message = '"Please enter data first"'
			}
			if (menu.length <= 3) {
				$scope.message = '"Enjoy!"'
			}
			else (menu.length > 3) {
				$scope.message = '"Too much!"'
			}
		};
	}
})();