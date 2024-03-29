/**
 * @class build.widget.grid.Grid
 * @extends build.ui.Widget 
 */
Build('build.widget.grid.Grid', [ 'build::build.ui.element.Table', 'build::build.widget.grid.Pager' ], function($define, $super) {
	$define({
		$extends : 'build.ui.Container',
		/**
		 * @constructor
		 */
		$constructor : function Grid() {
			$super(this)();
			this.table = build.ui.element.Table.create();
			this.pager = build.widget.grid.Pager.create();
			this.element.appendChild(this.table.element);
			this.element.appendChild(this.pager.element);
		},
		$prototype : {
			addRow : function(row) {
				this.table.children.push(row);
			},
			removeAll : function() {
				this.table.children.removeAll();
			},
			addHeader : function() {
				this.table.headers.push.apply(this, arguments);
			}
		}
	});
});