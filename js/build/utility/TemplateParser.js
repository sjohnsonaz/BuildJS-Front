/**
 * @class build.utility.TemplateParser
 */
Build('build.utility.TemplateParser', [], function($define, $super) {
	$define({
		/**
		 * @constructor
		 */
		$constructor : function TemplateParser(regex) {
			this.regex = regex || new RegExp(/{{([^{}]+)}}/g);
			this.helpers = {};
			this.helpers['i'] = function(value, text, context) {
				return '<i class="fa fa-' + value + '"></i>';
			};
		},
		$prototype : {
			parse : function(text, context) {
				switch (typeof text) {
				case 'string':
					var self = this;
					text = text.replace(this.regex, function(match, value, all) {
						var escape = false;
						if (value[0] == '{' && value[value.length] == '}') {
							escape = true;
							value = value.substring(1, value.length - 2);
						}
						var data = value.split(':');
						if (data.length > 1) {
							var templateHelper = self.helpers[data[0]];
							value = Build.safe(templateHelper)(data[1], text, context);
						} else {
							value = context ? context[value] : value;
						}
						if (escape) {

						}
						return value;
					});
					break;
				case 'object':
				case 'function':
					text = text.toString();
					break;
				}
				return text;
			}
		},
		$singleton : true
	});
});