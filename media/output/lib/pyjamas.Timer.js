/* start module: pyjamas.Timer */
$pyjs.loaded_modules['pyjamas.Timer'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.Timer'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.Timer'];
	if(typeof $pyjs.loaded_modules['pyjamas'] == 'undefined' || !$pyjs.loaded_modules['pyjamas'].__was_initialized__) pyjslib['___import___']('pyjamas', null);
	pyjamas['Timer'] = $pyjs.loaded_modules["pyjamas.Timer"];
	pyjamas['Timer'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.Timer';
	var __name__ = pyjamas['Timer'].__name__ = __mod_name__;
	var Timer = pyjamas['Timer'];
	var $attr2,$attr1;

	pyjamas['Timer']['sys'] = pyjslib['___import___']('sys', 'pyjamas');
	pyjamas['Timer']['timeout_add'] = null;
	pyjamas['Timer']['timeout_end'] = null;
	if (pyjslib['bool'](!pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr1=pyjamas['Timer']['sys']['platform']) !== null & ($attr2=pyjamas['Timer']['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'platform'):
				pyjamas['Timer']['sys']['platform'])))) {
		pyjamas['Timer']['pyjd'] = pyjslib['___import___']('pyjd', 'pyjamas');
	}
	pyjamas['Timer']['timers'] = null;
	pyjamas['Timer']['set_timer'] = function(interval, fn) {

 		return null;
	};
	pyjamas['Timer']['set_timer'].__name__ = 'set_timer';

	pyjamas['Timer']['set_timer'].__bind_type__ = 0;
	pyjamas['Timer']['set_timer'].__args__ = [null,null,['interval'],['fn']];
	pyjamas['Timer']['kill_timer'] = function(timer) {

 		return null;
	};
	pyjamas['Timer']['kill_timer'].__name__ = 'kill_timer';

	pyjamas['Timer']['kill_timer'].__bind_type__ = 0;
	pyjamas['Timer']['kill_timer'].__args__ = [null,null,['timer']];
	pyjamas['Timer']['init'] = function() {

		pyjamas['Timer']['timers'] = pyjslib['list']([]);
		return null;
	};
	pyjamas['Timer']['init'].__name__ = 'init';

	pyjamas['Timer']['init'].__bind_type__ = 0;
	pyjamas['Timer']['init'].__args__ = [null,null];
	pyjamas['Timer']['init']();
	pyjamas['Timer']['Timer'] = (function(){
		var $cls_instance = $pyjs__class_instance('Timer');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '6bc76264ed4d5b3b69fc9d530ff1ed5e';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(time, notify) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				time = arguments[1];
				notify = arguments[2];
			}
			var $attr3,$attr5,$attr4,$attr6;
			if (pyjslib['bool'](pyjslib['hasattr'](notify, String('onTimer')))) {
				self.notify_fn = ((($attr3=notify['onTimer']) !== null & ($attr4=notify).__is_instance__) && typeof $attr3 == 'function'?
							pyjslib['getattr']($attr4, 'onTimer'):
							notify['onTimer']);
			}
			else {
				self.notify_fn = notify;
			}
			self.timer_id = pyjamas['Timer']['timeout_add'](time, ((($attr5=self['notify']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'notify'):
						self['notify']));
			return null;
		}
	, 1, [null,null,['self'],['time'],['notify']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clearInterval', function(timer_id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer_id = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['timer_id']]);
		$cls_definition['clearInterval'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clearTimeout', function(timer_id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer_id = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['timer_id']]);
		$cls_definition['clearTimeout'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createInterval', function(timer, period) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
				period = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['timer'],['period']]);
		$cls_definition['createInterval'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createTimeout', function(timer, delay) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
				delay = arguments[2];
			}

 			return null;
		}
	, 1, [null,null,['self'],['timer'],['delay']]);
		$cls_definition['createTimeout'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'hookWindowClosing', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['hookWindowClosing'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'notify', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}

			$pyjs_kwargs_call(self, '_notify', args, null, [{}]);
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['notify'] = $method;
		$method = $pyjs__bind_method($cls_instance, '_notify', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}
			var $attr9,$attr8,$attr7,$attr10;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr7=self['notify_fn']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'notify_fn'):
						self['notify_fn'])))) {
				return false;
			}
			self['notify_fn'](((($attr9=self['timer_id']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'timer_id'):
						self['timer_id']));
			return false;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['_notify'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'cancel', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr15,$attr14,$attr16,$attr11,$attr13,$attr12;
			if (pyjslib['bool'](!pyjslib['bool'](pyjamas['Timer']['timeout_end']))) {
				pyjslib['printFunc']([String('TODO: cancel timer'), ((($attr11=self['timer_id']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'timer_id'):
							self['timer_id'])], 1);
				self.notify_fn = null;
				return null;
			}
			if (pyjslib['bool']((((($attr13=self['timer_id']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
						pyjslib['getattr']($attr14, 'timer_id'):
						self['timer_id']) !== null))) {
				pyjamas['Timer']['timeout_end'](((($attr15=self['timer_id']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
							pyjslib['getattr']($attr16, 'timer_id'):
							self['timer_id']));
				self.timer_id = null;
			}
			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['cancel'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'run', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['run'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'schedule', function(delayMillis) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				delayMillis = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['delayMillis']]);
		$cls_definition['schedule'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'scheduleRepeating', function(periodMillis) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				periodMillis = arguments[1];
			}

 			return null;
		}
	, 1, [null,null,['self'],['periodMillis']]);
		$cls_definition['scheduleRepeating'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'fire', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fire'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'fireImpl', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

 			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['fireImpl'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getID', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}
			var $attr17,$attr18;
			return ((($attr17=self['timer_id']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'timer_id'):
						self['timer_id']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getID'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.Timer */


/* end module: pyjamas.Timer */


/*
PYJS_DEPS: ['sys', 'pyjd']
*/
