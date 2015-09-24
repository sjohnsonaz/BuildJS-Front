/**
 * @class build.utility.Badge
 */
Build('build.utility.Badge', [ 'build::build.ui.Widget' ], function($define, $super) {
	$define({
		/**
		 * @constructor
		 */
		$constructor : function Badge() {
			$super(this)();
		},
		$static : {
			create : function(widget, text, open, position, alignment, status) {
				if (widget instanceof build.ui.Widget) {
					widget.classList.add('badge');
					widget.watchAttribute('badgeText', 'aria-label', text || '', undefined, function(value, hidden, cancel) {
						return value;
					});
					widget.watchValue('badgePosition', position || 'top', undefined, function(value, hidden, cancel) {
						var positionClass;
						if (hidden) {
							positionClass = build.utility.Badge.position[hidden];
							if (positionClass) {
								widget.classList.remove(positionClass)
							}
						}
						if (!build.utility.Badge.position[value]) {
							value = 'top';
						}
						positionClass = build.utility.Badge.position[value];
						widget.classList.add(positionClass);
						return value;
					});
					widget.watchValue('badgeAlign', alignment || 'center', undefined, function(value, hidden, cancel) {
						var alignmentClass;
						if (hidden) {
							alignmentClass = build.utility.Badge.alignment[hidden];
							if (alignmentClass) {
								widget.classList.remove(alignmentClass)
							}
						}
						if (!build.utility.Badge.alignment[value]) {
							value = 'center';
						}
						alignmentClass = build.utility.Badge.alignment[value];
						widget.classList.add(alignmentClass);
						return value;
					});
					widget.watchValue('badgeStatus', status || 'normal', undefined, function(value, hidden, cancel) {
						var statusClass;
						if (hidden) {
							statusClass = build.utility.Badge.status[hidden];
							if (statusClass) {
								widget.classList.remove(statusClass)
							}
						}
						if (!build.utility.Badge.status[value]) {
							value = 'normal';
						}
						statusClass = build.utility.Badge.status[value];
						widget.classList.add(statusClass);
						return value;
					});
				}
				return widget;
			},
			position : {
				top : 'badge-top',
				bottom : 'badge-bottom',
				left : 'badge-left',
				right : 'badge-right'
			},
			alignment : {
				left : 'badge-align-left',
				center : 'badge-align-center',
				right : 'badge-align-right',
				top : 'badge-align-top',
				bottom : 'badge-align-bottom',
			},
			status : {
				normal : 'badge-normal',
				info : 'badge-info',
				success : 'badge-success',
				warning : 'badge-warning',
				error : 'badge-error'
			}
		}
	});
});