angular.module('video-player', [])
.controller('appController', function() {
  this.videoData = window.exampleVideoData;
})
.directive('app', function() {
  return {
    controller: 'appController',
    controllerAs: 'ctrl',
    bindToController: true
  };
});
