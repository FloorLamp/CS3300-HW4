/* start module: pyjamas.ui.Widget */
$pyjs.loaded_modules['pyjamas.ui.Widget'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Widget'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Widget'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['Widget'] = $pyjs.loaded_modules["pyjamas.ui.Widget"];
	pyjamas['ui']['Widget'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Widget';
	var __name__ = pyjamas['ui']['Widget'].__name__ = __mod_name__;
	var Widget = pyjamas['ui']['Widget'];


	pyjamas['ui']['Widget']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['log'] = pyjslib['___import___']('pyjamas.log', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['UIObject'] = pyjslib['___import___']('UIObject.UIObject', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['Event'] = pyjslib['___import___']('pyjamas.ui.Event', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['ClickHandler'] = pyjslib['___import___']('ClickListener.ClickHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['FocusHandler'] = pyjslib['___import___']('FocusListener.FocusHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['KeyboardHandler'] = pyjslib['___import___']('KeyboardListener.KeyboardHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['MouseHandler'] = pyjslib['___import___']('MouseListener.MouseHandler', 'pyjamas.ui', null, false);
	pyjamas['ui']['Widget']['Widget'] = (function(){
		var $cls_instance = $pyjs__class_instance('Widget');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '7dda9da4f91f0c60990c66d19f501711';
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

			self.attached = false;
			self.parent = null;
			self.layoutData = null;
			self.contextMenu = null;
			$pyjs_kwargs_call(pyjamas['ui']['Widget']['UIObject'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getLayoutData', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return ((($attr1=self['layoutData']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'layoutData'):
						self['layoutData']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getLayoutData'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getParent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return ((($attr3=self['parent']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'parent'):
						self['parent']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getParent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isAttached', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr5,$attr6;
			return ((($attr5=self['attached']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'attached'):
						self['attached']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['isAttached'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setContextMenu', function(menu) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				menu = arguments[1];
			}
			var $attr9,$attr8,$attr7,$attr10;
			self.contextMenu = menu;
			if (pyjslib['bool'](menu)) {
				self['sinkEvents'](((($attr7=pyjamas['ui']['Widget']['Event']['ONCONTEXTMENU']) !== null & ($attr8=pyjamas['ui']['Widget']['Event']).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, 'ONCONTEXTMENU'):
							pyjamas['ui']['Widget']['Event']['ONCONTEXTMENU']));
			}
			else {
				self['unsinkEvents'](((($attr9=pyjamas['ui']['Widget']['Event']['ONCONTEXTMENU']) !== null & ($attr10=pyjamas['ui']['Widget']['Event']).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'ONCONTEXTMENU'):
							pyjamas['ui']['Widget']['Event']['ONCONTEXTMENU']));
			}
			return null;
		}
	, 1, [null,null,['self'],['menu']]);
		$cls_definition['setContextMenu'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onBrowserEvent', function(event) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				event = arguments[1];
			}
			var type,$attr11,$attr12;
			if (pyjslib['bool'](pyjslib['hasattr'](self, String('_clickListeners')))) {
				pyjamas['ui']['Widget']['ClickHandler']['onBrowserEvent'](self, event);
			}
			if (pyjslib['bool'](pyjslib['hasattr'](self, String('_keyboardListeners')))) {
				pyjamas['ui']['Widget']['KeyboardHandler']['onBrowserEvent'](self, event);
			}
			if (pyjslib['bool'](pyjslib['hasattr'](self, String('_mouseListeners')))) {
				pyjamas['ui']['Widget']['MouseHandler']['onBrowserEvent'](self, event);
			}
			if (pyjslib['bool'](pyjslib['hasattr'](self, String('_focusListeners')))) {
				pyjamas['ui']['Widget']['FocusHandler']['onBrowserEvent'](self, event);
			}
			if (pyjslib['bool']((((($attr11=self['contextMenu']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'contextMenu'):
						self['contextMenu']) === null))) {
				return true;
			}
			type = pyjamas['ui']['Widget']['DOM']['eventGetType'](event);
			if (pyjslib['bool'](pyjslib['op_eq'](type, String('contextmenu')))) {
				pyjamas['ui']['Widget']['DOM']['eventCancelBubble'](event, true);
				pyjamas['ui']['Widget']['DOM']['eventPreventDefault'](event);
				self['contextMenu']['onContextMenu'](self);
				return false;
			}
			return true;
		}
	, 1, [null,null,['self'],['event']]);
		$cls_definition['onBrowserEvent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onLoad', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'doDetachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doDetachChildren'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'doAttachChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['doAttachChildren'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onAttach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if (pyjslib['bool'](self['isAttached']())) {
				return null;
			}
			self.attached = true;
			pyjamas['ui']['Widget']['DOM']['setEventListener'](self['getElement'](), self);
			self['doAttachChildren']();
			self['onLoad']();
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onAttach'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onDetach', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			if (pyjslib['bool'](!pyjslib['bool'](self['isAttached']()))) {
				return null;
			}
			self['doDetachChildren']();
			self.attached = false;
			pyjamas['ui']['Widget']['DOM']['setEventListener'](self['getElement'](), null);
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['onDetach'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setLayoutData', function(layoutData) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				layoutData = arguments[1];
			}

			self.layoutData = layoutData;
			return null;
		}
	, 1, [null,null,['self'],['layoutData']]);
		$cls_definition['setLayoutData'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setParent', function(parent) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				parent = arguments[1];
			}
			var oldparent,$and1,$attr18,$attr15,$attr14,$attr17,$attr16,$and2,$attr13;
			oldparent = ((($attr13=self['parent']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'parent'):
						self['parent']);
			self.parent = parent;
			if (pyjslib['bool']((parent === null))) {
				if (pyjslib['bool']((pyjslib['bool']($and1=(oldparent !== null))?((($attr15=oldparent['attached']) !== null & ($attr16=oldparent).__is_instance__) && typeof $attr15 == 'function'?
							pyjslib['getattr']($attr16, 'attached'):
							oldparent['attached']):$and1))) {
					self['onDetach']();
				}
			}
			else if (pyjslib['bool'](((($attr17=parent['attached']) !== null & ($attr18=parent).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'attached'):
						parent['attached']))) {
				self['onAttach']();
			}
			return null;
		}
	, 1, [null,null,['self'],['parent']]);
		$cls_definition['setParent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeFromParent', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr20,$attr19;
			if (pyjslib['bool'](pyjslib['hasattr'](((($attr19=self['parent']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'parent'):
						self['parent']), String('remove')))) {
				self['parent']['remove'](self);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['removeFromParent'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getID', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['Widget']['DOM']['getAttribute'](self['getElement'](), String('id'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getID'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setID', function(id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}

			pyjamas['ui']['Widget']['DOM']['setAttribute'](self['getElement'](), String('id'), id);
			return null;
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['setID'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['Widget']['UIObject']));
	})();
	pyjamas['ui']['Widget']['Factory']['registerClass'](String('pyjamas.ui.Widget'), pyjamas['ui']['Widget']['Widget']);
	return this;
}; /* end pyjamas.ui.Widget */


/* end module: pyjamas.ui.Widget */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.log', 'UIObject.UIObject', 'UIObject', 'pyjamas.ui.Event', 'pyjamas.ui', 'ClickListener.ClickHandler', 'ClickListener', 'FocusListener.FocusHandler', 'FocusListener', 'KeyboardListener.KeyboardHandler', 'KeyboardListener', 'MouseListener.MouseHandler', 'MouseListener']
*/
