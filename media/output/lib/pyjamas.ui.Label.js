/* start module: pyjamas.ui.Label */
$pyjs.loaded_modules['pyjamas.ui.Label'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Label'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Label'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['Label'] = $pyjs.loaded_modules["pyjamas.ui.Label"];
	pyjamas['ui']['Label'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Label';
	var __name__ = pyjamas['ui']['Label'].__name__ = __mod_name__;
	var Label = pyjamas['ui']['Label'];


	pyjamas['ui']['Label']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['Label']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['Label']['InnerText'] = pyjslib['___import___']('pyjamas.ui.InnerText', 'pyjamas.ui', null, false);
	pyjamas['ui']['Label']['Widget'] = pyjslib['___import___']('Widget.Widget', 'pyjamas.ui', null, false);
	pyjamas['ui']['Label']['MouseHandler'] = pyjslib['___import___']('MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['Label']['ClickHandler'] = pyjslib['___import___']('ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['Label']['Label'] = (function(){
		var $cls_instance = $pyjs__class_instance('Label');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'ab827e39afb79b80c68bddffe6b58055';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(text, wordWrap) {
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
				text = arguments[1];
				wordWrap = arguments[2];
				var kwargs = arguments.length >= 4 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof wordWrap != 'undefined') {
					if (wordWrap !== null && typeof wordWrap['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = wordWrap;
						wordWrap = arguments[3];
					}
				} else 				if (typeof text != 'undefined') {
					if (text !== null && typeof text['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = text;
						text = arguments[3];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[3];
					}
				} else {
				}
			}
			if (typeof text == 'undefined') text=arguments.callee.__args__[3][1];
			if (typeof wordWrap == 'undefined') wordWrap=arguments.callee.__args__[4][1];
			var element;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-Label'));
			}
			if (pyjslib['bool'](text)) {
				kwargs.__setitem__(String('Text'), text);
			}
			kwargs.__setitem__(String('WordWrap'), wordWrap);
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['Label']['DOM']['createDiv']();
			}
			self['setElement'](element);
			self.horzAlign = String('');
			$pyjs_kwargs_call(pyjamas['ui']['Label']['Widget'], '__init__', null, kwargs, [{}, self]);
			pyjamas['ui']['Label']['MouseHandler']['__init__'](self);
			pyjamas['ui']['Label']['ClickHandler']['__init__'](self);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['text', null],['wordWrap', true]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHorizontalAlignment', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return ((($attr1=self['horzAlign']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'horzAlign'):
						self['horzAlign']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWordWrap', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return !pyjslib['bool'](pyjslib['op_eq'](pyjamas['ui']['Label']['DOM']['getStyleAttribute'](self['getElement'](), String('whiteSpace')), String('nowrap')));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWordWrap'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHorizontalAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			self.horzAlign = align;
			pyjamas['ui']['Label']['DOM']['setStyleAttribute'](self['getElement'](), String('textAlign'), align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWordWrap', function(wrap) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				wrap = arguments[1];
			}
			var style;
			if (pyjslib['bool'](wrap)) {
				style = String('normal');
			}
			else {
				style = String('nowrap');
			}
			pyjamas['ui']['Label']['DOM']['setStyleAttribute'](self['getElement'](), String('whiteSpace'), style);
			return null;
		}
	, 1, [null,null,['self'],['wrap']]);
		$cls_definition['setWordWrap'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['Label']['Widget'],pyjamas['ui']['Label']['MouseHandler'],pyjamas['ui']['Label']['ClickHandler'],pyjamas['ui']['Label']['InnerText']));
	})();
	pyjamas['ui']['Label']['Factory']['registerClass'](String('pyjamas.ui.Label'), pyjamas['ui']['Label']['Label']);
	return this;
}; /* end pyjamas.ui.Label */


/* end module: pyjamas.ui.Label */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.InnerText', 'pyjamas.ui', 'Widget.Widget', 'Widget', 'MouseListener.MouseHandler', 'MouseListener', 'ClickListener.ClickHandler', 'ClickListener']
*/
