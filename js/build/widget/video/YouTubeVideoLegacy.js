/**
 * @class build.widget.video.YouTubeVideo
 * @extends build::build.ui.Widget
 */
Build('build.widget.video.YouTubeVideo', [ 'build::build.ui.Widget', 'http://ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js' ], function($define, $super) {
	$define({
		$extends : 'build.ui.Widget',
		/**
		 * @constructor
		 */
		$constructor : function YouTubeVideo(videoId) {
			$super(this)();
			this.watchValue('videoId');
		},
		$prototype : {
			/**
			 * 
			 */
			init : function(videoId) {
				$super().init(this)();
				var self = this;
				this.subscribe('videoId', function(value) {
					self.load();
				});
				this.videoId = videoId;
			},
			/**
			 * 
			 */
			load : function() {
				if (this.videoId) {
					var preloadElement = document.createElement('div');
					var preloadId = this.id + '-video';
					preloadElement.id = preloadId;
					this.getPreloadContainer().appendChild(preloadElement);
					window.setTimeout(function() {
						var self = this;
						build.widget.video.YouTubeVideo.onYouTubePlayerReady[this.id] = function() {
							console.log('Video is ready');
						};
						var player = swfobject.embedSWF('http://www.youtube.com/v/' + this.videoId + '?enablejsapi=1&playerapiid=ytplayer&version=3', preloadId, "425", "356", "8", null, null, {
							allowScriptAccess : "always"
						}, {
							id : preloadId
						}, function(playerHandle) {
							self.clearChildren();
							self.element.appendChild(document.getElementById(preloadId));
						});
					}, 100, this);
				}
			}
		},
		$static : {
			onYouTubePlayerReady : {}
		}
	});
});

function onYouTubePlayerReady(playerId) {
	var callback = build.widget.video.YouTubeVideo.onYouTubePlayerReady[playerId];
	if (callback) {
		callback();
	}
}