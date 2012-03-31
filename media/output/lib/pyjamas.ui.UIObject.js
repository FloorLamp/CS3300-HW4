/* start module: pyjamas.ui.UIObject */
$pyjs.loaded_modules['pyjamas.ui.UIObject'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.UIObject'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.UIObject'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['UIObject'] = $pyjs.loaded_modules["pyjamas.ui.UIObject"];
	pyjamas['ui']['UIObject'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.UIObject';
	var __name__ = pyjamas['ui']['UIObject'].__name__ = __mod_name__;
	var UIObject = pyjamas['ui']['UIObject'];


	pyjamas['ui']['UIObject']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['UIObject']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['UIObject']['Window'] = pyjslib['___import___']('pyjamas.Window', 'pyjamas.ui', null, false);
	pyjamas['ui']['UIObject']['Applier'] = pyjslib['___import___']('pyjamas.ui.Applier', 'pyjamas.ui', null, false);
	pyjamas['ui']['UIObject']['setStyleName'] = function(element, style, add) {
		var lastPos,end,$sub3,$sub2,$sub1,$and2,$sub4,$or4,begin,$or1,$or3,$or2,$and1,oldStyle,$add10,$add11,$add12,last,idx,$add2,$add3,$add1,$add6,$add7,$add4,$add5,$add8,$add9;
		oldStyle = pyjamas['ui']['UIObject']['DOM']['getAttribute'](element, String('className'));
		if (pyjslib['bool']((oldStyle === null))) {
			oldStyle = String('');
		}
		idx = oldStyle['find'](style);
		lastPos = pyjslib['len'](oldStyle);
		while (pyjslib['bool'](!pyjslib['op_eq'](idx, (typeof ($usub1=1)=='number'?
			-$usub1:
			pyjslib['op_usub']($usub1))))) {
			if (pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](idx, 0))?$or1:pyjslib['op_eq'](oldStyle.__getitem__((typeof ($sub1=idx)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2))), String(' '))))) {
				last = (typeof ($add1=idx)==typeof ($add2=pyjslib['len'](style)) && (typeof $add1=='number'||typeof $add1=='string')?
					$add1+$add2:
					pyjslib['op_add']($add1,$add2));
				if (pyjslib['bool']((pyjslib['bool']($or3=pyjslib['op_eq'](last, lastPos))?$or3:(pyjslib['bool']($and1=(pyjslib['cmp'](last, lastPos) == -1))?pyjslib['op_eq'](oldStyle.__getitem__(last), String(' ')):$and1)))) {
					break;
				}
			}
			idx = oldStyle['find'](style, (typeof ($add3=idx)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4)));
		}
		if (pyjslib['bool'](add)) {
			if (pyjslib['bool'](pyjslib['op_eq'](idx, (typeof ($usub2=1)=='number'?
				-$usub2:
				pyjslib['op_usub']($usub2))))) {
				pyjamas['ui']['UIObject']['DOM']['setAttribute'](element, String('className'), (typeof ($add7=(typeof ($add5=oldStyle)==typeof ($add6=String(' ')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					pyjslib['op_add']($add5,$add6)))==typeof ($add8=style) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					pyjslib['op_add']($add7,$add8)));
			}
		}
		else {
			if (pyjslib['bool'](!pyjslib['op_eq'](idx, (typeof ($usub3=1)=='number'?
				-$usub3:
				pyjslib['op_usub']($usub3))))) {
				if (pyjslib['bool'](pyjslib['op_eq'](idx, 0))) {
					begin = String('');
				}
				else {
					begin = pyjslib['slice'](oldStyle, 0, (typeof ($sub3=idx)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
						$sub3-$sub4:
						pyjslib['op_sub']($sub3,$sub4)));
				}
				end = pyjslib['slice'](oldStyle, (typeof ($add9=idx)==typeof ($add10=pyjslib['len'](style)) && (typeof $add9=='number'||typeof $add9=='string')?
					$add9+$add10:
					pyjslib['op_add']($add9,$add10)), null);
				pyjamas['ui']['UIObject']['DOM']['setAttribute'](element, String('className'), (typeof ($add11=begin)==typeof ($add12=end) && (typeof $add11=='number'||typeof $add11=='string')?
					$add11+$add12:
					pyjslib['op_add']($add11,$add12)));
			}
		}
		return null;
	};
	pyjamas['ui']['UIObject']['setStyleName'].__name__ = 'setStyleName';

	pyjamas['ui']['UIObject']['setStyleName'].__bind_type__ = 0;
	pyjamas['ui']['UIObject']['setStyleName'].__args__ = [null,null,['element'],['style'],['add']];
	pyjamas['ui']['UIObject']['UIObject'] = (function(){
		var $cls_instance = $pyjs__class_instance('UIObject');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'ecdc8596756d663b181cf0e2548da572';
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

			$pyjs_kwargs_call(pyjamas['ui']['UIObject']['Applier'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getAbsoluteLeft', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['UIObject']['DOM']['getAbsoluteLeft'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteLeft'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getAbsoluteTop', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas['ui']['UIObject']['DOM']['getAbsoluteTop'](self['getElement']());
		}
	, 1, [null,null,['self']]);
		$cls_definition['getAbsoluteTop'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getElement', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return ((($attr1=self['element']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'element'):
						self['element']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getOffsetHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr3,$attr4;
			return pyjamas['ui']['UIObject']['DOM']['getIntAttribute'](((($attr3=self['element']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'element'):
						self['element']), String('offsetHeight'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetHeight'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getOffsetWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr5,$attr6;
			return pyjamas['ui']['UIObject']['DOM']['getIntAttribute'](((($attr5=self['element']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'element'):
						self['element']), String('offsetWidth'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getOffsetWidth'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getStyleName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr8,$attr7;
			return pyjamas['ui']['UIObject']['DOM']['getAttribute'](((($attr7=self['element']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'element'):
						self['element']), String('className'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getStylePrimaryName', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var fullClassName;
			fullClassName = self['getStyleName']();
			if (pyjslib['bool'](fullClassName)) {
				return fullClassName['$$split']().__getitem__(0);
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['getStylePrimaryName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getTitle', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr10;
			return pyjamas['ui']['UIObject']['DOM']['getAttribute'](((($attr9=self['element']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'element'):
						self['element']), String('title'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getTitle'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setElement', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}

			self.element = element;
			return null;
		}
	, 1, [null,null,['self'],['element']]);
		$cls_definition['setElement'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setHeight', function(height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				height = arguments[1];
			}
			var $attr12,$attr11;
			pyjamas['ui']['UIObject']['DOM']['setStyleAttribute'](((($attr11=self['element']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'element'):
						self['element']), String('height'), pyjslib['str'](height));
			return null;
		}
	, 1, [null,null,['self'],['height']]);
		$cls_definition['setHeight'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getHeight', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr14,$attr13;
			return pyjamas['ui']['UIObject']['DOM']['getStyleAttribute'](((($attr13=self['element']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'element'):
						self['element']), String('height'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getHeight'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setPixelSize', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			if (pyjslib['bool']((((pyjslib['cmp'](width, 0))|1) == 1))) {
				self['setWidth'](pyjslib['sprintf'](String('%dpx'), width));
			}
			if (pyjslib['bool']((((pyjslib['cmp'](height, 0))|1) == 1))) {
				self['setHeight'](pyjslib['sprintf'](String('%dpx'), height));
			}
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setPixelSize'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setSize', function(width, height) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
				height = arguments[2];
			}

			self['setWidth'](width);
			self['setHeight'](height);
			return null;
		}
	, 1, [null,null,['self'],['width'],['height']]);
		$cls_definition['setSize'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addStyleName', function(style) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}
			var $attr15,$attr16;
			self['setStyleName'](((($attr15=self['element']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'element'):
						self['element']), style, true);
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['addStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addStyleDependentName', function(styleSuffix) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleSuffix = arguments[1];
			}
			var $add14,$add15,$add16,$add13;
			self['addStyleName']((typeof ($add15=(typeof ($add13=self['getStylePrimaryName']())==typeof ($add14=String('-')) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				pyjslib['op_add']($add13,$add14)))==typeof ($add16=styleSuffix) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				pyjslib['op_add']($add15,$add16)));
			return null;
		}
	, 1, [null,null,['self'],['styleSuffix']]);
		$cls_definition['addStyleDependentName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeStyleName', function(style) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				style = arguments[1];
			}
			var $attr17,$attr18;
			self['setStyleName'](((($attr17=self['element']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'element'):
						self['element']), style, false);
			return null;
		}
	, 1, [null,null,['self'],['style']]);
		$cls_definition['removeStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeStyleDependentName', function(styleSuffix) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				styleSuffix = arguments[1];
			}
			var $add20,$add17,$add18,$add19;
			self['removeStyleName']((typeof ($add19=(typeof ($add17=self['getStylePrimaryName']())==typeof ($add18=String('-')) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				pyjslib['op_add']($add17,$add18)))==typeof ($add20=styleSuffix) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				pyjslib['op_add']($add19,$add20)));
			return null;
		}
	, 1, [null,null,['self'],['styleSuffix']]);
		$cls_definition['removeStyleDependentName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setStyleName', function(element, style, add) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				style = arguments[2];
				add = arguments[3];
			}
			if (typeof style == 'undefined') style=arguments.callee.__args__[4][1];
			if (typeof add == 'undefined') add=arguments.callee.__args__[5][1];
			var $attr20,$attr19;
			if (pyjslib['bool']((style === null))) {
				style = element;
				pyjamas['ui']['UIObject']['DOM']['setAttribute'](((($attr19=self['element']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
							pyjslib['getattr']($attr20, 'element'):
							self['element']), String('className'), style);
				return null;
			}
			pyjamas['ui']['UIObject']['setStyleName'](element, style, add);
			return null;
		}
	, 1, [null,null,['self'],['element'],['style', null],['add', true]]);
		$cls_definition['setStyleName'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setTitle', function(title) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				title = arguments[1];
			}
			var $attr21,$attr22;
			pyjamas['ui']['UIObject']['DOM']['setAttribute'](((($attr21=self['element']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'element'):
						self['element']), String('title'), title);
			return null;
		}
	, 1, [null,null,['self'],['title']]);
		$cls_definition['setTitle'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setWidth', function(width) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				width = arguments[1];
			}
			var $attr23,$attr24;
			pyjamas['ui']['UIObject']['DOM']['setStyleAttribute'](((($attr23=self['element']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'element'):
						self['element']), String('width'), pyjslib['str'](width));
			return null;
		}
	, 1, [null,null,['self'],['width']]);
		$cls_definition['setWidth'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getWidth', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr25,$attr26;
			return pyjamas['ui']['UIObject']['DOM']['getStyleAttribute'](((($attr25=self['element']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'element'):
						self['element']), String('width'));
		}
	, 1, [null,null,['self']]);
		$cls_definition['getWidth'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'sinkEvents', function(eventBitsToAdd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToAdd = arguments[1];
			}
			var $attr28,$attr27;
			if (pyjslib['bool'](((($attr27=self['element']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'element'):
						self['element']))) {
				pyjamas['ui']['UIObject']['DOM']['sinkEvents'](self['getElement'](), (eventBitsToAdd)|(pyjamas['ui']['UIObject']['DOM']['getEventsSunk'](self['getElement']())));
			}
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToAdd']]);
		$cls_definition['sinkEvents'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setzIndex', function(index) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				index = arguments[1];
			}
			var $attr30,$attr29;
			pyjamas['ui']['UIObject']['DOM']['setIntStyleAttribute'](((($attr29=self['element']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'element'):
						self['element']), String('zIndex'), index);
			return null;
		}
	, 1, [null,null,['self'],['index']]);
		$cls_definition['setzIndex'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'isVisible', function(element) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
			}
			if (typeof element == 'undefined') element=arguments.callee.__args__[3][1];
			var err,$attr33,$attr32,$attr31,$pyjs_try_err,$attr34;
			if (pyjslib['bool'](!pyjslib['bool'](element))) {
				element = ((($attr31=self['element']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
							pyjslib['getattr']($attr32, 'element'):
							self['element']);
			}
			try {
				return !pyjslib['op_eq'](((($attr33=element['style']['display']) !== null & ($attr34=element['style']).__is_instance__) && typeof $attr33 == 'function'?
							pyjslib['getattr']($attr34, 'display'):
							element['style']['display']), String('none'));
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.ui.UIObject, try_lineno: 171};
				if (($pyjs_try_err_name == pyjslib['AttributeError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['AttributeError'])) {
					$pyjs.__last_exception__.except_lineno = 173;
					err = $pyjs_try_err;
					return true;
				} else { throw $pyjs_try_err; }
			}
			return null;
		}
	, 1, [null,null,['self'],['element', null]]);
		$cls_definition['isVisible'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setVisible', function(element, visible) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				element = arguments[1];
				visible = arguments[2];
			}
			if (typeof visible == 'undefined') visible=arguments.callee.__args__[4][1];
			var $attr36,$attr35;
			if (pyjslib['bool']((visible === null))) {
				visible = element;
				element = ((($attr35=self['element']) !== null & ($attr36=self).__is_instance__) && typeof $attr35 == 'function'?
							pyjslib['getattr']($attr36, 'element'):
							self['element']);
			}
			if (pyjslib['bool'](visible)) {
				pyjamas['ui']['UIObject']['DOM']['setStyleAttribute'](element, String('display'), String(''));
			}
			else {
				pyjamas['ui']['UIObject']['DOM']['setStyleAttribute'](element, String('display'), String('none'));
			}
			return null;
		}
	, 1, [null,null,['self'],['element'],['visible', null]]);
		$cls_definition['setVisible'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'unsinkEvents', function(eventBitsToRemove) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				eventBitsToRemove = arguments[1];
			}

			pyjamas['ui']['UIObject']['DOM']['sinkEvents'](self['getElement'](), (~(eventBitsToRemove))&(pyjamas['ui']['UIObject']['DOM']['getEventsSunk'](self['getElement']())));
			return null;
		}
	, 1, [null,null,['self'],['eventBitsToRemove']]);
		$cls_definition['unsinkEvents'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['UIObject']['Applier']));
	})();
	pyjamas['ui']['UIObject']['Factory']['registerClass'](String('pyjamas.ui.UIObject'), pyjamas['ui']['UIObject']['UIObject']);
	return this;
}; /* end pyjamas.ui.UIObject */


/* end module: pyjamas.ui.UIObject */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'pyjamas.Factory', 'pyjamas.Window', 'pyjamas.ui.Applier', 'pyjamas.ui']
*/
