'use strict';

/**
 * @ngdoc overview
 * @name azoApp
 * @description
 * # azoApp
 *
 * Main module of the application.
 */
angular
  .module('azoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    
  })

.factory('Mandrill', function($resource) {
  var Mandrill;
  return Mandrill = $resource('https://mandrillapp.com/api/1.0/:category/:call.json', {}, {
    sendMessage: {
      method: "POST",
      isArray: true,
      params: {
        category: "messages",
        call: "send"
      }
    },
    ping: {
      method: "POST",
      params: {
        category: "users",
        call: "ping"
      }
    }
  });
})
.config(function($httpProvider) {
  return delete $httpProvider.defaults.headers.common["X-Requested-With"];
});

