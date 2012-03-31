/* start module: pyjamas.ui.MouseListener */
$pyjs.loaded_modules['pyjamas.ui.MouseListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.MouseListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.MouseListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['MouseListener'] = $pyjs.loaded_modules["pyjamas.ui.MouseListener"];
	pyjamas['ui']['MouseListener'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.MouseListener';
	var __name__ = pyjamas['ui']['MouseListener'].__name__ = __mod_name__;
	var MouseListener = pyjamas['ui']['MouseListener'];


	pyjamas['ui']['MouseListener']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['MouseListener']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['MouseListener']['fireMouseEvent'] = function(listeners, sender, event) {
		var $iter5_nextval,$iter5_array,$iter3_array,$iter1_iter,$iter5_iter,to_element,$iter4_type,$iter5_type,$iter2_type,$iter4_iter,$iter3_idx,$iter2_iter,$iter3_nextval,$iter3_iter,$iter5_idx,$sub3,$sub2,$sub1,type,$iter1_array,$iter1_nextval,from_element,listener,$iter4_array,$iter2_idx,$iter3_type,$iter1_type,$iter2_nextval,$iter4_nextval,$iter4_idx,$iter1_idx,y,x,$sub4,$iter2_array;
		x = (typeof ($sub1=pyjamas['ui']['MouseListener']['DOM']['eventGetClientX'](event))==typeof ($sub2=pyjamas['ui']['MouseListener']['DOM']['getAbsoluteLeft'](sender['getElement']())) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			pyjslib['op_sub']($sub1,$sub2));
		y = (typeof ($sub3=pyjamas['ui']['MouseListener']['DOM']['eventGetClientY'](event))==typeof ($sub4=pyjamas['ui']['MouseListener']['DOM']['getAbsoluteTop'](sender['getElement']())) && (typeof $sub3=='number'||typeof $sub3=='string')?
			$sub3-$sub4:
			pyjslib['op_sub']($sub3,$sub4));
		type = pyjamas['ui']['MouseListener']['DOM']['eventGetType'](event);
		if (pyjslib['bool'](pyjslib['op_eq'](type, String('mousedown')))) {
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
				listener['onMouseDown'](sender, x, y);
			}
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](type, String('mouseup')))) {
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
				listener['onMouseUp'](sender, x, y);
			}
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](type, String('mousemove')))) {
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
				listener['onMouseMove'](sender, x, y);
			}
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](type, String('mouseover')))) {
			from_element = pyjamas['ui']['MouseListener']['DOM']['eventGetFromElement'](event);
			if (pyjslib['bool'](!pyjslib['bool'](pyjamas['ui']['MouseListener']['DOM']['isOrHasChild'](sender['getElement'](), from_element)))) {
				$iter4_iter = listeners;
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					listener = $iter4_nextval;
					listener['onMouseEnter'](sender);
				}
			}
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](type, String('mouseout')))) {
			to_element = pyjamas['ui']['MouseListener']['DOM']['eventGetToElement'](event);
			if (pyjslib['bool'](!pyjslib['bool'](pyjamas['ui']['MouseListener']['DOM']['isOrHasChild'](sender['getElement'](), to_element)))) {
				$iter5_iter = listeners;
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					listener = $iter5_nextval;
					listener['onMouseLeave'](sender);
				}
			}
		}
		return null;
	};
	pyjamas['ui']['MouseListener']['fireMouseEvent'].__name__ = 'fireMouseEvent';

	pyjamas['ui']['MouseListener']['fireMouseEvent'].__bind_type__ = 0;
	pyjamas['ui']['MouseListener']['fireMouseEvent'].__args__ = [null,null,['listeners'],['sender'],['event']];
	pyjamas['ui']['MouseListener']['MOUSE_EVENTS'] = pyjslib['list']([String('mousedown'), String('mouseup'), String('mousemove'), String('mouseover'), String('mouseout')]);
	pyjamas['ui']['MouseListener']['MouseHandler'] = (function(){
		var $cls_instance = $pyjs__class_instance('MouseHandler');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '44268c0c0b3e88236a8efa9eeab3e5be';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(preventDefault) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				preventDefault = arguments[1];
			}
			if (typeof preventDefault == 'undefined') preventDefault=arguments.callee.__args__[3][1];
			var $attr1,$attr2;
			self._mouseListeners = pyjslib['list']([]);
			self._mousePreventDefault = preventDefault;
			self['sinkEvents'](((($attr1=pyjamas['ui']['MouseListener']['Event']['MOUSEEVENTS']) !== null & ($attr2=pyjamas['ui']['MouseListener']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'MOUSEEVENTS'):
						pyjamas['ui']['MouseListener']['Event']['MOUSEEVENTS']));
			return null;
		}
	, 1, [null,null,['self'],['preventDefault', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr3,$attr5,$attr4,$attr6,type;
			type = pyjamas['ui']['MouseListener']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjamas['ui']['MouseListener']['MOUSE_EVENTS'].__contains__(type))) {
				if (pyjslib['bool'](((($attr3=self['_mousePreventDefault']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, '_mousePreventDefault'):
							self['_mousePreventDefault']))) {
					pyjamas['ui']['MouseListener']['DOM']['eventPreventDefault'](event);
				}
				pyjamas['ui']['MouseListener']['fireMouseEvent'](((($attr5=self['_mouseListeners']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
							pyjslib['getattr']($attr6, '_mouseListeners'):
							self['_mouseListeners']), self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addMouseListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_mouseListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addMouseListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeMouseListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_mouseListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeMouseListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseMove', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseMove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseDown', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseDown'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseUp', function(sender, x, y) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				x = arguments[2];
				y = arguments[3];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender'],['x'],['y']]);
		$cls_definition['onMouseUp'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseEnter', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseEnter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onMouseLeave', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onMouseLeave'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	return this;
}; /* end pyjamas.ui.MouseListener */


/* end module: pyjamas.ui.MouseListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
