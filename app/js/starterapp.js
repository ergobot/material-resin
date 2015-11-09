var app = angular
              .module('starterApp', ['ngRoute','ngMaterial', 'ngFileUpload', 'users'])
              .config(function($mdThemingProvider, $mdIconProvider,$routeProvider, $locationProvider){

                  $mdIconProvider
                      .defaultIconSet("./assets/svg/avatars.svg", 128)
                      .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                      .icon("share"      , "./assets/svg/share.svg"       , 24)
                      .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                      .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                      .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                      .icon("phone"      , "./assets/svg/phone.svg"       , 512)
                      .icon("icon"      , "./assets/svg/icon.svg"       , 512);

                  $routeProvider.when('/printer',
                  {
                    templateUrl:    'views/printer/printer.html',
                    controller:     'PrinterCtrl'
                  })
                  .when('/jobs',
                  {
                    templateUrl:    'views/jobs/jobs.html',
                    controller:     'JobsCtrl'
                  })
                  .when('/controls',
                  {
                    templateUrl:    'views/controls/controls.html',
                    controller:     'ControlsCtrl'
                  })
                  .when('/settings',
                  {
                    templateUrl:    'views/settings/settings.html',
                    controller:     'SettingsCtrl'
                  });

              });


app.controller('NavCtrl', 
['$scope', '$location', function ($scope, $location) {  
  var self = this;
  console.log('hello');
  $scope.navClass = function (page) {
    console.log('got route');
    var currentRoute = $location.path().substring(1) || 'home';
    
    return page === currentRoute ? 'active' : '';
  };


    // $scope.close = function () {
    //   console.log('i want to close the sidenav');
    //   $mdSidenav('left').close()
    //     .then(function () {
    //       $log.debug("close LEFT is done");
    //     });
    // };

  // $scope.go = function ( path ) {
  // $location.path( path );
//;

   


}]);

app.controller('PrinterCtrl', function($scope, $mdSidenav, $compile) {
  console.log('inside printer controller');
  $mdSidenav('left').close();

  $scope.imagePath = 'views/printer/testImage.PNG';
  $scope.altImagePath = 'views/printer/blank.png';

  
});

app.controller('JobsCtrl', function($scope, $mdSidenav, $compile, Upload) {
  console.log('inside jobs controller');
  $mdSidenav('left').close()

  // upload on file select or drop
    $scope.upload = function (file) {
        Upload.upload({
            url: 'upload/url',
            data: {file: file, 'username': $scope.username}
        }).then(function (resp) {
            console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
            console.log('Error status: ' + resp.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    };

});
app.controller('ControlsCtrl', function($scope, $mdSidenav, $compile) {
  console.log('inside controls controller');
  $mdSidenav('left').close()
});
app.controller('SettingsCtrl', function($scope, $mdSidenav, $compile) {
  console.log('inside settings controller');
  $mdSidenav('left').close()
});