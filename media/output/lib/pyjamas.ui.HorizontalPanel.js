/* start module: pyjamas.ui.HorizontalPanel */
$pyjs.loaded_modules['pyjamas.ui.HorizontalPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HorizontalPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HorizontalPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['HorizontalPanel'] = $pyjs.loaded_modules["pyjamas.ui.HorizontalPanel"];
	pyjamas['ui']['HorizontalPanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HorizontalPanel';
	var __name__ = pyjamas['ui']['HorizontalPanel'].__name__ = __mod_name__;
	var HorizontalPanel = pyjamas['ui']['HorizontalPanel'];


	pyjamas['ui']['HorizontalPanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['HorizontalPanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['HorizontalPanel']['CellPanel'] = pyjslib['___import___']('CellPanel.CellPanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['HorizontalPanel']['HasHorizontalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', null, false);
	pyjamas['ui']['HorizontalPanel']['HasVerticalAlignment'] = pyjslib['___import___']('pyjamas.ui.HasVerticalAlignment', 'pyjamas.ui', null, false);
	pyjamas['ui']['HorizontalPanel']['HorizontalPanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('HorizontalPanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '0647f3933205a2f2553d99a4218799cd';
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
			var $attr1,$attr2,$attr5,$attr4,$attr6,$attr3;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('Spacing'))))) {
				kwargs.__setitem__(String('Spacing'), 0);
			}
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('Padding'))))) {
				kwargs.__setitem__(String('Padding'), 0);
			}
			self.horzAlign = ((($attr1=pyjamas['ui']['HorizontalPanel']['HasHorizontalAlignment']['ALIGN_LEFT']) !== null & ($attr2=pyjamas['ui']['HorizontalPanel']['HasHorizontalAlignment']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'ALIGN_LEFT'):
						pyjamas['ui']['HorizontalPanel']['HasHorizontalAlignment']['ALIGN_LEFT']);
			self.vertAlign = ((($attr3=pyjamas['ui']['HorizontalPanel']['HasVerticalAlignment']['ALIGN_TOP']) !== null & ($attr4=pyjamas['ui']['HorizontalPanel']['HasVerticalAlignment']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'ALIGN_TOP'):
						pyjamas['ui']['HorizontalPanel']['HasVerticalAlignment']['ALIGN_TOP']);
			$pyjs_kwargs_call(pyjamas['ui']['HorizontalPanel']['CellPanel'], '__init__', null, kwargs, [{}, self]);
			self.tableRow = pyjamas['ui']['HorizontalPanel']['DOM']['createTR']();
			pyjamas['ui']['HorizontalPanel']['DOM']['appendChild'](self['getBody'](), ((($attr5=self['tableRow']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'tableRow'):
						self['tableRow']));
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
			var $attr8,$attr7;
			return ((($attr7=self['horzAlign']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'horzAlign'):
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
			var $attr9,$attr10;
			return ((($attr9=self['vertAlign']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'vertAlign'):
						self['vertAlign']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVerticalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert', function(widget, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				beforeIndex = arguments[2];
			}
			var $attr15,$attr14,td,$attr16,$attr11,$attr13,$attr12;
			widget['removeFromParent']();
			td = pyjamas['ui']['HorizontalPanel']['DOM']['createTD']();
			pyjamas['ui']['HorizontalPanel']['DOM']['insertChild'](((($attr11=self['tableRow']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'tableRow'):
						self['tableRow']), td, beforeIndex);
			pyjamas['ui']['HorizontalPanel']['CellPanel']['insert'](self, widget, td, beforeIndex);
			self['setCellHorizontalAlignment'](widget, ((($attr13=self['horzAlign']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'horzAlign'):
						self['horzAlign']));
			self['setCellVerticalAlignment'](widget, ((($attr15=self['vertAlign']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'vertAlign'):
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
			var $attr17,td,$attr18;
			if (pyjslib['bool'](pyjslib['isinstance'](widget, pyjslib['float_int']))) {
				widget = self['getWidget'](widget);
			}
			if (pyjslib['bool'](!pyjslib['op_eq'](widget['getParent'](), self))) {
				return false;
			}
			td = pyjamas['ui']['HorizontalPanel']['DOM']['getParent'](widget['getElement']());
			pyjamas['ui']['HorizontalPanel']['DOM']['removeChild'](((($attr17=self['tableRow']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'tableRow'):
						self['tableRow']), td);
			pyjamas['ui']['HorizontalPanel']['CellPanel']['remove'](self, widget);
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
		                            new Array(pyjamas['ui']['HorizontalPanel']['CellPanel']));
	})();
	pyjamas['ui']['HorizontalPanel']['Factory']['registerClass'](String('pyjamas.ui.HorizontalPanel'), pyjamas['ui']['HorizontalPanel']['HorizontalPanel']);
	return this;
}; /* end pyjamas.ui.HorizontalPanel */


/* end module: pyjamas.ui.HorizontalPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'CellPanel.CellPanel', 'CellPanel', 'pyjamas.ui.HasHorizontalAlignment', 'pyjamas.ui', 'pyjamas.ui.HasVerticalAlignment']
*/
