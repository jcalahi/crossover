'use strict'; // jshint ignore:line
require('angular').module('crossover', [require('angular-ui-router')]).config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider
        .state('login', {
            url: '/',
            controller: 'LoginController',
            controllerAs: 'loginCtrl',
            templateUrl: 'src/components/login-page/login.html'
        })
        .state('dashboard', {
            url: '/dashboard/{username}',
            controller: 'DashboardController',
            controllerAs: 'dashboardCtrl',
            params: {
                username: ''
            },
            templateUrl: 'src/components/dashboard/dashboard.html'
        });

    $locationProvider.html5Mode(true);
}

// shared
require('../shared');
// login-page
require('../components/login-page');
// dashboard
require('../components/dashboard');
