/**
 * @class build.widget.modal.ModalHeader
 */
Build('build.widget.modal.ModalHeader', [ 'build::build.ui.Container' ], function($define, $super) {
	$define({
		$extends : 'build.ui.Container',
		/**
		 * @constructor
		 */
		$constructor : function ModalHeader(title) {
			$super(this)();
			var self = this;
			this.classList.add('modal-header');
			var title = document.createElement('h1');
			var controls = document.createElement('div');
			title.classList.add('modal-title');
			controls.classList.add('modal-controls');
			this.element.appendChild(title);
			this.element.appendChild(controls);
			this.innerElement = controls;
			this.watchValue('title', title || '', function(value) {
				return title.innerHTML;
			}, function(value, hidden, cancel) {
				title.innerHTML = self.formatString(value, this);
				return title.innerHTML;
			});
		},
	});
});