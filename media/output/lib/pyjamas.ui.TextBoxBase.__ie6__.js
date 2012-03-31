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
		$cls_definition.__md5__ = 'a46a8f18fb0512dd74697c6c3f854030';
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


        try {
            var elem = this.getElement();
            var tr = elem.document.selection.createRange();
            if (tr.parentElement().uniqueID != elem.uniqueID)
                return -1;
            return -tr.move("character", -65535);
        }
        catch (e) {
            return 0;
        }
        
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


        try {
            var elem = this.getElement();
            var tr = elem.document.selection.createRange();
            if (tr.parentElement().uniqueID != elem.uniqueID)
                return 0;
            return tr.text.length;
        }
        catch (e) {
            return 0;
        }
        
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
			var $attr9,$attr8,$attr7,$attr10;
			if (pyjslib['bool']((((($attr7=self['currentEvent']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'currentEvent'):
						self['currentEvent']) !== null))) {
				pyjamas['ui']['TextBoxBase']['DOM']['eventSetKeyCode'](((($attr9=self['currentEvent']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'currentEvent'):
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


        try {
            var elem = this.getElement();
            var tr = elem.createTextRange();
            tr.collapse(true);
            tr.moveStart('character', pos);
            tr.moveEnd('character', length);
            tr.select();
        }
        catch (e) {
        }
        
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
