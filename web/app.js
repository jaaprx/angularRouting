/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var animateApp = angular.module('animateApp', ['ngRoute', 'ngAnimate']);

animateApp.config(function($routeProvider) {
    $routeProvider
    	.when('/default', {
            templateUrl: 'page-default.html',
            controller: 'defaultController'
    	})
        .when('/home', {
            templateUrl: 'page-home.html',
            controller: 'mainController'
    	})
    	.when('/about', {
            templateUrl: 'page-about.html',
            controller: 'aboutController'
    	})
    	.when('/contact', {
            templateUrl: 'page-contact.html',
            controller: 'contactController'
    	})
        .otherwise({ redirectTo: '/default' });

});

/*
animateApp.run(function($rootScope) {
   $rootScope.$on('$routeChangeSuccess', function(ev,data) {   
        //alert("1");
   });
});
*/

animateApp.controller('mainController', function($scope) {
    //$scope.pageClass = 'page-home';
    //$scope.pageClass = 'page-default';
});

animateApp.controller('aboutController', function($scope) {
    //$scope.pageClass = 'page-about';
    //$scope.pageClass = 'page-default';
});

animateApp.controller('contactController', function($scope) {
    //$scope.pageClass = 'page-contact';
    //$scope.pageClass = 'page-default';
});

animateApp.controller('defaultController', function($scope) {
    //$scope.pageClass = 'page-contact';
    //$scope.pageClass = 'page-default';
});

animateApp.directive('baseNavigate', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.on('click', function() {
                //alert(element.attr("href"));
                element.parent().find("a").attr("disabled",false);
                element.attr("disabled",true);
            });
        }
    };
});

