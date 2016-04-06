'use strict'; // jshint ignore:line
require('angular').module('crossover', [
    require('angular-ui-router'),
    require('angular-animate'),
    require('angular-aria'),
    require('angular-messages'),
    require('angular-material')
]).config(config);

function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $stateProvider.state('login', {
        url: '/',
        controller: 'SessionController',
        controllerAs: 'sessionCtrl',
        templateUrl: 'src/components/login-page/login.html'
    })

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        controller: 'DashboardController',
        controllerAs: 'dashbordCtrl',
        templateUrl: 'src/components/dashboard/dashboard.html'
    });

    $locationProvider.html5Mode(true);
}

// shared
require('../shared');

// login-page
require('../components/login-page');
require('../components/dashboard');
