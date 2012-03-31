/* start module: pyjamas.ui.TextBoxBase */
$pyjs.loaded_modules['pyjamas.ui.TextBoxBase'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.TextBoxBase'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.TextBoxBase'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['TextBoxBase'] = $pyjs.loaded_modules["pyjamas.ui.TextBoxBase"];
	pyjamas['ui']['TextBoxBase'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.TextBoxBase';
	var __name__ = pyjamas['ui']['TextBoxBase'].__name__ = __mod_name__;
	var TextBoxBase = pyjamas['ui']['TextBoxBase'];


	pyjamas['ui']['TextBoxBase']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['TextBoxBase']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['TextBoxBase']['FocusWidget'] = pyjslib['___import___']('FocusWidget.FocusWidget', 'pyjamas.ui', null, false);
	pyjamas['ui']['TextBoxBase']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['TextBoxBase']['TextBoxBase'] = (function(){
		var $cls_instance = $pyjs__class_instance('TextBoxBase');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '266e00b6b5aaa701cfc07c930efcebf9';
		$cls_definition['ALIGN_CENTER'] = String('center');
		$cls_definition['ALIGN_JUSTIFY'] = String('justify');
		$cls_definition['ALIGN_LEFT'] = String('left');
		$cls_definition['ALIGN_RIGHT'] = String('right');
		$method = $pyjs__bind_method($cls_instance, '__init__', function(element) {
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
				element = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof element != 'undefined') {
					if (element !== null && typeof element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = element;
						element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			var $attr1,$attr2;
			self.changeListeners = pyjslib['list']([]);
			self.currentEvent = null;
			$pyjs_kwargs_call(pyjamas['ui']['TextBoxBase']['FocusWidget'], '__init__', null, kwargs, [{}, self, element]);
			self['sinkEvents'](((($attr1=pyjamas['ui']['TextBoxBase']['Event']['ONCHANGE']) !== null & ($attr2=pyjamas['ui']['TextBoxBase']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'ONCHANGE'):
						pyjamas['ui']['TextBoxBase']['Event']['ONCHANGE']));
			return null;
		}
	, 1, [null,['kwargs'],['self'],['element']]);
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
		$method = $pyjs__bind_method($cls_instance, 'cancelKey', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr6,$attr5,$attr3,$attr4;
			if (pyjslib['bool']((((($attr3=self['currentEvent']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'currentEvent'):
						self['currentEvent']) !== null))) {
				pyjamas['ui']['TextBoxBase']['DOM']['eventPreventDefault'](((($attr5=self['currentEvent']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
							pyjslib['getattr']($attr6, 'currentEvent'):
							self['currentEvent']));
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cancelKey'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCursorPos', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,err,$attr7,element,$pyjs_try_err;
			element = self['getElement']();
			try {
				return ((($attr7=element['selectionStart']) !== null & ($attr8=element).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'selectionStart'):
							element['selectionStart']);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.ui.TextBoxBase, try_lineno: 43};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 46;
					err = $pyjs_try_err;
					return 0;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getCursorPos'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['TextBoxBase']['DOM']['getAttribute'](self['getElement'](), String('name'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSelectedText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var text,$add2,start,length,$add1;
			start = self['getCursorPos']();
			length = self['getSelectionLength']();
			text = self['getText']();
			return pyjslib['slice'](text, start, (typeof ($add1=start)==typeof ($add2=length) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectedText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getSelectionLength', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,err,element,$pyjs_try_err,$sub2,$sub1,$attr11,$attr10,$attr12;
			element = self['getElement']();
			try {
				return (typeof ($sub1=((($attr9=element['selectionEnd']) !== null & ($attr10=element).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'selectionEnd'):
							element['selectionEnd']))==typeof ($sub2=((($attr11=element['selectionStart']) !== null & ($attr12=element).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'selectionStart'):
							element['selectionStart'])) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					pyjslib['op_sub']($sub1,$sub2));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.ui.TextBoxBase, try_lineno: 59};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 62;
					err = $pyjs_try_err;
					return 0;
				}
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getSelectionLength'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}

			if (pyjslib['bool'](focused)) {
				self['getElement']()['focus']();
			}
			else {
				self['getElement']()['blur']();
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['TextBoxBase']['DOM']['getAttribute'](self['getElement'](), String('value'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_iter,listener,$iter1_array,type,$iter1_idx;
			pyjamas['ui']['TextBoxBase']['FocusWidget']['onBrowserEvent'](self, event);
			type = pyjamas['ui']['TextBoxBase']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('change')))) {
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
		$method = $pyjs__bind_method($cls_instance, 'selectAll', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var length;
			length = pyjslib['len'](self['getText']());
			if (pyjslib['bool']((pyjslib['cmp'](length, 0) == 1))) {
				self['setSelectionRange'](0, length);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['selectAll'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setCursorPos', function(pos) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
			}

			self['setSelectionRange'](pos, 0);
			return null;
		}
	, 1, [null,null,['self'],['pos']]);
		$cls_definition['setCursorPos'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}
			var $attr15,$attr14,$attr16,$attr13;
			if (pyjslib['bool']((((($attr13=self['currentEvent']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'currentEvent'):
						self['currentEvent']) !== null))) {
				pyjamas['ui']['TextBoxBase']['DOM']['eventSetKeyCode'](((($attr15=self['currentEvent']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
							pyjslib['getattr']($attr16, 'currentEvent'):
							self['currentEvent']), key);
			}
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setKey'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setName', function(name) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
			}

			pyjamas['ui']['TextBoxBase']['DOM']['setAttribute'](self['getElement'](), String('name'), name);
			return null;
		}
	, 1, [null,null,['self'],['name']]);
		$cls_definition['setName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setSelectionRange', function(pos, length) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pos = arguments[1];
				length = arguments[2];
			}
			var $add20,$or1,$or2,$add14,$add15,$add16,$add17,$add10,$add11,$add12,$add13,$add18,$add19,element,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
			if (pyjslib['bool']((pyjslib['cmp'](length, 0) == -1))) {
				console['error']((typeof ($add3=String('Length must be a positive integer. Length: '))==typeof ($add4=length) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4)));
			}
			if (pyjslib['bool']((pyjslib['bool']($or1=(pyjslib['cmp'](pos, 0) == -1))?$or1:(pyjslib['cmp']((typeof ($add5=length)==typeof ($add6=pos) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				pyjslib['op_add']($add5,$add6)), pyjslib['len'](self['getText']())) == 1)))) {
				console['error']((typeof ($add17=(typeof ($add15=(typeof ($add13=(typeof ($add9=(typeof ($add7=String('From Index: '))==typeof ($add8=pos) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					pyjslib['op_add']($add7,$add8)))==typeof ($add10=String('  To Index: ')) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					pyjslib['op_add']($add9,$add10)))==typeof ($add14=(typeof ($add11=pos)==typeof ($add12=length) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					pyjslib['op_add']($add11,$add12))) && (typeof $add13=='number'||typeof $add13=='string')?
					$add13+$add14:
					pyjslib['op_add']($add13,$add14)))==typeof ($add16=String('  Text Length: ')) && (typeof $add15=='number'||typeof $add15=='string')?
					$add15+$add16:
					pyjslib['op_add']($add15,$add16)))==typeof ($add18=pyjslib['len'](self['getText']())) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					pyjslib['op_add']($add17,$add18)));
			}
			element = self['getElement']();
			element['setSelectionRange'](pos, (typeof ($add19=pos)==typeof ($add20=length) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				pyjslib['op_add']($add19,$add20)));
			return null;
		}
	, 1, [null,null,['self'],['pos'],['length']]);
		$cls_definition['setSelectionRange'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			pyjamas['ui']['TextBoxBase']['DOM']['setAttribute'](self['getElement'](), String('value'), pyjslib['str'](text));
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setTextAlignment', function(align) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				align = arguments[1];
			}

			pyjamas['ui']['TextBoxBase']['DOM']['setStyleAttribute'](self['getElement'](), String('textAlign'), align);
			return null;
		}
	, 1, [null,null,['self'],['align']]);
		$cls_definition['setTextAlignment'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['TextBoxBase']['FocusWidget']));
	})();
	return this;
}; /* end pyjamas.ui.TextBoxBase */


/* end module: pyjamas.ui.TextBoxBase */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'FocusWidget.FocusWidget', 'FocusWidget', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
