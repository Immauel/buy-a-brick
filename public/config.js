angular.module("mainApp", ['ngRoute']).config(['$routeProvider',function($routeProvider) {
       $routeProvider.when('/home', {templateUrl: 'clientViews/home.html'}).
       when('/Donation', { templateUrl: 'clientViews/Donation.html' ,controller: 'indDonCtrl'}).
       when('/CompDonation', { templateUrl: 'clientViews/CompDonation.html' ,controller: 'compDonCtrl'}).
       when('/HADonation', { templateUrl: 'clientViews/HADonation.html' ,controller: 'AHDonCtrl'}).
       when('/alldoner', { templateUrl: 'clientViews/alldoner.html' ,controller: 'cdonersCtrl'}).
       when('/thankyou', {templateUrl: 'clientViews/thankyou.html'}).
       when('/game', { templateUrl: 'clientViews/game.html', }).
       when('/adminhome', { templateUrl: 'AdminViews/index.html',controller:"adminHomeCtrl"}).
       when('/login', { templateUrl: 'AdminViews/login.html', controller: 'signinCtrl' }).
       //when('/mining', { templateUrl: 'AdminViews/chart-chartjs.html'}).
       when('/users', { templateUrl: 'AdminViews/Users.html', controller: 'userCtrl' }).
       when('/doners', { templateUrl: 'AdminViews/Donations.html', controller: 'donCtrl' }).
       
       //when('/allowencies', {templateUrl: 'app/landing/pricing.html'}).
       //when('/stats', {templateUrl: 'app/landing/support.html'}).
       otherwise({redirectTo: '/home' });
}]);