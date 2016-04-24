!function(){"use strict";angular.module("app",["ngResource","ui.router","toastr","LocalStorageModule"])}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("app").directive("acmeNavbar",e)}(),function(){"use strict";function e(e,t){var a=this;a.latest_alerts=[],a.temperatures=[],e.get("/api/alerts").success(function(e){a.latest_alerts=e.reverse()});var r=function(){e.get("/api/temperatures").success(function(e){e.length>0&&(a.temperatures.length>10&&a.temperatures.pop(),angular.forEach(e,function(e){a.temperatures.push({deviceid:e.deviceid._,temperature:e.temperaturereading._,eventtime:e.eventtime._}),a.temperatures.reverse()}),a.latest_reading=a.temperatures[0])})};r(),t(r,5e3)}e.$inject=["$http","$interval"],angular.module("app").controller("MainController",e)}(),function(){"use strict";function e(e){function t(t,a){e.set(t,a)}function a(t){return e.get(t)}var r=a("temperature"),n=a("sound");r&&n||(t("temperature",15),t("sound",20))}e.$inject=["localStorageService"],angular.module("app").controller("SettingsController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("app").run(e)}(),function(){"use strict";function e(e,t){e.state("settings",{url:"/settings",templateUrl:"app/settings/settings.html",controller:"SettingsController",controllerAs:"settings"}).state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";angular.module("app").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t,a){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0,a.setPrefix("app").setNotify(!0,!0).setStorageType("localStorage")}e.$inject=["$logProvider","toastrConfig","localStorageServiceProvider"],angular.module("app").config(e)}(),angular.module("app").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="row"><div class="col-md-4"><h2>Current Temperature</h2>The last recorded reading on device {{ main.latest_reading.deviceid }} was:<table><thead><tr><th>Temperature</th><th>Time</th></tr></thead><tbody><tr><td>{{ main.latest_reading.temperature | number }}&deg;C</td><td>{{ main.latest_reading.eventtime | date : \'medium\' }}</td></tr></tbody></table></div><div class="col-md-4" style="overflow-wrap:break-word"><h2>Alerts</h2><pre ng-repeat="alert in latest_alerts">{{ main.alert | json }}</pre><br></div><div class="col-md-4"><h2>Temperature History</h2><div ng-show="main.temperatures.length > 0"><h4>Most recent {{ main.temperatures.length }} readings</h4><table><thead><tr><th>Temperature</th><th>Time</th></tr></thead><tbody><tr ng-repeat="t in main.temperatures"><td>{{ t.temperature | number }}&deg;C</td><td>{{ t.eventtime | date : \'medium\' }}</td></tr></tbody></table><div ng-show="main.temperatures.length === 0">No temperature history found</div></div></div></div></div>'),e.put("app/settings/settings.html",'<div class="container"><div><acme-navbar></acme-navbar></div><h1>settings</h1></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" ui-sref="home"><span class="glyphicon glyphicon-home"></span> App</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ui-sref="home">Home</a></li><li><a ui-sref="settings">Settings</a></li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-cdb5c12bf9.js.map
