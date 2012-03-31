/* start module: pyjamas.JSONService */
$pyjs.loaded_modules['pyjamas.JSONService'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.JSONService'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.JSONService'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['JSONService'] = $pyjs.loaded_modules["pyjamas.JSONService"];
	pyjamas['JSONService'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.JSONService';
	var __name__ = pyjamas['JSONService'].__name__ = __mod_name__;
	var JSONService = pyjamas['JSONService'];
	var $pyjs_try_err;

	pyjamas['JSONService']['sys'] = pyjslib['___import___']('sys', 'pyjamas');
	pyjamas['JSONService']['HTTPRequest'] = pyjslib['___import___']('HTTPRequest.HTTPRequest', 'pyjamas', null, false);
	try {
		pyjamas['JSONService']['dumps'] = pyjslib['___import___']('jsonrpc.json.dumps', 'pyjamas', null, false);
		pyjamas['JSONService']['loads'] = pyjslib['___import___']('jsonrpc.json.loads', 'pyjamas', null, false);
		pyjamas['JSONService']['JSONDecodeException'] = pyjslib['___import___']('jsonrpc.json.JSONDecodeException', 'pyjamas', null, false);
	} catch($pyjs_try_err) {
		var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
		$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.JSONService, try_lineno: 13};
		if (($pyjs_try_err_name == pyjslib['ImportError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['ImportError'])) {
			$pyjs.__last_exception__.except_lineno = 15;
			pyjamas['JSONService']['err'] = $pyjs_try_err;
			pyjamas['JSONService']['JSONParser'] = pyjslib['___import___']('pyjamas.JSONParser.JSONParser', 'pyjamas', null, false);
			pyjamas['JSONService']['parser'] = pyjamas['JSONService']['JSONParser']();
			pyjamas['JSONService']['dumps'] = pyjslib['getattr'](pyjamas['JSONService']['parser'], String('encode'));
			pyjamas['JSONService']['loads'] = pyjslib['getattr'](pyjamas['JSONService']['parser'], String('decodeAsObject'));
			pyjamas['JSONService']['JSONDecodeException'] = null;
		} else { throw $pyjs_try_err; }
	}
	pyjamas['JSONService']['JSONServiceError'] = (function(){
		var $cls_instance = $pyjs__class_instance('JSONServiceError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '62c5f4c34e412f42ff19258f9fe27a4e';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['Exception']));
	})();
	pyjamas['JSONService']['__requestID'] = 0;
	pyjamas['JSONService']['__requestIDPrefix'] = String('ID');
	pyjamas['JSONService']['__lastRequestID'] = null;
	pyjamas['JSONService']['nextRequestID'] = function() {
		var $add3,$add2,$add1,$add4,id;
		pyjamas['JSONService']['__requestID'] = (typeof ($add1=pyjamas['JSONService']['__requestID'])==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			pyjslib['op_add']($add1,$add2));
		id = pyjslib['sprintf'](String('%s%s'), pyjslib['tuple']([pyjamas['JSONService']['__requestIDPrefix'], pyjamas['JSONService']['__requestID']]));
		if (pyjslib['bool'](pyjslib['op_eq'](pyjamas['JSONService']['__lastRequestID'], id))) {
			pyjamas['JSONService']['__requestIDPrefix'] = (typeof ($add3=pyjamas['JSONService']['__requestIDPrefix'])==typeof ($add4=String('_')) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4));
			pyjamas['JSONService']['__requestID'] = 0;
			id = pyjslib['sprintf'](String('%s%s'), pyjslib['tuple']([pyjamas['JSONService']['__requestIDPrefix'], pyjamas['JSONService']['__requestID']]));
		}
		pyjamas['JSONService']['__lastRequestID'] = id;
		return id;
	};
	pyjamas['JSONService']['nextRequestID'].__name__ = 'nextRequestID';

	pyjamas['JSONService']['nextRequestID'].__bind_type__ = 0;
	pyjamas['JSONService']['nextRequestID'].__args__ = [null,null];
	pyjamas['JSONService']['JSONService'] = (function(){
		var $cls_instance = $pyjs__class_instance('JSONService');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'bf1762801efb7b7c781c900e54f67d0f';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(url, handler, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				headers = arguments[3];
			}
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];
			var $attr2,$attr1;
			self.url = url;
			self.handler = handler;
			self.headers = (pyjslib['bool']((headers !== null))? (headers) : (pyjslib['dict']([])));
			if (pyjslib['bool'](!pyjslib['bool'](self['headers']['get'](String('Accept'))))) {
				((($attr1=self['headers']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
							pyjslib['getattr']($attr2, 'headers'):
							self['headers']).__setitem__(String('Accept'), String('application/json'));
			}
			return null;
		}
	, 1, [null,null,['self'],['url'],['handler', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'callMethod', function(method, params, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
				handler = arguments[3];
			}
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[5][1];
			var $attr3,$attr4;
			if (pyjslib['bool']((handler === null))) {
				handler = ((($attr3=self['handler']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, 'handler'):
							self['handler']);
			}
			if (pyjslib['bool']((handler === null))) {
				return self['sendNotify'](method, params);
			}
			else {
				return self['sendRequest'](method, params, handler);
			}
			return null;
		}
	, 1, [null,null,['self'],['method'],['params'],['handler', null]]);
		$cls_definition['callMethod'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onCompletion', function(response) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				response = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['response']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'sendNotify', function(method, params) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
			}
			var $attr8,$attr5,$attr7,$attr6,msg_data,msg;
			msg = pyjslib['dict']([[String('jsonrpc'), String('2.0')], [String('version'), String('1.1')], [String('method'), method], [String('params'), params]]);
			msg_data = pyjamas['JSONService']['dumps'](msg);
			if (pyjslib['bool'](!pyjslib['bool'](pyjamas['JSONService']['HTTPRequest']()['asyncPost'](((($attr5=self['url']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'url'):
						self['url']), msg_data, self, false, String('text/json'), ((($attr7=self['headers']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'headers'):
						self['headers']))))) {
				return (typeof ($usub1=1)=='number'?
					-$usub1:
					pyjslib['op_usub']($usub1));
			}
			return 1;
		}
	, 1, [null,null,['self'],['method'],['params']]);
		$cls_definition['sendNotify'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'sendRequest', function(method, params, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				params = arguments[2];
				handler = arguments[3];
			}
			var $attr9,$attr10,id,msg_data,msg,request_info,$attr11,$attr12;
			id = pyjamas['JSONService']['nextRequestID']();
			msg = pyjslib['dict']([[String('jsonrpc'), String('2.0')], [String('id'), id], [String('method'), method], [String('params'), params]]);
			msg_data = pyjamas['JSONService']['dumps'](msg);
			request_info = pyjamas.JSONService.JSONRequestInfo(id, method, handler);
			if (pyjslib['bool'](!pyjslib['bool'](pyjamas['JSONService']['HTTPRequest']()['asyncPost'](((($attr9=self['url']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'url'):
						self['url']), msg_data, pyjamas.JSONService.JSONResponseTextHandler(request_info), false, String('text/json'), ((($attr11=self['headers']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'headers'):
						self['headers']))))) {
				return (typeof ($usub2=1)=='number'?
					-$usub2:
					pyjslib['op_usub']($usub2));
			}
			return id;
		}
	, 1, [null,null,['self'],['method'],['params'],['handler']]);
		$cls_definition['sendRequest'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pyjamas['JSONService']['JSONRequestInfo'] = (function(){
		var $cls_instance = $pyjs__class_instance('JSONRequestInfo');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '1f63a0affeceb58d1ec045be1d63302c';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(id, method, handler) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
				method = arguments[2];
				handler = arguments[3];
			}

			self.id = id;
			self.method = method;
			self.handler = handler;
			return null;
		}
	, 1, [null,null,['self'],['id'],['method'],['handler']]);
		$cls_definition['__init__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pyjamas['JSONService']['JSONResponseTextHandler'] = (function(){
		var $cls_instance = $pyjs__class_instance('JSONResponseTextHandler');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'c2beb5b92e21c4f60fd39527af8264c8';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(request) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				request = arguments[1];
			}

			self.request = request;
			return null;
		}
	, 1, [null,null,['self'],['request']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onCompletion', function(json_str) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				json_str = arguments[1];
			}
			var $attr20,code,jsonrpc,err,$attr22,$attr17,$attr21,$pyjs_try_err,$attr19,$attr18,error,$attr15,$attr14,message,$attr16,data,response,$attr13;
			try {
				response = pyjamas['JSONService']['loads'](json_str);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.JSONService, try_lineno: 148};
				if (($pyjs_try_err_name == pyjamas['JSONService']['JSONDecodeException'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjamas['JSONService']['JSONDecodeException'])) {
					$pyjs.__last_exception__.except_lineno = 150;
					err = $pyjs_try_err;
					error = $pyjs_kwargs_call(null, pyjslib['dict'], null, null, [{code:(typeof ($usub3=32700)=='number'?
						-$usub3:
						pyjslib['op_usub']($usub3)), message:String('Parse error while decoding response'), data:null}]);
					self['request']['handler']['onRemoteError'](0, error, ((($attr13=self['request']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
								pyjslib['getattr']($attr14, 'request'):
								self['request']));
					return null;
				} else { throw $pyjs_try_err; }
			}
			if (pyjslib['bool'](!pyjslib['bool'](response))) {
				error = $pyjs_kwargs_call(null, pyjslib['dict'], null, null, [{code:(typeof ($usub4=32603)=='number'?
					-$usub4:
					pyjslib['op_usub']($usub4)), message:String('Empty Response'), data:null}]);
				self['request']['handler']['onRemoteError'](0, error, ((($attr15=self['request']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
							pyjslib['getattr']($attr16, 'request'):
							self['request']));
			}
			else if (pyjslib['bool'](response['get'](String('error')))) {
				error = response.__getitem__(String('error'));
				jsonrpc = response['get'](String('jsonrpc'));
				code = error['get'](String('code'), 0);
				message = error['get'](String('message'), error);
				data = error['get'](String('data'));
				if (pyjslib['bool'](!pyjslib['bool'](jsonrpc))) {
					jsonrpc = response['get'](String('version'), String('1.0'));
					if (pyjslib['bool'](pyjslib['op_eq'](jsonrpc, String('1.0')))) {
						message = error;
					}
					else {
						data = error['get'](String('error'));
					}
				}
				error = $pyjs_kwargs_call(null, pyjslib['dict'], null, null, [{code:code, message:message, data:data}]);
				self['request']['handler']['onRemoteError'](0, error, ((($attr17=self['request']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
							pyjslib['getattr']($attr18, 'request'):
							self['request']));
			}
			else if (pyjslib['bool'](response.__contains__(String('result')))) {
				self['request']['handler']['onRemoteResponse'](response.__getitem__(String('result')), ((($attr19=self['request']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
							pyjslib['getattr']($attr20, 'request'):
							self['request']));
			}
			else {
				error = $pyjs_kwargs_call(null, pyjslib['dict'], null, null, [{code:(typeof ($usub5=32603)=='number'?
					-$usub5:
					pyjslib['op_usub']($usub5)), message:String('No result or error in response'), data:response}]);
				self['request']['handler']['onRemoteError'](0, error, ((($attr21=self['request']) !== null & ($attr22=self).__is_instance__) && typeof $attr21 == 'function'?
							pyjslib['getattr']($attr22, 'request'):
							self['request']));
			}
			return null;
		}
	, 1, [null,null,['self'],['json_str']]);
		$cls_definition['onCompletion'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onError', function(error_str, error_code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				error_str = arguments[1];
				error_code = arguments[2];
			}
			var $attr23,$attr24,error;
			error = $pyjs_kwargs_call(null, pyjslib['dict'], null, null, [{code:error_code, message:error_str, data:null}]);
			self['request']['handler']['onRemoteError'](error_code, error, ((($attr23=self['request']) !== null & ($attr24=self).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'request'):
						self['request']));
			return null;
		}
	, 1, [null,null,['self'],['error_str'],['error_code']]);
		$cls_definition['onError'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['object']));
	})();
	pyjamas['JSONService']['ServiceProxy'] = (function(){
		var $cls_instance = $pyjs__class_instance('ServiceProxy');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '7143ce81038c374ddcf0cafaab250263';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(serviceURL, serviceName, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				serviceURL = arguments[1];
				serviceName = arguments[2];
				headers = arguments[3];
			}
			if (typeof serviceName == 'undefined') serviceName=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];

			$pyjs_kwargs_call(pyjamas['JSONService']['JSONService'], '__init__', null, null, [{headers:headers}, self, serviceURL]);
			self.__serviceName = serviceName;
			return null;
		}
	, 1, [null,null,['self'],['serviceURL'],['serviceName', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__call__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var params = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length-1));

				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') params.__array.push(kwargs);
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var params = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length-1));

				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					if (typeof kwargs != 'undefined') params.__array.push(kwargs);
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
			var $and1,$attr27,handler,$attr25,$attr26,$attr28,$and2;
			if (pyjslib['bool'](pyjslib['isinstance'](params, pyjslib['tuple']))) {
				params = pyjslib['list'](params);
			}
			if (pyjslib['bool']((pyjslib['bool']($and1=params)?pyjslib['hasattr'](params.__getitem__((typeof ($usub6=1)=='number'?
				-$usub6:
				pyjslib['op_usub']($usub6))), String('onRemoteResponse')):$and1))) {
				handler = params['pop']();
			}
			else {
				handler = null;
			}
			if (pyjslib['bool'](kwargs)) {
				if (pyjslib['bool'](params)) {
					if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](params, pyjslib['dict'])))) {
						throw (pyjamas['JSONService']['JSONServiceError'](String('Cannot mix positional and keyword arguments')));
					}
					params['update'](kwargs);
				}
				else {
					params = kwargs;
				}
			}
			if (pyjslib['bool']((handler !== null))) {
				return pyjamas['JSONService']['JSONService']['sendRequest'](self, ((($attr25=self['__serviceName']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
							pyjslib['getattr']($attr26, '__serviceName'):
							self['__serviceName']), params, handler);
			}
			else {
				return pyjamas['JSONService']['JSONService']['sendNotify'](self, ((($attr27=self['__serviceName']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
							pyjslib['getattr']($attr28, '__serviceName'):
							self['__serviceName']), params);
			}
			return null;
		}
	, 1, ['params',['kwargs'],['self']]);
		$cls_definition['__call__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['JSONService']['JSONService']));
	})();
	pyjamas['JSONService']['JSONProxy'] = (function(){
		var $cls_instance = $pyjs__class_instance('JSONProxy');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'a088800e5540b4eb203e1d99b1465558';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(url, methods, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				methods = arguments[2];
				headers = arguments[3];
			}
			if (typeof methods == 'undefined') methods=arguments.callee.__args__[4][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[5][1];
			var $attr30,$attr29;
			self._serviceURL = url;
			self.methods = methods;
			self.headers = (pyjslib['bool']((headers === null))? (pyjslib['dict']([])) : (headers));
			$pyjs_kwargs_call(pyjamas['JSONService']['JSONService'], '__init__', null, null, [{headers:((($attr29=self['headers']) !== null & ($attr30=self).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'headers'):
						self['headers'])}, self, url]);
			self['__registerMethods'](methods);
			return null;
		}
	, 1, [null,null,['self'],['url'],['methods', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__registerMethods', function(methods) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				methods = arguments[1];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,$attr33,$attr32,$attr31,$iter1_array,$attr34,method;
			if (pyjslib['bool'](methods)) {
				$iter1_iter = methods;
				if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
					$iter1_type = 0;
				} else {
					$iter1_iter = $iter1_iter.__iter__();
					$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter1_idx = 0;
				while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
					method = $iter1_nextval;
					pyjslib['setattr'](self, method, pyjslib['getattr']($pyjs_kwargs_call(null, pyjamas['JSONService']['ServiceProxy'], null, null, [{headers:((($attr33=self['headers']) !== null & ($attr34=self).__is_instance__) && typeof $attr33 == 'function'?
								pyjslib['getattr']($attr34, 'headers'):
								self['headers'])}, ((($attr31=self['_serviceURL']) !== null & ($attr32=self).__is_instance__) && typeof $attr31 == 'function'?
								pyjslib['getattr']($attr32, '_serviceURL'):
								self['_serviceURL']), method]), String('__call__')));
				}
			}
			return null;
		}
	, 1, [null,null,['self'],['methods']]);
		$cls_definition['__registerMethods'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['JSONService']['JSONService']));
	})();
	return this;
}; /* end pyjamas.JSONService */


/* end module: pyjamas.JSONService */


/*
PYJS_DEPS: ['sys', 'HTTPRequest.HTTPRequest', 'HTTPRequest', 'jsonrpc.json.dumps', 'jsonrpc', 'jsonrpc.json', 'jsonrpc.json.loads', 'jsonrpc.json.JSONDecodeException', 'pyjamas.JSONParser.JSONParser', 'pyjamas', 'pyjamas.JSONParser']
*/
