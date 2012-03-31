/* start module: pyjamas.HTTPRequest */
$pyjs.loaded_modules['pyjamas.HTTPRequest'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.HTTPRequest'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.HTTPRequest'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['HTTPRequest'] = $pyjs.loaded_modules["pyjamas.HTTPRequest"];
	pyjamas['HTTPRequest'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.HTTPRequest';
	var __name__ = pyjamas['HTTPRequest'].__name__ = __mod_name__;
	var HTTPRequest = pyjamas['HTTPRequest'];
	var $attr1,$attr2;

	pyjamas['HTTPRequest']['sys'] = pyjslib['___import___']('sys', 'pyjamas');
	pyjamas['HTTPRequest']['pygwt'] = pyjslib['___import___']('pygwt', 'pyjamas');
	if (pyjslib['bool'](!pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr1=pyjamas['HTTPRequest']['sys']['platform']) !== null & ($attr2=pyjamas['HTTPRequest']['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'platform'):
				pyjamas['HTTPRequest']['sys']['platform'])))) {
		pyjamas['HTTPRequest']['pyjd'] = pyjslib['___import___']('pyjd', 'pyjamas');
	}
	pyjamas['HTTPRequest']['handlers'] = pyjslib['dict']([]);
	pyjamas['HTTPRequest']['XULrunnerHackCallback'] = (function(){
		var $cls_instance = $pyjs__class_instance('XULrunnerHackCallback');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'a38170f72d9ba86f166494d5d7385d2c';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(htr, mode, user, pwd, url, postData, handler, return_xml, content_type, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				htr = arguments[1];
				mode = arguments[2];
				user = arguments[3];
				pwd = arguments[4];
				url = arguments[5];
				postData = arguments[6];
				handler = arguments[7];
				return_xml = arguments[8];
				content_type = arguments[9];
				headers = arguments[10];
			}
			if (typeof postData == 'undefined') postData=arguments.callee.__args__[8][1];
			if (typeof handler == 'undefined') handler=arguments.callee.__args__[9][1];
			if (typeof return_xml == 'undefined') return_xml=arguments.callee.__args__[10][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[11][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[12][1];

 			return null;
		}
	, 1, [null,null,['self'],['htr'],['mode'],['user'],['pwd'],['url'],['postData', null],['handler', null],['return_xml', false],['content_type', null],['headers', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'callback', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr9,$attr8,$attr5,$attr4,$attr7,$attr6,$attr20,$attr15,$attr19,$attr18,$attr10,$attr14,$attr17,$attr16,$attr11,$attr3,$attr13,$attr12;
			return self['htr']['asyncImpl'](((($attr3=self['mode']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'mode'):
						self['mode']), ((($attr5=self['user']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'user'):
						self['user']), ((($attr7=self['pwd']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'pwd'):
						self['pwd']), ((($attr9=self['url']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'url'):
						self['url']), ((($attr11=self['postData']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'postData'):
						self['postData']), ((($attr13=self['handler']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'handler'):
						self['handler']), ((($attr15=self['return_xml']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'return_xml'):
						self['return_xml']), ((($attr17=self['content_type']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'content_type'):
						self['content_type']), ((($attr19=self['headers']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'headers'):
						self['headers']));
		}
	, 1, [null,null,['self']]);
		$cls_definition['callback'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	pyjamas['HTTPRequest']['HTTPRequest'] = (function(){
		var $cls_instance = $pyjs__class_instance('HTTPRequest');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'b562b3db072aace07d658e9a9a2403b0';
		$method = $pyjs__bind_method($cls_instance, 'asyncGet', function(url, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				returnxml = arguments[3];
				content_type = arguments[4];
				headers = arguments[5];
				user = arguments[6];
				pwd = arguments[7];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
			var postData;
			postData = null;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['hasattr'](handler, String('onCompletion'))))) {
				throw (pyjslib['RuntimeError'](String('Invalid call to asyncGet: handler is not a valid request handler')));
			}
			self['asyncImpl'](String('GET'), user, pwd, url, postData, handler, returnxml, content_type, headers);
			return null;
		}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncGet'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'asyncPost', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				postData = arguments[2];
				handler = arguments[3];
				returnxml = arguments[4];
				content_type = arguments[5];
				headers = arguments[6];
				user = arguments[7];
				pwd = arguments[8];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['hasattr'](handler, String('onCompletion'))))) {
				throw (pyjslib['RuntimeError'](String('Invalid call to asyncPost: handler is not a valid request handler')));
			}
			return self['asyncImpl'](String('POST'), user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncPost'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'asyncDelete', function(url, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				handler = arguments[2];
				returnxml = arguments[3];
				content_type = arguments[4];
				headers = arguments[5];
				user = arguments[6];
				pwd = arguments[7];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[5][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[6][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[7][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[8][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[9][1];
			var postData;
			postData = null;
			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['hasattr'](handler, String('onCompletion'))))) {
				throw (pyjslib['RuntimeError'](String('Invalid call to asyncDelete: handler is not a valid request handler')));
			}
			return self['asyncImpl'](String('DELETE'), user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncDelete'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'asyncPut', function(url, postData, handler, returnxml, content_type, headers, user, pwd) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
				postData = arguments[2];
				handler = arguments[3];
				returnxml = arguments[4];
				content_type = arguments[5];
				headers = arguments[6];
				user = arguments[7];
				pwd = arguments[8];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[6][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[7][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[8][1];
			if (typeof user == 'undefined') user=arguments.callee.__args__[9][1];
			if (typeof pwd == 'undefined') pwd=arguments.callee.__args__[10][1];

			if (pyjslib['bool'](!pyjslib['bool'](pyjslib['hasattr'](handler, String('onCompletion'))))) {
				throw (pyjslib['RuntimeError'](String('Invalid call to asyncPut: handler is not a valid request handler')));
			}
			return self['asyncImpl'](String('PUT'), user, pwd, url, postData, handler, returnxml, content_type, headers);
		}
	, 1, [null,null,['self'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null],['user', null],['pwd', null]]);
		$cls_definition['asyncPut'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createXmlHTTPRequest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['doCreateXmlHTTPRequest']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['createXmlHTTPRequest'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'doCreateXmlHTTPRequest', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return pyjamas.HTTPRequest.get_main_frame()['getXmlHttpRequest']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['doCreateXmlHTTPRequest'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onLoad', function(sender, event, ignorearg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				sender = arguments[1];
				event = arguments[2];
				ignorearg = arguments[3];
			}
			var status,localHandler,xmlHttp,$or2,handler,$attr21,$attr22,$attr23,$attr24,$attr25,$attr26,responseText,$or1;
			xmlHttp = ((($attr21=event['target']) !== null & ($attr22=event).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'target'):
						event['target']);
			localHandler = pyjamas['HTTPRequest']['handlers']['get'](xmlHttp);
			pyjamas['HTTPRequest']['handlers'].__delitem__(xmlHttp);
			responseText = ((($attr23=xmlHttp['responseText']) !== null & ($attr24=xmlHttp).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'responseText'):
						xmlHttp['responseText']);
			status = ((($attr25=xmlHttp['status']) !== null & ($attr26=xmlHttp).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'status'):
						xmlHttp['status']);
			handler = null;
			xmlHttp = null;
			if (pyjslib['bool'](pyjslib['op_eq'](status, 0))) {
				pyjslib['printFunc']([String('HACK ALERT! webkit wrapper returns 0 not 200!')], 1);
			}
			if (pyjslib['bool']((pyjslib['bool']($or1=pyjslib['op_eq'](status, 200))?$or1:pyjslib['op_eq'](status, 0)))) {
				localHandler['onCompletion'](responseText);
			}
			else {
				localHandler['onError'](responseText, status);
			}
			return null;
		}
	, 1, [null,null,['self'],['sender'],['event'],['ignorearg']]);
		$cls_definition['onLoad'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'onReadyStateChange', function(xmlHttp, event, ignorearg) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				xmlHttp = arguments[1];
				event = arguments[2];
				ignorearg = arguments[3];
			}
			var status,$or4,localHandler,$or3,err,handler,$attr34,$attr33,$attr32,$attr31,$pyjs_try_err,responseText,$attr27,$attr28,$attr29,$attr30;
			try {
				xmlHttp = pyjamas.HTTPRequest.get_main_frame()['gobject_wrap'](xmlHttp);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: pyjamas.HTTPRequest, try_lineno: 78};
				if (true) {
					$pyjs.__last_exception__.except_lineno = 81;
					err = $pyjs_try_err;
				}
			}
			pyjslib['printFunc']([((($attr27=xmlHttp['readyState']) !== null & ($attr28=xmlHttp).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'readyState'):
						xmlHttp['readyState'])], 1);
			if (pyjslib['bool'](!pyjslib['op_eq'](((($attr29=xmlHttp['readyState']) !== null & ($attr30=xmlHttp).__is_instance__) && typeof $attr29 == 'function'?
						pyjslib['getattr']($attr30, 'readyState'):
						xmlHttp['readyState']), 4))) {
				return null;
			}
			localHandler = pyjamas['HTTPRequest']['handlers']['get'](xmlHttp);
			pyjamas['HTTPRequest']['handlers'].__delitem__(xmlHttp);
			responseText = ((($attr31=xmlHttp['responseText']) !== null & ($attr32=xmlHttp).__is_instance__) && typeof $attr31 == 'function'?
						pyjslib['getattr']($attr32, 'responseText'):
						xmlHttp['responseText']);
			pyjslib['printFunc']([String('headers'), xmlHttp['getAllResponseHeaders']()], 1);
			status = ((($attr33=xmlHttp['status']) !== null & ($attr34=xmlHttp).__is_instance__) && typeof $attr33 == 'function'?
						pyjslib['getattr']($attr34, 'status'):
						xmlHttp['status']);
			handler = null;
			xmlHttp = null;
			pyjslib['printFunc']([String('status'), status], 1);
			pyjslib['printFunc']([String('local handler'), localHandler], 1);
			if (pyjslib['bool'](pyjslib['op_eq'](status, 0))) {
				pyjslib['printFunc']([String('HACK ALERT! webkit wrapper returns 0 not 200!')], 1);
			}
			if (pyjslib['bool']((pyjslib['bool']($or3=pyjslib['op_eq'](status, 200))?$or3:pyjslib['op_eq'](status, 0)))) {
				localHandler['onCompletion'](responseText);
			}
			else {
				localHandler['onError'](responseText, status);
			}
			return null;
		}
	, 1, [null,null,['self'],['xmlHttp'],['event'],['ignorearg']]);
		$cls_definition['onReadyStateChange'] = $method;
		$method = $pyjs__bind_method($cls_instance, '_convertUrlToAbsolute', function(url) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				url = arguments[1];
			}
			var $add4,sep,$and1,$and3,uri,$add2,$add3,$add1,$add6,slash,$add5,$and2;
			uri = pyjamas['HTTPRequest']['pygwt']['getModuleBaseURL']();
			if (pyjslib['bool'](pyjslib['op_eq'](url.__getitem__(0), String('/')))) {
				sep = uri['find'](String('://'));
				if (pyjslib['bool'](!pyjslib['bool'](uri['startswith'](String('file://'))))) {
					slash = uri['find'](String('/'), (typeof ($add1=sep)==typeof ($add2=3) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						pyjslib['op_add']($add1,$add2)));
					if (pyjslib['bool']((pyjslib['cmp'](slash, 0) == 1))) {
						uri = pyjslib['slice'](uri, 0, slash);
					}
				}
				return pyjslib['sprintf'](String('%s%s'), pyjslib['tuple']([uri, url]));
			}
			else {
				if (pyjslib['bool']((pyjslib['bool']($and1=!pyjslib['op_eq'](pyjslib['slice'](url, 0, 7), String('file://')))?(pyjslib['bool']($and2=!pyjslib['op_eq'](pyjslib['slice'](url, 0, 7), String('http://')))?!pyjslib['op_eq'](pyjslib['slice'](url, 0, 8), String('https://')):$and2):$and1))) {
					slash = uri['rfind'](String('/'));
					return (typeof ($add5=pyjslib['slice'](uri, 0, (typeof ($add3=slash)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						pyjslib['op_add']($add3,$add4))))==typeof ($add6=url) && (typeof $add5=='number'||typeof $add5=='string')?
						$add5+$add6:
						pyjslib['op_add']($add5,$add6));
				}
			}
			return url;
		}
	, 1, [null,null,['self'],['url']]);
		$cls_definition['_convertUrlToAbsolute'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'asyncImpl', function(method, user, pwd, url, postData, handler, returnxml, content_type, headers) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				method = arguments[1];
				user = arguments[2];
				pwd = arguments[3];
				url = arguments[4];
				postData = arguments[5];
				handler = arguments[6];
				returnxml = arguments[7];
				content_type = arguments[8];
				headers = arguments[9];
			}
			if (typeof returnxml == 'undefined') returnxml=arguments.callee.__args__[9][1];
			if (typeof content_type == 'undefined') content_type=arguments.callee.__args__[10][1];
			if (typeof headers == 'undefined') headers=arguments.callee.__args__[11][1];
			var $or5,hval,$iter1_iter,$attr46,$attr44,$attr45,$attr42,$attr43,$attr40,$attr41,$or8,base64,$iter1_array,$and8,$or7,$or6,$iter1_nextval,$and4,$and5,$and6,$and7,$attr37,$attr35,$attr39,$attr38,mf,xmlHttp,$iter1_type,h,$iter1_idx,$attr36;
			if (pyjslib['bool']((headers === null))) {
				headers = pyjslib['dict']([]);
			}
			if (pyjslib['bool']((pyjslib['bool']($and4=user)?(pyjslib['bool']($and5=pwd)?!pyjslib['bool'](headers.__contains__(String('Authorization'))):$and5):$and4))) {
				base64 = pyjslib['___import___']('base64', 'pyjamas');
				headers.__setitem__(String('Authorization'), pyjslib['sprintf'](String('Basic %s'), base64['b64encode'](pyjslib['sprintf'](String('%s:%s'), pyjslib['tuple']([user, pwd])))));
			}
			if (pyjslib['bool']((pyjslib['bool']($and7=(postData !== null))?!pyjslib['bool'](headers.__contains__(String('Content-Length'))):$and7))) {
				headers.__setitem__(String('Content-Length'), pyjslib['str'](pyjslib['len'](postData)));
			}
			if (pyjslib['bool']((content_type !== null))) {
				headers.__setitem__(String('Content-Type'), content_type);
			}
			if (pyjslib['bool'](!pyjslib['bool'](headers.__contains__(String('Content-Type'))))) {
				if (pyjslib['bool'](returnxml)) {
					headers.__setitem__(String('Content-Type'), String('application/xml\x3B charset=utf-8'));
				}
				else {
					headers.__setitem__(String('Content-Type'), String('text/plain\x3B charset=utf-8'));
				}
			}
			mf = pyjamas.HTTPRequest.get_main_frame();
			xmlHttp = self['doCreateXmlHTTPRequest']();
			url = self['_convertUrlToAbsolute'](url);
			pyjslib['printFunc']([String('xmlHttp'), method, user, pwd, url, postData, handler, pyjslib['dir'](xmlHttp)], 1);
			if (pyjslib['bool']((pyjslib['bool']($or5=pyjslib['op_eq'](((($attr35=mf['platform']) !== null & ($attr36=mf).__is_instance__) && typeof $attr35 == 'function'?
						pyjslib['getattr']($attr36, 'platform'):
						mf['platform']), String('webkit')))?$or5:pyjslib['op_eq'](((($attr37=mf['platform']) !== null & ($attr38=mf).__is_instance__) && typeof $attr37 == 'function'?
						pyjslib['getattr']($attr38, 'platform'):
						mf['platform']), String('mshtml'))))) {
				xmlHttp['open'](method, url, true, String(''), String(''));
			}
			else {
				pyjslib['printFunc']([url, xmlHttp['open'](method, url)], 1);
			}
			$iter1_iter = headers;
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				h = $iter1_nextval;
				if (pyjslib['bool'](pyjslib['isinstance'](headers.__getitem__(h), pyjslib['str']))) {
					xmlHttp['setRequestHeader'](h, headers.__getitem__(h));
				}
				else {
					hval = String('\x3B')['join'](function(){
var $listcomp1 = pyjslib['list']();
					$iter2_iter = headers.__getitem__(h);
					if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
						$iter2_type = 0;
					} else {
						$iter2_iter = $iter2_iter.__iter__();
						$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
					}
					$iter2_idx = 0;
					while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
						i = $iter2_nextval;
						$listcomp1['append'](pyjslib['str'](i));
					}
return $listcomp1;}());
					xmlHttp['setRequestHeader'](h, hval);
				}
			}
			if (pyjslib['bool']((pyjslib['bool']($or7=pyjslib['op_eq'](((($attr39=mf['platform']) !== null & ($attr40=mf).__is_instance__) && typeof $attr39 == 'function'?
						pyjslib['getattr']($attr40, 'platform'):
						mf['platform']), String('webkit')))?$or7:pyjslib['op_eq'](((($attr41=mf['platform']) !== null & ($attr42=mf).__is_instance__) && typeof $attr41 == 'function'?
						pyjslib['getattr']($attr42, 'platform'):
						mf['platform']), String('mshtml'))))) {
				mf['_addXMLHttpRequestEventListener'](xmlHttp, String('onreadystatechange'), ((($attr43=self['onReadyStateChange']) !== null & ($attr44=self).__is_instance__) && typeof $attr43 == 'function'?
							pyjslib['getattr']($attr44, 'onReadyStateChange'):
							self['onReadyStateChange']));
			}
			else {
				mf['_addXMLHttpRequestEventListener'](xmlHttp, String('load'), ((($attr45=self['onLoad']) !== null & ($attr46=self).__is_instance__) && typeof $attr45 == 'function'?
							pyjslib['getattr']($attr46, 'onLoad'):
							self['onLoad']));
			}
			pyjamas['HTTPRequest']['handlers'].__setitem__(xmlHttp, handler);
			xmlHttp['send'](postData);
			return true;
			handler = null;
			xmlHttp = null;
			pyjamas.HTTPRequest.localHandler['onError'](pyjslib['str'](pyjamas.HTTPRequest.e));
			return false;
		}
	, 1, [null,null,['self'],['method'],['user'],['pwd'],['url'],['postData'],['handler'],['returnxml', false],['content_type', null],['headers', null]]);
		$cls_definition['asyncImpl'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.HTTPRequest */


/* end module: pyjamas.HTTPRequest */


/*
PYJS_DEPS: ['sys', 'pygwt', 'pyjd', 'base64']
*/
