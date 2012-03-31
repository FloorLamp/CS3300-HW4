/* start module: pyjamas.ui.FocusListener */
$pyjs.loaded_modules['pyjamas.ui.FocusListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.FocusListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.FocusListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['FocusListener'] = $pyjs.loaded_modules["pyjamas.ui.FocusListener"];
	pyjamas['ui']['FocusListener'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FocusListener';
	var __name__ = pyjamas['ui']['FocusListener'].__name__ = __mod_name__;
	var FocusListener = pyjamas['ui']['FocusListener'];


	pyjamas['ui']['FocusListener']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusListener']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['FocusListener']['fireFocusEvent'] = function(listeners, sender, event) {
		var $iter2_nextval,$iter1_nextval,$iter2_iter,$iter1_idx,$iter2_idx,$iter1_iter,listener,$iter1_array,$iter2_type,type,$iter2_array,$iter1_type;
		type = pyjamas['ui']['FocusListener']['DOM']['eventGetType'](event);
		if (pyjslib['bool'](pyjslib['op_eq'](type, String('focus')))) {
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
				listener['onFocus'](sender);
			}
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](type, String('blur')))) {
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
				listener['onLostFocus'](sender);
			}
		}
		return null;
	};
	pyjamas['ui']['FocusListener']['fireFocusEvent'].__name__ = 'fireFocusEvent';

	pyjamas['ui']['FocusListener']['fireFocusEvent'].__bind_type__ = 0;
	pyjamas['ui']['FocusListener']['fireFocusEvent'].__args__ = [null,null,['listeners'],['sender'],['event']];
	pyjamas['ui']['FocusListener']['FOCUS_EVENTS'] = pyjslib['list']([String('focus'), String('blur')]);
	pyjamas['ui']['FocusListener']['FocusHandler'] = (function(){
		var $cls_instance = $pyjs__class_instance('FocusHandler');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '4a31a97c5cefdb364dacada470765da3';
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			self._focusListeners = pyjslib['list']([]);
			self['sinkEvents'](((($attr1=pyjamas['ui']['FocusListener']['Event']['FOCUSEVENTS']) !== null & ($attr2=pyjamas['ui']['FocusListener']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'FOCUSEVENTS'):
						pyjamas['ui']['FocusListener']['Event']['FOCUSEVENTS']));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onFocus'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onLostFocus', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['sender']]);
		$cls_definition['onLostFocus'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $or1,$or2,$attr3,$attr4,type;
			type = pyjamas['ui']['FocusListener']['DOM']['eventGetType'](event);
			if (pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](type, String('blur')))?$or1:pyjslib['op_eq'](type, String('focus'))))) {
				pyjamas['ui']['FocusListener']['fireFocusEvent'](((($attr3=self['_focusListeners']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, '_focusListeners'):
							self['_focusListeners']), self, event);
			}
			return null;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addFocusListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_focusListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addFocusListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeFocusListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_focusListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeFocusListener'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.ui.FocusListener */


/* end module: pyjamas.ui.FocusListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
