var app = angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.html",
        controller:"loginctrl"
    })
    .when("/home", {
        templateUrl : "home.html",
        controller:"homeController"
    })
    .when("/logout",{
        templateUrl : "logout.html"
    })
    .otherwise("/", {
        templateUrl : "login.html"
    });
});