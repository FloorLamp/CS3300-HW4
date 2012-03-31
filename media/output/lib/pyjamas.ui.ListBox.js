/* start module: pyjamas.ui.ListBox */
$pyjs.loaded_modules['pyjamas.ui.ListBox'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ListBox'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ListBox'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['ListBox'] = $pyjs.loaded_modules["pyjamas.ui.ListBox"];
	pyjamas['ui']['ListBox'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ListBox';
	var __name__ = pyjamas['ui']['ListBox'].__name__ = __mod_name__;
	var ListBox = pyjamas['ui']['ListBox'];


	pyjamas['ui']['ListBox']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['ListBox']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['ListBox']['FocusWidget'] = pyjslib['___import___']('FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	pyjamas['ui']['ListBox']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['ListBox']['ListBox'] = (function(){
		var $cls_instance = $pyjs__class_instance('ListBox');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '706232c3bf8e86dea35006dee19492a3';
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
			var $attr1,element,$attr2;
			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('StyleName'))))) {
				kwargs.__setitem__(String('StyleName'), String('gwt-ListBox'));
			}
			self.changeListeners = pyjslib['list']([]);
			self.INSERT_AT_END = (typeof ($usub1=1)=='number'?
				-$usub1:
				pyjslib['op_usub']($usub1));
			if (pyjslib['bool'](kwargs['has_key'](String('Element')))) {
				element = kwargs['pop'](String('Element'));
			}
			else {
				element = pyjamas['ui']['ListBox']['DOM']['createSelect']();
			}
			$pyjs_kwargs_call(pyjamas['ui']['ListBox']['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			self['sinkEvents'](((($attr1=pyjamas['ui']['ListBox']['Event']['ONCHANGE']) !== null & ($attr2=pyjamas['ui']['ListBox']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'ONCHANGE'):
						pyjamas['ui']['ListBox']['Event']['ONCHANGE']));
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addChangeListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['changeListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addChangeListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addItem', function(item, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				value = arguments[2];
			}
			if (typeof value == 'undefined') value=arguments.callee.__args__[4][1];
			var $attr3,$attr4;
			self['insertItem'](item, value, ((($attr3=self['INSERT_AT_END']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'INSERT_AT_END'):
						self['INSERT_AT_END']));
			return null;
		}
	, 1, [null,null,['self'],['item'],['value', null]]);
		$cls_definition['addItem'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var h;
			h = self['getElement']();
			while (pyjslib['bool']((pyjslib['cmp'](pyjamas['ui']['ListBox']['DOM']['getChildCount'](h), 0) == 1))) {
				pyjamas['ui']['ListBox']['DOM']['removeChild'](h, pyjamas['ui']['ListBox']['DOM']['getChild'](h, 0));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getItemCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['ListBox']['DOM']['getChildCount'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getItemCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getItemText', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var child;
			child = pyjamas['ui']['ListBox']['DOM']['getChild'](self['getElement'](), index);
			return pyjamas['ui']['ListBox']['DOM']['getInnerText'](child);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getItemText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['ListBox']['DOM']['getAttribute'](self['getElement'](), String('name'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSelectedIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['ListBox']['DOM']['getIntAttribute'](self['getElement'](), String('selectedIndex'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getValue', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var option;
			self['checkIndex'](index);
			option = pyjamas['ui']['ListBox']['DOM']['getChild'](self['getElement'](), index);
			return pyjamas['ui']['ListBox']['DOM']['getAttribute'](option, String('value'));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getValue'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getVisibleItemCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['ListBox']['DOM']['getIntAttribute'](self['getElement'](), String('size'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getVisibleItemCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insertItem', function(item, value, index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
				value = arguments[2];
				index = arguments[3];
			}
			if (typeof index == 'undefined') index=arguments.callee.__args__[5][1];

			if (pyjslib['bool']((index === null))) {
				index = value;
				value = null;
			}
			pyjamas['ui']['ListBox']['DOM']['insertListItem'](self['getElement'](), item, value, index);
			return null;
		}
	, 1, [null,null,['self'],['item'],['value'],['index', null]]);
		$cls_definition['insertItem'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isItemSelected', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var option;
			self['checkIndex'](index);
			option = pyjamas['ui']['ListBox']['DOM']['getChild'](self['getElement'](), index);
			return pyjamas['ui']['ListBox']['DOM']['getBooleanAttribute'](option, String('selected'));
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['isItemSelected'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isMultipleSelect', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['ListBox']['DOM']['getBooleanAttribute'](self['getElement'](), String('multiple'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['isMultipleSelect'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,$iter1_idx;
			if (pyjslib['bool'](pyjslib['op_eq'](pyjamas['ui']['ListBox']['DOM']['eventGetType'](event), String('change')))) {
				$iter1_iter = self['changeListeners'];
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					if (pyjslib['bool'](pyjslib['hasattr'](listener, String('onChange')))) {
						listener['onChange'](self);
					}
					else {
						listener(self);
					}
				}
			}
			else {
				pyjamas['ui']['ListBox']['FocusWidget']['onBrowserEvent'](self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeChangeListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['changeListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeChangeListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeItem', function(idx) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				idx = arguments[1];
			}
			var child;
			child = pyjamas['ui']['ListBox']['DOM']['getChild'](self['getElement'](), idx);
			pyjamas['ui']['ListBox']['DOM']['removeChild'](self['getElement'](), child);
			return null;
		}
	, 1, [null,null,['self'],['idx']]);
		$cls_definition['removeItem'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setItemSelected', function(index, selected) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				selected = arguments[2];
			}
			var $or1,option,$or2,$and1,$and2;
			self['checkIndex'](index);
			option = pyjamas['ui']['ListBox']['DOM']['getChild'](self['getElement'](), index);
			pyjamas['ui']['ListBox']['DOM']['setIntAttribute'](option, String('selected'), (pyjslib['bool']($or1=(pyjslib['bool']($and1=selected)?1:$and1))?$or1:0));
			return null;
		}
	, 1, [null,null,['self'],['index'],['selected']]);
		$cls_definition['setItemSelected'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setMultipleSelect', function(multiple) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				multiple = arguments[1];
			}

			pyjamas['ui']['ListBox']['DOM']['setBooleanAttribute'](self['getElement'](), String('multiple'), multiple);
			return null;
		}
	, 1, [null,null,['self'],['multiple']]);
		$cls_definition['setMultipleSelect'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			pyjamas['ui']['ListBox']['DOM']['setAttribute'](self['getElement'](), String('name'), name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setSelectedIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			pyjamas['ui']['ListBox']['DOM']['setIntAttribute'](self['getElement'](), String('selectedIndex'), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setSelectedIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'selectValue', function(value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				value = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,n,$iter2_idx,$iter2_array;
			$iter2_iter = pyjslib['range'](self['getItemCount']());
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				n = $iter2_nextval;
				if (pyjslib['bool'](pyjslib['op_eq'](self['getValue'](n), value))) {
					self['setSelectedIndex'](n);
					return n;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['value']]);
		$cls_definition['selectValue'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'selectItem', function(item) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				item = arguments[1];
			}
			var $iter3_idx,$iter3_type,n,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = pyjslib['range'](self['getItemCount']());
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				n = $iter3_nextval;
				if (pyjslib['bool'](pyjslib['op_eq'](self['getItemText'](n), item))) {
					self['setSelectedIndex'](n);
					return n;
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['item']]);
		$cls_definition['selectItem'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setItemText', function(index, text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				text = arguments[2];
			}

			self['checkIndex'](index);
			if (pyjslib['bool']((text === null))) {
				console['error'](String('Cannot set an option to have null text'));
				return null;
			}
			pyjamas['ui']['ListBox']['DOM']['setOptionText'](self['getElement'](), text, index);
			return null;
		}
	, 1, [null,null,['self'],['index'],['text']]);
		$cls_definition['setItemText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setValue', function(index, value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
				value = arguments[2];
			}
			var option;
			self['checkIndex'](index);
			option = pyjamas['ui']['ListBox']['DOM']['getChild'](self['getElement'](), index);
			pyjamas['ui']['ListBox']['DOM']['setAttribute'](option, String('value'), value);
			return null;
		}
	, 1, [null,null,['self'],['index'],['value']]);
		$cls_definition['setValue'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setVisibleItemCount', function(visibleItems) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				visibleItems = arguments[1];
			}

			pyjamas['ui']['ListBox']['DOM']['setIntAttribute'](self['getElement'](), String('size'), visibleItems);
			return null;
		}
	, 1, [null,null,['self'],['visibleItems']]);
		$cls_definition['setVisibleItemCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'checkIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var elem,$or3,$or4;
			elem = self['getElement']();
			if (pyjslib['bool']((pyjslib['bool']($or3=(pyjslib['cmp'](index, 0) == -1))?$or3:(((pyjslib['cmp'](index, pyjamas['ui']['ListBox']['DOM']['getChildCount'](elem)))|1) == 1)))) {
			}
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['checkIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSelectedItemText', function(ignore_first_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ignore_first_value = arguments[1];
			}
			if (typeof ignore_first_value == 'undefined') ignore_first_value=arguments.callee.__args__[3][1];
			var i,$iter4_nextval,selected,$iter4_idx,$iter4_type,$iter4_array,$iter4_iter,start_idx;
			selected = pyjslib['list']([]);
			if (pyjslib['bool'](ignore_first_value)) {
				start_idx = 1;
			}
			else {
				start_idx = 0;
			}
			$iter4_iter = pyjslib['range'](start_idx, self['getItemCount']());
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				i = $iter4_nextval;
				if (pyjslib['bool'](self['isItemSelected'](i))) {
					selected['append'](self['getItemText'](i));
				}
			}
			return selected;
		}
	, 1, [null,null,['self'],['ignore_first_value', false]]);
		$cls_definition['getSelectedItemText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSelectedValues', function(ignore_first_value) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				ignore_first_value = arguments[1];
			}
			if (typeof ignore_first_value == 'undefined') ignore_first_value=arguments.callee.__args__[3][1];
			var $iter5_nextval,i,$iter5_array,selected,$iter5_iter,$iter5_idx,$iter5_type,start_idx;
			selected = pyjslib['list']([]);
			if (pyjslib['bool'](ignore_first_value)) {
				start_idx = 1;
			}
			else {
				start_idx = 0;
			}
			$iter5_iter = pyjslib['range'](start_idx, self['getItemCount']());
			if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
				$iter5_type = 0;
			} else {
				$iter5_iter = $iter5_iter.__iter__();
				$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter5_idx = 0;
			while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
				i = $iter5_nextval;
				if (pyjslib['bool'](self['isItemSelected'](i))) {
					selected['append'](self['getValue'](i));
				}
			}
			return selected;
		}
	, 1, [null,null,['self'],['ignore_first_value', false]]);
		$cls_definition['getSelectedValues'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setItemTextSelection', function(values) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}
			var $iter6_idx,$iter6_type,i,$iter6_array,$iter6_iter,$iter6_nextval;
			if (pyjslib['bool'](!pyjslib['bool'](values))) {
				values = pyjslib['list']([]);
				self['setSelectedIndex'](0);
			}
			$iter6_iter = pyjslib['range'](0, self['getItemCount']());
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				if (pyjslib['bool'](values.__contains__(self['getItemText'](i)))) {
					self['setItemSelected'](i, String('selected'));
				}
				else {
					self['setItemSelected'](i, String(''));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['setItemTextSelection'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setValueSelection', function(values) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				values = arguments[1];
			}
			var $iter7_nextval,i,$iter7_iter,$iter7_array,$iter7_idx,$iter7_type;
			if (pyjslib['bool'](!pyjslib['bool'](values))) {
				values = pyjslib['list']([]);
				self['setSelectedIndex'](0);
			}
			$iter7_iter = pyjslib['range'](0, self['getItemCount']());
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):pyjslib['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				i = $iter7_nextval;
				if (pyjslib['bool'](values.__contains__(self['getValue'](i)))) {
					self['setItemSelected'](i, String('selected'));
				}
				else {
					self['setItemSelected'](i, String(''));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['values']]);
		$cls_definition['setValueSelection'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['ListBox']['FocusWidget']));
	})();
	pyjamas['ui']['ListBox']['Factory']['registerClass'](String('pyjamas.ui.ListBox'), pyjamas['ui']['ListBox']['ListBox']);
	return this;
}; /* end pyjamas.ui.ListBox */


/* end module: pyjamas.ui.ListBox */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'FocusWidget.FocusWidget', 'FocusWidget', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
