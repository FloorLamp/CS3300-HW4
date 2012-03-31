/* start module: pyjamas.log */
$pyjs.loaded_modules['pyjamas.log'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.log'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.log'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['log'] = $pyjs.loaded_modules["pyjamas.log"];
	pyjamas['log'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.log';
	var __name__ = pyjamas['log'].__name__ = __mod_name__;
	var log = pyjamas['log'];


	pyjamas['log']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas', null, false);
	pyjamas['log']['getBodyElement'] = function() {
		var $attr1,$attr2;
		return ((($attr1=$doc['body']) !== null & ($attr2=$doc).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'body'):
					$doc['body']);
	};
	pyjamas['log']['getBodyElement'].__name__ = 'getBodyElement';

	pyjamas['log']['getBodyElement'].__bind_type__ = 0;
	pyjamas['log']['getBodyElement'].__args__ = [null,null];
	pyjamas['log']['write'] = function(text) {
		var $add2,$add1;
		pyjamas.log.add_elem();
		text = text['$$replace'](String('\x0A'), String('\x3Cbr /\x3E\x0A'));
		pyjamas['log']['data'] = (typeof ($add1=pyjamas['log']['data'])==typeof ($add2=text) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			pyjslib['op_add']($add1,$add2));
		pyjamas['log']['DOM']['setInnerHTML'](pyjamas.log.element, pyjamas['log']['data']);
		return null;
	};
	pyjamas['log']['write'].__name__ = 'write';

	pyjamas['log']['write'].__bind_type__ = 0;
	pyjamas['log']['write'].__args__ = [null,null,['text']];
	pyjamas['log']['writebr'] = function(text) {
		var $add4,$add3;
		pyjamas['log']['write']((typeof ($add3=text)==typeof ($add4=String('\x0A')) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			pyjslib['op_add']($add3,$add4)));
		return null;
	};
	pyjamas['log']['writebr'].__name__ = 'writebr';

	pyjamas['log']['writebr'].__bind_type__ = 0;
	pyjamas['log']['writebr'].__args__ = [null,null,['text']];
	pyjamas['log']['data'] = String('');
	pyjamas['log']['element'] = null;
	pyjamas['log']['add_elem'] = function() {

		if (pyjslib['bool']((pyjamas['log']['element'] !== null))) {
			return null;
		}
		pyjamas['log']['element'] = pyjamas['log']['DOM']['createDiv']();
		pyjamas['log']['DOM']['appendChild'](pyjamas['log']['getBodyElement'](), pyjamas['log']['element']);
		return null;
	};
	pyjamas['log']['add_elem'].__name__ = 'add_elem';

	pyjamas['log']['add_elem'].__bind_type__ = 0;
	pyjamas['log']['add_elem'].__args__ = [null,null];
	return this;
}; /* end pyjamas.log */


/* end module: pyjamas.log */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas']
*/
