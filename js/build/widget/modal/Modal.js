/**
 * @class build.widget.modal.Modal
 * @extends build.ui.Container
 */
Build('build.widget.modal.Modal', [ 'build::build.ui.Container', 'build::build.utility.Animation' ], function($define, $super) {
	$define({
		$extends : 'build.ui.Container',
		/**
		 * @constructor
		 */
		/**
		 * @property mask
		 * @property content
		 */
		$constructor : function Modal() {
			$super(this)();
			var self = this;
			this.watchValue('clickToClose', true);
			this.mask = document.createElement('div');
			this.mask.className = 'modal-mask';
			this.scroller = document.createElement('div');
			this.scroller.className = 'modal-scroll';
			this.content = document.createElement('div');
			this.content.className = 'modal-content';
			this.element.style.display = 'none';
			this.watchClass('open', 'modal-open', false, undefined, function(value, hidden, cancel) {
				if (value) {
					self.scroller.scrollTop = 0;
					self.element.style.display = 'block';
					build.utility.Animation.animate(self.mask, {
						opacity : 'auto'
					}, 300, function() {
					});
					build.utility.Animation.animate(self.content, {
						top : 'auto'
					}, 300, function() {
					});
				} else {
					build.utility.Animation.animate(self.mask, {
						opacity : 0
					}, 300, function() {
						self.element.style.display = 'none';
					});
					build.utility.Animation.animate(self.content, {
						top : '-100%'
					}, 300, function() {
					});
				}
				return value;
			});

			this.innerElement = this.content;
			this.scroller.appendChild(this.content);
			this.element.appendChild(this.mask);
			this.element.appendChild(this.scroller);

			this.content.addEventListener('click', function(event) {
				event.stopPropagation();
			});

			this.scroller.addEventListener('click', function(event) {
				if (self.clickToClose) {
					self.open = false;
				}
			});
		},
		$prototype : {}
	});
});