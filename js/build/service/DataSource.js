/**
 * @class build.service.DataSource
 * @extends build.Module
 */
Build('build.service.DataSource', [ 'build::build.Module' ], function($define,
		$super) {
	$define({
		$extends : 'build.Module',
		/**
		 * @constructor
		 */
		$constructor : function DataSource(service) {
			$super(this)();
			this.service = service;
			this.columns;
			this.pageSize;
			this.sortedColumn;
			this.sortedDirection;
			this.page;
			this.rowCount;
			this.activeRows;
			this.lockRefresh;
			this.run;
			this.clear;
		}
	});
});