/* start module: pyjamas.ui.ClickListener */
$pyjs.loaded_modules['pyjamas.ui.ClickListener'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ClickListener'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ClickListener'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['ClickListener'] = $pyjs.loaded_modules["pyjamas.ui.ClickListener"];
	pyjamas['ui']['ClickListener'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ClickListener';
	var __name__ = pyjamas['ui']['ClickListener'].__name__ = __mod_name__;
	var ClickListener = pyjamas['ui']['ClickListener'];


	pyjamas['ui']['ClickListener']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickListener']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['ClickListener']['ClickHandler'] = (function(){
		var $cls_instance = $pyjs__class_instance('ClickHandler');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '0054486208af104a1395339ed04e9737';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(preventDefault) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				preventDefault = arguments[1];
			}
			if (typeof preventDefault == 'undefined') preventDefault=arguments.callee.__args__[3][1];
			var $attr2,$attr1,$attr4,$attr3;
			self._clickListeners = pyjslib['list']([]);
			self._doubleclickListeners = pyjslib['list']([]);
			self._clickPreventDefault = preventDefault;
			self['sinkEvents'](((($attr1=pyjamas['ui']['ClickListener']['Event']['ONCLICK']) !== null & ($attr2=pyjamas['ui']['ClickListener']['Event']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'ONCLICK'):
						pyjamas['ui']['ClickListener']['Event']['ONCLICK']));
			self['sinkEvents'](((($attr3=pyjamas['ui']['ClickListener']['Event']['ONDBLCLICK']) !== null & ($attr4=pyjamas['ui']['ClickListener']['Event']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'ONDBLCLICK'):
						pyjamas['ui']['ClickListener']['Event']['ONDBLCLICK']));
			return null;
		}
	, 1, [null,null,['self'],['preventDefault', false]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

 			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onDoubleClick', function(sender) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
			}
			if (typeof sender == 'undefined') sender=arguments.callee.__args__[3][1];

 			return null;
		}
	, 1, [null,null,['self'],['sender', null]]);
		$cls_definition['onDoubleClick'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addDoubleClickListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_doubleclickListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addDoubleClickListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addClickListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_clickListeners']['append'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['addClickListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var $attr8,$iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$attr5,$attr7,$iter1_iter,listener,$iter2_idx,$iter1_array,$iter2_type,$attr6,type,$iter2_array,$iter1_idx;
			type = pyjamas['ui']['ClickListener']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('click')))) {
				if (pyjslib['bool'](((($attr5=self['_clickPreventDefault']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
							pyjslib['getattr']($attr6, '_clickPreventDefault'):
							self['_clickPreventDefault']))) {
					pyjamas['ui']['ClickListener']['DOM']['eventPreventDefault'](event);
				}
				$iter1_iter = self['_clickListeners'];
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					listener = $iter1_nextval;
					if (pyjslib['bool'](pyjslib['hasattr'](listener, String('onClick')))) {
						listener['onClick'](self);
					}
					else {
						listener(self);
					}
				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](type, String('dblclick')))) {
				if (pyjslib['bool'](((($attr7=self['_clickPreventDefault']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, '_clickPreventDefault'):
							self['_clickPreventDefault']))) {
					pyjamas['ui']['ClickListener']['DOM']['eventPreventDefault'](event);
				}
				$iter2_iter = self['_doubleclickListeners'];
				if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
					$iter2_type = 0;
				} else {
					$iter2_iter = $iter2_iter.__iter__();
					$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter2_idx = 0;
				while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
					listener = $iter2_nextval;
					if (pyjslib['bool'](pyjslib['hasattr'](listener, String('onDoubleClick')))) {
						listener['onDoubleClick'](self);
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
		$method = $pyjs__bind_method($cls_instance, 'removeClickListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_clickListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeClickListener'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeDoubleClickListener', function(listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				listener = arguments[1];
			}

			self['_doubleclickListeners']['remove'](listener);
			return null;
		}
	, 1, [null,null,['self'],['listener']]);
		$cls_definition['removeDoubleClickListener'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	return this;
}; /* end pyjamas.ui.ClickListener */


/* end module: pyjamas.ui.ClickListener */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.ui.Event', 'pyjamas.ui']
*/
