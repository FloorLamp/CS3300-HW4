/* start module: pyjamas.ui.FocusWidget */
$pyjs.loaded_modules['pyjamas.ui.FocusWidget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.FocusWidget'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.FocusWidget'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['FocusWidget'] = $pyjs.loaded_modules["pyjamas.ui.FocusWidget"];
	pyjamas['ui']['FocusWidget'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FocusWidget';
	var __name__ = pyjamas['ui']['FocusWidget'].__name__ = __mod_name__;
	var FocusWidget = pyjamas['ui']['FocusWidget'];


	pyjamas['ui']['FocusWidget']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusWidget']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusWidget']['Widget'] = pyjslib['___import___']('Widget.Widget', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusWidget']['FocusMixin'] = pyjslib['___import___']('Focus.FocusMixin', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusWidget']['ClickHandler'] = pyjslib['___import___']('ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusWidget']['KeyboardHandler'] = pyjslib['___import___']('KeyboardListener.KeyboardHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusWidget']['FocusHandler'] = pyjslib['___import___']('FocusListener.FocusHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusWidget']['MouseHandler'] = pyjslib['___import___']('MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusWidget']['FocusWidget'] = (function(){
		var $cls_instance = $pyjs__class_instance('FocusWidget');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'aae3fce3668f68d445e6ce3184907b24';
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

			self['setElement'](element);
			$pyjs_kwargs_call(pyjamas['ui']['FocusWidget']['Widget'], '__init__', null, kwargs, [{}, self]);
			pyjamas['ui']['FocusWidget']['FocusHandler']['__init__'](self);
			pyjamas['ui']['FocusWidget']['KeyboardHandler']['__init__'](self);
			pyjamas['ui']['FocusWidget']['ClickHandler']['__init__'](self);
			pyjamas['ui']['FocusWidget']['MouseHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
		$cls_definition['__init__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['FocusWidget']['Widget'],pyjamas['ui']['FocusWidget']['FocusHandler'],pyjamas['ui']['FocusWidget']['KeyboardHandler'],pyjamas['ui']['FocusWidget']['MouseHandler'],pyjamas['ui']['FocusWidget']['ClickHandler'],pyjamas['ui']['FocusWidget']['FocusMixin']));
	})();
	return this;
}; /* end pyjamas.ui.FocusWidget */


/* end module: pyjamas.ui.FocusWidget */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Widget.Widget', 'Widget', 'Focus.FocusMixin', 'Focus', 'ClickListener.ClickHandler', 'ClickListener', 'KeyboardListener.KeyboardHandler', 'KeyboardListener', 'FocusListener.FocusHandler', 'FocusListener', 'MouseListener.MouseHandler', 'MouseListener']
*/
