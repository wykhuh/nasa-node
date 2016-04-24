(function() {
  'use strict';

  angular.module('app', []).controller('indexController', function($scope, $http) {

    $scope.latest_alerts = [];
    $scope.temperatures = [];

    $http.get('/api/alerts').success(function(data) {
      $scope.latest_alerts = data.reverse();
    });

    var getData = function() {
      $http.get('/api/temperatures').success(function(result) {
        console.log(result)
        if(result.length > 0) {
          if($scope.temperatures.length > 10) {

            $scope.temperatures.pop();
          }
          angular.forEach(result, function(x) {
            $scope.temperatures.push({
              deviceid: x.deviceid._,
              temperature: x.temperaturereading._,
              eventtime:  x.eventtime._
            });
            $scope.temperatures.reverse();
          });
          $scope.latest_reading = $scope.temperatures[0];
        }
      });
    }

    getData();
    setInterval(getData, 5000)

  });


})();
