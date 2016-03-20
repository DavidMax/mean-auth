(function(){

angular
    .module('MeanAuthApp')

    .controller('SignupController', ['$http', function($http) {
        this.signup = function(user){
            console.log(user);

            if(user.password == user.password2) {
                $http
                    .post('/signup', user)
                    .success(function(response){
                        console.log(response);
                    });
            }

        };
    }]);

}());
