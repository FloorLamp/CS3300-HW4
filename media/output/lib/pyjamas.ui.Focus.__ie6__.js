/* start module: pyjamas.ui.Focus */
$pyjs.loaded_modules['pyjamas.ui.Focus'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.Focus'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.Focus'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['Focus'] = $pyjs.loaded_modules["pyjamas.ui.Focus"];
	pyjamas['ui']['Focus'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.Focus';
	var __name__ = pyjamas['ui']['Focus'].__name__ = __mod_name__;
	var Focus = pyjamas['ui']['Focus'];


	pyjamas['ui']['Focus']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['Focus']['blur'] = function(elem) {

		elem['blur']();
		return null;
	};
	pyjamas['ui']['Focus']['blur'].__name__ = 'blur';

	pyjamas['ui']['Focus']['blur'].__bind_type__ = 0;
	pyjamas['ui']['Focus']['blur'].__args__ = [null,null,['elem']];
	pyjamas['ui']['Focus']['createFocusable'] = function() {
		var e;
		e = pyjamas['ui']['Focus']['DOM']['createDiv']();
		e.tabIndex = 0;
		return e;
	};
	pyjamas['ui']['Focus']['createFocusable'].__name__ = 'createFocusable';

	pyjamas['ui']['Focus']['createFocusable'].__bind_type__ = 0;
	pyjamas['ui']['Focus']['createFocusable'].__args__ = [null,null];
	pyjamas['ui']['Focus']['focus'] = function(elem) {


        try {
            elem.focus();
        } catch (e) {
            // Only trap the exception if the attempt was mostly legit
            if (!elem || !elem.focus) {
                // Rethrow the probable NPE or invalid type
                throw e;
            }
        }
    
	};
	pyjamas['ui']['Focus']['focus'].__name__ = 'focus';

	pyjamas['ui']['Focus']['focus'].__bind_type__ = 0;
	pyjamas['ui']['Focus']['focus'].__args__ = [null,null,['elem']];
	pyjamas['ui']['Focus']['getTabIndex'] = function(elem) {
		var $attr1,$attr2;
		return ((($attr1=elem['tabIndex']) !== null & ($attr2=elem).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'tabIndex'):
					elem['tabIndex']);
	};
	pyjamas['ui']['Focus']['getTabIndex'].__name__ = 'getTabIndex';

	pyjamas['ui']['Focus']['getTabIndex'].__bind_type__ = 0;
	pyjamas['ui']['Focus']['getTabIndex'].__args__ = [null,null,['elem']];
	pyjamas['ui']['Focus']['setAccessKey'] = function(elem, key) {

		elem.accessKey = key;
		return null;
	};
	pyjamas['ui']['Focus']['setAccessKey'].__name__ = 'setAccessKey';

	pyjamas['ui']['Focus']['setAccessKey'].__bind_type__ = 0;
	pyjamas['ui']['Focus']['setAccessKey'].__args__ = [null,null,['elem'],['key']];
	pyjamas['ui']['Focus']['setTabIndex'] = function(elem, index) {

		elem.tabIndex = index;
		return null;
	};
	pyjamas['ui']['Focus']['setTabIndex'].__name__ = 'setTabIndex';

	pyjamas['ui']['Focus']['setTabIndex'].__bind_type__ = 0;
	pyjamas['ui']['Focus']['setTabIndex'].__args__ = [null,null,['elem'],['index']];
	pyjamas['ui']['Focus']['FocusMixin'] = (function(){
		var $cls_instance = $pyjs__class_instance('FocusMixin');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'ad21fd7a9e57f007dd04b1edaa28909c';
		$method = $pyjs__bind_method($cls_instance, 'getTabIndex', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['Focus']['getTabIndex'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTabIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setAccessKey', function(key) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				key = arguments[1];
			}

			pyjamas['ui']['Focus']['setAccessKey'](self['getElement'](), key);
			return null;
		}
	, 1, [null,null,['self'],['key']]);
		$cls_definition['setAccessKey'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setFocus', function(focused) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				focused = arguments[1];
			}

			if (pyjslib['bool'](focused)) {
				pyjamas['ui']['Focus']['focus'](self['getElement']());
			}
			else {
				pyjamas['ui']['Focus']['blur'](self['getElement']());
			}
			return null;
		}
	, 1, [null,null,['self'],['focused']]);
		$cls_definition['setFocus'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setTabIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}

			pyjamas['ui']['Focus']['setTabIndex'](self['getElement'](), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setTabIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isEnabled', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,err;
			try {
				return !pyjslib['bool'](pyjamas['ui']['Focus']['DOM']['getBooleanAttribute'](self['getElement'](), String('disabled')));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.ui.Focus, try_lineno: 57};
				if (($pyjs_try_err_name == pyjslib['TypeError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['TypeError'])) {
					$pyjs.__last_exception__.except_lineno = 59;
					err = $pyjs_try_err;
					return true;
				} else if (($pyjs_try_err_name == pyjslib['AttributeError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['AttributeError'])) {
					$pyjs.__last_exception__.except_lineno = 61;
					err = $pyjs_try_err;
					return true;
				} else { throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isEnabled'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setEnabled', function(enabled) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				enabled = arguments[1];
			}

			pyjamas['ui']['Focus']['DOM']['setBooleanAttribute'](self['getElement'](), String('disabled'), !pyjslib['bool'](enabled));
			return null;
		}
	, 1, [null,null,['self'],['enabled']]);
		$cls_definition['setEnabled'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isReadonly', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $pyjs_try_err,err;
			try {
				return !pyjslib['bool'](pyjamas['ui']['Focus']['DOM']['getBooleanAttribute'](self['getElement'](), String('readOnly')));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.ui.Focus, try_lineno: 68};
				if (($pyjs_try_err_name == pyjslib['TypeError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['TypeError'])) {
					$pyjs.__last_exception__.except_lineno = 70;
					err = $pyjs_try_err;
					return true;
				} else if (($pyjs_try_err_name == pyjslib['AttributeError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['AttributeError'])) {
					$pyjs.__last_exception__.except_lineno = 72;
					err = $pyjs_try_err;
					return true;
				} else { throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['isReadonly'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setReadonly', function(readonly) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				readonly = arguments[1];
			}

			pyjamas['ui']['Focus']['DOM']['setBooleanAttribute'](self['getElement'](), String('readOnly'), readonly);
			return null;
		}
	, 1, [null,null,['self'],['readonly']]);
		$cls_definition['setReadonly'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.ui.Focus */


/* end module: pyjamas.ui.Focus */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
