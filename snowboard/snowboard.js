"use strict";

import snowboardTemplate from "./snowboard.html";

angular
  .module("app.snowboard", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when('/items', {
        template: snowboardTemplate,
        controller: "SnowboardCtrl",
        controllerAs: "vm",
      });
    },
  ])

  .controller("SnowboardCtrl", [
    "$location", "$http",
     function ($location, $http) {
      this.items = [];

      $http.get('http://localhost:3000/snowboard').then(
        res => this.items = res.data
      )

      this.navigateTo = function (route) {
        $location.path(route);
      };
    },
  ]);
