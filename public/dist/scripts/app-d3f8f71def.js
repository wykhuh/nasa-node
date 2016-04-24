!function(){"use strict";angular.module("app",["ngResource","ui.router","toastr"])}(),function(){"use strict";function t(){function t(){return e}var e=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"}];this.getTec=t}angular.module("app").service("webDevTec",t)}(),function(){"use strict";function t(t){function e(e,r,a,n){var o,i=t(r[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});r.addClass("acme-malarkey"),angular.forEach(e.extraValues,function(t){i.type(t).pause()["delete"]()}),o=e.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(t){i.type(t.login).pause()["delete"]()})}),e.$on("$destroy",function(){o()})}function r(t,e){function r(){return a().then(function(){t.info("Activated Contributors View")})}function a(){return e.getContributors(10).then(function(t){return n.contributors=t,n.contributors})}var n=this;n.contributors=[],r()}r.$inject=["$log","githubContributor"];var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:e,controller:r,controllerAs:"vm"};return a}t.$inject=["malarkey"],angular.module("app").directive("acmeMalarkey",t)}(),function(){"use strict";function t(){function t(t){var e=this;e.relativeDate=t(e.creationDate).fromNow()}t.$inject=["moment"];var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0};return e}angular.module("app").directive("acmeNavbar",t)}(),function(){"use strict";function t(t,e){function r(r){function n(t){return t.data}function o(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))}return r||(r=30),e.get(a+"/contributors?per_page="+r).then(n)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:a,getContributors:r};return n}t.$inject=["$log","$http"],angular.module("app").factory("githubContributor",t)}(),function(){"use strict";function t(t){var e=this;e.latest_alerts=[],e.temperatures=[],t.get("/api/alerts").success(function(t){e.latest_alerts=t.reverse()});var r=function(){t.get("/api/temperatures").success(function(t){console.log(t),t.length>0&&(e.temperatures.length>10&&e.temperatures.pop(),angular.forEach(t,function(t){e.temperatures.push({deviceid:t.deviceid._,temperature:t.temperaturereading._,eventtime:t.eventtime._}),e.temperatures.reverse()}),e.latest_reading=e.temperatures[0])})};r(),setInterval(r,5e3)}t.$inject=["$http"],angular.module("app").controller("MainController",t)}(),function(){"use strict";function t(t){t.debug("runBlock end")}t.$inject=["$log"],angular.module("app").run(t)}(),function(){"use strict";function t(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],angular.module("app").config(t)}(),function(){"use strict";angular.module("app").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function t(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}t.$inject=["$logProvider","toastrConfig"],angular.module("app").config(t)}(),angular.module("app").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div><acme-navbar></acme-navbar></div><div class="row"><div class="col-md-4"><h2>Current Temperature</h2>The last recorded reading on device {{ latest_reading.deviceid }} was:<table><thead><tr><th>Temperature</th><th>Time</th></tr></thead><tbody><tr><td>{{ latest_reading.temperature | number }}&deg;C</td><td>{{ latest_reading.eventtime | date : \'medium\' }}</td></tr></tbody></table></div><div class="col-md-4" style="overflow-wrap:break-word"><h2>Alerts</h2><pre ng-repeat="alert in latest_alerts">{{ alert | json }}</pre><br></div><div class="col-md-4"><h2>Temperature History</h2><div ng-show="temperatures.length > 0"><h4>Most recent {{ temperatures.length }} readings</h4><table><thead><tr><th>Temperature</th><th>Time</th></tr></thead><tbody><tr ng-repeat="t in temperatures"><td>{{ t.temperature | number }}&deg;C</td><td>{{ t.eventtime | date : \'medium\' }}</td></tr></tbody></table><div ng-show="temperatures.length === 0">No temperature history found</div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-d3f8f71def.js.map
