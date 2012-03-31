/* start module: Movie */
var Movie;
$pyjs.loaded_modules['Movie'] = function (__mod_name__) {
	if($pyjs.loaded_modules['Movie'].__was_initialized__) return $pyjs.loaded_modules['Movie'];
	Movie = $pyjs.loaded_modules["Movie"];
	Movie.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'Movie';
	var __name__ = Movie.__name__ = __mod_name__;


	Movie['Movie'] = (function(){
		var $cls_instance = $pyjs__class_instance('Movie');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'aec77b880b7eeed7c3077cc9bab7d29d';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(name, category, rating) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				name = arguments[1];
				category = arguments[2];
				rating = arguments[3];
			}

			self.$$name = name;
			self.category = category;
			self.rating = rating;
			return null;
		}
	, 1, [null,null,['self'],['name'],['category'],['rating']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__str__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr1,$attr2;
			return ((($attr1=self['$$name']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, '$$name'):
						self['$$name']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['__str__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__eq__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $attr9,$attr8,$and1,$attr5,$attr4,$attr7,$attr6,$and2,$attr10,$attr3;
			return (pyjslib['bool']($and1=pyjslib['op_eq'](((($attr3=self['$$name']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '$$name'):
						self['$$name']), ((($attr5=other['$$name']) !== null & ($attr6=other).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, '$$name'):
						other['$$name'])))?pyjslib['op_eq'](((($attr7=self['category']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'category'):
						self['category']), ((($attr9=other['category']) !== null & ($attr10=other).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'category'):
						other['category'])):$and1);
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__eq__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__ne__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $or1,$or2,$attr18,$attr15,$attr14,$attr17,$attr16,$attr11,$attr13,$attr12;
			return (pyjslib['bool']($or1=!pyjslib['op_eq'](((($attr11=self['$$name']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, '$$name'):
						self['$$name']), ((($attr13=other['$$name']) !== null & ($attr14=other).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, '$$name'):
						other['$$name'])))?$or1:!pyjslib['op_eq'](((($attr15=self['category']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'category'):
						self['category']), ((($attr17=other['category']) !== null & ($attr18=other).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'category'):
						other['category'])));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__ne__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__cmp__', function(other) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				other = arguments[1];
			}
			var $or4,$or3,$attr23,$attr20,$attr21,$attr22,$attr19,$attr25,$attr26,$attr24;
			return (pyjslib['bool']($or3=pyjslib['cmp'](((($attr19=self['$$name']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, '$$name'):
						self['$$name']), ((($attr21=other['$$name']) !== null & ($attr22=other).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, '$$name'):
						other['$$name'])))?$or3:pyjslib['cmp'](((($attr23=self['category']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'category'):
						self['category']), ((($attr25=other['category']) !== null & ($attr26=other).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'category'):
						other['category'])));
		}
	, 1, [null,null,['self'],['other']]);
		$cls_definition['__cmp__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end Movie */


/* end module: Movie */


