var app = angular.module('web', []);

app.controller('web_ctrl', function($scope) {
    $scope.website = "W3B 0N TH3 R0CK5";
    $scope.year = new Date().getFullYear();
});

app.controller('posts_ctrl', function($scope) {
    $scope.website = "W3B 0N TH3 R0CK5";
    $scope.posts = [{
            title: 'NodeJS Server',
            description: 'Basic implementation of nodejs express',
            gistid: '6123d7161631937d169d9d15f6187e78'
        },
        {
            title: 'AngularJS',
            description: 'Basic Controllers and Directives',
            gistid: 'fa6f08bc71966ad98cf4565b44204d82'
        },
        {
            title: 'Text',
            description: 'Text Post',
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            gistid: null
        },
        {
            title: 'Umbraco',
            description: 'Custom Create Content View',
            gistid: '85611cc6a60bd02014f9a456b35fcc26'
        }
    ]
});