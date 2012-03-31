/* start module: pyjamas.ui.Button */
$pyjs.loaded_modules['pyjamas.ui.Button'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Button'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Button'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['Button'] = $pyjs.loaded_modules["pyjamas.ui.Button"];
	pyjamas['ui']['Button'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Button';
	var __name__ = pyjamas['ui']['Button'].__name__ = __mod_name__;
	var Button = pyjamas['ui']['Button'];


	pyjamas['ui']['Button']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['Button']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['Button']['ButtonBase'] = pyjslib['___import___']('ButtonBase.ButtonBase', 'pyjamas.ui', null, false);
	pyjamas['ui']['Button']['Button'] = (function(){
		var $cls_instance = $pyjs__class_instance('Button');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '3e0c105bb7a4ea2d80161eb01f1b3239';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(html, listener) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				html = arguments[1];
				listener = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof listener != 'undefined') {
					if (listener !== null && typeof listener['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = listener;
						listener = arguments[3];
					}
				} else 				if (typeof html != 'undefined') {
					if (html !== null && typeof html['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = html;
						html = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof html == 'undefined') html=arguments.callee.__args__[3][1];
			if (typeof listener == 'undefined') listener=arguments.callee.__args__[4][1];
			var element;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-Button'));
			}
			if (pyjslib['bool'](html)) {
				kwargs.__setitem__(String('HTML'), html);
			}
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['Button']['DOM']['createButton']();
			}
			$pyjs_kwargs_call(pyjamas['ui']['Button']['ButtonBase'], '__init__', null, kwargs, [{}, self, element]);
			self['adjustType'](self['getElement']());
			if (pyjslib['bool'](listener)) {
				self['addClickListener'](listener);
			}
			return null;
		}
	, 1, [null,['kwargs'],['self'],['html', null],['listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'adjustType', function(button) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				button = arguments[1];
			}
			var err,$attr1,$attr2,$pyjs_try_err;
			if (pyjslib['bool'](pyjslib['op_eq'](((($attr1=button['type']) !== null & ($attr2=button).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'type'):
						button['type']), String('submit')))) {
				try {
					pyjamas['ui']['Button']['DOM']['setAttribute'](button, String('type'), String('button'));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.ui.Button, try_lineno: 44};
					if (true) {
						$pyjs.__last_exception__.except_lineno = 47;
						err = $pyjs_try_err;
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['button']]);
		$cls_definition['adjustType'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'click', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			self['getElement']()['click']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['click'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['Button']['ButtonBase']));
	})();
	pyjamas['ui']['Button']['Factory']['registerClass'](String('pyjamas.ui.Button'), pyjamas['ui']['Button']['Button']);
	return this;
}; /* end pyjamas.ui.Button */


/* end module: pyjamas.ui.Button */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'ButtonBase.ButtonBase', 'ButtonBase']
*/
