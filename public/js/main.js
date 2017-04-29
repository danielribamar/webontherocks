var app = angular.module('web', []);

app.controller('web_ctrl', function($scope) {
    $scope.website = "W3B 0N TH3 R0CK5";
});

app.controller('posts_ctrl', function($scope) {
    $scope.website = "W3B 0N TH3 R0CK5";
    $scope.posts = [{
            title: 'NodeJS Server',
            description: 'Basic implementation of nodejs express',
            gistid: '6123d7161631937d169d9d15f6187e78'
        },
        {
            title: 'Umbraco',
            description: 'Custom Create Content View',
            gistid: '85611cc6a60bd02014f9a456b35fcc26'
        }
    ]
});