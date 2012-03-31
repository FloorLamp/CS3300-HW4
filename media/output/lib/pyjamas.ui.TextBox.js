/* start module: pyjamas.ui.TextBox */
$pyjs.loaded_modules['pyjamas.ui.TextBox'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TextBox'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TextBox'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['TextBox'] = $pyjs.loaded_modules["pyjamas.ui.TextBox"];
	pyjamas['ui']['TextBox'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextBox';
	var __name__ = pyjamas['ui']['TextBox'].__name__ = __mod_name__;
	var TextBox = pyjamas['ui']['TextBox'];


	pyjamas['ui']['TextBox']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['TextBox']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['TextBox']['TextBoxBase'] = pyjslib['___import___']('TextBoxBase.TextBoxBase', 'pyjamas.ui', null, false);
	pyjamas['ui']['TextBox']['TextBox'] = (function(){
		var $cls_instance = $pyjs__class_instance('TextBox');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '63e61894efcd54f367ae01e5b5bf4030';
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}
			var element;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-TextBox'));
			}
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['TextBox']['DOM']['createInputText']();
			}
			$pyjs_kwargs_call(pyjamas['ui']['TextBox']['TextBoxBase'], '__init__', null, kwargs, [{}, self, element]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getMaxLength', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['TextBox']['DOM']['getIntAttribute'](self['getElement'](), String('maxLength'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getMaxLength'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getVisibleLength', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['TextBox']['DOM']['getIntAttribute'](self['getElement'](), String('size'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVisibleLength'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setMaxLength', function(length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				length = arguments[1];
			}

			pyjamas['ui']['TextBox']['DOM']['setIntAttribute'](self['getElement'](), String('maxLength'), length);
			return null;
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['setMaxLength'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setVisibleLength', function(length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				length = arguments[1];
			}

			pyjamas['ui']['TextBox']['DOM']['setIntAttribute'](self['getElement'](), String('size'), length);
			return null;
		}
	, 1, [null,null,['self'],['length']]);
		$cls_definition['setVisibleLength'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['TextBox']['TextBoxBase']));
	})();
	pyjamas['ui']['TextBox']['Factory']['registerClass'](String('pyjamas.ui.TextBox'), pyjamas['ui']['TextBox']['TextBox']);
	return this;
}; /* end pyjamas.ui.TextBox */


/* end module: pyjamas.ui.TextBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'TextBoxBase.TextBoxBase', 'TextBoxBase']
*/
