/**
 * @class build.form.input.SubmitAjax
 * @extends build.form.input.Button
 */
Build('build.form.input.SubmitAjax', [ 'build::build.form.input.Button' ], function($define, $super) {
	$define({
		$extends : 'build.form.input.Button',
		/**
		 * @constructor
		 * @param text
		 * @param value
		 */
		/**
		 * @property type
		 */
		$constructor : function SubmitAjax(text, value) {
			$super(this)(text, value);
			this.element.type = 'submit';
			this.watchProperty('disabled', 'disabled', false);
			this.watchClass('error', 'button-error', false);
		},
		$prototype : {
			type : 'button'
		}
	});
});