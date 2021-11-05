'use strict';

import snowboardDetailsTemplate from './snowboard-details.html';

angular.module('app.snowboardDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items/:id', {
    template: snowboardDetailsTemplate,
    controller: 'SnowboardDetailsCtrl',
    controllerAs: 'vm'
  });
}])

.controller('SnowboardDetailsCtrl', ['$location', '$http', '$routeParams', function($location, $http, $routeParams) {
  this.item = null;
  this.sizes = [{ id: 1, label: 'XS' },
  { id: 2, label: 'S' },
  { id: 3, label: 'M' },
  { id: 4, label: 'L' },
  { id: 5, label: 'XL' }]

  this.sizeSelected = 0;

  $http.get('http://localhost:3000/snowboard/' + $routeParams.id).then(
    res => this.item = res.data
  )

  this.navigateTo = function(route){
    $location.path(route)
  }
}]);