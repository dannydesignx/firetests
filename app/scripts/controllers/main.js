'use strict';

/**
 * @ngdoc function
 * @name firetestsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firetestsApp
 */
angular.module('firetestsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
