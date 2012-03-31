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
        (o.$H ? o.$H : (o.$H = pygwt_getNextHashId()));
    
	};
	pygwt['getHashCode'].__name__ = 'getHashCode';

	pygwt['getHashCode'].__bind_type__ = 0;
	pygwt['getHashCode'].__args__ = [null,null,['o']];
	pygwt['getModuleName'] = function() {


    return $moduleName;
    
	};
	pygwt['getModuleName'].__name__ = 'getModuleName';

	pygwt['getModuleName'].__bind_type__ = 0;
	pygwt['getModuleName'].__args__ = [null,null];
	pygwt['getModuleBaseURL'] = function() {


    // this is intentionally not using $doc, because we want the module's own url
    var s = document.location.href;
    
    // Pull off any hash.
    var i = s.indexOf('#');
    if (i != -1)
        s = s.substring(0, i);
    
    // Pull off any query string.
    i = s.indexOf('?');
    if (i != -1)
        s = s.substring(0, i);
    
    // Rip off everything after the last slash.
    i = s.lastIndexOf('/');
    if (i != -1)
        s = s.substring(0, i);

    return (s.length > 0) ? s + "/" : "";
    
	};
	pygwt['getModuleBaseURL'].__name__ = 'getModuleBaseURL';

	pygwt['getModuleBaseURL'].__bind_type__ = 0;
	pygwt['getModuleBaseURL'].__args__ = [null,null];
	return this;
}; /* end pygwt */


/* end module: pygwt */


