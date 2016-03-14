(function(){

angular
    .module('MeanAuthApp')

    .controller('LoginController', ['$scope', '$http', function($scope, $http) {
        $scope.login = function(user){

            console.log(user);

            $http
                .post('/login', user)
                .success(function(response){
                    console.log(response);
                });

        }
    }]);


}())
