/* start module: pyjamas.ui.VerticalPanel */
$pyjs.loaded_modules['pyjamas.ui.VerticalPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.VerticalPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.VerticalPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['VerticalPanel'] = $pyjs.loaded_modules["pyjamas.ui.VerticalPanel"];
	pyjamas['ui']['VerticalPanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.VerticalPanel';
	var __name__ = pyjamas['ui']['VerticalPanel'].__name__ = __mod_name__;
	var VerticalPanel = pyjamas['ui']['VerticalPanel'];


	pyjamas['ui']['VerticalPanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['VerticalPanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['VerticalPanel']['CellPanel'] = pyjslib['___import___']('CellPanel.CellPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['VerticalPanel']['HasHorizontalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
	pyjamas['ui']['VerticalPanel']['HasVerticalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
	pyjamas['ui']['VerticalPanel']['VerticalPanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('VerticalPanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'aef597734df1bcf73a84d83c75a0a2b6';
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
			var $attr1,$attr2,$attr4,$attr3;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('Spacing'))))) {
				kwargs.__setitem__(String('Spacing'), 0);
			}
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('Padding'))))) {
				kwargs.__setitem__(String('Padding'), 0);
			}
			self.horzAlign = ((($attr1=pyjamas['ui']['VerticalPanel']['HasHorizontalAlignment']['ALIGN_LEFT']) !== null & ($attr2=pyjamas['ui']['VerticalPanel']['HasHorizontalAlignment']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'ALIGN_LEFT'):
						pyjamas['ui']['VerticalPanel']['HasHorizontalAlignment']['ALIGN_LEFT']);
			self.vertAlign = ((($attr3=pyjamas['ui']['VerticalPanel']['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr4=pyjamas['ui']['VerticalPanel']['HasVerticalAlignment']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'ALIGN_TOP'):
						pyjamas['ui']['VerticalPanel']['HasVerticalAlignment']['ALIGN_TOP']);
			$pyjs_kwargs_call(pyjamas['ui']['VerticalPanel']['CellPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			self['insert'](widget, self['getWidgetCount']());
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHorizontalAlignment', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr5,$attr6;
			return ((($attr5=self['horzAlign']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'horzAlign'):
						self['horzAlign']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getVerticalAlignment', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return ((($attr7=self['vertAlign']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'vertAlign'):
						self['vertAlign']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVerticalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidget', function(index, widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				widget = arguments[2];
			}
			var existing;
			existing = self['getWidget'](index);
			if (pyjslib['bool'](existing)) {
				self['remove'](existing);
			}
			self['insert'](widget, index);
			return null;
		}
	, 1, [null,null,['self'],['index'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert', function(widget, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			var $attr9,tr,td,$attr11,$attr10,$attr12;
			widget['removeFromParent']();
			tr = pyjamas['ui']['VerticalPanel']['DOM']['createTR']();
			td = pyjamas['ui']['VerticalPanel']['DOM']['createTD']();
			pyjamas['ui']['VerticalPanel']['DOM']['insertChild'](self['getBody'](), tr, beforeIndex);
			pyjamas['ui']['VerticalPanel']['DOM']['appendChild'](tr, td);
			pyjamas['ui']['VerticalPanel']['CellPanel']['insert'](self, widget, td, beforeIndex);
			self['setCellHorizontalAlignment'](widget, ((($attr9=self['horzAlign']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'horzAlign'):
						self['horzAlign']));
			self['setCellVerticalAlignment'](widget, ((($attr11=self['vertAlign']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'vertAlign'):
						self['vertAlign']));
			return null;
		}
	, 1, [null,null,['self'],['widget'],['beforeIndex']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var td,tr;
			if (pyjslib['bool'](pyjslib['isinstance'](widget, pyjslib['float_int']))) {
				widget = self['getWidget'](widget);
			}
			if (pyjslib['bool'](!pyjslib['op_eq'](widget['getParent'](), self))) {
				return false;
			}
			td = pyjamas['ui']['VerticalPanel']['DOM']['getParent'](widget['getElement']());
			tr = pyjamas['ui']['VerticalPanel']['DOM']['getParent'](td);
			pyjamas['ui']['VerticalPanel']['DOM']['removeChild'](self['getBody'](), tr);
			pyjamas['ui']['VerticalPanel']['CellPanel']['remove'](self, widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHorizontalAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			self.horzAlign = align;
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setVerticalAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			self.vertAlign = align;
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setVerticalAlignment'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['VerticalPanel']['CellPanel']));
	})();
	pyjamas['ui']['VerticalPanel']['Factory']['registerClass'](String('pyjamas.ui.VerticalPanel'), pyjamas['ui']['VerticalPanel']['VerticalPanel']);
	return this;
}; /* end pyjamas.ui.VerticalPanel */


/* end module: pyjamas.ui.VerticalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'CellPanel.CellPanel', 'CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', 'pyjamas.ui.HasVerticalAlignment']
*/
