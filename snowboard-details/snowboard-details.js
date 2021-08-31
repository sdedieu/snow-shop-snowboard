'use strict';

import snowboardDetailsTemplate from './snowboard-details.html';
import Colin from "../assets/img/colin-lloyd-DvIYbNCZAns-unsplash.jpg";

angular.module('app.snowboardDetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/items/:id', {
    template: snowboardDetailsTemplate,
    controller: 'SnowboardDetailsCtrl',
    controllerAs: 'vm'
  });
}])

.controller('SnowboardDetailsCtrl', ['$location', function($location) {
  this.item = {id: 1, img: Colin, label: 'Buckshot rocks', price: 240}
  this.sizes = [{ id: 1, label: 'XS' },
  { id: 2, label: 'S' },
  { id: 3, label: 'M' },
  { id: 4, label: 'L' },
  { id: 5, label: 'XL' }]

  this.sizeSelected = 0;

  this.navigateTo = function(route){
    $location.path(route)
  }
}]);