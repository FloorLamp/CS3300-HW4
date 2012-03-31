/* start module: pyjamas.Factory */
$pyjs.loaded_modules['pyjamas.Factory'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Factory'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Factory'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['Factory'] = $pyjs.loaded_modules["pyjamas.Factory"];
	pyjamas['Factory'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Factory';
	var __name__ = pyjamas['Factory'].__name__ = __mod_name__;
	var Factory = pyjamas['Factory'];


	pyjamas['Factory']['log'] = pyjslib['___import___']('pyjamas.log', 'pyjamas', null, false);
	pyjamas['Factory']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas', null, false);
	pyjamas['Factory']['factory'] = pyjslib['dict']([]);
	pyjamas['Factory']['registerClass'] = function(name, kls) {

		pyjamas['Factory']['factory'].__setitem__(name, kls);
		return null;
	};
	pyjamas['Factory']['registerClass'].__name__ = 'registerClass';

	pyjamas['Factory']['registerClass'].__bind_type__ = 0;
	pyjamas['Factory']['registerClass'].__args__ = [null,null,['name'],['kls']];
	pyjamas['Factory']['lookupClass'] = function(name) {

		return pyjamas['Factory']['factory'].__getitem__(name);
	};
	pyjamas['Factory']['lookupClass'].__name__ = 'lookupClass';

	pyjamas['Factory']['lookupClass'].__bind_type__ = 0;
	pyjamas['Factory']['lookupClass'].__args__ = [null,null,['name']];
	pyjamas['Factory']['createWidgetOnElement'] = function(element) {
		var txtargs,lbr,$iter1_iter,arg,$or1,$iter1_array,kwargs,klsname,findeq,$and3,$iter1_nextval,$or2,$and1,$and2,args,$and4,fc,$iter1_type,k,$add2,$add3,$add1,$iter1_idx,$add4,v;
		fc = pyjamas['Factory']['DOM']['getAttribute'](element, String('id'));
		lbr = fc['find'](String('('));
		klsname = pyjslib['slice'](fc, 0, lbr);
		txtargs = pyjslib['slice'](fc, (typeof ($add1=lbr)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			pyjslib['op_add']($add1,$add2)), (typeof ($usub1=1)=='number'?
			-$usub1:
			pyjslib['op_usub']($usub1)));
		args = pyjslib['list']([]);
		kwargs = pyjslib['dict']([]);
		$iter1_iter = txtargs['$$split'](String(','));
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			arg = $iter1_nextval;
			findeq = arg['find'](String('='));
			if (pyjslib['bool'](pyjslib['op_eq'](findeq, (typeof ($usub2=1)=='number'?
				-$usub2:
				pyjslib['op_usub']($usub2))))) {
				args['append'](arg);
			}
			else {
				k = pyjslib['slice'](arg, 0, findeq);
				v = pyjslib['slice'](arg, (typeof ($add3=findeq)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
					$add3+$add4:
					pyjslib['op_add']($add3,$add4)), null);
				if (pyjslib['bool']((pyjslib['bool']($or1=(pyjslib['bool']($and1=pyjslib['op_eq'](v.__getitem__(0), String('\x27')))?pyjslib['op_eq'](v.__getitem__((typeof ($usub3=1)=='number'?
					-$usub3:
					pyjslib['op_usub']($usub3))), String('\x27')):$and1))?$or1:(pyjslib['bool']($and3=pyjslib['op_eq'](v.__getitem__(0), String('\x22')))?pyjslib['op_eq'](v.__getitem__((typeof ($usub4=1)=='number'?
					-$usub4:
					pyjslib['op_usub']($usub4))), String('\x22')):$and3)))) {
					v = pyjslib['slice'](v, 1, (typeof ($usub5=1)=='number'?
						-$usub5:
						pyjslib['op_usub']($usub5)));
				}
				else {
					v = pyjslib['float_int'](v);
				}
				kwargs.__setitem__(k, v);
			}
		}
		kwargs.__setitem__(String('Element'), element);
		return $pyjs_kwargs_call(null, pyjamas['Factory']['lookupClass'](klsname), args, kwargs, [{}]);
	};
	pyjamas['Factory']['createWidgetOnElement'].__name__ = 'createWidgetOnElement';

	pyjamas['Factory']['createWidgetOnElement'].__bind_type__ = 0;
	pyjamas['Factory']['createWidgetOnElement'].__args__ = [null,null,['element']];
	pyjamas['Factory']['addPyjamasNameSpace'] = function() {

		pyjamas.Factory.doc()['createElementNS'](String('urn:schemas-pyjs-org:pyjs'));
		return null;
	};
	pyjamas['Factory']['addPyjamasNameSpace'].__name__ = 'addPyjamasNameSpace';

	pyjamas['Factory']['addPyjamasNameSpace'].__bind_type__ = 0;
	pyjamas['Factory']['addPyjamasNameSpace'].__args__ = [null,null];
	return this;
}; /* end pyjamas.Factory */


/* end module: pyjamas.Factory */


/*
PYJS_DEPS: ['pyjamas.log', 'pyjamas', 'pyjamas.DOM']
*/
