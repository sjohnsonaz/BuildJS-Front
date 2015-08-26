/**
 * @class build.widget.popover.Popover
 * @extends build.ui.Widget
 */
Build('build.widget.popover.Popover', [ 'build::build.ui.Widget' ], function($define, $super) {
	$define({
		$extends : 'build.ui.Container',
		/**
		 * @constructor
		 */
		$constructor : function Popover(open, position, alignment) {
			$super(this)();
			var self = this;
			this.content = document.createElement('div');
			this.content.className = 'popover-content';
			this.innerElement = this.content;
			this.element.appendChild(this.innerElement);
			this.element.className = 'popover';
			this.watchClass('open', 'popover-open', !!open);
			this.watchValue('popoverPosition', position || 'top', undefined, function(value, hidden, cancel) {
				var positionClass;
				if (hidden) {
					positionClass = build.widget.popover.Popover.position[hidden];
					if (positionClass) {
						self.element.classList.remove(positionClass)
					}
				}
				if (!build.widget.popover.Popover.position[value]) {
					value = 'top';
				}
				positionClass = build.widget.popover.Popover.position[value];
				self.element.classList.add(positionClass);
				return value;
			});
			this.watchValue('popoverAlign', alignment || 'center', undefined, function(value, hidden, cancel) {
				var alignmentClass;
				if (hidden) {
					alignmentClass = build.widget.popover.Popover.alignment[hidden];
					if (alignmentClass) {
						self.element.classList.remove(alignmentClass)
					}
				}
				if (!build.widget.popover.Popover.alignment[value]) {
					value = 'center';
				}
				alignmentClass = build.widget.popover.Popover.alignment[value];
				self.element.classList.add(alignmentClass);
				return value;
			});
			/*
			this.subscribe('open', function(value) {
				if (value) {
					// Adjust document height.
					window.setTimeout(function() {
						var height = document.body.scrollTop + self.content.getBoundingClientRect().bottom;
						if (document.body.getBoundingClientRect().height < height) {
							document.body.style.minHeight = height + 'px';
						}
					}, 10);
				} else {
					// Remove document height adjustment.
					document.body.style.minHeight = null;
				}
			});
			*/
		},
		$static : {
			position : {
				top : 'popover-top',
				bottom : 'popover-bottom',
				left : 'popover-left',
				right : 'popover-right'
			},
			alignment : {
				left : 'popover-align-left',
				center : 'popover-align-center',
				right : 'popover-align-right',
				top : 'popover-align-top',
				bottom : 'popover-align-bottom',
			}
		}
	});
});