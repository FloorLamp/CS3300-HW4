/* start module: pyjamas.ui.CellFormatter */
$pyjs.loaded_modules['pyjamas.ui.CellFormatter'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.CellFormatter'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.CellFormatter'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['CellFormatter'] = $pyjs.loaded_modules["pyjamas.ui.CellFormatter"];
	pyjamas['ui']['CellFormatter'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.CellFormatter';
	var __name__ = pyjamas['ui']['CellFormatter'].__name__ = __mod_name__;
	var CellFormatter = pyjamas['ui']['CellFormatter'];


	pyjamas['ui']['CellFormatter']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['CellFormatter']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['CellFormatter']['Applier'] = pyjslib['___import___']('pyjamas.ui.Applier', 'pyjamas.ui', null, false);
	pyjamas['ui']['CellFormatter']['CellFormatter'] = (function(){
		var $cls_instance = $pyjs__class_instance('CellFormatter');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '2dd893bc2291a21052923a9dff39646e';
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
			$pyjs_kwargs_call(pyjamas['ui']['CellFormatter']['Applier'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['outer']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addStyleName', function(row, column, styleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				styleName = arguments[3];
			}

			self['outer']['prepareCell'](row, column);
			self['outer']['setStyleName'](self['getElement'](row, column), styleName, true);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['styleName']]);
		$cls_definition['addStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getElement', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var $attr1,$attr2;
			self['outer']['checkCellBounds'](row, column);
			return pyjamas['ui']['CellFormatter']['DOM']['getChild'](self['outer']['rowFormatter']['getRow'](((($attr1=self['outer']['bodyElem']) !== null & ($attr2=self['outer']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'bodyElem'):
						self['outer']['bodyElem']), row), column);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getStyleName', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

			return pyjamas['ui']['CellFormatter']['DOM']['getAttribute'](self['getElement'](row, column), String('className'));
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isVisible', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var element;
			element = self['getElement'](row, column);
			return self['outer']['isVisible'](element);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['isVisible'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeStyleName', function(row, column, styleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				styleName = arguments[3];
			}

			self['outer']['checkCellBounds'](row, column);
			self['outer']['setStyleName'](self['getElement'](row, column), styleName, false);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['styleName']]);
		$cls_definition['removeStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setAlignment', function(row, column, hAlign, vAlign) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				hAlign = arguments[3];
				vAlign = arguments[4];
			}

			self['setHorizontalAlignment'](row, column, hAlign);
			self['setVerticalAlignment'](row, column, vAlign);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['hAlign'],['vAlign']]);
		$cls_definition['setAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHeight', function(row, column, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				height = arguments[3];
			}
			var $attr4,element,$attr3;
			self['outer']['prepareCell'](row, column);
			element = self['getCellElement'](((($attr3=self['outer']['bodyElem']) !== null & ($attr4=self['outer']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'bodyElem'):
						self['outer']['bodyElem']), row, column);
			pyjamas['ui']['CellFormatter']['DOM']['setStyleAttribute'](element, String('height'), height);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['height']]);
		$cls_definition['setHeight'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHorizontalAlignment', function(row, column, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				align = arguments[3];
			}
			var $attr5,$attr6,element;
			self['outer']['prepareCell'](row, column);
			element = self['getCellElement'](((($attr5=self['outer']['bodyElem']) !== null & ($attr6=self['outer']).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'bodyElem'):
						self['outer']['bodyElem']), row, column);
			pyjamas['ui']['CellFormatter']['DOM']['setAttribute'](element, String('align'), align);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['align']]);
		$cls_definition['setHorizontalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setStyleName', function(row, column, styleName) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				styleName = arguments[3];
			}

			self['outer']['prepareCell'](row, column);
			self['setAttr'](row, column, String('className'), styleName);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['styleName']]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setVerticalAlignment', function(row, column, align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				align = arguments[3];
			}
			var $attr8,$attr7;
			self['outer']['prepareCell'](row, column);
			pyjamas['ui']['CellFormatter']['DOM']['setStyleAttribute'](self['getCellElement'](((($attr7=self['outer']['bodyElem']) !== null & ($attr8=self['outer']).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'bodyElem'):
						self['outer']['bodyElem']), row, column), String('verticalAlign'), align);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['align']]);
		$cls_definition['setVerticalAlignment'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setVisible', function(row, column, visible) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				visible = arguments[3];
			}
			var element;
			element = self['ensureElement'](row, column);
			self['outer']['setVisible'](element, visible);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['visible']]);
		$cls_definition['setVisible'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidth', function(row, column, width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				width = arguments[3];
			}
			var $attr9,$attr10;
			self['outer']['prepareCell'](row, column);
			pyjamas['ui']['CellFormatter']['DOM']['setStyleAttribute'](self['getCellElement'](((($attr9=self['outer']['bodyElem']) !== null & ($attr10=self['outer']).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'bodyElem'):
						self['outer']['bodyElem']), row, column), String('width'), width);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['width']]);
		$cls_definition['setWidth'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWordWrap', function(row, column, wrap) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				wrap = arguments[3];
			}
			var wrap_str;
			self['outer']['prepareCell'](row, column);
			if (pyjslib['bool'](wrap)) {
				wrap_str = String('');
			}
			else {
				wrap_str = String('nowrap');
			}
			pyjamas['ui']['CellFormatter']['DOM']['setStyleAttribute'](self['getElement'](row, column), String('whiteSpace'), wrap_str);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['wrap']]);
		$cls_definition['setWordWrap'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCellElement', function(table, row, col) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				row = arguments[2];
				col = arguments[3];
			}
			var $attr16,cols,item,length,$attr14,$attr15,$attr11,$attr13,$attr12;
			length = ((($attr11=table['rows']['length']) !== null & ($attr12=table['rows']).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'length'):
						table['rows']['length']);
			if (pyjslib['bool']((((pyjslib['cmp'](row, length))|1) == 1))) {
				return null;
			}
			cols = ((($attr13=table['rows']['item'](row)['cells']) !== null & ($attr14=table['rows']['item'](row)).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'cells'):
						table['rows']['item'](row)['cells']);
			length = ((($attr15=cols['length']) !== null & ($attr16=cols).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'length'):
						cols['length']);
			if (pyjslib['bool']((((pyjslib['cmp'](col, length))|1) == 1))) {
				return null;
			}
			item = cols['item'](col);
			return item;
		}
	, 1, [null,null,['self'],['table'],['row'],['col']]);
		$cls_definition['getCellElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getRawElement', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var $attr18,$attr17;
			return self['getCellElement'](((($attr17=self['outer']['bodyElem']) !== null & ($attr18=self['outer']).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'bodyElem'):
						self['outer']['bodyElem']), row, column);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getRawElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'ensureElement', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

			self['outer']['prepareCell'](row, column);
			return pyjamas['ui']['CellFormatter']['DOM']['getChild'](self['outer']['rowFormatter']['ensureElement'](row), column);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['ensureElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getStyleAttr', function(row, column, attr) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				attr = arguments[3];
			}
			var elem;
			elem = self['getElement'](row, column);
			return pyjamas['ui']['CellFormatter']['DOM']['getStyleAttribute'](elem, attr);
		}
	, 1, [null,null,['self'],['row'],['column'],['attr']]);
		$cls_definition['getStyleAttr'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setStyleAttr', function(row, column, attrName, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				attrName = arguments[3];
				value = arguments[4];
			}
			var elem;
			elem = self['getElement'](row, column);
			pyjamas['ui']['CellFormatter']['DOM']['setStyleAttribute'](elem, attrName, value);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['attrName'],['value']]);
		$cls_definition['setStyleAttr'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getAttr', function(row, column, attr) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				attr = arguments[3];
			}
			var elem;
			elem = self['getElement'](row, column);
			return pyjamas['ui']['CellFormatter']['DOM']['getAttribute'](elem, attr);
		}
	, 1, [null,null,['self'],['row'],['column'],['attr']]);
		$cls_definition['getAttr'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setAttr', function(row, column, attrName, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				attrName = arguments[3];
				value = arguments[4];
			}
			var elem;
			elem = self['getElement'](row, column);
			pyjamas['ui']['CellFormatter']['DOM']['setAttribute'](elem, attrName, value);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['attrName'],['value']]);
		$cls_definition['setAttr'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['CellFormatter']['Applier']));
	})();
	return this;
}; /* end pyjamas.ui.CellFormatter */


/* end module: pyjamas.ui.CellFormatter */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
