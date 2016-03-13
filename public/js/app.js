(function(){

angular

    .module('MeanAuthApp', ['ui.router'])

    .config(function($stateProvider, $urlRouterProvider){
        //
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "/views/home.html"
            })
            .state('profile', {
                url: "/profile",
                templateUrl: "views/profile.html"
            })
            .state('signup', {
                url: "/signup",
                templateUrl: "views/sign-up.html"
            })
            .state('login', {
                url: "/login",
                templateUrl: "views/login/login.html",
                controller: 'LoginController',
                controllerAs: 'LoginCtrl'
            });



    });



}());
