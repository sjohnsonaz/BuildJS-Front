/**
 * @class build.widget.menu.MenuWidget
 * @extends build.ui.Widget
 */
Build('build.widget.menu.MenuWidget', [ 'build::build.ui.Widget' ], function(define, $super) {
	define({
		$extends : 'build.ui.Widget',
		/**
		 * @constructor
		 */
		$constructor : function MenuWidget(text, link, action) {
			$super(this)();
			var self = this;
			var link = document.createElement('a');
			this.watchValue('link', link || '#', function(value) {
				return link.href;
			}, function(value, hidden, cancel) {
				link.href = value;
				return value;
			});
			this.watchValue('rawText', undefined, function(value) {
				return link.innerHTML;
			}, function(value, hidden, cancel) {
				link.innerHTML = typeof value !== 'undefined' ? value : '';
				return link.innerHTML;
			});
			this.watchValue('text', text || '', function(value) {
				return link.innerHTML;
			}, function(value, hidden, cancel) {
				link.innerHTML = self.formatString(value, this);
				return link.innerHTML;
			});
			this.watchValue('action', action);
			this.element.appendChild(link);
		},
		$prototype : {
			type : 'li'
		}
	});
});