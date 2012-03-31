/* start module: pyjamas.JSONParser */
$pyjs.loaded_modules['pyjamas.JSONParser'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.JSONParser'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.JSONParser'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['JSONParser'] = $pyjs.loaded_modules["pyjamas.JSONParser"];
	pyjamas['JSONParser'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.JSONParser';
	var __name__ = pyjamas['JSONParser'].__name__ = __mod_name__;
	var JSONParser = pyjamas['JSONParser'];


	pyjamas['JSONParser']['math'] = pyjslib['___import___']('math', 'pyjamas');
	pyjamas['JSONParser']['JSONParser'] = (function(){
		var $cls_instance = $pyjs__class_instance('JSONParser');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '29974ab2800c3e545bd79a637a1b3ec9';
		$method = $pyjs__bind_method($cls_instance, 'decode', function(str) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				str = arguments[1];
			}

			return self['jsObjectToPy'](self['parseJSON'](str));
		}
	, 1, [null,null,['self'],['str']]);
		$cls_definition['decode'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'decodeAsObject', function(str) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				str = arguments[1];
			}

			return self['jsObjectToPyObject'](self['parseJSON'](str));
		}
	, 1, [null,null,['self'],['str']]);
		$cls_definition['decodeAsObject'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'encode', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}

			return self['toJSONString'](obj);
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['encode'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'jsObjectToPy', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}


        if (pyjslib.isArray(obj)) {
            for (var i in obj) obj[i] = this.jsObjectToPy(obj[i]);
            obj=new pyjslib.list(obj);
            }
        else if (pyjslib.isObject(obj)) {
            for (var i in obj) obj[i]=this.jsObjectToPy(obj[i]);
            obj=new pyjslib.dict(obj);
            }
        
        return obj;
        
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['jsObjectToPy'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'jsObjectToPyObject', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}


        if (pyjslib.isArray(obj)) {
            for (var i in obj) obj[i] = this.jsObjectToPyObject(obj[i]);
            obj=new pyjslib.list(obj);
            }
        else if (pyjslib.isObject(obj)) {
            if (obj["__jsonclass__"]) {
                var class_name = obj["__jsonclass__"][0];
                delete obj["__jsonclass__"];
                obj = this.jsObjectToPyObject(obj);
                
                obj = $pyjs_kwargs_call(null, eval(class_name), null, obj, [{}]);
                }
            else {
                for (var i in obj) obj[i]=this.jsObjectToPyObject(obj[i]);
                obj=new pyjslib.dict(obj);
                }       
            }
        
        return obj;
        
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['jsObjectToPyObject'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'toJSONString', function(obj) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				obj = arguments[1];
			}


   var m = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        s = {
            array: function (x) {
                var a = ['['], b, f, i, l = x.length, v;
                for (i = 0; i < l; i += 1) {
                    v = x[i];
                    f = s[typeof v];
                    if (f) {
                        v = f(v);
                        if (typeof v == 'string') {
                            if (b) {
                                a[a.length] = ',';
                            }
                            a[a.length] = v;
                            b = true;
                        }
                    }
                }
                a[a.length] = ']';
                return a.join('');
            },
            'boolean': function (x) {
                return String(x);
            },
            'undefined':function (x) {
               return "null";
            },
            'null': function (x) {
                return "null";
            },
            number: function (x) {
                return isFinite(x) ? String(x) : 'null';
            },
            object: function (x) {
                if (x) {
                    if (x.__number__) {
                        return String(x);
                    }
                    if (x instanceof Array) {
                        return s.array(x);
                    }
                    if (x instanceof pyjslib.list) {
                        return s.array(x.__array);
                    }
                    if (x instanceof pyjslib.tuple) {
                        return s.array(x.__array);
                    }
                    if (x instanceof pyjslib.dict) {
                        return s.object(pyjslib.toJSObjects(x));
                    }
                    var a = ['{'], b, f, i, v;
                    for (i in x) {
                        v = x[i];
                        f = s[typeof v];
                        if (f) {
                            v = f(v);
                            if (typeof v == 'string') {
                                if (b) {
                                    a[a.length] = ',';
                                }
                                a.push(s.string(i), ':', v);
                                b = true;
                            }
                        }
                    }
                    a[a.length] = '}';
                    return a.join('');
                }
                return 'null';
            },
            string: function (x) {
                if (/["\\\x00-\x1f]/.test(x)) {
                    x = x.replace(/([\x00-\x1f\\"])/g, function(a, b) {
                        var c = m[b];
                        if (c) {
                            return c;
                        }
                        c = b.charCodeAt();
                        return '\\u00' +
                            math.floor(c / 16).toString(16) +
                            (c % 16).toString(16);
                    });
                }
                return '"' + x + '"';
            }
        };

        typ = typeof obj;
        f=s[typ];
        return f(obj);
        
		}
	, 1, [null,null,['self'],['obj']]);
		$cls_definition['toJSONString'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'parseJSON', function(str) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				str = arguments[1];
			}


        try {
            return (/^("(\\.|[^"\\\n\r])*?"|[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t])+?$/.test(str)) &&
                eval('(' + str + ')');
        } catch (e) {
            return false;
        }
        
		}
	, 1, [null,null,['self'],['str']]);
		$cls_definition['parseJSON'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.JSONParser */


/* end module: pyjamas.JSONParser */


/*
PYJS_DEPS: ['math']
*/
