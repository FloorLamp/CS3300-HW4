/* start module: re */
var re;
$pyjs.loaded_modules['re'] = function (__mod_name__) {
	if($pyjs.loaded_modules['re'].__was_initialized__) return $pyjs.loaded_modules['re'];
	re = $pyjs.loaded_modules["re"];
	re.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 're';
	var __name__ = re.__name__ = __mod_name__;
	var $iter1_iter,c,$iter1_array,$iter1_nextval,$iter1_type,$iter1_idx;

	re['$assign1'] = 1;
	re['I'] = re['$assign1'];
	re['IGNORECASE'] = re['$assign1'];
	re['$assign2'] = 2;
	re['L'] = re['$assign2'];
	re['LOCALE'] = re['$assign2'];
	re['$assign3'] = 4;
	re['U'] = re['$assign3'];
	re['UNICODE'] = re['$assign3'];
	re['$assign4'] = 8;
	re['M'] = re['$assign4'];
	re['MULTILINE'] = re['$assign4'];
	re['$assign5'] = 16;
	re['S'] = re['$assign5'];
	re['DOTALL'] = re['$assign5'];
	re['$assign6'] = 32;
	re['X'] = re['$assign6'];
	re['VERBOSE'] = re['$assign6'];
	re['match'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments.callee.__args__[4][1];

		return re.compile(pattern, flags)['match'](string);
	};
	re['match'].__name__ = 'match';

	re['match'].__bind_type__ = 0;
	re['match'].__args__ = [null,null,['pattern'],['string'],['flags', 0]];
	re['search'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments.callee.__args__[4][1];

		return re.compile(pattern, flags)['search'](string);
	};
	re['search'].__name__ = 'search';

	re['search'].__bind_type__ = 0;
	re['search'].__args__ = [null,null,['pattern'],['string'],['flags', 0]];
	re['sub'] = function(pattern, repl, string, count) {
		if (typeof count == 'undefined') count=arguments.callee.__args__[5][1];

		return re.compile(pattern, 0)['sub'](repl, string, count);
	};
	re['sub'].__name__ = 'sub';

	re['sub'].__bind_type__ = 0;
	re['sub'].__args__ = [null,null,['pattern'],['repl'],['string'],['count', 0]];
	re['subn'] = function(pattern, repl, string, count) {
		if (typeof count == 'undefined') count=arguments.callee.__args__[5][1];

		return re.compile(pattern, 0)['subn'](repl, string, count);
	};
	re['subn'].__name__ = 'subn';

	re['subn'].__bind_type__ = 0;
	re['subn'].__args__ = [null,null,['pattern'],['repl'],['string'],['count', 0]];
	re['$$split'] = function(pattern, string, maxsplit) {
		if (typeof maxsplit == 'undefined') maxsplit=arguments.callee.__args__[4][1];

		return re.compile(pattern, 0)['$$split'](string, maxsplit);
	};
	re['$$split'].__name__ = 'split';

	re['$$split'].__bind_type__ = 0;
	re['$$split'].__args__ = [null,null,['pattern'],['string'],['maxsplit', 0]];
	re['findall'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments.callee.__args__[4][1];

		return re.compile(pattern, flags)['findall'](string);
	};
	re['findall'].__name__ = 'findall';

	re['findall'].__bind_type__ = 0;
	re['findall'].__args__ = [null,null,['pattern'],['string'],['flags', 0]];
	re['finditer'] = function(pattern, string, flags) {
		if (typeof flags == 'undefined') flags=arguments.callee.__args__[4][1];

		return re.compile(pattern, flags)['finditer'](string);
	};
	re['finditer'].__name__ = 'finditer';

	re['finditer'].__bind_type__ = 0;
	re['finditer'].__args__ = [null,null,['pattern'],['string'],['flags', 0]];
	re['compile'] = function(pattern, flags) {
		if (typeof flags == 'undefined') flags=arguments.callee.__args__[3][1];

		return re.SRE_Pattern(pattern, flags, re._compile(pattern, flags));
	};
	re['compile'].__name__ = 'compile';

	re['compile'].__bind_type__ = 0;
	re['compile'].__args__ = [null,null,['pattern'],['flags', 0]];
	re['purge'] = function() {

		re._cache['clear']();
		re._cache_repl['clear']();
		return null;
	};
	re['purge'].__name__ = 'purge';

	re['purge'].__bind_type__ = 0;
	re['purge'].__args__ = [null,null];
	re['template'] = function(pattern, flags) {
		if (typeof flags == 'undefined') flags=arguments.callee.__args__[3][1];

		throw (pyjslib['NotImplementedError'](String('re.template')));
		return null;
	};
	re['template'].__name__ = 'template';

	re['template'].__bind_type__ = 0;
	re['template'].__args__ = [null,null,['pattern'],['flags', 0]];
	re['_alphanum'] = pyjslib['dict']([]);
	$iter1_iter = String('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890');
	if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
		$iter1_type = 0;
	} else {
		$iter1_iter = $iter1_iter.__iter__();
		$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter1_idx = 0;
	while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
		c = $iter1_nextval;
		re['_alphanum'].__setitem__(c, 1);
	}
	delete c;
	re['escape'] = function(pattern) {
		var c,$iter2_nextval,$iter2_type,$iter2_iter,i,$iter2_idx,$add2,s,$add1,alphanum,$iter2_array;
		s = pyjslib['list'](pattern);
		alphanum = re['_alphanum'];
		$iter2_iter = pyjslib['range'](pyjslib['len'](pattern));
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			i = $iter2_nextval;
			c = pattern.__getitem__(i);
			if (pyjslib['bool'](!alphanum.__contains__(c))) {
				if (pyjslib['bool'](pyjslib['op_eq'](c, String('\x00')))) {
					s.__setitem__(i, String('\x5C000'));
				}
				else {
					s.__setitem__(i, (typeof ($add1=String('\x5C'))==typeof ($add2=c) && (typeof $add1=='number'||typeof $add1=='string')?
						$add1+$add2:
						pyjslib['op_add']($add1,$add2)));
				}
			}
		}
		return pyjslib['slice'](pattern, 0, 0)['join'](s);
	};
	re['escape'].__name__ = 'escape';

	re['escape'].__bind_type__ = 0;
	re['escape'].__args__ = [null,null,['pattern']];
	re['__inline_flags_re__'] = new RegExp("[(][?][iLmsux]+[)]");
	re['_cache'] = pyjslib['dict']([]);
	re['_cache_repl'] = pyjslib['dict']([]);
	re['_MAXCACHE'] = 100;
	re['_compile'] = function(pat, flags) {
		if (typeof flags == 'undefined') flags=arguments.callee.__args__[3][1];
		var $iter5_nextval,$iter5_array,$iter3_type,backslash,$iter5_iter,$iter4_type,$iter5_type,$iter4_iter,$iter3_idx,$add3,$iter3_nextval,brack,$iter3_iter,$iter5_idx,$sub3,$sub2,$sub1,spat,$sub4,flgs,$and1,$and2,$add6,$add10,$add11,$add12,$iter3_array,c,cachekey,i,$iter4_nextval,m,$iter4_idx,p,$add7,$add4,$add5,$iter4_array,$add8,$add9;
		cachekey = pyjslib['tuple']([pat, flags]);
		p = re['_cache']['get'](cachekey);
		if (pyjslib['bool']((p !== null))) {
			return p;
		}
		flgs = String('');
		while (pyjslib['bool'](true)) {
			m = re['__inline_flags_re__']['Exec'](pat);
			if (pyjslib['bool']((m === null))) {
				break;
			}
			pat = pat['__replace'](re['__inline_flags_re__'], String(''));
			$iter3_iter = pyjslib['list'](m);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				m = $iter3_nextval;
				$iter4_iter = m;
				if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
					$iter4_type = 0;
				} else {
					$iter4_iter = $iter4_iter.__iter__();
					$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter4_idx = 0;
				while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
					c = $iter4_nextval;
					if (pyjslib['bool'](pyjslib['list']([String('('), String('?'), String(')')]).__contains__(c))) {
					}
					else if (pyjslib['bool'](pyjslib['op_eq'](c, String('i')))) {
						flags |= re['IGNORECASE'];
					}
					else if (pyjslib['bool'](pyjslib['op_eq'](c, String('L')))) {
						flags |= re['LOCALE'];
					}
					else if (pyjslib['bool'](pyjslib['op_eq'](c, String('m')))) {
						flags |= re['MULTILINE'];
					}
					else if (pyjslib['bool'](pyjslib['op_eq'](c, String('s')))) {
						flags |= re['DOTALL'];
					}
					else if (pyjslib['bool'](pyjslib['op_eq'](c, String('u')))) {
						flags |= re['UNICODE'];
					}
					else if (pyjslib['bool'](pyjslib['op_eq'](c, String('x')))) {
						flags |= re['VERBOSE'];
					}
				}
			}
		}
		if (pyjslib['bool'](flags)) {
			if (pyjslib['bool']((flags)&(re['LOCALE']))) {
				throw (pyjslib['NotImplementedError'](String('L/LOCALE flag is not implemented')));
			}
			if (pyjslib['bool']((flags)&(re['UNICODE']))) {
				throw (pyjslib['NotImplementedError'](String('U/UNICODE flag is not implemented')));
			}
			if (pyjslib['bool']((flags)&(re['VERBOSE']))) {
				throw (pyjslib['NotImplementedError'](String('X/VERBOSE flag is not implemented')));
			}
			if (pyjslib['bool']((flags)&(re['DOTALL']))) {
				p = String('');
				brack = (typeof ($usub1=1)=='number'?
					-$usub1:
					pyjslib['op_usub']($usub1));
				backslash = (typeof ($usub2=2)=='number'?
					-$usub2:
					pyjslib['op_usub']($usub2));
				$iter5_iter = pyjslib['enumerate'](pat);
				if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
					$iter5_type = 0;
				} else {
					$iter5_iter = $iter5_iter.__iter__();
					$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter5_idx = 0;
				while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,true):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
					i = $iter5_nextval.__array[0];
					c = $iter5_nextval.__array[1];
					if (pyjslib['bool'](!pyjslib['op_eq'](backslash, (typeof ($sub1=i)==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
						$sub1-$sub2:
						pyjslib['op_sub']($sub1,$sub2))))) {
						if (pyjslib['bool']((pyjslib['cmp'](brack, 0) == -1))) {
							if (pyjslib['bool'](pyjslib['op_eq'](c, String('[')))) {
								brack = i;
							}
							else if (pyjslib['bool'](pyjslib['op_eq'](c, String('.')))) {
								c = String('[\x5Cs\x5CS]');
							}
							else if (pyjslib['bool'](pyjslib['op_eq'](c, String('\x5C')))) {
								backslash = i;
							}
						}
						else {
							if (pyjslib['bool']((pyjslib['bool']($and1=pyjslib['op_eq'](c, String(']')))?!pyjslib['op_eq'](brack, (typeof ($sub3=i)==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
								$sub3-$sub4:
								pyjslib['op_sub']($sub3,$sub4))):$and1))) {
								brack = (typeof ($usub3=1)=='number'?
									-$usub3:
									pyjslib['op_usub']($usub3));
							}
						}
					}
					p = (typeof ($add3=p)==typeof ($add4=c) && (typeof $add3=='number'||typeof $add3=='string')?
						$add3+$add4:
						pyjslib['op_add']($add3,$add4));
				}
				pat = p;
			}
			if (pyjslib['bool']((flags)&(re['IGNORECASE']))) {
				flgs = (typeof ($add5=flgs)==typeof ($add6=String('i')) && (typeof $add5=='number'||typeof $add5=='string')?
					$add5+$add6:
					pyjslib['op_add']($add5,$add6));
			}
			if (pyjslib['bool']((flags)&(re['MULTILINE']))) {
				flgs = (typeof ($add7=flgs)==typeof ($add8=String('m')) && (typeof $add7=='number'||typeof $add7=='string')?
					$add7+$add8:
					pyjslib['op_add']($add7,$add8));
			}
		}
		spat = (typeof ($add11=(typeof ($add9=String('([\x5Cs\x5CS]*?)('))==typeof ($add10=pat) && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			pyjslib['op_add']($add9,$add10)))==typeof ($add12=String(')[\x5Cs\x5CS]*')) && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			pyjslib['op_add']($add11,$add12));
		p = pyjslib['tuple']([new RegExp(pat, flgs), new RegExp(spat, flgs), new RegExp(pat, "g"+flgs)]);
		if (pyjslib['bool']((((pyjslib['cmp'](pyjslib['len'](re['_cache']), re['_MAXCACHE']))|1) == 1))) {
			re['_cache']['clear']();
		}
		re['_cache'].__setitem__(cachekey, p);
		return p;
	};
	re['_compile'].__name__ = '_compile';

	re['_compile'].__bind_type__ = 0;
	re['_compile'].__args__ = [null,null,['pat'],['flags', 0]];
	re['SRE_Match'] = (function(){
		var $cls_instance = $pyjs__class_instance('SRE_Match');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '0e922573e88a45482824bfcb36206d30';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(re, string, pos, endpos, groups, start, lastindex, lastgroup) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				re = arguments[1];
				string = arguments[2];
				pos = arguments[3];
				endpos = arguments[4];
				groups = arguments[5];
				start = arguments[6];
				lastindex = arguments[7];
				lastgroup = arguments[8];
			}
			var $add14,$add13;
			self._groups = groups;
			self._start = start;
			self._end = (typeof ($add13=start)==typeof ($add14=pyjslib['len'](groups.__getitem__(0))) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				pyjslib['op_add']($add13,$add14));
			self.re = re;
			self.string = string;
			self.pos = pos;
			self.endpos = endpos;
			self.lastindex = lastindex;
			self.lastgroup = lastgroup;
			return null;
		}
	, 1, [null,null,['self'],['re'],['string'],['pos'],['endpos'],['groups'],['start'],['lastindex'],['lastgroup']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'start', function(group) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments.callee.__args__[3][1];
			var $attr1,$attr2;
			if (pyjslib['bool'](!pyjslib['op_eq'](group, 0))) {
				throw (pyjslib['NotImplementedError'](String('group argument not supported')));
			}
			return ((($attr1=self['_start']) !== null & ($attr2=self).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, '_start'):
						self['_start']);
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['start'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'end', function(group) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments.callee.__args__[3][1];
			var $attr3,$attr4;
			if (pyjslib['bool'](!pyjslib['op_eq'](group, 0))) {
				throw (pyjslib['NotImplementedError'](String('group argument not supported')));
			}
			return ((($attr3=self['_end']) !== null & ($attr4=self).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, '_end'):
						self['_end']);
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['end'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'span', function(group) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				group = arguments[1];
			}
			if (typeof group == 'undefined') group=arguments.callee.__args__[3][1];

			if (pyjslib['bool'](!pyjslib['op_eq'](group, 0))) {
				throw (pyjslib['NotImplementedError'](String('group argument not supported')));
			}
			return pyjslib['tuple']([self['start'](group), self['end'](group)]);
		}
	, 1, [null,null,['self'],['group', 0]]);
		$cls_definition['span'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'expand', function(template) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				template = arguments[1];
			}

			throw (pyjslib['NotImplementedError'](String('expand')));
			return null;
		}
	, 1, [null,null,['self'],['template']]);
		$cls_definition['expand'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'groups', function($$default) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$default = arguments[1];
			}
			if (typeof $$default == 'undefined') $$default=arguments.callee.__args__[3][1];
			var $$default,$attr5,$attr6;
			return pyjslib['tuple'](pyjslib['slice'](((($attr5=self['_groups']) !== null & ($attr6=self).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, '_groups'):
						self['_groups']), 1, null));
		}
	, 1, [null,null,['self'],['$$default', null]]);
		$cls_definition['groups'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'groupdict', function($$default) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				$$default = arguments[1];
			}
			if (typeof $$default == 'undefined') $$default=arguments.callee.__args__[3][1];
			var $$default;
			throw (pyjslib['NotImplementedError'](String('groupdict')));
			return null;
		}
	, 1, [null,null,['self'],['$$default', null]]);
		$cls_definition['groupdict'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'group', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,0,arguments.length));

			} else {
				var self = arguments[0];
				var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

			}
			var grouplist,$attr8,group,$iter6_idx,$iter6_type,$attr7,$iter6_array,$iter6_iter,$iter6_nextval;
			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['len'](args), 0))) {
				args = pyjslib['tuple']([0]);
			}
			grouplist = pyjslib['list']([]);
			$iter6_iter = args;
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				group = $iter6_nextval;
				grouplist['append'](((($attr7=self['_groups']) !== null & ($attr8=self).__is_instance__) && typeof $attr7 == 'function'?
							pyjslib['getattr']($attr8, '_groups'):
							self['_groups']).__getitem__(group));
			}
			if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['len'](grouplist), 1))) {
				return grouplist.__getitem__(0);
			}
			else {
				return pyjslib['tuple'](grouplist);
			}
			return null;
		}
	, 1, ['args',null,['self']]);
		$cls_definition['group'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__copy__', function() {
			if (this.__is_instance__ === true) {
			} else {
			}


			var $pyjs__raise_expr1 = pyjslib['TypeError'];
			var $pyjs__raise_expr2 = String('cannot copy this pattern object');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			return null;
		}
	, 1, [null,null]);
		$cls_definition['__copy__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__deepcopy__', function() {
			if (this.__is_instance__ === true) {
			} else {
			}


			var $pyjs__raise_expr1 = pyjslib['TypeError'];
			var $pyjs__raise_expr2 = String('cannot copy this pattern object');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			return null;
		}
	, 1, [null,null]);
		$cls_definition['__deepcopy__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	re['SRE_Pattern'] = (function(){
		var $cls_instance = $pyjs__class_instance('SRE_Pattern');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '92f849f80db698401aa4d609d45527ac';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(pat, flags, code) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				pat = arguments[1];
				flags = arguments[2];
				code = arguments[3];
			}

			self.pat = pat;
			self.flags = flags;
			self.match_code = code.__getitem__(0);
			self.search_code = code.__getitem__(1);
			self.findall_code = code.__getitem__(2);
			self.groups = re.groups;
			self.groupindex = re.groupindex;
			self._indexgroup = re.indexgroup;
			return null;
		}
	, 1, [null,null,['self'],['pat'],['flags'],['code']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'match', function(string, pos, endpos) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments.callee.__args__[4][1];
			if (typeof endpos == 'undefined') endpos=arguments.callee.__args__[5][1];
			var $attr9,groups,$attr10;
			if (pyjslib['bool'](!pyjslib['bool']((endpos === null)))) {
				string = pyjslib['slice'](string, 0, endpos);
			}
			else {
				endpos = pyjslib['len'](string);
			}
			if (pyjslib['bool'](pyjslib['op_eq'](pos, 0))) {
				groups = self['match_code']['Exec'](string);
				if (pyjslib['bool']((groups === null))) {
					return null;
				}
				groups = pyjslib['list'](groups);
			}
			else if (pyjslib['bool']((((pyjslib['cmp'](pos, pyjslib['len'](string)))|1) == 1))) {
				return null;
			}
			else {
				groups = self['match_code']['Exec'](pyjslib['slice'](string, pos, null));
				if (pyjslib['bool']((groups === null))) {
					return null;
				}
				if (pyjslib['bool'](!pyjslib['op_eq'](((($attr9=groups['index']) !== null & ($attr10=groups).__is_instance__) && typeof $attr9 == 'function'?
							pyjslib['getattr']($attr10, 'index'):
							groups['index']), 0))) {
					return null;
				}
				groups = pyjslib['list'](groups);
			}
			return re['SRE_Match'](self, string, pos, endpos, groups, pos, null, null);
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['match'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'search', function(string, pos, endpos) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments.callee.__args__[4][1];
			if (typeof endpos == 'undefined') endpos=arguments.callee.__args__[5][1];
			var $add15,$add16,groups;
			if (pyjslib['bool'](!pyjslib['bool']((endpos === null)))) {
				string = pyjslib['slice'](string, 0, endpos);
			}
			if (pyjslib['bool'](pyjslib['op_eq'](pos, 0))) {
				groups = self['search_code']['Exec'](string);
				if (pyjslib['bool']((groups === null))) {
					return null;
				}
				groups = pyjslib['list'](groups);
			}
			else if (pyjslib['bool']((((pyjslib['cmp'](pos, pyjslib['len'](string)))|1) == 1))) {
				return null;
			}
			else {
				groups = self['search_code']['Exec'](pyjslib['slice'](string, pos, null));
				if (pyjslib['bool']((groups === null))) {
					return null;
				}
				groups = pyjslib['list'](groups);
			}
			return re['SRE_Match'](self, string, pos, endpos, pyjslib['slice'](groups, 2, null), (typeof ($add15=pos)==typeof ($add16=pyjslib['len'](groups.__getitem__(1))) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				pyjslib['op_add']($add15,$add16)), null, null);
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['search'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'findall', function(string, pos, endpos) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments.callee.__args__[4][1];
			if (typeof endpos == 'undefined') endpos=arguments.callee.__args__[5][1];
			var all,span,m,$attr11,$attr12;
			if (pyjslib['bool'](!pyjslib['bool']((endpos === null)))) {
				string = pyjslib['slice'](string, 0, endpos);
			}
			all = pyjslib['list']([]);
			while (pyjslib['bool'](true)) {
				m = self['search'](string, pos);
				if (pyjslib['bool']((m === null))) {
					break;
				}
				span = m['span']();
				all['append'](pyjslib['slice'](string, span.__getitem__(0), span.__getitem__(1)));
				pos = span.__getitem__(1);
			}
			return all;
			return pyjslib['list'](pyjslib['slice'](string, pos, null)['match'](((($attr11=self['findall_code']) !== null & ($attr12=self).__is_instance__) && typeof $attr11 == 'function'?
						pyjslib['getattr']($attr12, 'findall_code'):
						self['findall_code'])));
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['findall'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'sub', function(repl, string, count) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				repl = arguments[1];
				string = arguments[2];
				count = arguments[3];
			}
			if (typeof count == 'undefined') count=arguments.callee.__args__[5][1];

			return self['subn'](repl, string, count).__getitem__(0);
		}
	, 1, [null,null,['self'],['repl'],['string'],['count', 0]]);
		$cls_definition['sub'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'subn', function(repl, string, count) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				repl = arguments[1];
				string = arguments[2];
				count = arguments[3];
			}
			if (typeof count == 'undefined') count=arguments.callee.__args__[5][1];
			var span,$sub6,$add21,res,$add22,m,pos,n,subst,$sub5,$add20,$add24,$add18,$add19,$add17,$add23;
			res = String('');
			n = 0;
			subst = repl;
			pos = 0;
			while (pyjslib['bool']((((pyjslib['cmp'](count, 0))|1) == 1))) {
				m = self['search'](string, pos);
				if (pyjslib['bool']((m === null))) {
					break;
				}
				span = m['span']();
				if (pyjslib['bool'](pyjslib['callable'](repl))) {
					subst = repl(m);
				}
				res = (typeof ($add17=res)==typeof ($add18=pyjslib['slice'](string, pos, span.__getitem__(0))) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					pyjslib['op_add']($add17,$add18));
				res = (typeof ($add19=res)==typeof ($add20=subst) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					pyjslib['op_add']($add19,$add20));
				pos = span.__getitem__(1);
				n = (typeof ($add21=n)==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
					$add21+$add22:
					pyjslib['op_add']($add21,$add22));
				if (pyjslib['bool'](count)) {
					if (pyjslib['bool'](pyjslib['op_eq'](count, 1))) {
						break;
					}
					count = (typeof ($sub5=count)==typeof ($sub6=1) && (typeof $sub5=='number'||typeof $sub5=='string')?
						$sub5-$sub6:
						pyjslib['op_sub']($sub5,$sub6));
				}
			}
			return pyjslib['tuple']([(typeof ($add23=res)==typeof ($add24=pyjslib['slice'](string, pos, null)) && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				pyjslib['op_add']($add23,$add24)), n]);
		}
	, 1, [null,null,['self'],['repl'],['string'],['count', 0]]);
		$cls_definition['subn'] = $method;
		$method = $pyjs__bind_method($cls_instance, '$$split', function(string, maxsplit) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				maxsplit = arguments[2];
			}
			if (typeof maxsplit == 'undefined') maxsplit=arguments.callee.__args__[4][1];
			var span,m,pos,splitted;
			splitted = pyjslib['list']([]);
			pos = 0;
			while (pyjslib['bool']((((pyjslib['cmp'](maxsplit, 0))|1) == 1))) {
				m = self['search'](string, pos);
				if (pyjslib['bool']((m === null))) {
					break;
				}
				span = m['span']();
				splitted['append'](pyjslib['slice'](string, pos, span.__getitem__(0)));
				pos = span.__getitem__(1);
			}
			if (pyjslib['bool']((pyjslib['cmp'](pos, pyjslib['len'](string)) == -1))) {
				splitted['append'](pyjslib['slice'](string, pos, null));
			}
			return splitted;
		}
	, 1, [null,null,['self'],['string'],['maxsplit', 0]]);
		$cls_definition['$$split'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'finditer', function(string, pos, endpos) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				pos = arguments[2];
				endpos = arguments[3];
			}
			if (typeof pos == 'undefined') pos=arguments.callee.__args__[4][1];
			if (typeof endpos == 'undefined') endpos=arguments.callee.__args__[5][1];

			return self['findall'](string, pos, endpos)['__iter__']();
		}
	, 1, [null,null,['self'],['string'],['pos', 0],['endpos', null]]);
		$cls_definition['finditer'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'scanner', function(string, start, end) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				string = arguments[1];
				start = arguments[2];
				end = arguments[3];
			}
			if (typeof start == 'undefined') start=arguments.callee.__args__[4][1];
			if (typeof end == 'undefined') end=arguments.callee.__args__[5][1];

			throw (pyjslib['NotImplementedError'](String('scanner')));
			return null;
		}
	, 1, [null,null,['self'],['string'],['start', 0],['end', null]]);
		$cls_definition['scanner'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__copy__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


			var $pyjs__raise_expr1 = pyjslib['TypeError'];
			var $pyjs__raise_expr2 = String('cannot copy this pattern object');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__copy__'] = $method;
		$method = $pyjs__bind_method($cls_instance, '__deepcopy__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}


			var $pyjs__raise_expr1 = pyjslib['TypeError'];
			var $pyjs__raise_expr2 = String('cannot copy this pattern object');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

			return null;
		}
	, 1, [null,null,['self']]);
		$cls_definition['__deepcopy__'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib.object));
	})();
	return this;
}; /* end re */


/* end module: re */


