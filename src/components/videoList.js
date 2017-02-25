angular.module('video-player')
.controller('videoController', ['$scope', '$window', function($scope, $window) {
  // console.log($scope);
  $scope.exampleVideoData = $window.exampleVideoData;
  console.log($window.exampleVideoData);
}])
.directive('videoList', function($window) {
  return {
    scope: {
      exampleVideoData: '<'
    },
    controller: 'videoController',
    // TODO
    template: '<ul> \
                <video-list-entry class="videoListEntry" ng-repeat="video in exampleVideoData" \
                video="video"\
                "> \
                </video-list-entry\> \
              </ul>'
  };
});
