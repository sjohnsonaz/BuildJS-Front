/**
 * @class build.widget.code.Code
 * @extends build.ui.Content
 */
Build('build.widget.code.Code', [ 'build::build.ui.Content' ], function($define, $super) {
	$define({
		$extends : 'build.ui.Widget',
		/**
		 * @constructor
		 */
		$constructor : function Code(text) {
			$super(this)();
			var self = this;
			this.watchProperty('text', 'innerHTML', text || '', null, function(value, current, cancel) {
				value = self.formatString(value, self);
				return self.formatCode(value);
			});
			this.watchProperty('rawText', 'innerHTML');
		},
		$prototype : {
			type : 'pre',
			formatCode : function(value) {
				var element = this.element;
				var text = value || '';
				text = text.trim();
				var lines = text.split("\n");
				var output = '';
				for (var index = 0, length = lines.length; index < length; index++) {
					output += ('<code>' + lines[index] + "</code>\n");
				}
				return output;
			}
		}
	});
});