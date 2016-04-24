(function() {
  'use strict';

  angular
    .module('app')
    .controller('SettingsController', SettingsController);


  /** @ngInject */
  function SettingsController(localStorage) {
    var vm = this;

    vm.temp = localStorage.getValue('temperature');
    // vm.sound = localStorage.getValue('sound');

    vm.setValues = function() {
      localStorage.setValue('temperature', +vm.temp);
      // localStorage.setValue('sound', +vm.sound);
    }
  }
})();
