/* start module: pyjd */
var pyjd;
$pyjs.loaded_modules['pyjd'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjd'].__was_initialized__) return $pyjs.loaded_modules['pyjd'];
	pyjd = $pyjs.loaded_modules["pyjd"];
	pyjd.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjd';
	var __name__ = pyjd.__name__ = __mod_name__;


	pyjd['setup'] = function(application, appdir, width, height) {
		if (typeof appdir == 'undefined') appdir=arguments.callee.__args__[3][1];
		if (typeof width == 'undefined') width=arguments.callee.__args__[4][1];
		if (typeof height == 'undefined') height=arguments.callee.__args__[5][1];

 		return null;
	};
	pyjd['setup'].__name__ = 'setup';

	pyjd['setup'].__bind_type__ = 0;
	pyjd['setup'].__args__ = [null,null,['application'],['appdir', null],['width', 800],['height', 600]];
	pyjd['run'] = function() {

 		return null;
	};
	pyjd['run'].__name__ = 'run';

	pyjd['run'].__bind_type__ = 0;
	pyjd['run'].__args__ = [null,null];
	return this;
}; /* end pyjd */


/* end module: pyjd */


