/* start module: pyjamas.ui.AbsolutePanel */
$pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.AbsolutePanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['AbsolutePanel'] = $pyjs.loaded_modules["pyjamas.ui.AbsolutePanel"];
	pyjamas['ui']['AbsolutePanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.AbsolutePanel';
	var __name__ = pyjamas['ui']['AbsolutePanel'].__name__ = __mod_name__;
	var AbsolutePanel = pyjamas['ui']['AbsolutePanel'];


	pyjamas['ui']['AbsolutePanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['AbsolutePanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['AbsolutePanel']['ComplexPanel'] = pyjslib['___import___']('ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['AbsolutePanel']['AbsolutePanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('AbsolutePanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '9e102ada0f415425ca4807cc82ba8a48';
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
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['AbsolutePanel']['DOM']['createDiv']();
			}
			self['setElement'](element);
			pyjamas['ui']['AbsolutePanel']['DOM']['setStyleAttribute'](self['getElement'](), String('position'), String('relative'));
			pyjamas['ui']['AbsolutePanel']['DOM']['setStyleAttribute'](self['getElement'](), String('overflow'), String('hidden'));
			$pyjs_kwargs_call(pyjamas['ui']['AbsolutePanel']['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function(widget, left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				left = arguments[2];
				top = arguments[3];
			}
			if (typeof left == 'undefined') left=arguments.callee.__args__[4][1];
			if (typeof top == 'undefined') top=arguments.callee.__args__[5][1];

			pyjamas['ui']['AbsolutePanel']['ComplexPanel']['add'](self, widget, self['getElement']());
			if (pyjslib['bool']((left !== null))) {
				self['setWidgetPosition'](widget, left, top);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['left', null],['top', null]]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidgetPosition', function(widget, left, top) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				left = arguments[2];
				top = arguments[3];
			}
			var h,$and2,$and1;
			self['checkWidgetParent'](widget);
			h = widget['getElement']();
			if (pyjslib['bool']((pyjslib['bool']($and1=pyjslib['op_eq'](left, (typeof ($usub1=1)=='number'?
				-$usub1:
				pyjslib['op_usub']($usub1))))?pyjslib['op_eq'](top, (typeof ($usub2=1)=='number'?
				-$usub2:
				pyjslib['op_usub']($usub2))):$and1))) {
				pyjamas['ui']['AbsolutePanel']['DOM']['setStyleAttribute'](h, String('left'), String(''));
				pyjamas['ui']['AbsolutePanel']['DOM']['setStyleAttribute'](h, String('top'), String(''));
				pyjamas['ui']['AbsolutePanel']['DOM']['setStyleAttribute'](h, String('position'), String('static'));
			}
			else {
				pyjamas['ui']['AbsolutePanel']['DOM']['setStyleAttribute'](h, String('position'), String('absolute'));
				pyjamas['ui']['AbsolutePanel']['DOM']['setStyleAttribute'](h, String('left'), pyjslib['sprintf'](String('%dpx'), left));
				pyjamas['ui']['AbsolutePanel']['DOM']['setStyleAttribute'](h, String('top'), pyjslib['sprintf'](String('%dpx'), top));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['left'],['top']]);
		$cls_definition['setWidgetPosition'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidgetLeft', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['checkWidgetParent'](widget);
			return pyjamas['ui']['AbsolutePanel']['DOM']['getIntAttribute'](widget['getElement'](), String('offsetLeft'));
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetLeft'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidgetTop', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['checkWidgetParent'](widget);
			return pyjamas['ui']['AbsolutePanel']['DOM']['getIntAttribute'](widget['getElement'](), String('offsetTop'));
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetTop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'checkWidgetParent', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['op_eq'](widget['getParent'](), self))) {
				console['error'](String('Widget must be a child of this panel.'));
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['checkWidgetParent'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['AbsolutePanel']['ComplexPanel']));
	})();
	pyjamas['ui']['AbsolutePanel']['Factory']['registerClass'](String('pyjamas.ui.AbsolutePanel'), pyjamas['ui']['AbsolutePanel']['AbsolutePanel']);
	return this;
}; /* end pyjamas.ui.AbsolutePanel */


/* end module: pyjamas.ui.AbsolutePanel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'ComplexPanel.ComplexPanel', 'ComplexPanel']
*/
