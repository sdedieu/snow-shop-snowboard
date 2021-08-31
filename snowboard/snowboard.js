"use strict";

import snowboardTemplate from "./snowboard.html";
import Colin from "../assets/img/colin-lloyd-DvIYbNCZAns-unsplash.jpg";
import Dane from "../assets/img/dane-deaner-j5asemKMmQY-unsplash.jpg";
import Perfect from "../assets/img/perfect-snacks-SaRcln5IcE8-unsplash.jpg";
import Tanya from "../assets/img/tanya-pro-O6fPlLe2z-k-unsplash.jpg";

angular
  .module("app.snowboard", ["ngRoute"])

  .config([
    "$routeProvider",
    function ($routeProvider) {
      $routeProvider.when("/snowboard", {
        template: snowboardTemplate,
        controller: "SnowboardCtrl",
        controllerAs: "vm",
      });
    },
  ])

  .controller("SnowboardCtrl", [
    "$location",
    function ($location) {
      this.items = [
        { id: 1, img: Colin, label: "Buckshot rocks", price: 240 },
        {
          id: 2,
          img: Dane,
          label: "K2 board",
          price: 200,
        },
        {
          id: 3,
          img: Perfect,
          label: "Neptunia suit",
          price: 150,
        },
        {
          id: 4,
          img: Tanya,
          label: "Totemic board",
          price: 240,
        },
      ];

      this.navigateTo = function (route) {
        $location.path(route);
      };
    },
  ]);
