import angular from "angular";
import "angular-route";
import "./snowboard/snowboard";
import "./snowboard-details/snowboard-details";
import "./index.css";

angular
  .module("app", ["ngRoute", "app.snowboard", "app.snowboardDetails"])
  .component("app", {
    controller: function ($location) {
      this.message = "AngularJS";
      this.version = require("../package.json").dependencies.angular;
      this.navigateTo = function (route) {
        $location.path(route);
      };
    },
    template: `
  <div ng-view></div>
  `,
  })
  .config([
    "$locationProvider",
    "$routeProvider",
    function ($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider.otherwise({ redirectTo: "/items" });
    },
  ]);

/*
export class Mfe extends HTMLElement {
  connectedCallBack() {
    const root = document.createElement("mfe-component");
    this.appendChild(root);
    angular.bootstrap(root, ["app"]);
  }
}
customElements.define("mfe-web-component", Mfe);
*/

// Note: You can also wrap a controller or a directive
// in a Custom Element!
