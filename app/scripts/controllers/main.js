'use strict';

/**
 * @ngdoc function
 * @name azoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the azoApp
 */
angular.module('azoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
