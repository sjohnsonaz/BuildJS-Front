/**
 * @class build.utility.Navigation
 * @extends build.Module
 * 
 * Monitor navigation locks 
 */
Build('build.utility.Navigation', [ 'build::build.Module' ], function($define, $super) {
	$define({
		$extends : 'build.Module',
		/**
		 * @constructor
		 */
		/**
		 * @property message
		 * @property locks
		 * @property lock
		 */
		$constructor : function Navigation() {
			var self = this;
			var lockCallback = function(event) {
				event.returnValue = self.message;
			};
			this.message = 'Are you sure you want to navigate away from this page?';
			this.locks = [];
			/**
			 * @method lock
			 * @param locker
			 */
			this.lock = function(locker) {
				if (this.locks.indexOf(locker) == -1) {
					this.locks.push(locker);
					window.addEventListener('beforeunload', lockCallback, false);
					this.publish('locked');
				}
			};
			/**
			 * @method unlock
			 * @param locker
			 */
			this.unlock = function(locker) {
				var index = this.locks.indexOf(locker);
				if (index != -1) {
					this.locks.splice(index, 1);
					if (!this.locks.length) {
						window.removeEventListener('beforeunload', lockCallback);
					}
					this.publish('locked');
				}
			};
			/**
			 * @method clear
			 */
			this.clear = function() {
				this.locks.length = 0;
			};
			/**
			 * @property locked
			 */
			Object.defineProperty(this, 'locked', {
				get : function() {
					return !!this.locks.length;
				}
			});
			this.run = function() {
				var result = window.confirm(this.message);
				if (result) {
					this.clear();
				}
				return result;
			};
		},
		$singleton : true
	});
});