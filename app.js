angular.module('project', ['ngRoute'])
.config(function($routeProvider,$locationProvider) {
  
 
  $routeProvider
    .when('/', {
      controller:'HomeController',
      templateUrl:'pages/home.html'
    })
    .when('/about', {
      controller:'AboutController',
      templateUrl:'pages/about.html'
    })
    .when('/contact', {
      controller:'ContacttController',
      templateUrl:'pages/contact.html'
    })
    .otherwise({
      redirectTo:'/'
    });
    $locationProvider.hashPrefix('');
})
 
.controller('HomeController', function($scope) {
    $scope.message ="HomeController";    
    $scope.dailaymasses = [{day: "Monday", time:"6:00 - 7:00 AM"},{ day: "Tuesday", time:"6:00 - 7:00 AM"},{day: "Wednesday", time:"6:00 - 7:00 AM"},{day: "Thursday", time:"6:00 - 7:00 AM"},{day: "Friday", time:"6:00 - 7:00 PM"},{day: "Saturday", time:"6:00 - 7:00 PM"},{day: "Sunday", time:"6:00 - 7:00 AM"}];
    
    $('.mass-timings div:nth-child(odd)').addClass('odd');
    
})
 
.controller('AboutController', function($scope) {
    $scope.message ="AboutController";
})
 
.controller('ContacttController',function($scope) {
     $scope.message ="ContacttController";
});