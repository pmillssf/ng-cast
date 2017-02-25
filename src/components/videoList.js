angular.module('video-player')
.controller('videoController', function() {
  // $scope.exampleVideoData = $window.exampleVideoData;
  // console.log(this);
})
.directive('videoList', function() {
  return {
    scope: {
      videos: '<'
    },
    controller: 'videoController',
    controllerAs: 'ctrl',
    bindToController: true,
    // TODO
    template: '<ul> \
                <video-list-entry class="videoListEntry" ng-repeat="video in ctrl.videos" \
                video="video"\
                "> \
                </video-list-entry\> \
              </ul>'
  };
});
