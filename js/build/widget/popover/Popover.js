/**
 * @class build.widget.popover.Popover
 * @extends build.ui.Widget
 */
Build('build.widget.popover.Popover', [ 'build::build.ui.Widget' ], function(
		$define, $super) {
	$define({
		$extends : 'build.ui.Widget',
		/**
		 * @constructor
		 */
		$constructor : function Popover() {
			$super(this)();
			this.trigger = document.createElement('button');
			this.trigger.className = 'popover-trigger';
			this.popover = document.createElement('div');
			this.popover.className = 'popover';
			this.content = document.createElement('div');
			this.content.className = 'popover-content';
			this.popover.appendChild(this.content);
			this.trigger.appendChild(this.popover);
			this.content.innerHTML = 'test';
			this.element.appendChild(this.trigger);
		}
	});
});