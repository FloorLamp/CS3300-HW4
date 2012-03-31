/* start module: pyjamas.ui.ButtonBase */
$pyjs.loaded_modules['pyjamas.ui.ButtonBase'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ButtonBase'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ButtonBase'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['ButtonBase'] = $pyjs.loaded_modules["pyjamas.ui.ButtonBase"];
	pyjamas['ui']['ButtonBase'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ButtonBase';
	var __name__ = pyjamas['ui']['ButtonBase'].__name__ = __mod_name__;
	var ButtonBase = pyjamas['ui']['ButtonBase'];


	pyjamas['ui']['ButtonBase']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['ButtonBase']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['ButtonBase']['FocusWidget'] = pyjslib['___import___']('FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	pyjamas['ui']['ButtonBase']['InnerText'] = pyjslib['___import___']('pyjamas.ui.InnerText', 'pyjamas.ui', null, false);
	pyjamas['ui']['ButtonBase']['InnerHTML'] = pyjslib['___import___']('pyjamas.ui.InnerHTML', 'pyjamas.ui', null, false);
	pyjamas['ui']['ButtonBase']['ButtonBase'] = (function(){
		var $cls_instance = $pyjs__class_instance('ButtonBase');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'bd59a4f77ba37b97afcc8d9c9601e1ec';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				element = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs_kwargs_call(pyjamas['ui']['ButtonBase']['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['__init__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['ButtonBase']['FocusWidget'],pyjamas['ui']['ButtonBase']['InnerHTML'],pyjamas['ui']['ButtonBase']['InnerText']));
	})();
	pyjamas['ui']['ButtonBase']['Factory']['registerClass'](String('pyjamas.ui.ButtonBase'), pyjamas['ui']['ButtonBase']['ButtonBase']);
	return this;
}; /* end pyjamas.ui.ButtonBase */


/* end module: pyjamas.ui.ButtonBase */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'FocusWidget.FocusWidget', 'FocusWidget', 'pyjamas.ui.InnerText', 'pyjamas.ui', 'pyjamas.ui.InnerHTML']
*/
