angular.module('video-player')
.controller('videoPlayerController', [ '$sce', function($sce) {
  console.log($sce);

  // this.videoIdNumber = video.id.videoId;
  // console.log(this.videoIdNumber);
}])

.directive('videoPlayer', function($sce) {
  return {
    scope: {
      video: '<'
    },
    controller: 'videoPlayerController',
    controllerAs: 'ctrl',
    bindToController: true,
    controller: function() {
      this.url = function(videoId) {
        return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId);

        // $sce.trustAsResourceUrl('https://www.youtube.com/embed/{{ctrl.video.id.videoId}}');
      };
    },
    templateUrl: 'src/templates/videoPlayer.html'
  };
});
    // template:
    //   '<div class="video-player"> \
    //     <div class="embed-responsive embed-responsive-16by9"> \
    //       <iframe class="embed-responsive-item" ng-src="https://www.youtube.com/embed/" + "{{ctrl.videos[0].id.videoId}}" + "?autoplay=0" allowFullScreen></iframe> \
    //     </div> \
    //     <div class="video-player-details"> \
    //       <h3>{{ctrl.videos[0].snippet.title}}</h3> \
    //       <div>{{ctrl.videos[0].snippet.description}}</div> \
    //     </div> \
    //   </div>'

// angular.module('mySceApp', ['ngSanitize'])
// .controller('AppController', ['$http', '$templateCache', '$sce',
//   function AppController($http, $templateCache, $sce) {
//     var self = this;
//     $http.get('test_data.json', {cache: $templateCache}).then(function(response) {
//       self.userComments = response.data;
//     });
//     self.explicitlyTrustedHtml = $sce.trustAsHtml(
//         '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
//         'sanitization.&quot;">Hover over this text.</span>');
//   }]);