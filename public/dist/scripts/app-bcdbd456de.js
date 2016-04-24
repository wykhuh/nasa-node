!function(){"use strict";angular.module("app",["ngResource","ui.router","toastr"])}(),function(){"use strict";function e(){function e(e){var t=this;t.relativeDate=e(t.creationDate).fromNow()}e.$inject=["moment"];var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:e,controllerAs:"vm",bindToController:!0};return t}angular.module("app").directive("acmeNavbar",e)}(),function(){"use strict";function e(e){var t=this;t.latest_alerts=[],t.temperatures=[],e.get("/api/alerts").success(function(e){t.latest_alerts=e.reverse()});var a=function(){e.get("/api/temperatures").success(function(e){console.log(e),e.length>0&&(t.temperatures.length>10&&t.temperatures.pop(),angular.forEach(e,function(e){t.temperatures.push({deviceid:e.deviceid._,temperature:e.temperaturereading._,eventtime:e.eventtime._}),t.temperatures.reverse()}),t.latest_reading=t.temperatures[0])})};a(),setInterval(a,5e3)}e.$inject=["$http"],angular.module("app").controller("MainController",e)}(),function(){"use strict";function e(e){e.debug("runBlock end")}e.$inject=["$log"],angular.module("app").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(e)}(),function(){"use strict";angular.module("app").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("app").config(e)}(),angular.module("app").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="row"><div class="col-md-4"><h2>Current Temperaturesss</h2>The last recorded reading on device {{ main.latest_reading.deviceid }} was:<table><thead><tr><th>Temperature</th><th>Time</th></tr></thead><tbody><tr><td>{{ main.latest_reading.temperature | number }}&deg;C</td><td>{{ main.latest_reading.eventtime | date : \'medium\' }}</td></tr></tbody></table></div><div class="col-md-4" style="overflow-wrap:break-word"><h2>Alerts</h2><pre ng-repeat="alert in latest_alerts">{{ main.alert | json }}</pre><br></div><div class="col-md-4"><h2>Temperature History</h2><div ng-show="main.temperatures.length > 0"><h4>Most recent {{ main.temperatures.length }} readings</h4><table><thead><tr><th>Temperature</th><th>Time</th></tr></thead><tbody><tr ng-repeat="t in main.temperatures"><td>{{ t.temperature | number }}&deg;C</td><td>{{ t.eventtime | date : \'medium\' }}</td></tr></tbody></table><div ng-show="main.temperatures.length === 0">No temperature history found</div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-bcdbd456de.js.map
