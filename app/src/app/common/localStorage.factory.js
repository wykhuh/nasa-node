(function() {
  'use strict';

  angular
    .module('app')
    .factory('localStorage', localStorage);

  /** @ngInject */
  function localStorage(localStorageService) {

    function setValue(key, value) {
      localStorageService.set(key, value);
    }

    function getValue(key) {
     return localStorageService.get(key);
    }

    return {
      getValue: getValue,
      setValue: setValue
    }
  }
})();
