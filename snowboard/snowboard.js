'use strict';

import snowboardTemplate from './snowboard.html';

angular.module('app.snowboard', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/snowboard', {
    template: snowboardTemplate,
    controller: 'SnowboardCtrl',
    controllerAs: 'vm'
  });
}])

.controller('SnowboardCtrl', ['$location', function($location) {
  this.items = [
    {id: 1, img: 'colin-lloyd-DvIYbNCZAns-unsplash', label: 'Buckshot rocks', price: 240},
    {id: 2, img: 'dane-deaner-j5asemKMmQY-unsplash', label: 'K2 board', price: 200},
    {id: 3, img: 'perfect-snacks-SaRcln5IcE8-unsplash', label: 'Neptunia suit', price: 150},
    {id: 4, img: 'tanya-pro-O6fPlLe2z-k-unsplash', label: 'Totemic board', price: 240},
  ];

  this.navigateTo = function(route){
    $location.path(route)
  }
}]);