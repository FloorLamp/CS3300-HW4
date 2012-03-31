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
		$cls_definition.__md5__ = '4ba4b7818621f04396f12a5f22304033';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(delay, listener) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				delay = arguments[1];
				listener = arguments[2];
			}
			if (typeof delay == 'undefined') delay=arguments.callee.__args__[3][1];
			if (typeof listener == 'undefined') listener=arguments.callee.__args__[4][1];
			var $attr3,$attr4;
			self.isRepeating = false;
			self.timerId = 0;
			self.listener = listener;
			if (pyjslib['bool']((((pyjslib['cmp'](delay, ((($attr3=pyjamas['Timer']['Timer']['MIN_PERIOD']) !== null & ($attr4=pyjamas['Timer']['Timer']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'MIN_PERIOD'):
						pyjamas['Timer']['Timer']['MIN_PERIOD'])))|1) == 1))) {
				self['schedule'](delay);
			}
			return null;
		}
	, 1, [null,null,['self'],['delay', 0],['listener', null]]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clearInterval', function(id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}


        $wnd.clearInterval(id);
        
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['clearInterval'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'clearTimeout', function(id) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				id = arguments[1];
			}


        $wnd.clearTimeout(id);
        
		}
	, 1, [null,null,['self'],['id']]);
		$cls_definition['clearTimeout'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'createInterval', function(timer, period) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				timer = arguments[1];
				period = arguments[2];
			}


        return $wnd.setInterval(function() { timer.fire(); }, period);
        
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


        return $wnd.setTimeout(function() { timer.fire(); }, delay);
        
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
			var $attr8,$attr5,$attr7,$attr6;
			if (pyjslib['bool'](!pyjslib['bool'](((($attr5=self['notify_fn']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'notify_fn'):
						self['notify_fn'])))) {
				return false;
			}
			self['notify_fn'](((($attr7=self['timer_id']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'timer_id'):
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
			var $attr9,$attr14,$attr11,$attr10,$attr13,$attr12;
			if (pyjslib['bool'](((($attr9=self['isRepeating']) !== null & ($attr10=self).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'isRepeating'):
						self['isRepeating']))) {
				self['clearInterval'](((($attr11=self['timerId']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'timerId'):
							self['timerId']));
			}
			else {
				self['clearTimeout'](((($attr13=self['timerId']) !== null & ($attr14=self).__is_instance__) && typeof $attr13 == 'function'?
							pyjslib['getattr']($attr14, 'timerId'):
							self['timerId']));
			}
			if (pyjslib['bool'](pyjamas['Timer']['timers'].__contains__(self))) {
				pyjamas['Timer']['timers']['remove'](self);
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
			var $attr20,$attr19,$attr18,$attr15,$attr17,$attr16;
			if (pyjslib['bool'](pyjslib['hasattr'](((($attr15=self['listener']) !== null & ($attr16=self).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'listener'):
						self['listener']), String('onTimer')))) {
				self['listener']['onTimer'](((($attr17=self['timerId']) !== null & ($attr18=self).__is_instance__) && typeof $attr17 == 'function'?
							pyjslib['getattr']($attr18, 'timerId'):
							self['timerId']));
			}
			else {
				self['listener'](((($attr19=self['timerId']) !== null & ($attr20=self).__is_instance__) && typeof $attr19 == 'function'?
							pyjslib['getattr']($attr20, 'timerId'):
							self['timerId']));
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
			var $attr21,$attr22;
			if (pyjslib['bool']((pyjslib['cmp'](delayMillis, ((($attr21=pyjamas['Timer']['Timer']['MIN_PERIOD']) !== null & ($attr22=pyjamas['Timer']['Timer']).__is_instance__) && typeof $attr21 == 'function'?
						pyjslib['getattr']($attr22, 'MIN_PERIOD'):
						pyjamas['Timer']['Timer']['MIN_PERIOD'])) == -1))) {
				pyjamas.Timer.alert(String('Timer delay must be positive'));
			}
			if (pyjslib['bool'](pyjamas['Timer']['timers'].__contains__(self))) {
				self['cancel']();
			}
			self.isRepeating = false;
			self.timerId = self['createTimeout'](self, delayMillis);
			pyjamas['Timer']['timers']['append'](self);
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
			var $attr23,$attr24;
			if (pyjslib['bool']((pyjslib['cmp'](periodMillis, ((($attr23=pyjamas['Timer']['Timer']['MIN_PERIOD']) !== null & ($attr24=pyjamas['Timer']['Timer']).__is_instance__) && typeof $attr23 == 'function'?
						pyjslib['getattr']($attr24, 'MIN_PERIOD'):
						pyjamas['Timer']['Timer']['MIN_PERIOD'])) == -1))) {
				pyjamas.Timer.alert(String('Timer period must be positive'));
			}
			if (pyjslib['bool'](pyjamas['Timer']['timers'].__contains__(self))) {
				self['cancel']();
			}
			self.isRepeating = true;
			self.timerId = self['createInterval'](self, periodMillis);
			pyjamas['Timer']['timers']['append'](self);
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

			self['fireImpl']();
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
			var $and1,$and2,$attr25,$attr26;
			if (pyjslib['bool']((pyjslib['bool']($and1=!pyjslib['bool'](((($attr25=self['isRepeating']) !== null & ($attr26=self).__is_instance__) && typeof $attr25 == 'function'?
						pyjslib['getattr']($attr26, 'isRepeating'):
						self['isRepeating'])))?pyjamas['Timer']['timers'].__contains__(self):$and1))) {
				pyjamas['Timer']['timers']['remove'](self);
			}
			self['run']();
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
			var $attr28,$attr27;
			return ((($attr27=self['timerId']) !== null & ($attr28=self).__is_instance__) && typeof $attr27 == 'function'?
						pyjslib['getattr']($attr28, 'timerId'):
						self['timerId']);
		}
	, 1, [null,null,['self']]);
		$cls_definition['getID'] = $method;
		$cls_definition['MIN_PERIOD'] = 1;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end pyjamas.Timer */


/* end module: pyjamas.Timer */


/*
PYJS_DEPS: ['sys', 'pyjd']
*/
