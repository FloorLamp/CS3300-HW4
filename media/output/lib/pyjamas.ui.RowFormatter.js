/* start module: pyjamas.ui.RowFormatter */
$pyjs.loaded_modules['pyjamas.ui.RowFormatter'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.RowFormatter'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.RowFormatter'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['RowFormatter'] = $pyjs.loaded_modules["pyjamas.ui.RowFormatter"];
	pyjamas['ui']['RowFormatter'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.RowFormatter';
	var __name__ = pyjamas['ui']['RowFormatter'].__name__ = __mod_name__;
	var RowFormatter = pyjamas['ui']['RowFormatter'];


	pyjamas['ui']['RowFormatter']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['RowFormatter']['Applier'] = pyjslib['___import___']('pyjamas.ui.Applier', 'pyjamas.ui', null, false);
	pyjamas['ui']['RowFormatter']['RowFormatter'] = (function(){
		var $cls_instance = $pyjs__class_instance('RowFormatter');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '79259fc7e926791074ad4a0f8b909b0b';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(outer) {
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
				outer = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof outer != 'undefined') {
					if (outer !== null && typeof outer['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = outer;
						outer = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			self.outer = outer;
			$pyjs_kwargs_call(pyjamas['ui']['RowFormatter']['Applier'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['outer']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addStyleName', function(row, styleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				styleName = arguments[2];
			}

			self['outer']['setStyleName'](self['ensureElement'](row), styleName, true);
			return null;
		}
	, 1, [null,null,['self'],['row'],['styleName']]);
		$cls_definition['addStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getElement', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $attr1,$attr2;
			self['outer']['checkRowBounds'](row);
			return self['getRow'](((($attr1=self['outer']['bodyElem']) !== null & ($attr2=self['outer']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'bodyElem'):
						self['outer']['bodyElem']), row);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getStyleName', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			return pyjamas['ui']['RowFormatter']['DOM']['getAttribute'](self['getElement'](row), String('className'));
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isVisible', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var element;
			element = self['getElement'](row);
			return self['outer']['isVisible'](element);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['isVisible'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeStyleName', function(row, styleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				styleName = arguments[2];
			}

			self['outer']['setStyleName'](self['getElement'](row), styleName, false);
			return null;
		}
	, 1, [null,null,['self'],['row'],['styleName']]);
		$cls_definition['removeStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setStyleName', function(row, styleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				styleName = arguments[2];
			}
			var elem;
			elem = self['ensureElement'](row);
			pyjamas['ui']['RowFormatter']['DOM']['setAttribute'](elem, String('className'), styleName);
			return null;
		}
	, 1, [null,null,['self'],['row'],['styleName']]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setVerticalAlign', function(row, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				align = arguments[2];
			}

			pyjamas['ui']['RowFormatter']['DOM']['setStyleAttribute'](self['ensureElement'](row), String('verticalAlign'), align);
			return null;
		}
	, 1, [null,null,['self'],['row'],['align']]);
		$cls_definition['setVerticalAlign'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setVisible', function(row, visible) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				visible = arguments[2];
			}
			var element;
			element = self['ensureElement'](row);
			self['outer']['setVisible'](element, visible);
			return null;
		}
	, 1, [null,null,['self'],['row'],['visible']]);
		$cls_definition['setVisible'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'ensureElement', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $attr4,$attr3;
			self['outer']['prepareRow'](row);
			return self['getRow'](((($attr3=self['outer']['bodyElem']) !== null & ($attr4=self['outer']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'bodyElem'):
						self['outer']['bodyElem']), row);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['ensureElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getRow', function(element, row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				row = arguments[2];
			}

			return element['rows']['item'](row);
		}
	, 1, [null,null,['self'],['element'],['row']]);
		$cls_definition['getRow'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setStyleAttr', function(row, attrName, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				attrName = arguments[2];
				value = arguments[3];
			}
			var element;
			element = self['ensureElement'](row);
			pyjamas['ui']['RowFormatter']['DOM']['setStyleAttribute'](element, attrName, value);
			return null;
		}
	, 1, [null,null,['self'],['row'],['attrName'],['value']]);
		$cls_definition['setStyleAttr'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setAttr', function(row, attrName, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				attrName = arguments[2];
				value = arguments[3];
			}
			var element;
			element = self['ensureElement'](row);
			pyjamas['ui']['RowFormatter']['DOM']['setAttribute'](element, attrName, value);
			return null;
		}
	, 1, [null,null,['self'],['row'],['attrName'],['value']]);
		$cls_definition['setAttr'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['RowFormatter']['Applier']));
	})();
	return this;
}; /* end pyjamas.ui.RowFormatter */


/* end module: pyjamas.ui.RowFormatter */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
