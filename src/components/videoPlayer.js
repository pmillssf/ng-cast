angular.module('video-player')
.controller('videoPlayerController', function() {
})

.directive('videoPlayer', function() {
  return {
    scope: {
      videos: '<'
    },
    controller: 'videoPlayerController',
    controllerAs: 'ctrl',
    bindToController: true,
    template:
      '<div class="video-player"> \
        <div class="embed-responsive embed-responsive-16by9"> \
          <iframe class="embed-responsive-item" ng-src="https://www.youtube.com/embed/" + "{{ctrl.videos[0].id.videoId}}" + "?autoplay=0" allowFullScreen></iframe> \
        </div> \
        <div class="video-player-details"> \
          <h3>{{ctrl.videos[0].snippet.title}}</h3> \
          <div>{{ctrl.videos[0].snippet.description}}</div> \
        </div> \
      </div>'
  };
});
