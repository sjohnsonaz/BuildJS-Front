/**
 * @class build.widget.popover.Popover
 * @extends build.ui.Widget
 */
Build('build.widget.popover.Popover', [ 'build::build.ui.Widget' ], function(
		$define, $super) {
	$define({
		$extends : 'build.ui.Container',
		/**
		 * @constructor
		 */
		$constructor : function Popover() {
			$super(this)();
			this.content = document.createElement('div');
			this.content.className = 'popover-content';
			this.innerElement = this.content;
			this.element.appendChild(this.innerElement);
			this.element.className = 'popover';
			this.element.classList.add('popover-right');
		}
	});
});