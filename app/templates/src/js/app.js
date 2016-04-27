var app = angular.module('<%= appName %>', ['ngRoute', 'ngAnimate', 'ui.bootstrap', '<%= appName %>.directives', '<%= appName %>.controllers']);
angular.module('<%= appName %>.controllers', []);
angular.module('<%= appName %>.directives', []);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'app/main/main.tpl.html',
      controller: 'main'
    })
    .when('/about', {
      templateUrl: 'app/about/about.tpl.html',
      controller: 'about'
    })
    .otherwise({ redirectTo: '/' });
});