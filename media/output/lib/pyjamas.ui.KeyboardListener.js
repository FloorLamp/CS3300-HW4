/* start module: pyjamas.ui.KeyboardListener */
$pyjs.loaded_modules['pyjamas.ui.KeyboardListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.KeyboardListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.KeyboardListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['KeyboardListener'] = $pyjs.loaded_modules["pyjamas.ui.KeyboardListener"];
	pyjamas['ui']['KeyboardListener'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.KeyboardListener';
	var __name__ = pyjamas['ui']['KeyboardListener'].__name__ = __mod_name__;
	var KeyboardListener = pyjamas['ui']['KeyboardListener'];


	pyjamas['ui']['KeyboardListener']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['KeyboardListener']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['KeyboardListener']['KEY_ALT'] = 18;
	pyjamas['ui']['KeyboardListener']['KEY_BACKSPACE'] = 8;
	pyjamas['ui']['KeyboardListener']['KEY_CTRL'] = 17;
	pyjamas['ui']['KeyboardListener']['KEY_DELETE'] = 46;
	pyjamas['ui']['KeyboardListener']['KEY_DOWN'] = 40;
	pyjamas['ui']['KeyboardListener']['KEY_END'] = 35;
	pyjamas['ui']['KeyboardListener']['KEY_ENTER'] = 13;
	pyjamas['ui']['KeyboardListener']['KEY_ESCAPE'] = 27;
	pyjamas['ui']['KeyboardListener']['KEY_HOME'] = 36;
	pyjamas['ui']['KeyboardListener']['KEY_LEFT'] = 37;
	pyjamas['ui']['KeyboardListener']['KEY_PAGEDOWN'] = 34;
	pyjamas['ui']['KeyboardListener']['KEY_PAGEUP'] = 33;
	pyjamas['ui']['KeyboardListener']['KEY_RIGHT'] = 39;
	pyjamas['ui']['KeyboardListener']['KEY_SHIFT'] = 16;
	pyjamas['ui']['KeyboardListener']['KEY_TAB'] = 9;
	pyjamas['ui']['KeyboardListener']['KEY_UP'] = 38;
	pyjamas['ui']['KeyboardListener']['MODIFIER_ALT'] = 4;
	pyjamas['ui']['KeyboardListener']['MODIFIER_CTRL'] = 2;
	pyjamas['ui']['KeyboardListener']['MODIFIER_SHIFT'] = 1;
	pyjamas['ui']['KeyboardListener']['getKeyboardModifiers'] = function(event) {
		var shift,alt,ctrl;
		shift = 0;
		ctrl = 0;
		alt = 0;
		if (pyjslib['bool'](pyjamas['ui']['KeyboardListener']['DOM']['eventGetShiftKey'](event))) {
			shift = pyjamas['ui']['KeyboardListener']['MODIFIER_SHIFT'];
		}
		if (pyjslib['bool'](pyjamas['ui']['KeyboardListener']['DOM']['eventGetCtrlKey'](event))) {
			ctrl = pyjamas['ui']['KeyboardListener']['MODIFIER_CTRL'];
		}
		if (pyjslib['bool'](pyjamas['ui']['KeyboardListener']['DOM']['eventGetAltKey'](event))) {
			alt = pyjamas['ui']['KeyboardListener']['MODIFIER_ALT'];
		}
		return (shift)|(ctrl)|(alt);
	};
	pyjamas['ui']['KeyboardListener']['getKeyboardModifiers'].__name__ = 'getKeyboardModifiers';

	pyjamas['ui']['KeyboardListener']['getKeyboardModifiers'].__bind_type__ = 0;
	pyjamas['ui']['KeyboardListener']['getKeyboardModifiers'].__args__ = [null,null,['event']];
	pyjamas['ui']['KeyboardListener']['fireKeyboardEvent'] = function(listeners, sender, event) {
		var $iter3_type,$iter1_iter,$iter2_type,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,type,$iter1_array,$iter1_nextval,listener,$iter2_idx,$iter2_nextval,$iter3_array,keycode,$iter1_type,modifiers,$iter1_idx,$iter2_array;
		modifiers = pyjamas['ui']['KeyboardListener']['getKeyboardModifiers'](event);
		keycode = pyjamas['ui']['KeyboardListener']['DOM']['eventGetKeyCode'](event);
		type = pyjamas['ui']['KeyboardListener']['DOM']['eventGetType'](event);
		if (pyjslib['bool'](pyjslib['op_eq'](type, String('keydown')))) {
			$iter1_iter = listeners;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				listener = $iter1_nextval;
				listener['onKeyDown'](sender, keycode, modifiers);
			}
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](type, String('keyup')))) {
			$iter2_iter = listeners;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				listener = $iter2_nextval;
				listener['onKeyUp'](sender, keycode, modifiers);
			}
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](type, String('keypress')))) {
			$iter3_iter = listeners;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				listener = $iter3_nextval;
				listener['onKeyPress'](sender, keycode, modifiers);
			}
		}
		return null;
	};
	pyjamas['ui']['KeyboardListener']['fireKeyboardEvent'].__name__ = 'fireKeyboardEvent';

	pyjamas['ui']['KeyboardListener']['fireKeyboardEvent'].__bind_type__ = 0;
	pyjamas['ui']['KeyboardListener']['fireKeyboardEvent'].__args__ = [null,null,['listeners'],['sender'],['event']];
	pyjamas['ui']['KeyboardListener']['KEYBOARD_EVENTS'] = pyjslib['list']([String('keydown'), String('keyup'), String('keypress')]);
	pyjamas['ui']['KeyboardListener']['KeyboardHandler'] = (function(){
		var $cls_instance = $pyjs__class_instance('KeyboardHandler');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'ea6caf4abeaf78f9cbaff7ddf9d0a15c';
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			self._keyboardListeners = pyjslib['list']([]);
			self['sinkEvents'](((($attr1=pyjamas['ui']['KeyboardListener']['Event']['KEYEVENTS']) !== null & ($attr2=pyjamas['ui']['KeyboardListener']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'KEYEVENTS'):
						pyjamas['ui']['KeyboardListener']['Event']['KEYEVENTS']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr3,type,$attr4;
			type = pyjamas['ui']['KeyboardListener']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['list']([String('keydown'), String('keyup'), String('keypress')]).__contains__(type))) {
				pyjamas['ui']['KeyboardListener']['fireKeyboardEvent'](((($attr3=self['_keyboardListeners']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, '_keyboardListeners'):
							self['_keyboardListeners']), self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addKeyboardListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_keyboardListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addKeyboardListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeKeyboardListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_keyboardListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeKeyboardListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onKeyDown', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyDown'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onKeyUp', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyUp'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onKeyPress', function(sender, keycode, modifiers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				keycode = arguments[2];
				modifiers = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['keycode'],['modifiers']]);
		$cls_definition['onKeyPress'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.ui.KeyboardListener */


/* end module: pyjamas.ui.KeyboardListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
