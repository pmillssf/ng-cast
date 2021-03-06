angular.module('video-player')
.directive('videoListEntry', function() {
  return {
    scope: {
      video: '<'
    },
    template: 
    '<li class="video-list-entry media">\
      <div class="media-left">\
        <img class="media-object" ng-src="{{video.snippet.thumbnails.default.url}}" />\
      </div>\
      <div class="media-body">\
        <div class="video-list-entry-title">{{video.snippet.title}}</div>\
        <div class="video-list-entry-detail">{{video.snippet.description}}</div>\
      </div>\
    </li>'
  };
});
