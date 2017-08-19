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
    .when('/associations', {
      controller:'AssocitaionController',
      templateUrl:'pages/associations.html'
    })
    .when('/contact', {
      controller:'ContactController',
      templateUrl:'pages/contact.html'
    })
    .when('/gallery', {
      controller:'GallerytController',
      templateUrl:'pages/gallery.html'
    })
    .when('/news-events', {
      controller:'NewsEventsController',
      templateUrl:'pages/news-events.html'
    })
    .when('/our-parish', {
      controller:'OurPerishController',
      templateUrl:'pages/our-parish.html'
    })
    .when('/services', {
      controller:'ServicesController',
      templateUrl:'pages/services.html'
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
 
.controller('AssocitaionController',function($scope) {
     $scope.message ="AssocitaionController";
})

.controller('GallerytController', function($scope) {
    $scope.message ="GallerytController";
})
 
.controller('ContactController',function($scope) {
     $scope.message ="ContacttController";
})

.controller('NewsEventsController', function($scope) {
    $scope.message ="NewsEventsController";
})
 
.controller('OurPerishController',function($scope) {
     $scope.message ="OurPerishController";
})

.controller('ServicesController',function($scope) {
     $scope.message ="ServicesController";
})