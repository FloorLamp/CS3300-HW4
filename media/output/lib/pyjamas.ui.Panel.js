/* start module: pyjamas.ui.Panel */
$pyjs.loaded_modules['pyjamas.ui.Panel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Panel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Panel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['Panel'] = $pyjs.loaded_modules["pyjamas.ui.Panel"];
	pyjamas['ui']['Panel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Panel';
	var __name__ = pyjamas['ui']['Panel'].__name__ = __mod_name__;
	var Panel = pyjamas['ui']['Panel'];


	pyjamas['ui']['Panel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['Panel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['Panel']['Widget'] = pyjslib['___import___']('Widget.Widget', 'pyjamas.ui', null, false);
	pyjamas['ui']['Panel']['Panel'] = (function(){
		var $cls_instance = $pyjs__class_instance('Panel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '0edb5ae60aba152b769435de91d1e870';
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

			self.children = pyjslib['list']([]);
			$pyjs_kwargs_call(pyjamas['ui']['Panel']['Widget'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'add', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			console['error'](String('This panel does not support no-arg add()'));
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clear', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter2_nextval,$iter1_nextval,$iter1_type,$iter2_iter,$iter1_iter,$iter2_idx,$iter1_array,child,$iter2_type,children,$iter2_array,$iter1_idx;
			children = pyjslib['list']([]);
			$iter1_iter = self['children'];
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				child = $iter1_nextval;
				children['append'](child);
			}
			$iter2_iter = children;
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				child = $iter2_nextval;
				self['remove'](child);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['clear'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'disown', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var parentElement,element;
			if (pyjslib['bool'](!pyjslib['op_eq'](widget['getParent'](), self))) {
				console['error'](String('widget %o is not a child of this panel %o'), widget, self);
			}
			else {
				element = widget['getElement']();
				widget['setParent'](null);
				parentElement = pyjamas['ui']['Panel']['DOM']['getParent'](element);
				if (pyjslib['bool'](parentElement)) {
					pyjamas['ui']['Panel']['DOM']['removeChild'](parentElement, element);
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['disown'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'adopt', function(widget, container) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
			}

			if (pyjslib['bool'](container)) {
				widget['removeFromParent']();
				pyjamas['ui']['Panel']['DOM']['appendChild'](container, widget['getElement']());
			}
			widget['setParent'](self);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container']]);
		$cls_definition['adopt'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'doAttachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var child,$iter3_idx,$iter3_type,$iter3_iter,$iter3_array,$iter3_nextval;
			$iter3_iter = self;
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				child = $iter3_nextval;
				child['onAttach']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'doDetachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter4_nextval,$iter4_idx,$iter4_type,child,$iter4_array,$iter4_iter;
			$iter4_iter = self;
			if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
				$iter4_type = 0;
			} else {
				$iter4_iter = $iter4_iter.__iter__();
				$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter4_idx = 0;
			while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
				child = $iter4_nextval;
				child['onDetach']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__iter__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['children']['__iter__']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['__iter__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['Panel']['Widget']));
	})();
	pyjamas['ui']['Panel']['Factory']['registerClass'](String('pyjamas.ui.Panel'), pyjamas['ui']['Panel']['Panel']);
	return this;
}; /* end pyjamas.ui.Panel */


/* end module: pyjamas.ui.Panel */


/*
PYJS_DEPS: ['pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'Widget.Widget', 'Widget']
*/
