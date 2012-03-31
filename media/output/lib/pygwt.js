/* start module: pygwt */
var pygwt;
$pyjs.loaded_modules['pygwt'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pygwt'].__was_initialized__) return $pyjs.loaded_modules['pygwt'];
	pygwt = $pyjs.loaded_modules["pygwt"];
	pygwt.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pygwt';
	var __name__ = pygwt.__name__ = __mod_name__;


	pygwt['sNextHashId'] = 0;
	pygwt['getNextHashId'] = function() {
		var $add2,$add1;
		pygwt['sNextHashId'] = (typeof ($add1=pygwt['sNextHashId'])==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			pyjslib['op_add']($add1,$add2));
		return pygwt['sNextHashId'];
	};
	pygwt['getNextHashId'].__name__ = 'getNextHashId';

	pygwt['getNextHashId'].__bind_type__ = 0;
	pygwt['getNextHashId'].__args__ = [null,null];
	pygwt['getHashCode'] = function(o) {


    return (o == null) ? 0 :
        (o.$H ? o.$H : (o.$H = pygwt_getNextHashId()))
    
	};
	pygwt['getHashCode'].__name__ = 'getHashCode';

	pygwt['getHashCode'].__bind_type__ = 0;
	pygwt['getHashCode'].__args__ = [null,null,['o']];
	pygwt['getModuleName'] = function() {
		var sys,$attr1,$attr2,os,mod_name;
		os = pyjslib['___import___']('os', null);
		sys = pyjslib['___import___']('sys', null);
		mod_name = ((($attr1=sys['argv']) !== null & ($attr2=sys).__is_instance__) && typeof $attr1 == 'function'?
					pyjslib['getattr']($attr2, 'argv'):
					sys['argv']).__getitem__(0);
		mod_name = os['path']['$$split'](mod_name).__getitem__(1);
		mod_name = os['path']['spliext'](mod_name).__getitem__(0);
		return mod_name;
	};
	pygwt['getModuleName'].__name__ = 'getModuleName';

	pygwt['getModuleName'].__bind_type__ = 0;
	pygwt['getModuleName'].__args__ = [null,null];
	pygwt['getModuleBaseURL'] = function() {
		var i,$add3,s,$add4;
		s = pygwt.get_main_frame()['getUri']();
		i = s['find'](String('#'));
		if (pyjslib['bool'](!pyjslib['op_eq'](i, (typeof ($usub1=1)=='number'?
			-$usub1:
			pyjslib['op_usub']($usub1))))) {
			s = pyjslib['slice'](s, 0, i);
		}
		i = s['find'](String('?'));
		if (pyjslib['bool'](!pyjslib['op_eq'](i, (typeof ($usub2=1)=='number'?
			-$usub2:
			pyjslib['op_usub']($usub2))))) {
			s = pyjslib['slice'](s, 0, i);
		}
		i = s['rfind'](String('/'));
		if (pyjslib['bool'](!pyjslib['op_eq'](i, (typeof ($usub3=1)=='number'?
			-$usub3:
			pyjslib['op_usub']($usub3))))) {
			s = pyjslib['slice'](s, 0, i);
		}
		if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](s), 0) == 1))) {
			return (typeof ($add3=s)==typeof ($add4=String('/')) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4));
		}
		return String('');
	};
	pygwt['getModuleBaseURL'].__name__ = 'getModuleBaseURL';

	pygwt['getModuleBaseURL'].__bind_type__ = 0;
	pygwt['getModuleBaseURL'].__args__ = [null,null];
	return this;
}; /* end pygwt */


/* end module: pygwt */


/*
PYJS_DEPS: ['os', 'sys']
*/
