/* start module: pyjamas.ui.ComplexPanel */
$pyjs.loaded_modules['pyjamas.ui.ComplexPanel'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.ComplexPanel'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.ComplexPanel'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['ComplexPanel'] = $pyjs.loaded_modules["pyjamas.ui.ComplexPanel"];
	pyjamas['ui']['ComplexPanel'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.ComplexPanel';
	var __name__ = pyjamas['ui']['ComplexPanel'].__name__ = __mod_name__;
	var ComplexPanel = pyjamas['ui']['ComplexPanel'];


	pyjamas['ui']['ComplexPanel']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['ComplexPanel']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['ComplexPanel']['Panel'] = pyjslib['___import___']('Panel.Panel', 'pyjamas.ui', null, false);
	pyjamas['ui']['ComplexPanel']['ComplexPanel'] = (function(){
		var $cls_instance = $pyjs__class_instance('ComplexPanel');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '5031c90327ea4f9e8c2b11c3c702bde0';
		$method = $pyjs__bind_method($cls_instance, 'add', function(widget, container) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
			}
			var $attr1,$attr2;
			self['insert'](widget, container, pyjslib['len'](((($attr1=self['children']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'children'):
						self['children'])));
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container']]);
		$cls_definition['add'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidgetCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return pyjslib['len'](((($attr3=self['children']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'children'):
						self['children']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidgetCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidget', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr5,$attr6;
			return ((($attr5=self['children']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'children'):
						self['children']).__getitem__(index);
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['getWidget'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidgetIndex', function(child) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				child = arguments[1];
			}

			return self['children']['index'](child);
		}
	, 1, [null,null,['self'],['child']]);
		$cls_definition['getWidgetIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getChildren', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return ((($attr7=self['children']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'children'):
						self['children']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getChildren'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'insert', function(widget, container, beforeIndex) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
				container = arguments[2];
				beforeIndex = arguments[3];
			}

			if (pyjslib['bool'](pyjslib['op_eq'](widget['getParent'](), self))) {
				return null;
			}
			self['adopt'](widget, container);
			self['children']['insert'](beforeIndex, widget);
			return null;
		}
	, 1, [null,null,['self'],['widget'],['container'],['beforeIndex']]);
		$cls_definition['insert'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'remove', function(widget) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				widget = arguments[1];
			}
			var $attr9,$attr10;
			if (pyjslib['bool'](!((($attr9=self['children']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'children'):
						self['children']).__contains__(widget))) {
				return false;
			}
			self['disown'](widget);
			self['children']['remove'](widget);
			return true;
		}
	, 1, [null,null,['self'],['widget']]);
		$cls_definition['remove'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['ComplexPanel']['Panel']));
	})();
	pyjamas['ui']['ComplexPanel']['Factory']['registerClass'](String('pyjamas.ui.ComplexPanel'), pyjamas['ui']['ComplexPanel']['ComplexPanel']);
	return this;
}; /* end pyjamas.ui.ComplexPanel */


/* end module: pyjamas.ui.ComplexPanel */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'Panel.Panel', 'Panel']
*/
