/* start module: pyjamas.ui.RootPanel */
$pyjs.loaded_modules['pyjamas.ui.RootPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.RootPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.RootPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['RootPanel'] = $pyjs.loaded_modules["pyjamas.ui.RootPanel"];
	pyjamas['ui']['RootPanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.RootPanel';
	var __name__ = pyjamas['ui']['RootPanel'].__name__ = __mod_name__;
	var RootPanel = pyjamas['ui']['RootPanel'];


	pyjamas['ui']['RootPanel']['sys'] = pyjslib['___import___']('sys', 'pyjamas.ui');
	pyjamas['ui']['RootPanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['RootPanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['RootPanel']['Window'] = pyjslib['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	pyjamas['ui']['RootPanel']['AbsolutePanel'] = pyjslib['___import___']('AbsolutePanel.AbsolutePanel', 'pyjamas.ui', null, false);
	pyjamas['ui']['RootPanel']['rootPanels'] = pyjslib['dict']([]);
	pyjamas['ui']['RootPanel']['RootPanelManager'] = (function(){
		var $cls_instance = $pyjs__class_instance('RootPanelManager');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '5ece75d9740309fcb642691b764cbfa4';
		$method = $pyjs__bind_method($cls_instance, 'onWindowClosed', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$iter1_array,panel;
			$iter1_iter = pyjamas['ui']['RootPanel']['rootPanels']['itervalues']();
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				panel = $iter1_nextval;
				panel['onDetach']();
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onWindowClosed'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onWindowClosing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onWindowClosing'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pyjamas['ui']['RootPanel']['get'] = function(id) {
		if (typeof id == 'undefined') id=arguments.callee.__args__[2][1];
		var element;
		if (pyjslib['bool'](pyjamas['ui']['RootPanel']['rootPanels']['has_key'](id))) {
			return pyjamas['ui']['RootPanel']['rootPanels'].__getitem__(id);
		}
		element = null;
		if (pyjslib['bool'](id)) {
			element = pyjamas['ui']['RootPanel']['DOM']['getElementById'](id);
			if (pyjslib['bool'](!pyjslib['bool'](element))) {
				return null;
			}
		}
		return pyjamas.ui.RootPanel.manageRootPanel(pyjamas.ui.RootPanel.RootPanelCls(element), id);
	};
	pyjamas['ui']['RootPanel']['get'].__name__ = 'get';

	pyjamas['ui']['RootPanel']['get'].__bind_type__ = 0;
	pyjamas['ui']['RootPanel']['get'].__args__ = [null,null,['id', null]];
	pyjamas['ui']['RootPanel']['manageRootPanel'] = function(panel, id) {
		if (typeof id == 'undefined') id=arguments.callee.__args__[3][1];
		var panelManager;
		if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](pyjamas['ui']['RootPanel']['rootPanels']), 1) == -1))) {
			panelManager = pyjamas['ui']['RootPanel']['RootPanelManager']();
			pyjamas['ui']['RootPanel']['Window']['addWindowCloseListener'](panelManager);
		}
		pyjamas['ui']['RootPanel']['rootPanels'].__setitem__(id, panel);
		return panel;
	};
	pyjamas['ui']['RootPanel']['manageRootPanel'].__name__ = 'manageRootPanel';

	pyjamas['ui']['RootPanel']['manageRootPanel'].__bind_type__ = 0;
	pyjamas['ui']['RootPanel']['manageRootPanel'].__args__ = [null,null,['panel'],['id', null]];
	pyjamas['ui']['RootPanel']['RootPanelCls'] = (function(){
		var $cls_instance = $pyjs__class_instance('RootPanelCls');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '5d1d53714c5515c222ef6b2340afb910';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(Element) {
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
				Element = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof Element != 'undefined') {
					if (Element !== null && typeof Element['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = Element;
						Element = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}
			if (typeof Element == 'undefined') Element=arguments.callee.__args__[3][1];

			if (pyjslib['bool'](Element)) {
				kwargs.__setitem__(String('Element'), Element);
			}
			$pyjs_kwargs_call(pyjamas['ui']['RootPanel']['AbsolutePanel'], '__init__', null, kwargs, [{}, self]);
			if (pyjslib['bool']((Element === null))) {
				Element = self['getBodyElement']();
				self['setElement'](Element);
			}
			self['onAttach']();
			return null;
		}
	, 1, [null,['kwargs'],['self'],['Element', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getBodyElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return ((($attr1=$doc['body']) !== null & ($attr2=$doc).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'body'):
						$doc['body']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getBodyElement'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['RootPanel']['AbsolutePanel']));
	})();
	pyjamas['ui']['RootPanel']['Factory']['registerClass'](String('pyjamas.ui.RootPanelCls'), pyjamas['ui']['RootPanel']['RootPanelCls']);
	pyjamas['ui']['RootPanel']['RootPanel'] = function(id) {
		if (typeof id == 'undefined') id=arguments.callee.__args__[2][1];

		return pyjamas['ui']['RootPanel']['get'](id);
	};
	pyjamas['ui']['RootPanel']['RootPanel'].__name__ = 'RootPanel';

	pyjamas['ui']['RootPanel']['RootPanel'].__bind_type__ = 0;
	pyjamas['ui']['RootPanel']['RootPanel'].__args__ = [null,null,['id', null]];
	return this;
}; /* end pyjamas.ui.RootPanel */


/* end module: pyjamas.ui.RootPanel */


/*
PYJS_DEPS: ['sys', 'pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'pyjamas.Window', 'AbsolutePanel.AbsolutePanel', 'AbsolutePanel']
*/
