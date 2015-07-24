/**
 * @class build.service.DataSource
 * @extends build.Module
 */
Build('build.service.DataSource', [ 'build::build.Module', 'build::build.utility.ObservableArray' ], function($define, $super) {
	$define({
		$extends : 'build.Module',
		/**
		 * @constructor
		 */
		$constructor : function DataSource(service) {
			$super(this)();
			var self = this;
			this.watchValue('service', service);
			this.watchValue('columns', build.utility.ObservableArray());
			this.watchValue('pageSize', 15);
			this.watchValue('sortedColumn', null);
			this.watchValue('sortedDirection', null);
			this.watchValue('page', 0);
			this.watchValue('rowCount', 0);
			this.watchValue('activeRows', build.utility.ObservableArray());
			this.watchValue('lockRefresh', false);
			var runCount = 0;
			this.run = function() {
				runCount++;
				var runID = runCount;
				self.lockRefresh = false;
				self.service(self.page, self.pageSize, self.sortedColumn, self.sortedDirection, function(data) {
					if (runID == runCount) {
						self.activeRows = data.Results;
						self.rowCount = data.ResultCount;
					}
				}, function() {
					if (runID == runCount) {
						self.activeRows.removeAll();
						self.rowCount = 0;
						console.log('refreshData error');
					}
				});
			};
			this.clear = function() {
				var lockRefresh = this.lockRefresh;
				this.page = 0;
				this.rowCount = 0;
				this.activeRows.removeAll();
				this.lockRefresh = lockRefresh;
			};
			this.bind([ {
				handler : 'oneWay',
				sources : [ {
					source : this,
					property : 'pageSize'
				}, {
					source : this,
					property : 'page'
				}, {
					source : this,
					property : 'sortedColumn'
				}, {
					source : this,
					property : 'sortedDirection'
				} ],
				output : function(pageSize, page, sortedColumn, sortedDirection) {
					if (!self.lockRefresh) {
						self.run();
					}
				}
			} ]);
		}
	});
});