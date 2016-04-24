

(function() {
  'use strict';

  angular
    .module('app')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($http, $interval, localStorage) {
    var vm = this;

    vm.latest_alerts = [];
    vm.temperatures = [];


    var tempSettings = localStorage.getValue('temperature');
    var soundSettings = localStorage.getValue('sound');

    // $http.get('/api/alerts').success(function(data) {
    //   vm.latest_alerts = data.reverse();
    // });

    var getData = function() {
      $http.get('/api/temperatures').success(function(result) {
        if(result.length > 0) {
          if(vm.temperatures.length > 5) {
            vm.temperatures.pop();
          }
          angular.forEach(result, function(x) {
            vm.latest_alerts = [];

            var currentTemp = x.temperaturereading._;
            if(currentTemp > tempSettings) {
              console.log('too hot', tempSettings, x.temperaturereading._)
              vm.latest_alerts.push(
                { text: 'Too hot! Current temperature is '
                 + currentTemp + ', your threshold is ' + tempSettings }
               )
            };

            vm.temperatures.push({
              deviceid: x.deviceid._,
              temperature: x.temperaturereading._,
              eventtime:  x.eventtime._
            });
            vm.temperatures.reverse();
          });
          vm.latest_reading = vm.temperatures[0];
        }
      });
    }

    getData();
    $interval(getData, 5000);

  }
})();
