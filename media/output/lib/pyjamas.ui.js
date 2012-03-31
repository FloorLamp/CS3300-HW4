/* start module: pyjamas.ui */
$pyjs.loaded_modules['pyjamas.ui'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['ui'] = $pyjs.loaded_modules["pyjamas.ui"];
	pyjamas['ui'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui';
	var __name__ = pyjamas['ui'].__name__ = __mod_name__;
	var ui = pyjamas['ui'];


	pyjamas['ui']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['HasHorizontalAlignment'] = (function(){
		var $cls_instance = $pyjs__class_instance('HasHorizontalAlignment');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e854f19702fb51fc1b2afa0bad0d844f';
		$cls_definition['ALIGN_LEFT'] = String('left');
		$cls_definition['ALIGN_CENTER'] = String('center');
		$cls_definition['ALIGN_RIGHT'] = String('right');
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['ui']['HasVerticalAlignment'] = (function(){
		var $cls_instance = $pyjs__class_instance('HasVerticalAlignment');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'c60780cb7418be8137de7e2c4f45b2b3';
		$cls_definition['ALIGN_TOP'] = String('top');
		$cls_definition['ALIGN_MIDDLE'] = String('middle');
		$cls_definition['ALIGN_BOTTOM'] = String('bottom');
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['ui']['HasAlignment'] = (function(){
		var $cls_instance = $pyjs__class_instance('HasAlignment');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '6ea9f55723a1883bd023f77414c84ea6';
		$cls_definition['ALIGN_BOTTOM'] = String('bottom');
		$cls_definition['ALIGN_MIDDLE'] = String('middle');
		$cls_definition['ALIGN_TOP'] = String('top');
		$cls_definition['ALIGN_CENTER'] = String('center');
		$cls_definition['ALIGN_LEFT'] = String('left');
		$cls_definition['ALIGN_RIGHT'] = String('right');
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['ui']['Applier'] = (function(){
		var $cls_instance = $pyjs__class_instance('Applier');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'e507e1e4f4873370088ecec0977758c5';
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
			var i,args,l,prop,$add2,$add1,$sub2,$sub1,k,fn;
			if (pyjslib['bool'](kwargs)) {
				k = kwargs['keys']();
				l = pyjslib['len'](k);
				i = (typeof ($usub1=1)=='number'?
					-$usub1:
					pyjslib['op_usub']($usub1));
				while (pyjslib['bool']((pyjslib['cmp'](i, (typeof ($sub1=l)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
					$sub1-$sub2:
					pyjslib['op_sub']($sub1,$sub2))) == -1))) {
					i = (typeof ($add1=i)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						pyjslib['op_add']($add1,$add2));
					prop = k.__getitem__(i);
					fn = pyjslib['getattr'](self, pyjslib['sprintf'](String('set%s'), prop), null);
					if (pyjslib['bool'](fn)) {
						args = kwargs.__getitem__(prop);
						if (pyjslib['bool'](pyjslib['isinstance'](args, pyjslib['tuple']))) {
							$pyjs_kwargs_call(null, fn, args, null, [{}]);
						}
						else {
							fn(args);
						}
					}
				}
			}
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pyjamas['ui']['InnerHTML'] = (function(){
		var $cls_instance = $pyjs__class_instance('InnerHTML');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '060e1d91146f12b044a2e366452cbbdc';
		$method = $pyjs__bind_method($cls_instance, 'getHTML', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['DOM']['getInnerHTML'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHTML'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHTML', function(html) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				html = arguments[1];
			}

			pyjamas['ui']['DOM']['setInnerHTML'](self['getElement'](), html);
			return null;
		}
	, 1, [null,null,['self'],['html']]);
		$cls_definition['setHTML'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pyjamas['ui']['InnerText'] = (function(){
		var $cls_instance = $pyjs__class_instance('InnerText');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'c295df508cd3787e8d127530f24b75ed';
		$method = $pyjs__bind_method($cls_instance, 'setText', function(text) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				text = arguments[1];
			}

			pyjamas['ui']['DOM']['setInnerText'](self['getElement'](), text);
			return null;
		}
	, 1, [null,null,['self'],['text']]);
		$cls_definition['setText'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getText', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['DOM']['getInnerText'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getText'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	return this;
}; /* end pyjamas.ui */


/* end module: pyjamas.ui */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
