/* start module: pyjamas.ui.HTMLTable */
$pyjs.loaded_modules['pyjamas.ui.HTMLTable'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.HTMLTable'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.HTMLTable'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['HTMLTable'] = $pyjs.loaded_modules["pyjamas.ui.HTMLTable"];
	pyjamas['ui']['HTMLTable'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.HTMLTable';
	var __name__ = pyjamas['ui']['HTMLTable'].__name__ = __mod_name__;
	var HTMLTable = pyjamas['ui']['HTMLTable'];


	pyjamas['ui']['HTMLTable']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTMLTable']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTMLTable']['Panel'] = pyjslib['___import___']('Panel.Panel', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTMLTable']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTMLTable']['CellFormatter'] = pyjslib['___import___']('CellFormatter.CellFormatter', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTMLTable']['RowFormatter'] = pyjslib['___import___']('RowFormatter.RowFormatter', 'pyjamas.ui', null, false);
	pyjamas['ui']['HTMLTable']['widgethash'] = pyjslib['dict']([]);
	pyjamas['ui']['HTMLTable']['HTMLTable'] = (function(){
		var $cls_instance = $pyjs__class_instance('HTMLTable');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '8f561f6caf25b7a3e6fb4a69a6d888d9';
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
			var $attr9,$attr8,$attr1,$attr2,$attr5,$attr4,$attr7,$attr6,fc,$attr10,$attr14,$attr11,$attr3,$attr13,$attr12;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('CellFormatter'))))) {
				kwargs.__setitem__(String('CellFormatter'), pyjamas['ui']['HTMLTable']['CellFormatter'](self));
			}
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('RowFormatter'))))) {
				kwargs.__setitem__(String('RowFormatter'), pyjamas['ui']['HTMLTable']['RowFormatter'](self));
			}
			self.tableListeners = pyjslib['list']([]);
			self.widgetMap = pyjslib['dict']([]);
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				self.tableElem = kwargs['pop'](String('Element'));
				fc = pyjamas['ui']['HTMLTable']['DOM']['getFirstChild'](((($attr1=self['tableElem']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
							pyjslib['getattr']($attr2, 'tableElem'):
							self['tableElem']));
				if (pyjslib['bool'](fc)) {
					self.bodyElem = fc;
				}
				else {
					self.bodyElem = pyjamas['ui']['HTMLTable']['DOM']['createTBody']();
					pyjamas['ui']['HTMLTable']['DOM']['appendChild'](((($attr3=self['tableElem']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
								pyjslib['getattr']($attr4, 'tableElem'):
								self['tableElem']), ((($attr5=self['bodyElem']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
								pyjslib['getattr']($attr6, 'bodyElem'):
								self['bodyElem']));
				}
			}
			else {
				self.tableElem = pyjamas['ui']['HTMLTable']['DOM']['createTable']();
				self.bodyElem = pyjamas['ui']['HTMLTable']['DOM']['createTBody']();
				pyjamas['ui']['HTMLTable']['DOM']['appendChild'](((($attr7=self['tableElem']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'tableElem'):
							self['tableElem']), ((($attr9=self['bodyElem']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'bodyElem'):
							self['bodyElem']));
			}
			self['setElement'](((($attr11=self['tableElem']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'tableElem'):
						self['tableElem']));
			self['sinkEvents'](((($attr13=pyjamas['ui']['HTMLTable']['Event']['ONCLICK']) !== null & ($attr14=pyjamas['ui']['HTMLTable']['Event']).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'ONCLICK'):
						pyjamas['ui']['HTMLTable']['Event']['ONCLICK']));
			$pyjs_kwargs_call(pyjamas['ui']['HTMLTable']['Panel'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addTableListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tableListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addTableListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,$iter2_idx,$iter1_array,child,$iter2_type,row,col,$iter2_array,$iter1_idx;
			$iter1_iter = pyjslib['range'](self['getRowCount']());
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				row = $iter1_nextval;
				$iter2_iter = pyjslib['range'](self['getCellCount'](row));
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					col = $iter2_nextval;
					child = self['getWidget'](row, col);
					if (pyjslib['bool']((child !== null))) {
						self['removeWidget'](child);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clearCell', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var td;
			td = self['cellFormatter']['getElement'](row, column);
			return self['internalClearCell'](td);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['clearCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCellCount', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			return 0;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getCellCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCellFormatter', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr16;
			return ((($attr15=self['cellFormatter']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'cellFormatter'):
						self['cellFormatter']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCellFormatter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCellPadding', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr17,$attr18;
			return pyjamas['ui']['HTMLTable']['DOM']['getIntAttribute'](((($attr17=self['tableElem']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'tableElem'):
						self['tableElem']), String('cellPadding'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCellPadding'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCellSpacing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			return pyjamas['ui']['HTMLTable']['DOM']['getIntAttribute'](((($attr19=self['tableElem']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'tableElem'):
						self['tableElem']), String('cellSpacing'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCellSpacing'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHTML', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var element;
			element = self['cellFormatter']['getElement'](row, column);
			return pyjamas['ui']['HTMLTable']['DOM']['getInnerHTML'](element);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getRowCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return 0;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getRowFormatter', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr21,$attr22;
			return ((($attr21=self['rowFormatter']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'rowFormatter'):
						self['rowFormatter']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowFormatter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getText', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var element;
			self['checkCellBounds'](row, column);
			element = self['cellFormatter']['getElement'](row, column);
			return pyjamas['ui']['HTMLTable']['DOM']['getInnerText'](element);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidget', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			if (typeof column == 'undefined') column=arguments.callee.__args__[4][1];
			var $attr23,$attr24,key;
			if (pyjslib['bool']((column === null))) {
				key = self['computeKeyForElement'](row);
			}
			else {
				self['checkCellBounds'](row, column);
				key = self['computeKey'](row, column);
			}
			if (pyjslib['bool']((key === null))) {
				return null;
			}
			return ((($attr23=self['widgetMap']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'widgetMap'):
						self['widgetMap']).__getitem__(key);
		}
	, 1, [null,null,['self'],['row'],['column', null]]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isCellPresent', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var $or4,$or1,$or3,$or2;
			if (pyjslib['bool']((pyjslib['bool']($or1=(((pyjslib['cmp'](row, self['getRowCount']()))|1) == 1))?$or1:(pyjslib['cmp'](row, 0) == -1)))) {
				return false;
			}
			if (pyjslib['bool']((pyjslib['bool']($or3=(pyjslib['cmp'](column, 0) == -1))?$or3:(((pyjslib['cmp'](column, self['getCellCount'](row)))|1) == 1)))) {
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['isCellPresent'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['widgetMap']['itervalues']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var body,$iter3_idx,column,$iter3_array,tr,listener,$iter3_iter,$iter3_type,td,$iter3_nextval,row;
			if (pyjslib['bool'](pyjslib['op_eq'](pyjamas['ui']['HTMLTable']['DOM']['eventGetType'](event), String('click')))) {
				td = self['getEventTargetCell'](event);
				if (pyjslib['bool'](!pyjslib['bool'](td))) {
					return null;
				}
				tr = pyjamas['ui']['HTMLTable']['DOM']['getParent'](td);
				body = pyjamas['ui']['HTMLTable']['DOM']['getParent'](tr);
				row = pyjamas['ui']['HTMLTable']['DOM']['getChildIndex'](body, tr);
				column = pyjamas['ui']['HTMLTable']['DOM']['getChildIndex'](tr, td);
				$iter3_iter = self['tableListeners'];
				if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
					$iter3_type = 0;
				} else {
					$iter3_iter = $iter3_iter.__iter__();
					$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter3_idx = 0;
				while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
					listener = $iter3_nextval;
					if (pyjslib['bool'](pyjslib['hasattr'](listener, String('onCellClicked')))) {
						listener['onCellClicked'](self, row, column);
					}
					else {
						listener(self);
					}
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

			if (pyjslib['bool'](!pyjslib['op_eq'](widget['getParent'](), self))) {
				return false;
			}
			self['removeWidget'](widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeTableListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['tableListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeTableListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setBorderWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $attr25,$attr26;
			pyjamas['ui']['HTMLTable']['DOM']['setAttribute'](((($attr25=self['tableElem']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'tableElem'):
						self['tableElem']), String('border'), pyjslib['str'](width));
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setBorderWidth'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCellPadding', function(padding) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				padding = arguments[1];
			}
			var $attr28,$attr27;
			pyjamas['ui']['HTMLTable']['DOM']['setAttribute'](((($attr27=self['tableElem']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'tableElem'):
						self['tableElem']), String('cellPadding'), pyjslib['str'](padding));
			return null;
		}
	, 1, [null,null,['self'],['padding']]);
		$cls_definition['setCellPadding'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCellSpacing', function(spacing) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				spacing = arguments[1];
			}
			var $attr29,$attr30;
			pyjamas['ui']['HTMLTable']['DOM']['setAttribute'](((($attr29=self['tableElem']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'tableElem'):
						self['tableElem']), String('cellSpacing'), pyjslib['str'](spacing));
			return null;
		}
	, 1, [null,null,['self'],['spacing']]);
		$cls_definition['setCellSpacing'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHTML', function(row, column, html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				html = arguments[3];
			}
			var td;
			self['prepareCell'](row, column);
			td = self['cleanCell'](row, column);
			if (pyjslib['bool']((html !== null))) {
				pyjamas['ui']['HTMLTable']['DOM']['setInnerHTML'](td, html);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['html']]);
		$cls_definition['setHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setText', function(row, column, text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				text = arguments[3];
			}
			var td;
			self['prepareCell'](row, column);
			td = self['cleanCell'](row, column);
			if (pyjslib['bool']((text !== null))) {
				pyjamas['ui']['HTMLTable']['DOM']['setInnerText'](td, text);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidget', function(row, column, widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				widget = arguments[3];
			}
			var widget_hash,element,$attr32,$attr31,td;
			self['prepareCell'](row, column);
			if (pyjslib['bool']((widget === null))) {
				return null;
			}
			widget['removeFromParent']();
			td = self['cleanCell'](row, column);
			widget_hash = widget;
			element = widget['getElement']();
			pyjamas['ui']['HTMLTable']['widgethash'].__setitem__(element, widget_hash);
			((($attr31=self['widgetMap']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, 'widgetMap'):
						self['widgetMap']).__setitem__(widget_hash, widget);
			self['adopt'](widget, td);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['widget']]);
		$cls_definition['setWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'cleanCell', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var td;
			td = self['cellFormatter']['getRawElement'](row, column);
			self['internalClearCell'](td);
			return td;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['cleanCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'computeKey', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var element,child;
			element = self['cellFormatter']['getRawElement'](row, column);
			child = pyjamas['ui']['HTMLTable']['DOM']['getFirstChild'](element);
			if (pyjslib['bool']((child === null))) {
				return null;
			}
			return self['computeKeyForElement'](child);
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['computeKey'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'computeKeyForElement', function(widgetElement) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widgetElement = arguments[1];
			}

			return pyjamas['ui']['HTMLTable']['widgethash']['get'](widgetElement);
		}
	, 1, [null,null,['self'],['widgetElement']]);
		$cls_definition['computeKeyForElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeWidget', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr33,$attr34,element;
			self['disown'](widget);
			element = widget['getElement']();
			((($attr33=self['widgetMap']) !== null & ($attr34=self).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'widgetMap'):
						self['widgetMap']).__delitem__(self['computeKeyForElement'](element));
			pyjamas['ui']['HTMLTable']['widgethash'].__delitem__(element);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['removeWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'checkCellBounds', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var cellSize;
			self['checkRowBounds'](row);
			cellSize = self['getCellCount'](row);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['checkCellBounds'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'checkRowBounds', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var rowSize;
			rowSize = self['getRowCount']();
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['checkRowBounds'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createCell', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['HTMLTable']['DOM']['createTD']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getBodyElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr36,$attr35;
			return ((($attr35=self['bodyElem']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'bodyElem'):
						self['bodyElem']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBodyElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getDOMCellCount', function(element, row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				row = arguments[2];
			}
			if (typeof row == 'undefined') row=arguments.callee.__args__[4][1];
			var $attr37,$attr38;
			if (pyjslib['bool']((row === null))) {
				return self['getDOMCellCountImpl'](((($attr37=self['bodyElem']) !== null & ($attr38=self).__is_instance__) && typeof $attr37 == 'function'?
							pyjslib['getattr']($attr38, 'bodyElem'):
							self['bodyElem']), element);
			}
			return self['getDOMCellCountImpl'](element, row);
		}
	, 1, [null,null,['self'],['element'],['row', null]]);
		$cls_definition['getDOMCellCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getDOMCellCountImpl', function(element, row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				row = arguments[2];
			}
			var $attr39,$attr40;
			return ((($attr39=element['rows']['item'](row)['cells']['length']) !== null & ($attr40=element['rows']['item'](row)['cells']).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'length'):
						element['rows']['item'](row)['cells']['length']);
		}
	, 1, [null,null,['self'],['element'],['row']]);
		$cls_definition['getDOMCellCountImpl'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getDOMRowCount', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments.callee.__args__[3][1];
			var $attr41,$attr42;
			if (pyjslib['bool']((element === null))) {
				element = ((($attr41=self['bodyElem']) !== null & ($attr42=self).__is_instance__) && typeof $attr41 == 'function'?
							pyjslib['getattr']($attr42, 'bodyElem'):
							self['bodyElem']);
			}
			return self['getDOMRowCountImpl'](element);
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['getDOMRowCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getDOMRowCountImpl', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			var $attr43,$attr44;
			return ((($attr43=element['rows']['length']) !== null & ($attr44=element['rows']).__is_instance__) && typeof $attr43 == 'function'?
						pyjslib['getattr']($attr44, 'length'):
						element['rows']['length']);
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['getDOMRowCountImpl'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getEventTargetCell', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var body,tr,$attr46,$attr47,$attr45,td,$attr48;
			td = pyjamas['ui']['HTMLTable']['DOM']['eventGetTarget'](event);
			while (pyjslib['bool']((td !== null))) {
				if (pyjslib['bool'](pyjslib['op_eq'](pyjamas['ui']['HTMLTable']['DOM']['getAttribute'](td, String('tagName'))['lower'](), String('td')))) {
					tr = pyjamas['ui']['HTMLTable']['DOM']['getParent'](td);
					body = pyjamas['ui']['HTMLTable']['DOM']['getParent'](tr);
					if (pyjslib['bool'](pyjamas['ui']['HTMLTable']['DOM']['compare'](body, ((($attr45=self['bodyElem']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
								pyjslib['getattr']($attr46, 'bodyElem'):
								self['bodyElem'])))) {
						return td;
					}
				}
				if (pyjslib['bool'](pyjamas['ui']['HTMLTable']['DOM']['compare'](td, ((($attr47=self['bodyElem']) !== null & ($attr48=self).__is_instance__) && typeof $attr47 == 'function'?
							pyjslib['getattr']($attr48, 'bodyElem'):
							self['bodyElem'])))) {
					return null;
				}
				td = pyjamas['ui']['HTMLTable']['DOM']['getParent'](td);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['getEventTargetCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insertCell', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var $attr50,tr,td,$attr49;
			tr = self['rowFormatter']['getRow'](((($attr49=self['bodyElem']) !== null & ($attr50=self).__is_instance__) && typeof $attr49 == 'function'?
						pyjslib['getattr']($attr50, 'bodyElem'):
						self['bodyElem']), row);
			td = self['createCell']();
			pyjamas['ui']['HTMLTable']['DOM']['insertChild'](tr, td, column);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['insertCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insertCells', function(row, column, count) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				count = arguments[3];
			}
			var $add2,i,$iter4_nextval,$attr52,tr,$iter4_idx,$attr51,$add1,$iter4_type,$iter4_array,td,$iter4_iter;
			tr = self['rowFormatter']['getRow'](((($attr51=self['bodyElem']) !== null & ($attr52=self).__is_instance__) && typeof $attr51 == 'function'?
						pyjslib['getattr']($attr52, 'bodyElem'):
						self['bodyElem']), row);
			$iter4_iter = pyjslib['range'](column, (typeof ($add1=column)==typeof ($add2=count) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)));
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				td = self['createCell']();
				pyjamas['ui']['HTMLTable']['DOM']['insertChild'](tr, td, i);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['count']]);
		$cls_definition['insertCells'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insertRow', function(beforeRow) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				beforeRow = arguments[1];
			}
			var $attr53,tr,$attr54;
			if (pyjslib['bool'](!pyjslib['op_eq'](beforeRow, self['getRowCount']()))) {
				self['checkRowBounds'](beforeRow);
			}
			tr = pyjamas['ui']['HTMLTable']['DOM']['createTR']();
			pyjamas['ui']['HTMLTable']['DOM']['insertChild'](((($attr53=self['bodyElem']) !== null & ($attr54=self).__is_instance__) && typeof $attr53 == 'function'?
						pyjslib['getattr']($attr54, 'bodyElem'):
						self['bodyElem']), tr, beforeRow);
			return beforeRow;
		}
	, 1, [null,null,['self'],['beforeRow']]);
		$cls_definition['insertRow'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'internalClearCell', function(td) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				td = arguments[1];
			}
			var widget,maybeChild;
			maybeChild = pyjamas['ui']['HTMLTable']['DOM']['getFirstChild'](td);
			widget = null;
			if (pyjslib['bool']((maybeChild !== null))) {
				widget = self['getWidget'](maybeChild);
			}
			if (pyjslib['bool']((widget !== null))) {
				self['removeWidget'](widget);
				return true;
			}
			pyjamas['ui']['HTMLTable']['DOM']['setInnerHTML'](td, String(''));
			return false;
		}
	, 1, [null,null,['self'],['td']]);
		$cls_definition['internalClearCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'prepareCell', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['prepareCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'prepareRow', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['prepareRow'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeCell', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var tr,$attr55,$attr56,td;
			self['checkCellBounds'](row, column);
			td = self['cleanCell'](row, column);
			tr = self['rowFormatter']['getRow'](((($attr55=self['bodyElem']) !== null & ($attr56=self).__is_instance__) && typeof $attr55 == 'function'?
						pyjslib['getattr']($attr56, 'bodyElem'):
						self['bodyElem']), row);
			pyjamas['ui']['HTMLTable']['DOM']['removeChild'](tr, td);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['removeCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeRow', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $iter5_nextval,$attr58,column,$iter5_array,$attr60,$attr57,$iter5_iter,$iter5_idx,$iter5_type,$attr59;
			$iter5_iter = pyjslib['range'](self['getCellCount'](row));
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				column = $iter5_nextval;
				self['cleanCell'](row, column);
			}
			pyjamas['ui']['HTMLTable']['DOM']['removeChild'](((($attr57=self['bodyElem']) !== null & ($attr58=self).__is_instance__) && typeof $attr57 == 'function'?
						pyjslib['getattr']($attr58, 'bodyElem'):
						self['bodyElem']), self['rowFormatter']['getRow'](((($attr59=self['bodyElem']) !== null & ($attr60=self).__is_instance__) && typeof $attr59 == 'function'?
						pyjslib['getattr']($attr60, 'bodyElem'):
						self['bodyElem']), row));
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['removeRow'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCellFormatter', function(cellFormatter) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				cellFormatter = arguments[1];
			}

			self.cellFormatter = cellFormatter;
			return null;
		}
	, 1, [null,null,['self'],['cellFormatter']]);
		$cls_definition['setCellFormatter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setRowFormatter', function(rowFormatter) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				rowFormatter = arguments[1];
			}

			self.rowFormatter = rowFormatter;
			return null;
		}
	, 1, [null,null,['self'],['rowFormatter']]);
		$cls_definition['setRowFormatter'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['HTMLTable']['Panel']));
	})();
	pyjamas['ui']['HTMLTable']['Factory']['registerClass'](String('pyjamas.ui.HTMLTable'), pyjamas['ui']['HTMLTable']['HTMLTable']);
	return this;
}; /* end pyjamas.ui.HTMLTable */


/* end module: pyjamas.ui.HTMLTable */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Panel.Panel', 'Panel', 'pyjamas.ui.Event', 'pyjamas.ui', 'CellFormatter.CellFormatter', 'CellFormatter', 'RowFormatter.RowFormatter', 'RowFormatter']
*/
