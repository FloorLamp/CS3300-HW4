/* start module: pyjamas.ui.CellPanel */
$pyjs.loaded_modules['pyjamas.ui.CellPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.CellPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.CellPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['CellPanel'] = $pyjs.loaded_modules["pyjamas.ui.CellPanel"];
	pyjamas['ui']['CellPanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CellPanel';
	var __name__ = pyjamas['ui']['CellPanel'].__name__ = __mod_name__;
	var CellPanel = pyjamas['ui']['CellPanel'];


	pyjamas['ui']['CellPanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['CellPanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['CellPanel']['ComplexPanel'] = pyjslib['___import___']('ComplexPanel.ComplexPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['CellPanel']['CellPanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('CellPanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '2e1e7232144e40120bf8627eae40abb9';
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
			var $attr1,$attr2,$attr5,$attr4,element,$attr6,$attr3;
			element = null;
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			if (pyjslib['bool']((element === null))) {
				element = pyjamas['ui']['CellPanel']['DOM']['createTable']();
			}
			self.table = element;
			self['setElement'](((($attr1=self['table']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'table'):
						self['table']));
			self.body = pyjamas['ui']['CellPanel']['DOM']['createTBody']();
			self.spacing = null;
			self.padding = null;
			pyjamas['ui']['CellPanel']['DOM']['appendChild'](((($attr3=self['table']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'table'):
						self['table']), ((($attr5=self['body']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'body'):
						self['body']));
			$pyjs_kwargs_call(pyjamas['ui']['CellPanel']['ComplexPanel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getTable', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return ((($attr7=self['table']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'table'):
						self['table']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTable'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getBody', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return ((($attr9=self['body']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'body'):
						self['body']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBody'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr11,$attr12;
			return ((($attr11=self['spacing']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'spacing'):
						self['spacing']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSpacing'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getPadding', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return ((($attr13=self['padding']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'padding'):
						self['padding']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getPadding'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidgetTd', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['op_eq'](widget['getParent'](), self))) {
				return null;
			}
			return pyjamas['ui']['CellPanel']['DOM']['getParent'](widget['getElement']());
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['getWidgetTd'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setBorderWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $attr15,$attr16;
			pyjamas['ui']['CellPanel']['DOM']['setAttribute'](((($attr15=self['table']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'table'):
						self['table']), String('border'), pyjslib['sprintf'](String('%d'), width));
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setBorderWidth'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCellHeight', function(widget, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				height = arguments[2];
			}
			var td;
			td = pyjamas['ui']['CellPanel']['DOM']['getParent'](widget['getElement']());
			pyjamas['ui']['CellPanel']['DOM']['setAttribute'](td, String('height'), height);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['height']]);
		$cls_definition['setCellHeight'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCellHorizontalAlignment', function(widget, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				align = arguments[2];
			}
			var td;
			td = self['getWidgetTd'](widget);
			if (pyjslib['bool']((td !== null))) {
				pyjamas['ui']['CellPanel']['DOM']['setAttribute'](td, String('align'), align);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['align']]);
		$cls_definition['setCellHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCellVerticalAlignment', function(widget, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				align = arguments[2];
			}
			var td;
			td = self['getWidgetTd'](widget);
			if (pyjslib['bool']((td !== null))) {
				pyjamas['ui']['CellPanel']['DOM']['setStyleAttribute'](td, String('verticalAlign'), align);
			}
			return null;
		}
	, 1, [null,null,['self'],['widget'],['align']]);
		$cls_definition['setCellVerticalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCellWidth', function(widget, width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				width = arguments[2];
			}
			var td;
			td = pyjamas['ui']['CellPanel']['DOM']['getParent'](widget['getElement']());
			pyjamas['ui']['CellPanel']['DOM']['setAttribute'](td, String('width'), width);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['width']]);
		$cls_definition['setCellWidth'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setSpacing', function(spacing) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				spacing = arguments[1];
			}
			var $attr17,$attr18;
			self.spacing = spacing;
			pyjamas['ui']['CellPanel']['DOM']['setAttribute'](((($attr17=self['table']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'table'):
						self['table']), String('cellSpacing'), pyjslib['str'](spacing));
			return null;
		}
	, 1, [null,null,['self'],['spacing']]);
		$cls_definition['setSpacing'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setPadding', function(padding) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				padding = arguments[1];
			}
			var $attr20,$attr19;
			self.padding = padding;
			pyjamas['ui']['CellPanel']['DOM']['setAttribute'](((($attr19=self['table']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'table'):
						self['table']), String('cellPadding'), pyjslib['str'](padding));
			return null;
		}
	, 1, [null,null,['self'],['padding']]);
		$cls_definition['setPadding'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['CellPanel']['ComplexPanel']));
	})();
	pyjamas['ui']['CellPanel']['Factory']['registerClass'](String('pyjamas.ui.CellPanel'), pyjamas['ui']['CellPanel']['CellPanel']);
	return this;
}; /* end pyjamas.ui.CellPanel */


/* end module: pyjamas.ui.CellPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'ComplexPanel.ComplexPanel', 'ComplexPanel']
*/
