'use strict';

/**
 * @ngdoc function
 * @name azoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the azoApp
 */
angular.module('azoApp')
  .controller('MainCtrl', function ($scope, $http, Mandrill) {

var message = {
        "html": "<p>Example HTML content</p>",
        "subject": "AZO Microsite Contact Form",
        "from_email": "message.from_email@example.com",
        "from_name": "Example Name",
        "to": [
            {
                //"email": "Jenb@sdastl.com",
                //"name": "Jennifer Balossi",
                "email": "adamelevate@gmail.com",
                "name": "Adam Lorentzen",
                "type": "to"
            }
        ]
};
    

  $scope.apiStatusClass = "";
    
  $scope.checkSetup = Mandrill.ping({
      "key": "DQgcNx3CBIYrC9YtCBTDsg"
    }, (function(data, status, headers, config) {
        console.log('success', data);
      $scope.apiStatusClass = "alert alert-success";
      return ;
    }), (function(data, status, headers, config) {
        console.log('error', data);
      $scope.apiStatusClass = "alert alert-error";
      return $scope.apiStatusContent = "Doesn't seem to be valid.";
    }));
   
  $scope.sendMessage = function(){
      Mandrill.sendMessage({
      "key": "DQgcNx3CBIYrC9YtCBTDsg",
      message: message
    }, (function(data, status, headers, config) {
        console.log('success', data);
      $scope.apiStatusClass = "alert alert-success";
      return ;
    }), (function(data, status, headers, config) {
        console.log('error', data);
      $scope.apiStatusClass = "alert alert-error";
      return $scope.apiStatusContent = "Doesn't seem to be valid.";
    }));
    
  };
    
});
