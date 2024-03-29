/**
 * @class build.widget.menu.MenuContainer
 * @extends build.ui.Container
 */
Build('build.widget.menu.MenuContainer', [ 'build::build.ui.Container' ], function(define, $super) {
	define({
		$extends : 'build.ui.Container',
		/**
		 * @constructor
		 */
		$constructor : function MenuContainer(text, link, action) {
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
			this.innerElement = document.createElement('div');
			this.element.appendChild(link);
			this.element.appendChild(this.innerElement);
		},
		$prototype : {
			type : 'li'
		}
	});
});