/**
 * @class build.service.DataSource
 * @extends build.Module
 */
Build('build.service.DataSource', [ 'build::build.Module',
		'build::build.utility.ObservableArray' ], function($define, $super) {
	$define({
		$extends : 'build.Module',
		/**
		 * @constructor
		 */
		$constructor : function DataSource(service) {
			$super(this)();
			this.watchValue('service', service);
			this.watchValue('columns', build.utility.ObservableArray());
			this.watchValue('pageSize', 15);
			this.watchValue('sortedColumn', null);
			this.watchValue('sortedDirection', null);
			this.watchValue('page', 0);
			this.watchValue('rowCount', 0);
			this.watchValue('activeRows', build.utility.ObservableArray());
			this.watchValue('lockRefresh', false);
			this.run = function() {
			};
			this.clear = function() {
			};
		}
	});
});