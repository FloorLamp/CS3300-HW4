/* start module: binascii */
var binascii;
$pyjs.loaded_modules['binascii'] = function (__mod_name__) {
	if($pyjs.loaded_modules['binascii'].__was_initialized__) return $pyjs.loaded_modules['binascii'];
	binascii = $pyjs.loaded_modules["binascii"];
	binascii.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'binascii';
	var __name__ = binascii.__name__ = __mod_name__;


	binascii['Error'] = (function(){
		var $cls_instance = $pyjs__class_instance('Error');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '77827d72b0d04e97fb923fc2d26684c0';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['Exception']));
	})();
	binascii['Done'] = (function(){
		var $cls_instance = $pyjs__class_instance('Done');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '348359ce1bd92fc817a27c63c160b201';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['Exception']));
	})();
	binascii['Incomplete'] = (function(){
		var $cls_instance = $pyjs__class_instance('Incomplete');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '2fdf0598d2c4d52a0bf02c7de676e463';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['Exception']));
	})();
	binascii['a2b_uu'] = function(s) {
		var trailingdata,err,$sub15,$sub16,quadruplets_gen,$add3,length,$pyjs_try_err,$mod1,result,$add4,$mod2,$sub2,$sub1,$mul2,$mul1;
		if (pyjslib['bool'](!pyjslib['bool'](s))) {
			return String('');
		}
		length = (typeof ($mod1=(typeof ($sub1=pyjslib['ord'](s.__getitem__(0)))==typeof ($sub2=32) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			pyjslib['op_sub']($sub1,$sub2)))==typeof ($mod2=64) && typeof $mod1=='number'?
			$mod1%$mod2:
			pyjslib['op_mod']($mod1,$mod2));
		quadruplets_gen = function(s) {
			var err,$add2,$pyjs_try_err,iterlist,$add1;
			iterlist = pyjslib['list']([]);
			while (pyjslib['bool'](s)) {
				try {
					iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0)), pyjslib['ord'](s.__getitem__(1)), pyjslib['ord'](s.__getitem__(2)), pyjslib['ord'](s.__getitem__(3))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: binascii, try_lineno: 31};
					if (($pyjs_try_err_name == pyjslib['IndexError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['IndexError'])) {
						$pyjs.__last_exception__.except_lineno = 33;
						err = $pyjs_try_err;
						s = (typeof ($add1=s)==typeof ($add2=String('   ')) && (typeof $add1=='number'||typeof $add1=='string')?
							$add1+$add2:
							pyjslib['op_add']($add1,$add2));
						iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0)), pyjslib['ord'](s.__getitem__(1)), pyjslib['ord'](s.__getitem__(2)), pyjslib['ord'](s.__getitem__(3))]));
						return iterlist;
					} else { throw $pyjs_try_err; }
				}
				s = pyjslib['slice'](s, 4, null);
			}
			return iterlist;
		};
		quadruplets_gen.__name__ = 'quadruplets_gen';

		quadruplets_gen.__bind_type__ = 0;
		quadruplets_gen.__args__ = [null,null,['s']];
		try {
			result = function(){
var $listcomp1 = pyjslib['list']();
			$iter1_iter = quadruplets_gen(pyjslib['slice'](s, 1, null)['rstrip']());
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,true):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				A = $iter1_nextval.__array[0];
				B = $iter1_nextval.__array[1];
				C = $iter1_nextval.__array[2];
				D = $iter1_nextval.__array[3];
				$listcomp1['append'](String('')['join'](pyjslib['list']([pyjslib['chr']((((typeof ($sub3=A)==typeof ($sub4=32) && (typeof $sub3=='number'||typeof $sub3=='string')?
					$sub3-$sub4:
					pyjslib['op_sub']($sub3,$sub4)))<<(2))|((((typeof ($sub5=B)==typeof ($sub6=32) && (typeof $sub5=='number'||typeof $sub5=='string')?
					$sub5-$sub6:
					pyjslib['op_sub']($sub5,$sub6)))>>(4))&(3))), pyjslib['chr'](((((typeof ($sub7=B)==typeof ($sub8=32) && (typeof $sub7=='number'||typeof $sub7=='string')?
					$sub7-$sub8:
					pyjslib['op_sub']($sub7,$sub8)))&(15))<<(4))|((((typeof ($sub9=C)==typeof ($sub10=32) && (typeof $sub9=='number'||typeof $sub9=='string')?
					$sub9-$sub10:
					pyjslib['op_sub']($sub9,$sub10)))>>(2))&(15))), pyjslib['chr'](((((typeof ($sub11=C)==typeof ($sub12=32) && (typeof $sub11=='number'||typeof $sub11=='string')?
					$sub11-$sub12:
					pyjslib['op_sub']($sub11,$sub12)))&(3))<<(6))|(((typeof ($sub13=D)==typeof ($sub14=32) && (typeof $sub13=='number'||typeof $sub13=='string')?
					$sub13-$sub14:
					pyjslib['op_sub']($sub13,$sub14)))&(63)))])));
			}
return $listcomp1;}();
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: binascii, try_lineno: 40};
			if (($pyjs_try_err_name == pyjslib['ValueError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['ValueError'])) {
				$pyjs.__last_exception__.except_lineno = 46;
				err = $pyjs_try_err;
				throw (binascii['Error'](String('Illegal char')));
			} else { throw $pyjs_try_err; }
		}
		result = String('')['join'](result);
		trailingdata = pyjslib['slice'](result, length, null);
		if (pyjslib['bool'](trailingdata['strip'](String('\x00')))) {
			throw (binascii['Error'](String('Trailing garbage')));
		}
		result = pyjslib['slice'](result, 0, length);
		if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](result), length) == -1))) {
			result = (typeof ($add3=result)==typeof ($add4=(typeof ($mul1=(typeof ($sub15=length)==typeof ($sub16=pyjslib['len'](result)) && (typeof $sub15=='number'||typeof $sub15=='string')?
				$sub15-$sub16:
				pyjslib['op_sub']($sub15,$sub16)))==typeof ($mul2=String('\x00')) && typeof $mul1=='number'?
				$mul1*$mul2:
				pyjslib['op_mul']($mul1,$mul2))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4));
		}
		return result;
	};
	binascii['a2b_uu'].__name__ = 'a2b_uu';

	binascii['a2b_uu'].__bind_type__ = 0;
	binascii['a2b_uu'].__args__ = [null,null,['s']];
	binascii['b2a_uu'] = function(s) {
		var $add20,$add15,$add16,$add17,result,length,triples_gen,$add18,$add19;
		length = pyjslib['len'](s);
		if (pyjslib['bool']((pyjslib['cmp'](length, 45) == 1))) {
			throw (binascii['Error'](String('At most 45 bytes at once')));
		}
		triples_gen = function(s) {
			var err,$pyjs_try_err,$add6,iterlist,$add5;
			iterlist = pyjslib['list']([]);
			while (pyjslib['bool'](s)) {
				try {
					iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0)), pyjslib['ord'](s.__getitem__(1)), pyjslib['ord'](s.__getitem__(2))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: binascii, try_lineno: 74};
					if (($pyjs_try_err_name == pyjslib['IndexError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['IndexError'])) {
						$pyjs.__last_exception__.except_lineno = 76;
						err = $pyjs_try_err;
						s = (typeof ($add5=s)==typeof ($add6=String('\x00\x00')) && (typeof $add5=='number'||typeof $add5=='string')?
							$add5+$add6:
							pyjslib['op_add']($add5,$add6));
						iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0)), pyjslib['ord'](s.__getitem__(1)), pyjslib['ord'](s.__getitem__(2))]));
						return iterlist;
					} else { throw $pyjs_try_err; }
				}
				s = pyjslib['slice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen.__name__ = 'triples_gen';

		triples_gen.__bind_type__ = 0;
		triples_gen.__args__ = [null,null,['s']];
		result = function(){
var $listcomp2 = pyjslib['list']();
		$iter2_iter = triples_gen(s);
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,true):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			A = $iter2_nextval.__array[0];
			B = $iter2_nextval.__array[1];
			C = $iter2_nextval.__array[2];
			$listcomp2['append'](String('')['join'](pyjslib['list']([pyjslib['chr']((typeof ($add7=32)==typeof ($add8=((A)>>(2))&(63)) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				pyjslib['op_add']($add7,$add8))), pyjslib['chr']((typeof ($add9=32)==typeof ($add10=(((A)<<(4))|(((B)>>(4))&(15)))&(63)) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				pyjslib['op_add']($add9,$add10))), pyjslib['chr']((typeof ($add11=32)==typeof ($add12=(((B)<<(2))|(((C)>>(6))&(3)))&(63)) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				pyjslib['op_add']($add11,$add12))), pyjslib['chr']((typeof ($add13=32)==typeof ($add14=(C)&(63)) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				pyjslib['op_add']($add13,$add14)))])));
		}
return $listcomp2;}();
		return (typeof ($add19=(typeof ($add17=pyjslib['chr']((typeof ($add15=pyjslib['ord'](String(' ')))==typeof ($add16=(length)&(63)) && (typeof $add15=='number'||typeof $add15=='string')?
			$add15+$add16:
			pyjslib['op_add']($add15,$add16))))==typeof ($add18=String('')['join'](result)) && (typeof $add17=='number'||typeof $add17=='string')?
			$add17+$add18:
			pyjslib['op_add']($add17,$add18)))==typeof ($add20=String('\x0A')) && (typeof $add19=='number'||typeof $add19=='string')?
			$add19+$add20:
			pyjslib['op_add']($add19,$add20));
	};
	binascii['b2a_uu'].__name__ = 'b2a_uu';

	binascii['b2a_uu'].__bind_type__ = 0;
	binascii['b2a_uu'].__args__ = [null,null,['s']];
	binascii['table_a2b_base64'] = pyjslib['dict']([[String('A'), 0], [String('B'), 1], [String('C'), 2], [String('D'), 3], [String('E'), 4], [String('F'), 5], [String('G'), 6], [String('H'), 7], [String('I'), 8], [String('J'), 9], [String('K'), 10], [String('L'), 11], [String('M'), 12], [String('N'), 13], [String('O'), 14], [String('P'), 15], [String('Q'), 16], [String('R'), 17], [String('S'), 18], [String('T'), 19], [String('U'), 20], [String('V'), 21], [String('W'), 22], [String('X'), 23], [String('Y'), 24], [String('Z'), 25], [String('a'), 26], [String('b'), 27], [String('c'), 28], [String('d'), 29], [String('e'), 30], [String('f'), 31], [String('g'), 32], [String('h'), 33], [String('i'), 34], [String('j'), 35], [String('k'), 36], [String('l'), 37], [String('m'), 38], [String('n'), 39], [String('o'), 40], [String('p'), 41], [String('q'), 42], [String('r'), 43], [String('s'), 44], [String('t'), 45], [String('u'), 46], [String('v'), 47], [String('w'), 48], [String('x'), 49], [String('y'), 50], [String('z'), 51], [String('0'), 52], [String('1'), 53], [String('2'), 54], [String('3'), 55], [String('4'), 56], [String('5'), 57], [String('6'), 58], [String('7'), 59], [String('8'), 60], [String('9'), 61], [String('+'), 62], [String('/'), 63], [String('='), 0]]);
	binascii['a2b_base64'] = function(s) {
		var $sub20,leftchar,$sub18,$iter4_type,$or1,$iter4_iter,res,$add23,$add25,$add24,$add26,quad_pos,next_c,$or5,$or4,$sub19,$or6,next_valid_char,$or3,$or2,$and1,$and2,$sub17,c,i,$iter4_nextval,$iter4_idx,leftbits,$iter4_array;
		if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](s, pyjslib['str'])))) {
			throw (pyjslib['TypeError'](pyjslib['sprintf'](String('expected string or unicode, got %r'), pyjslib['tuple']([s]))));
		}
		s = s['rstrip']();
		next_valid_char = function(s, pos) {
			var c,$iter3_idx,i,$iter3_nextval,$iter3_type,$add21,$iter3_iter,$iter3_array,$add22;
			$iter3_iter = pyjslib['range']((typeof ($add21=pos)==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				pyjslib['op_add']($add21,$add22)), pyjslib['len'](s));
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				c = s.__getitem__(i);
				if (pyjslib['bool']((pyjslib['cmp'](c, String('')) == -1))) {
					if (pyjslib['bool'](binascii['table_a2b_base64']['has_key'](c))) {
						return c;
					}
				}
			}
			return null;
		};
		next_valid_char.__name__ = 'next_valid_char';

		next_valid_char.__bind_type__ = 0;
		next_valid_char.__args__ = [null,null,['s'],['pos']];
		quad_pos = 0;
		leftbits = 0;
		leftchar = 0;
		res = pyjslib['list']([]);
		$iter4_iter = pyjslib['enumerate'](s);
		if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
			$iter4_type = 0;
		} else {
			$iter4_iter = $iter4_iter.__iter__();
			$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter4_idx = 0;
		while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,true):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
			i = $iter4_nextval.__array[0];
			c = $iter4_nextval.__array[1];
			if (pyjslib['bool']((pyjslib['bool']($or1=(pyjslib['cmp'](c, String('')) == 1))?$or1:(pyjslib['bool']($or2=pyjslib['op_eq'](c, String('\x0A')))?$or2:(pyjslib['bool']($or3=pyjslib['op_eq'](c, String('\x0D')))?$or3:pyjslib['op_eq'](c, String(' '))))))) {
				continue;
			}
			if (pyjslib['bool'](pyjslib['op_eq'](c, String('=')))) {
				if (pyjslib['bool']((pyjslib['bool']($or5=(pyjslib['cmp'](quad_pos, 2) == -1))?$or5:(pyjslib['bool']($and1=pyjslib['op_eq'](quad_pos, 2))?!pyjslib['op_eq'](next_valid_char(s, i), String('=')):$and1)))) {
					continue;
				}
				else {
					leftbits = 0;
					break;
				}
			}
			if (pyjslib['bool'](!pyjslib['bool'](binascii['table_a2b_base64']['has_key'](c)))) {
				continue;
			}
			next_c = binascii['table_a2b_base64'].__getitem__(c);
			quad_pos = ((typeof ($add23=quad_pos)==typeof ($add24=1) && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				pyjslib['op_add']($add23,$add24)))&(3);
			leftchar = ((leftchar)<<(6))|(next_c);
			leftbits = (typeof ($add25=leftbits)==typeof ($add26=6) && (typeof $add25=='number'||typeof $add25=='string')?
				$add25+$add26:
				pyjslib['op_add']($add25,$add26));
			if (pyjslib['bool']((((pyjslib['cmp'](leftbits, 8))|1) == 1))) {
				leftbits = (typeof ($sub17=leftbits)==typeof ($sub18=8) && (typeof $sub17=='number'||typeof $sub17=='string')?
					$sub17-$sub18:
					pyjslib['op_sub']($sub17,$sub18));
				res['append'](((leftchar)>>(leftbits))&(255));
				leftchar &= (typeof ($sub19=(1)<<(leftbits))==typeof ($sub20=1) && (typeof $sub19=='number'||typeof $sub19=='string')?
					$sub19-$sub20:
					pyjslib['op_sub']($sub19,$sub20));
			}
		}
		if (pyjslib['bool'](!pyjslib['op_eq'](leftbits, 0))) {
			throw (binascii['Error'](String('Incorrect padding')));
		}
		return String('')['join'](function(){
var $listcomp3 = pyjslib['list']();
		$iter5_iter = res;
		if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
			$iter5_type = 0;
		} else {
			$iter5_iter = $iter5_iter.__iter__();
			$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter5_idx = 0;
		while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
			i = $iter5_nextval;
			$listcomp3['append'](pyjslib['chr'](i));
		}
return $listcomp3;}());
	};
	binascii['a2b_base64'].__name__ = 'a2b_base64';

	binascii['a2b_base64'].__bind_type__ = 0;
	binascii['a2b_base64'].__args__ = [null,null,['s']];
	binascii['table_b2a_base64'] = String('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/');
	binascii['b2a_base64'] = function(s) {
		var $sub22,$sub23,$sub21,$sub24,$add42,$mod4,result,$mod3,$add29,$add41,$add40,snippet,$$final,final_length,$add39,a,$add38,b,$add32,$add33,$add30,$add31,$add36,$add37,$add34,$add35,length,triples_gen;
		length = pyjslib['len'](s);
		final_length = (typeof ($mod3=length)==typeof ($mod4=3) && typeof $mod3=='number'?
			$mod3%$mod4:
			pyjslib['op_mod']($mod3,$mod4));
		triples_gen = function(s) {
			var $add28,err,$add27,$pyjs_try_err,iterlist;
			iterlist = pyjslib['list']([]);
			while (pyjslib['bool'](s)) {
				try {
					iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0)), pyjslib['ord'](s.__getitem__(1)), pyjslib['ord'](s.__getitem__(2))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: binascii, try_lineno: 229};
					if (($pyjs_try_err_name == pyjslib['IndexError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['IndexError'])) {
						$pyjs.__last_exception__.except_lineno = 231;
						err = $pyjs_try_err;
						s = (typeof ($add27=s)==typeof ($add28=String('\x00\x00')) && (typeof $add27=='number'||typeof $add27=='string')?
							$add27+$add28:
							pyjslib['op_add']($add27,$add28));
						iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0)), pyjslib['ord'](s.__getitem__(1)), pyjslib['ord'](s.__getitem__(2))]));
						return iterlist;
					} else { throw $pyjs_try_err; }
				}
				s = pyjslib['slice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen.__name__ = 'triples_gen';

		triples_gen.__bind_type__ = 0;
		triples_gen.__args__ = [null,null,['s']];
		a = triples_gen(pyjslib['slice'](s, 0, (typeof ($sub21=length)==typeof ($sub22=final_length) && (typeof $sub21=='number'||typeof $sub21=='string')?
			$sub21-$sub22:
			pyjslib['op_sub']($sub21,$sub22))));
		result = function(){
var $listcomp4 = pyjslib['list']();
		$iter6_iter = a;
		if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
			$iter6_type = 0;
		} else {
			$iter6_iter = $iter6_iter.__iter__();
			$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter6_idx = 0;
		while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,true):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
			A = $iter6_nextval.__array[0];
			B = $iter6_nextval.__array[1];
			C = $iter6_nextval.__array[2];
			$listcomp4['append'](String('')['join'](pyjslib['list']([binascii['table_b2a_base64'].__getitem__(((A)>>(2))&(63)), binascii['table_b2a_base64'].__getitem__((((A)<<(4))|(((B)>>(4))&(15)))&(63)), binascii['table_b2a_base64'].__getitem__((((B)<<(2))|(((C)>>(6))&(3)))&(63)), binascii['table_b2a_base64'].__getitem__((C)&(63))])));
		}
return $listcomp4;}();
		$$final = pyjslib['slice'](s, (typeof ($sub23=length)==typeof ($sub24=final_length) && (typeof $sub23=='number'||typeof $sub23=='string')?
			$sub23-$sub24:
			pyjslib['op_sub']($sub23,$sub24)), null);
		if (pyjslib['bool'](pyjslib['op_eq'](final_length, 0))) {
			snippet = String('');
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](final_length, 1))) {
			a = pyjslib['ord']($$final.__getitem__(0));
			snippet = (typeof ($add31=(typeof ($add29=binascii['table_b2a_base64'].__getitem__(((a)>>(2))&(63)))==typeof ($add30=binascii['table_b2a_base64'].__getitem__(((a)<<(4))&(63))) && (typeof $add29=='number'||typeof $add29=='string')?
				$add29+$add30:
				pyjslib['op_add']($add29,$add30)))==typeof ($add32=String('==')) && (typeof $add31=='number'||typeof $add31=='string')?
				$add31+$add32:
				pyjslib['op_add']($add31,$add32));
		}
		else {
			a = pyjslib['ord']($$final.__getitem__(0));
			b = pyjslib['ord']($$final.__getitem__(1));
			snippet = (typeof ($add37=(typeof ($add35=(typeof ($add33=binascii['table_b2a_base64'].__getitem__(((a)>>(2))&(63)))==typeof ($add34=binascii['table_b2a_base64'].__getitem__((((a)<<(4))|(((b)>>(4))&(15)))&(63))) && (typeof $add33=='number'||typeof $add33=='string')?
				$add33+$add34:
				pyjslib['op_add']($add33,$add34)))==typeof ($add36=binascii['table_b2a_base64'].__getitem__(((b)<<(2))&(63))) && (typeof $add35=='number'||typeof $add35=='string')?
				$add35+$add36:
				pyjslib['op_add']($add35,$add36)))==typeof ($add38=String('=')) && (typeof $add37=='number'||typeof $add37=='string')?
				$add37+$add38:
				pyjslib['op_add']($add37,$add38));
		}
		return (typeof ($add41=(typeof ($add39=String('')['join'](result))==typeof ($add40=snippet) && (typeof $add39=='number'||typeof $add39=='string')?
			$add39+$add40:
			pyjslib['op_add']($add39,$add40)))==typeof ($add42=String('\x0A')) && (typeof $add41=='number'||typeof $add41=='string')?
			$add41+$add42:
			pyjslib['op_add']($add41,$add42));
	};
	binascii['b2a_base64'].__name__ = 'b2a_base64';

	binascii['b2a_base64'].__bind_type__ = 0;
	binascii['b2a_base64'].__args__ = [null,null,['s']];
	binascii['a2b_qp'] = function(s, header) {
		if (typeof header == 'undefined') header=arguments.callee.__args__[3][1];
		var ch,inp,$add60,$add49,$add48,$add47,$add46,$add45,$add44,$add43,$and8,$or7,odata,$and3,$and4,$or8,$and6,$and5,$and7,$add50,$add51,$add52,$add53,$add54,$add55,$add56,$add57,$add58,$add59;
		inp = 0;
		odata = pyjslib['list']([]);
		while (pyjslib['bool']((pyjslib['cmp'](inp, pyjslib['len'](s)) == -1))) {
			if (pyjslib['bool'](pyjslib['op_eq'](s.__getitem__(inp), String('=')))) {
				inp = (typeof ($add43=inp)==typeof ($add44=1) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					pyjslib['op_add']($add43,$add44));
				if (pyjslib['bool']((((pyjslib['cmp'](inp, pyjslib['len'](s)))|1) == 1))) {
					break;
				}
				if (pyjslib['bool']((pyjslib['bool']($or7=pyjslib['op_eq'](s.__getitem__(inp), String('\x0A')))?$or7:pyjslib['op_eq'](s.__getitem__(inp), String('\x0D'))))) {
					if (pyjslib['bool'](!pyjslib['op_eq'](s.__getitem__(inp), String('\x0A')))) {
						while (pyjslib['bool']((pyjslib['bool']($and3=(pyjslib['cmp'](inp, pyjslib['len'](s)) == -1))?!pyjslib['op_eq'](s.__getitem__(inp), String('\x0A')):$and3))) {
							inp = (typeof ($add45=inp)==typeof ($add46=1) && (typeof $add45=='number'||typeof $add45=='string')?
								$add45+$add46:
								pyjslib['op_add']($add45,$add46));
						}
					}
					if (pyjslib['bool']((pyjslib['cmp'](inp, pyjslib['len'](s)) == -1))) {
						inp = (typeof ($add47=inp)==typeof ($add48=1) && (typeof $add47=='number'||typeof $add47=='string')?
							$add47+$add48:
							pyjslib['op_add']($add47,$add48));
					}
				}
				else if (pyjslib['bool'](pyjslib['op_eq'](s.__getitem__(inp), String('=')))) {
					odata['append'](String('='));
					inp = (typeof ($add49=inp)==typeof ($add50=1) && (typeof $add49=='number'||typeof $add49=='string')?
						$add49+$add50:
						pyjslib['op_add']($add49,$add50));
				}
				else if (pyjslib['bool']((pyjslib['bool']($and5=binascii.hex_numbers.__contains__(s.__getitem__(inp)))?binascii.hex_numbers.__contains__(s.__getitem__((typeof ($add51=inp)==typeof ($add52=1) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					pyjslib['op_add']($add51,$add52)))):$and5))) {
					ch = pyjslib['chr'](pyjslib['float_int'](pyjslib['slice'](s, inp, (typeof ($add53=inp)==typeof ($add54=2) && (typeof $add53=='number'||typeof $add53=='string')?
						$add53+$add54:
						pyjslib['op_add']($add53,$add54))), 16));
					inp = (typeof ($add55=inp)==typeof ($add56=2) && (typeof $add55=='number'||typeof $add55=='string')?
						$add55+$add56:
						pyjslib['op_add']($add55,$add56));
					odata['append'](ch);
				}
				else {
					odata['append'](String('='));
				}
			}
			else if (pyjslib['bool']((pyjslib['bool']($and7=header)?pyjslib['op_eq'](s.__getitem__(inp), String('_')):$and7))) {
				odata['append'](String(' '));
				inp = (typeof ($add57=inp)==typeof ($add58=1) && (typeof $add57=='number'||typeof $add57=='string')?
					$add57+$add58:
					pyjslib['op_add']($add57,$add58));
			}
			else {
				odata['append'](s.__getitem__(inp));
				inp = (typeof ($add59=inp)==typeof ($add60=1) && (typeof $add59=='number'||typeof $add59=='string')?
					$add59+$add60:
					pyjslib['op_add']($add59,$add60));
			}
		}
		return String('')['join'](odata);
	};
	binascii['a2b_qp'].__name__ = 'a2b_qp';

	binascii['a2b_qp'].__bind_type__ = 0;
	binascii['a2b_qp'].__args__ = [null,null,['s'],['header', false]];
	binascii['b2a_qp'] = function(data, quotetabs, istext, header) {
		if (typeof quotetabs == 'undefined') quotetabs=arguments.callee.__args__[3][1];
		if (typeof istext == 'undefined') istext=arguments.callee.__args__[4][1];
		if (typeof header == 'undefined') header=arguments.callee.__args__[5][1];
		var $add89,$add88,$sub26,$sub25,$add83,$add82,$add81,$add80,$add87,$add86,$add85,$add84,lf,$or28,$or24,$or25,$or26,$or27,$or20,$or21,$or22,$or23,$and9,$and38,$and39,$and34,$and35,$and36,$and37,$and30,$and31,$and32,$and33,$add76,$add77,$add74,$add75,$add72,$add73,$add70,$add71,$add78,$add79,$and29,$and28,$and23,$and22,$and21,$and20,$and27,$and26,$and25,$and24,$add65,$add64,$add67,$add66,$add61,$add63,$add62,$add69,$add68,linelen,$add90,crlf,c,$and11,ch,odata,$or15,$or14,$or17,$or16,$or11,$or10,$or13,$or12,$or19,$or18,inp,MAXLINESIZE,$or9,$and12,$and13,$and10,$and16,$and17,$and14,$and15,$and18,$and19;
		MAXLINESIZE = 76;
		lf = data['find'](String('\x0A'));
		crlf = (pyjslib['bool']($and9=(pyjslib['cmp'](lf, 0) == 1))?pyjslib['op_eq'](data.__getitem__((typeof ($sub25=lf)==typeof ($sub26=1) && (typeof $sub25=='number'||typeof $sub25=='string')?
			$sub25-$sub26:
			pyjslib['op_sub']($sub25,$sub26))), String('\x0D')):$and9);
		inp = 0;
		linelen = 0;
		odata = pyjslib['list']([]);
		while (pyjslib['bool']((pyjslib['cmp'](inp, pyjslib['len'](data)) == -1))) {
			c = data.__getitem__(inp);
			if (pyjslib['bool']((pyjslib['bool']($or16=(pyjslib['cmp'](c, String('~')) == 1))?$or16:(pyjslib['bool']($or17=pyjslib['op_eq'](c, String('=')))?$or17:(pyjslib['bool']($or18=(pyjslib['bool']($and11=header)?pyjslib['op_eq'](c, String('_')):$and11))?$or18:(pyjslib['bool']($or19=(pyjslib['bool']($and13=pyjslib['op_eq'](c, String('.')))?(pyjslib['bool']($and14=pyjslib['op_eq'](linelen, 0))?(pyjslib['bool']($or9=pyjslib['op_eq'](inp, pyjslib['len'](data)))?$or9:(pyjslib['bool']($or10=pyjslib['op_eq'](data.__getitem__((typeof ($add61=inp)==typeof ($add62=1) && (typeof $add61=='number'||typeof $add61=='string')?
				$add61+$add62:
				pyjslib['op_add']($add61,$add62))), String('\x0A')))?$or10:pyjslib['op_eq'](data.__getitem__((typeof ($add63=inp)==typeof ($add64=1) && (typeof $add63=='number'||typeof $add63=='string')?
				$add63+$add64:
				pyjslib['op_add']($add63,$add64))), String('\x0D')))):$and14):$and13))?$or19:(pyjslib['bool']($or20=(pyjslib['bool']($and16=!pyjslib['bool'](istext))?(pyjslib['bool']($or12=pyjslib['op_eq'](c, String('\x0D')))?$or12:pyjslib['op_eq'](c, String('\x0A'))):$and16))?$or20:(pyjslib['bool']($or21=(pyjslib['bool']($and18=(pyjslib['bool']($or14=pyjslib['op_eq'](c, String('\x09')))?$or14:pyjslib['op_eq'](c, String(' '))))?pyjslib['op_eq']((typeof ($add65=inp)==typeof ($add66=1) && (typeof $add65=='number'||typeof $add65=='string')?
				$add65+$add66:
				pyjslib['op_add']($add65,$add66)), pyjslib['len'](data)):$and18))?$or21:(pyjslib['bool']($and20=(pyjslib['cmp'](c, String(' ')) < 1))?(pyjslib['bool']($and21=!pyjslib['op_eq'](c, String('\x0D')))?(pyjslib['bool']($and22=!pyjslib['op_eq'](c, String('\x0A')))?(pyjslib['bool']($or23=quotetabs)?$or23:(pyjslib['bool']($and24=!pyjslib['bool'](quotetabs))?(pyjslib['bool']($and26=!pyjslib['op_eq'](c, String('\x09')))?!pyjslib['op_eq'](c, String(' ')):$and26):$and24)):$and22):$and21):$and20))))))))) {
				linelen = (typeof ($add67=linelen)==typeof ($add68=3) && (typeof $add67=='number'||typeof $add67=='string')?
					$add67+$add68:
					pyjslib['op_add']($add67,$add68));
				if (pyjslib['bool']((((pyjslib['cmp'](linelen, MAXLINESIZE))|1) == 1))) {
					odata['append'](String('='));
					if (pyjslib['bool'](crlf)) {
						odata['append'](String('\x0D'));
					}
					odata['append'](String('\x0A'));
					linelen = 3;
				}
				odata['append']((typeof ($add69=String('='))==typeof ($add70=binascii.two_hex_digits(pyjslib['ord'](c))) && (typeof $add69=='number'||typeof $add69=='string')?
					$add69+$add70:
					pyjslib['op_add']($add69,$add70)));
				inp = (typeof ($add71=inp)==typeof ($add72=1) && (typeof $add71=='number'||typeof $add71=='string')?
					$add71+$add72:
					pyjslib['op_add']($add71,$add72));
			}
			else {
				if (pyjslib['bool']((pyjslib['bool']($and28=istext)?(pyjslib['bool']($or25=pyjslib['op_eq'](c, String('\x0A')))?$or25:(pyjslib['bool']($and30=(pyjslib['cmp']((typeof ($add73=inp)==typeof ($add74=1) && (typeof $add73=='number'||typeof $add73=='string')?
					$add73+$add74:
					pyjslib['op_add']($add73,$add74)), pyjslib['len'](data)) == -1))?(pyjslib['bool']($and31=pyjslib['op_eq'](c, String('\x0D')))?pyjslib['op_eq'](data.__getitem__((typeof ($add75=inp)==typeof ($add76=1) && (typeof $add75=='number'||typeof $add75=='string')?
					$add75+$add76:
					pyjslib['op_add']($add75,$add76))), String('\x0A')):$and31):$and30)):$and28))) {
					linelen = 0;
					if (pyjslib['bool']((pyjslib['bool']($and33=(pyjslib['cmp'](pyjslib['len'](odata), 0) == 1))?(pyjslib['bool']($or27=pyjslib['op_eq'](odata.__getitem__((typeof ($usub1=1)=='number'?
						-$usub1:
						pyjslib['op_usub']($usub1))), String(' ')))?$or27:pyjslib['op_eq'](odata.__getitem__((typeof ($usub2=1)=='number'?
						-$usub2:
						pyjslib['op_usub']($usub2))), String('\x09'))):$and33))) {
						ch = pyjslib['ord'](odata.__getitem__((typeof ($usub3=1)=='number'?
							-$usub3:
							pyjslib['op_usub']($usub3))));
						odata.__setitem__((typeof ($usub4=1)=='number'?
							-$usub4:
							pyjslib['op_usub']($usub4)), String('='));
						odata['append'](binascii.two_hex_digits(ch));
					}
					if (pyjslib['bool'](crlf)) {
						odata['append'](String('\x0D'));
					}
					odata['append'](String('\x0A'));
					if (pyjslib['bool'](pyjslib['op_eq'](c, String('\x0D')))) {
						inp = (typeof ($add77=inp)==typeof ($add78=2) && (typeof $add77=='number'||typeof $add77=='string')?
							$add77+$add78:
							pyjslib['op_add']($add77,$add78));
					}
					else {
						inp = (typeof ($add79=inp)==typeof ($add80=1) && (typeof $add79=='number'||typeof $add79=='string')?
							$add79+$add80:
							pyjslib['op_add']($add79,$add80));
					}
				}
				else {
					if (pyjslib['bool']((pyjslib['bool']($and35=(pyjslib['cmp']((typeof ($add81=inp)==typeof ($add82=1) && (typeof $add81=='number'||typeof $add81=='string')?
						$add81+$add82:
						pyjslib['op_add']($add81,$add82)), pyjslib['len'](data)) == -1))?(pyjslib['bool']($and36=!pyjslib['op_eq'](data.__getitem__((typeof ($add83=inp)==typeof ($add84=1) && (typeof $add83=='number'||typeof $add83=='string')?
						$add83+$add84:
						pyjslib['op_add']($add83,$add84))), String('\x0A')))?(((pyjslib['cmp']((typeof ($add85=linelen)==typeof ($add86=1) && (typeof $add85=='number'||typeof $add85=='string')?
						$add85+$add86:
						pyjslib['op_add']($add85,$add86)), MAXLINESIZE))|1) == 1):$and36):$and35))) {
						odata['append'](String('='));
						if (pyjslib['bool'](crlf)) {
							odata['append'](String('\x0D'));
						}
						odata['append'](String('\x0A'));
						linelen = 0;
					}
					linelen = (typeof ($add87=linelen)==typeof ($add88=1) && (typeof $add87=='number'||typeof $add87=='string')?
						$add87+$add88:
						pyjslib['op_add']($add87,$add88));
					if (pyjslib['bool']((pyjslib['bool']($and38=header)?pyjslib['op_eq'](c, String(' ')):$and38))) {
						c = String('_');
					}
					odata['append'](c);
					inp = (typeof ($add89=inp)==typeof ($add90=1) && (typeof $add89=='number'||typeof $add89=='string')?
						$add89+$add90:
						pyjslib['op_add']($add89,$add90));
				}
			}
		}
		return String('')['join'](odata);
	};
	binascii['b2a_qp'].__name__ = 'b2a_qp';

	binascii['b2a_qp'].__bind_type__ = 0;
	binascii['b2a_qp'].__args__ = [null,null,['data'],['quotetabs', false],['istext', true],['header', false]];
	binascii['hex_numbers'] = String('0123456789ABCDEF');
	binascii['hex'] = function(n) {
		var arr,$iter7_type,$iter7_nextval,$add94,$iter7_iter,hex_gen,nibble,$add91,$add92,sign,$add93,$iter7_idx,$iter7_array;
		if (pyjslib['bool'](pyjslib['op_eq'](n, 0))) {
			return String('0');
		}
		if (pyjslib['bool']((pyjslib['cmp'](n, 0) == -1))) {
			n = (typeof ($usub5=n)=='number'?
				-$usub5:
				pyjslib['op_usub']($usub5));
			sign = String('-');
		}
		else {
			sign = String('');
		}
		arr = pyjslib['list']([]);
		hex_gen = function(n) {
			var $mod5,$mod6,iterlist,$div2,$div1;
			iterlist = pyjslib['list']([]);
			while (pyjslib['bool'](n)) {
				iterlist['append']((typeof ($mod5=n)==typeof ($mod6=16) && typeof $mod5=='number'?
					$mod5%$mod6:
					pyjslib['op_mod']($mod5,$mod6)));
				n = (typeof ($div1=n)==typeof ($div2=16) && typeof $div1=='number' && $div2 !== 0?
					$div1/$div2:
					pyjslib['op_div']($div1,$div2));
			}
			return iterlist;
		};
		hex_gen.__name__ = 'hex_gen';

		hex_gen.__bind_type__ = 0;
		hex_gen.__args__ = [null,null,['n']];
		$iter7_iter = hex_gen(n);
		if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
			$iter7_type = 0;
		} else {
			$iter7_iter = $iter7_iter.__iter__();
			$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter7_idx = 0;
		while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):pyjslib['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
			nibble = $iter7_nextval;
			arr = (typeof ($add91=pyjslib['list']([binascii['hex_numbers'].__getitem__(nibble)]))==typeof ($add92=arr) && (typeof $add91=='number'||typeof $add91=='string')?
				$add91+$add92:
				pyjslib['op_add']($add91,$add92));
		}
		return (typeof ($add93=sign)==typeof ($add94=String('')['join'](arr)) && (typeof $add93=='number'||typeof $add93=='string')?
			$add93+$add94:
			pyjslib['op_add']($add93,$add94));
	};
	binascii['hex'].__name__ = 'hex';

	binascii['hex'].__bind_type__ = 0;
	binascii['hex'].__args__ = [null,null,['n']];
	binascii['two_hex_digits'] = function(n) {
		var $add95,$add96,$mod7,$div3,$mod8,$div4;
		return (typeof ($add95=binascii['hex_numbers'].__getitem__((typeof ($div3=n)==typeof ($div4=16) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			pyjslib['op_div']($div3,$div4))))==typeof ($add96=binascii['hex_numbers'].__getitem__((typeof ($mod7=n)==typeof ($mod8=16) && typeof $mod7=='number'?
			$mod7%$mod8:
			pyjslib['op_mod']($mod7,$mod8)))) && (typeof $add95=='number'||typeof $add95=='string')?
			$add95+$add96:
			pyjslib['op_add']($add95,$add96));
	};
	binascii['two_hex_digits'].__name__ = 'two_hex_digits';

	binascii['two_hex_digits'].__bind_type__ = 0;
	binascii['two_hex_digits'].__args__ = [null,null,['n']];
	binascii['strhex_to_int'] = function(s) {
		var c,$iter8_idx,i,$iter8_type,$add97,$iter8_array,$iter8_iter,$iter8_nextval,$add98,$mul4,$mul3;
		i = 0;
		$iter8_iter = s;
		if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
			$iter8_type = 0;
		} else {
			$iter8_iter = $iter8_iter.__iter__();
			$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter8_idx = 0;
		while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):pyjslib['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
			c = $iter8_nextval;
			i = (typeof ($add97=(typeof ($mul3=i)==typeof ($mul4=16) && typeof $mul3=='number'?
				$mul3*$mul4:
				pyjslib['op_mul']($mul3,$mul4)))==typeof ($add98=binascii['hex_numbers']['index'](c)) && (typeof $add97=='number'||typeof $add97=='string')?
				$add97+$add98:
				pyjslib['op_add']($add97,$add98));
		}
		return i;
	};
	binascii['strhex_to_int'].__name__ = 'strhex_to_int';

	binascii['strhex_to_int'].__bind_type__ = 0;
	binascii['strhex_to_int'].__args__ = [null,null,['s']];
	binascii['hqx_encoding'] = String('!\x22#$%\x26\x27()*+,-012345689@ABCDEFGHIJKLMNPQRSTUVXYZ[`abcdefhijklmpqr');
	binascii['DONE'] = 127;
	binascii['SKIP'] = 126;
	binascii['FAIL'] = 125;
	binascii['table_a2b_hqx'] = pyjslib['list']([binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['SKIP'], binascii['FAIL'], binascii['FAIL'], binascii['SKIP'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, binascii['FAIL'], binascii['FAIL'], 13, 14, 15, 16, 17, 18, 19, binascii['FAIL'], 20, 21, binascii['DONE'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, binascii['FAIL'], 37, 38, 39, 40, 41, 42, 43, binascii['FAIL'], 44, 45, 46, 47, binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], 48, 49, 50, 51, 52, 53, 54, binascii['FAIL'], 55, 56, 57, 58, 59, 60, binascii['FAIL'], binascii['FAIL'], 61, 62, 63, binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL'], binascii['FAIL']]);
	binascii['a2b_hqx'] = function(s) {
		var $iter10_nextval,err,$iter10_idx,length,$iter10_array,quadruples_gen,snippet,$pyjs_try_err,done,result,iterlist,$iter10_type,$iter10_iter;
		result = pyjslib['list']([]);
		quadruples_gen = function(s) {
			var c,$iter9_iter,res,$iter9_nextval,$iter9_idx,$iter9_array,t,iterlist,$iter9_type;
			t = pyjslib['list']([]);
			iterlist = pyjslib['list']([]);
			$iter9_iter = s;
			if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
				$iter9_type = 0;
			} else {
				$iter9_iter = $iter9_iter.__iter__();
				$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter9_idx = 0;
			while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):pyjslib['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
				c = $iter9_nextval;
				res = binascii['table_a2b_hqx'].__getitem__(pyjslib['ord'](c));
				if (pyjslib['bool'](pyjslib['op_eq'](res, binascii['SKIP']))) {
					continue;
				}
				else if (pyjslib['bool'](pyjslib['op_eq'](res, binascii['FAIL']))) {
					throw (binascii['Error'](String('Illegal character')));
				}
				else if (pyjslib['bool'](pyjslib['op_eq'](res, binascii['DONE']))) {
					iterlist['append'](t);
					return pyjslib['tuple']([iterlist, true]);
				}
				else {
					t['append'](res);
				}
				if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['len'](t), 4))) {
					iterlist['append'](t);
					t = pyjslib['list']([]);
				}
			}
			iterlist['append'](t);
			return pyjslib['tuple']([iterlist, false]);
		};
		quadruples_gen.__name__ = 'quadruples_gen';

		quadruples_gen.__bind_type__ = 0;
		quadruples_gen.__args__ = [null,null,['s']];
		done = 0;
		try {
			var $tupleassign1 = quadruples_gen(s);
			iterlist = $tupleassign1.__getitem__(0);
			done = $tupleassign1.__getitem__(1);
			$iter10_iter = iterlist;
			if (typeof ($iter10_array = $iter10_iter.__array) != 'undefined') {
				$iter10_type = 0;
			} else {
				$iter10_iter = $iter10_iter.__iter__();
				$iter10_type = typeof ($iter10_array = $iter10_iter.__array) != 'undefined'? 0 : (typeof $iter10_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter10_idx = 0;
			while (typeof ($iter10_nextval=($iter10_type?($iter10_type > 0?$iter10_iter.next(true,false):pyjslib['wrapped_next']($iter10_iter)):$iter10_array[$iter10_idx++])) != 'undefined') {
				snippet = $iter10_nextval;
				length = pyjslib['len'](snippet);
				if (pyjslib['bool'](pyjslib['op_eq'](length, 4))) {
					result['append'](pyjslib['chr']((((snippet.__getitem__(0))&(63))<<(2))|((snippet.__getitem__(1))>>(4))));
					result['append'](pyjslib['chr']((((snippet.__getitem__(1))&(15))<<(4))|((snippet.__getitem__(2))>>(2))));
					result['append'](pyjslib['chr']((((snippet.__getitem__(2))&(3))<<(6))|(snippet.__getitem__(3))));
				}
				else if (pyjslib['bool'](pyjslib['op_eq'](length, 3))) {
					result['append'](pyjslib['chr']((((snippet.__getitem__(0))&(63))<<(2))|((snippet.__getitem__(1))>>(4))));
					result['append'](pyjslib['chr']((((snippet.__getitem__(1))&(15))<<(4))|((snippet.__getitem__(2))>>(2))));
				}
				else if (pyjslib['bool'](pyjslib['op_eq'](length, 2))) {
					result['append'](pyjslib['chr']((((snippet.__getitem__(0))&(63))<<(2))|((snippet.__getitem__(1))>>(4))));
				}
			}
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: binascii, try_lineno: 498};
			if (($pyjs_try_err_name == binascii['Done'].__name__)||pyjslib['_isinstance']($pyjs_try_err,binascii['Done'])) {
				$pyjs.__last_exception__.except_lineno = 512;
				err = $pyjs_try_err;
				done = 1;
			} else if (($pyjs_try_err_name == binascii['Error'].__name__)||pyjslib['_isinstance']($pyjs_try_err,binascii['Error'])) {
				$pyjs.__last_exception__.except_lineno = 514;
				err = $pyjs_try_err;
				throw ($pyjs.__last_exception__?
					$pyjs.__last_exception__.error:
					pyjslib['TypeError']('exceptions must be classes, instances, or strings (deprecated), not NoneType'));
			} else { throw $pyjs_try_err; }
		}
		return pyjslib['tuple']([String('')['join'](result), done]);
	};
	binascii['a2b_hqx'].__name__ = 'a2b_hqx';

	binascii['a2b_hqx'].__bind_type__ = 0;
	binascii['a2b_hqx'].__args__ = [null,null,['s']];
	binascii['b2a_hqx'] = function(s) {
		var $iter11_idx,$iter11_iter,$iter11_type,length,snippet,result,$iter11_array,$iter11_nextval,triples_gen;
		result = pyjslib['list']([]);
		triples_gen = function(s) {
			var $pyjs_try_err,err,iterlist;
			iterlist = pyjslib['list']([]);
			while (pyjslib['bool'](s)) {
				try {
					iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0)), pyjslib['ord'](s.__getitem__(1)), pyjslib['ord'](s.__getitem__(2))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: binascii, try_lineno: 530};
					if (($pyjs_try_err_name == pyjslib['IndexError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['IndexError'])) {
						$pyjs.__last_exception__.except_lineno = 532;
						err = $pyjs_try_err;
						try {
							iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0)), pyjslib['ord'](s.__getitem__(1))]));
						} catch($pyjs_try_err) {
							var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
							$pyjs.__last_exception__ = {error: $pyjs_try_err, module: binascii, try_lineno: 533};
							if (($pyjs_try_err_name == pyjslib['IndexError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['IndexError'])) {
								$pyjs.__last_exception__.except_lineno = 535;
								err = $pyjs_try_err;
								iterlist['append'](pyjslib['tuple']([pyjslib['ord'](s.__getitem__(0))]));
							} else { throw $pyjs_try_err; }
						}
					} else { throw $pyjs_try_err; }
				}
				s = pyjslib['slice'](s, 3, null);
			}
			return iterlist;
		};
		triples_gen.__name__ = 'triples_gen';

		triples_gen.__bind_type__ = 0;
		triples_gen.__args__ = [null,null,['s']];
		$iter11_iter = triples_gen(s);
		if (typeof ($iter11_array = $iter11_iter.__array) != 'undefined') {
			$iter11_type = 0;
		} else {
			$iter11_iter = $iter11_iter.__iter__();
			$iter11_type = typeof ($iter11_array = $iter11_iter.__array) != 'undefined'? 0 : (typeof $iter11_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter11_idx = 0;
		while (typeof ($iter11_nextval=($iter11_type?($iter11_type > 0?$iter11_iter.next(true,false):pyjslib['wrapped_next']($iter11_iter)):$iter11_array[$iter11_idx++])) != 'undefined') {
			snippet = $iter11_nextval;
			length = pyjslib['len'](snippet);
			if (pyjslib['bool'](pyjslib['op_eq'](length, 3))) {
				result['append'](binascii['hqx_encoding'].__getitem__(((snippet.__getitem__(0))&(252))>>(2)));
				result['append'](binascii['hqx_encoding'].__getitem__((((snippet.__getitem__(0))&(3))<<(4))|(((snippet.__getitem__(1))&(240))>>(4))));
				result['append'](binascii['hqx_encoding'].__getitem__((((snippet.__getitem__(1))&(15))<<(2))|(((snippet.__getitem__(2))&(192))>>(6))));
				result['append'](binascii['hqx_encoding'].__getitem__((snippet.__getitem__(2))&(63)));
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](length, 2))) {
				result['append'](binascii['hqx_encoding'].__getitem__(((snippet.__getitem__(0))&(252))>>(2)));
				result['append'](binascii['hqx_encoding'].__getitem__((((snippet.__getitem__(0))&(3))<<(4))|(((snippet.__getitem__(1))&(240))>>(4))));
				result['append'](binascii['hqx_encoding'].__getitem__(((snippet.__getitem__(1))&(15))<<(2)));
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](length, 1))) {
				result['append'](binascii['hqx_encoding'].__getitem__(((snippet.__getitem__(0))&(252))>>(2)));
				result['append'](binascii['hqx_encoding'].__getitem__(((snippet.__getitem__(0))&(3))<<(4)));
			}
		}
		return String('')['join'](result);
	};
	binascii['b2a_hqx'].__name__ = 'b2a_hqx';

	binascii['b2a_hqx'].__bind_type__ = 0;
	binascii['b2a_hqx'].__args__ = [null,null,['s']];
	binascii['crctab_hqx'] = pyjslib['list']([0, 4129, 8258, 12387, 16516, 20645, 24774, 28903, 33032, 37161, 41290, 45419, 49548, 53677, 57806, 61935, 4657, 528, 12915, 8786, 21173, 17044, 29431, 25302, 37689, 33560, 45947, 41818, 54205, 50076, 62463, 58334, 9314, 13379, 1056, 5121, 25830, 29895, 17572, 21637, 42346, 46411, 34088, 38153, 58862, 62927, 50604, 54669, 13907, 9842, 5649, 1584, 30423, 26358, 22165, 18100, 46939, 42874, 38681, 34616, 63455, 59390, 55197, 51132, 18628, 22757, 26758, 30887, 2112, 6241, 10242, 14371, 51660, 55789, 59790, 63919, 35144, 39273, 43274, 47403, 23285, 19156, 31415, 27286, 6769, 2640, 14899, 10770, 56317, 52188, 64447, 60318, 39801, 35672, 47931, 43802, 27814, 31879, 19684, 23749, 11298, 15363, 3168, 7233, 60846, 64911, 52716, 56781, 44330, 48395, 36200, 40265, 32407, 28342, 24277, 20212, 15891, 11826, 7761, 3696, 65439, 61374, 57309, 53244, 48923, 44858, 40793, 36728, 37256, 33193, 45514, 41451, 53516, 49453, 61774, 57711, 4224, 161, 12482, 8419, 20484, 16421, 28742, 24679, 33721, 37784, 41979, 46042, 49981, 54044, 58239, 62302, 689, 4752, 8947, 13010, 16949, 21012, 25207, 29270, 46570, 42443, 38312, 34185, 62830, 58703, 54572, 50445, 13538, 9411, 5280, 1153, 29798, 25671, 21540, 17413, 42971, 47098, 34713, 38840, 59231, 63358, 50973, 55100, 9939, 14066, 1681, 5808, 26199, 30326, 17941, 22068, 55628, 51565, 63758, 59695, 39368, 35305, 47498, 43435, 22596, 18533, 30726, 26663, 6336, 2273, 14466, 10403, 52093, 56156, 60223, 64286, 35833, 39896, 43963, 48026, 19061, 23124, 27191, 31254, 2801, 6864, 10931, 14994, 64814, 60687, 56684, 52557, 48554, 44427, 40424, 36297, 31782, 27655, 23652, 19525, 15522, 11395, 7392, 3265, 61215, 65342, 53085, 57212, 44955, 49082, 36825, 40952, 28183, 32310, 20053, 24180, 11923, 16050, 3793, 7920]);
	binascii['crc_hqx'] = function(s, crc) {
		var c,$iter12_type,$iter12_array,$iter12_iter,$iter12_idx,$iter12_nextval;
		$iter12_iter = s;
		if (typeof ($iter12_array = $iter12_iter.__array) != 'undefined') {
			$iter12_type = 0;
		} else {
			$iter12_iter = $iter12_iter.__iter__();
			$iter12_type = typeof ($iter12_array = $iter12_iter.__array) != 'undefined'? 0 : (typeof $iter12_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter12_idx = 0;
		while (typeof ($iter12_nextval=($iter12_type?($iter12_type > 0?$iter12_iter.next(true,false):pyjslib['wrapped_next']($iter12_iter)):$iter12_array[$iter12_idx++])) != 'undefined') {
			c = $iter12_nextval;
			crc = (((crc)<<(8))&(65280))^(binascii['crctab_hqx'].__getitem__((((crc)>>(8))&(255))^(pyjslib['ord'](c))));
		}
		return crc;
	};
	binascii['crc_hqx'].__name__ = 'crc_hqx';

	binascii['crc_hqx'].__bind_type__ = 0;
	binascii['crc_hqx'].__args__ = [null,null,['s'],['crc']];
	binascii['rlecode_hqx'] = function(s) {
		var result,$add104,$and41,$and40,prev,$iter13_array,$add101,$add100,$add103,$add102,$add99,$mul8,$mul7,$mul6,$mul5,count,c,$iter13_nextval,$iter13_iter,$iter13_type,$iter13_idx;
		if (pyjslib['bool'](!pyjslib['bool'](s))) {
			return String('');
		}
		result = pyjslib['list']([]);
		prev = s.__getitem__(0);
		count = 1;
		if (pyjslib['bool'](pyjslib['op_eq'](s.__getitem__((typeof ($usub6=1)=='number'?
			-$usub6:
			pyjslib['op_usub']($usub6))), String('!')))) {
			s = (typeof ($add99=pyjslib['slice'](s, 1, null))==typeof ($add100=String('?')) && (typeof $add99=='number'||typeof $add99=='string')?
				$add99+$add100:
				pyjslib['op_add']($add99,$add100));
		}
		else {
			s = (typeof ($add101=pyjslib['slice'](s, 1, null))==typeof ($add102=String('!')) && (typeof $add101=='number'||typeof $add101=='string')?
				$add101+$add102:
				pyjslib['op_add']($add101,$add102));
		}
		$iter13_iter = s;
		if (typeof ($iter13_array = $iter13_iter.__array) != 'undefined') {
			$iter13_type = 0;
		} else {
			$iter13_iter = $iter13_iter.__iter__();
			$iter13_type = typeof ($iter13_array = $iter13_iter.__array) != 'undefined'? 0 : (typeof $iter13_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter13_idx = 0;
		while (typeof ($iter13_nextval=($iter13_type?($iter13_type > 0?$iter13_iter.next(true,false):pyjslib['wrapped_next']($iter13_iter)):$iter13_array[$iter13_idx++])) != 'undefined') {
			c = $iter13_nextval;
			if (pyjslib['bool']((pyjslib['bool']($and40=pyjslib['op_eq'](c, prev))?(pyjslib['cmp'](count, 255) == -1):$and40))) {
				count = (typeof ($add103=count)==typeof ($add104=1) && (typeof $add103=='number'||typeof $add103=='string')?
					$add103+$add104:
					pyjslib['op_add']($add103,$add104));
			}
			else {
				if (pyjslib['bool'](pyjslib['op_eq'](count, 1))) {
					if (pyjslib['bool'](!pyjslib['op_eq'](prev, String('')))) {
						result['append'](prev);
					}
					else {
						result['extend'](pyjslib['list']([String(''), String('\x00')]));
					}
				}
				else if (pyjslib['bool']((pyjslib['cmp'](count, 4) == -1))) {
					if (pyjslib['bool'](!pyjslib['op_eq'](prev, String('')))) {
						result['extend']((typeof ($mul5=pyjslib['list']([prev]))==typeof ($mul6=count) && typeof $mul5=='number'?
							$mul5*$mul6:
							pyjslib['op_mul']($mul5,$mul6)));
					}
					else {
						result['extend']((typeof ($mul7=pyjslib['list']([String(''), String('\x00')]))==typeof ($mul8=count) && typeof $mul7=='number'?
							$mul7*$mul8:
							pyjslib['op_mul']($mul7,$mul8)));
					}
				}
				else {
					if (pyjslib['bool'](!pyjslib['op_eq'](prev, String('')))) {
						result['extend'](pyjslib['list']([prev, String(''), pyjslib['chr'](count)]));
					}
					else {
						result['extend'](pyjslib['list']([String(''), String('\x00'), String(''), pyjslib['chr'](count)]));
					}
				}
				count = 1;
				prev = c;
			}
		}
		return String('')['join'](result);
	};
	binascii['rlecode_hqx'].__name__ = 'rlecode_hqx';

	binascii['rlecode_hqx'].__bind_type__ = 0;
	binascii['rlecode_hqx'].__args__ = [null,null,['s']];
	binascii['rledecode_hqx'] = function(s) {
		var count,$iter14_array,$iter14_type,$sub27,$mul10,$mul9,$sub28,snippet,result,$iter14_iter,prev,$iter14_idx,$iter14_nextval;
		s = s['$$split'](String(''));
		result = pyjslib['list']([s.__getitem__(0)]);
		prev = s.__getitem__(0);
		$iter14_iter = pyjslib['slice'](s, 1, null);
		if (typeof ($iter14_array = $iter14_iter.__array) != 'undefined') {
			$iter14_type = 0;
		} else {
			$iter14_iter = $iter14_iter.__iter__();
			$iter14_type = typeof ($iter14_array = $iter14_iter.__array) != 'undefined'? 0 : (typeof $iter14_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter14_idx = 0;
		while (typeof ($iter14_nextval=($iter14_type?($iter14_type > 0?$iter14_iter.next(true,false):pyjslib['wrapped_next']($iter14_iter)):$iter14_array[$iter14_idx++])) != 'undefined') {
			snippet = $iter14_nextval;
			count = pyjslib['ord'](snippet.__getitem__(0));
			if (pyjslib['bool']((pyjslib['cmp'](count, 0) == 1))) {
				result['append']((typeof ($mul9=prev.__getitem__((typeof ($usub7=1)=='number'?
					-$usub7:
					pyjslib['op_usub']($usub7))))==typeof ($mul10=(typeof ($sub27=count)==typeof ($sub28=1) && (typeof $sub27=='number'||typeof $sub27=='string')?
					$sub27-$sub28:
					pyjslib['op_sub']($sub27,$sub28))) && typeof $mul9=='number'?
					$mul9*$mul10:
					pyjslib['op_mul']($mul9,$mul10)));
				prev = snippet;
			}
			else {
				result['append'](String(''));
				prev = String('');
			}
			result['append'](pyjslib['slice'](snippet, 1, null));
		}
		return String('')['join'](result);
	};
	binascii['rledecode_hqx'].__name__ = 'rledecode_hqx';

	binascii['rledecode_hqx'].__bind_type__ = 0;
	binascii['rledecode_hqx'].__args__ = [null,null,['s']];
	binascii['crc_32_tab'] = pyjslib['list']([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]);
	binascii['crc32'] = function(s, crc) {
		if (typeof crc == 'undefined') crc=arguments.callee.__args__[3][1];
		var $sub29,result,$mod9,$pow7,$pow6,$pow5,$pow4,$pow3,$iter15_iter,$pow1,$pow8,$sub30,$add105,$mod10,$add106,$iter15_array,$pow2,c,$iter15_idx,$iter15_nextval,$iter15_type;
		result = 0;
		crc = (~(pyjslib['float_int'](crc)))&(4294967295);
		$iter15_iter = s;
		if (typeof ($iter15_array = $iter15_iter.__array) != 'undefined') {
			$iter15_type = 0;
		} else {
			$iter15_iter = $iter15_iter.__iter__();
			$iter15_type = typeof ($iter15_array = $iter15_iter.__array) != 'undefined'? 0 : (typeof $iter15_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter15_idx = 0;
		while (typeof ($iter15_nextval=($iter15_type?($iter15_type > 0?$iter15_iter.next(true,false):pyjslib['wrapped_next']($iter15_iter)):$iter15_array[$iter15_idx++])) != 'undefined') {
			c = $iter15_nextval;
			crc = (binascii['crc_32_tab'].__getitem__(((crc)^(pyjslib['float_int'](pyjslib['ord'](c))))&(255)))^((crc)>>(8));
			result = (crc)^(4294967295);
		}
		if (pyjslib['bool']((pyjslib['cmp'](result, (typeof ($pow1=2)==typeof ($pow2=31) && typeof $pow1=='number'?
			Math.pow($pow1,$pow2):
			pyjslib['op_pow']($pow1,$pow2))) == 1))) {
			result = (typeof ($sub29=(typeof ($mod9=(typeof ($add105=result)==typeof ($add106=(typeof ($pow3=2)==typeof ($pow4=31) && typeof $pow3=='number'?
				Math.pow($pow3,$pow4):
				pyjslib['op_pow']($pow3,$pow4))) && (typeof $add105=='number'||typeof $add105=='string')?
				$add105+$add106:
				pyjslib['op_add']($add105,$add106)))==typeof ($mod10=(typeof ($pow5=2)==typeof ($pow6=32) && typeof $pow5=='number'?
				Math.pow($pow5,$pow6):
				pyjslib['op_pow']($pow5,$pow6))) && typeof $mod9=='number'?
				$mod9%$mod10:
				pyjslib['op_mod']($mod9,$mod10)))==typeof ($sub30=(typeof ($pow7=2)==typeof ($pow8=31) && typeof $pow7=='number'?
				Math.pow($pow7,$pow8):
				pyjslib['op_pow']($pow7,$pow8))) && (typeof $sub29=='number'||typeof $sub29=='string')?
				$sub29-$sub30:
				pyjslib['op_sub']($sub29,$sub30));
		}
		return result;
	};
	binascii['crc32'].__name__ = 'crc32';

	binascii['crc32'].__bind_type__ = 0;
	binascii['crc32'].__args__ = [null,null,['s'],['crc', 0]];
	binascii['b2a_hex'] = function(s) {
		var $add114,$add112,$add113,$add110,$add111,$$char,result,$iter16_iter,$iter16_type,$iter16_nextval,$sub31,$sub33,$sub32,$sub34,$add107,$add109,$add108,$$char,$iter16_array,$iter16_idx,c;
		result = pyjslib['list']([]);
		$iter16_iter = s;
		if (typeof ($iter16_array = $iter16_iter.__array) != 'undefined') {
			$iter16_type = 0;
		} else {
			$iter16_iter = $iter16_iter.__iter__();
			$iter16_type = typeof ($iter16_array = $iter16_iter.__array) != 'undefined'? 0 : (typeof $iter16_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter16_idx = 0;
		while (typeof ($iter16_nextval=($iter16_type?($iter16_type > 0?$iter16_iter.next(true,false):pyjslib['wrapped_next']($iter16_iter)):$iter16_array[$iter16_idx++])) != 'undefined') {
			$$char = $iter16_nextval;
			c = ((pyjslib['ord']($$char))>>(4))&(15);
			if (pyjslib['bool']((pyjslib['cmp'](c, 9) == 1))) {
				c = (typeof ($sub31=(typeof ($add107=c)==typeof ($add108=pyjslib['ord'](String('a'))) && (typeof $add107=='number'||typeof $add107=='string')?
					$add107+$add108:
					pyjslib['op_add']($add107,$add108)))==typeof ($sub32=10) && (typeof $sub31=='number'||typeof $sub31=='string')?
					$sub31-$sub32:
					pyjslib['op_sub']($sub31,$sub32));
			}
			else {
				c = (typeof ($add109=c)==typeof ($add110=pyjslib['ord'](String('0'))) && (typeof $add109=='number'||typeof $add109=='string')?
					$add109+$add110:
					pyjslib['op_add']($add109,$add110));
			}
			result['append'](pyjslib['chr'](c));
			c = (pyjslib['ord']($$char))&(15);
			if (pyjslib['bool']((pyjslib['cmp'](c, 9) == 1))) {
				c = (typeof ($sub33=(typeof ($add111=c)==typeof ($add112=pyjslib['ord'](String('a'))) && (typeof $add111=='number'||typeof $add111=='string')?
					$add111+$add112:
					pyjslib['op_add']($add111,$add112)))==typeof ($sub34=10) && (typeof $sub33=='number'||typeof $sub33=='string')?
					$sub33-$sub34:
					pyjslib['op_sub']($sub33,$sub34));
			}
			else {
				c = (typeof ($add113=c)==typeof ($add114=pyjslib['ord'](String('0'))) && (typeof $add113=='number'||typeof $add113=='string')?
					$add113+$add114:
					pyjslib['op_add']($add113,$add114));
			}
			result['append'](pyjslib['chr'](c));
		}
		return String('')['join'](result);
	};
	binascii['b2a_hex'].__name__ = 'b2a_hex';

	binascii['b2a_hex'].__bind_type__ = 0;
	binascii['b2a_hex'].__args__ = [null,null,['s']];
	binascii['hexlify'] = binascii['b2a_hex'];
	binascii['table_hex'] = pyjslib['list']([(typeof ($usub8=1)=='number'?
		-$usub8:
		pyjslib['op_usub']($usub8)), (typeof ($usub9=1)=='number'?
		-$usub9:
		pyjslib['op_usub']($usub9)), (typeof ($usub10=1)=='number'?
		-$usub10:
		pyjslib['op_usub']($usub10)), (typeof ($usub11=1)=='number'?
		-$usub11:
		pyjslib['op_usub']($usub11)), (typeof ($usub12=1)=='number'?
		-$usub12:
		pyjslib['op_usub']($usub12)), (typeof ($usub13=1)=='number'?
		-$usub13:
		pyjslib['op_usub']($usub13)), (typeof ($usub14=1)=='number'?
		-$usub14:
		pyjslib['op_usub']($usub14)), (typeof ($usub15=1)=='number'?
		-$usub15:
		pyjslib['op_usub']($usub15)), (typeof ($usub16=1)=='number'?
		-$usub16:
		pyjslib['op_usub']($usub16)), (typeof ($usub17=1)=='number'?
		-$usub17:
		pyjslib['op_usub']($usub17)), (typeof ($usub18=1)=='number'?
		-$usub18:
		pyjslib['op_usub']($usub18)), (typeof ($usub19=1)=='number'?
		-$usub19:
		pyjslib['op_usub']($usub19)), (typeof ($usub20=1)=='number'?
		-$usub20:
		pyjslib['op_usub']($usub20)), (typeof ($usub21=1)=='number'?
		-$usub21:
		pyjslib['op_usub']($usub21)), (typeof ($usub22=1)=='number'?
		-$usub22:
		pyjslib['op_usub']($usub22)), (typeof ($usub23=1)=='number'?
		-$usub23:
		pyjslib['op_usub']($usub23)), (typeof ($usub24=1)=='number'?
		-$usub24:
		pyjslib['op_usub']($usub24)), (typeof ($usub25=1)=='number'?
		-$usub25:
		pyjslib['op_usub']($usub25)), (typeof ($usub26=1)=='number'?
		-$usub26:
		pyjslib['op_usub']($usub26)), (typeof ($usub27=1)=='number'?
		-$usub27:
		pyjslib['op_usub']($usub27)), (typeof ($usub28=1)=='number'?
		-$usub28:
		pyjslib['op_usub']($usub28)), (typeof ($usub29=1)=='number'?
		-$usub29:
		pyjslib['op_usub']($usub29)), (typeof ($usub30=1)=='number'?
		-$usub30:
		pyjslib['op_usub']($usub30)), (typeof ($usub31=1)=='number'?
		-$usub31:
		pyjslib['op_usub']($usub31)), (typeof ($usub32=1)=='number'?
		-$usub32:
		pyjslib['op_usub']($usub32)), (typeof ($usub33=1)=='number'?
		-$usub33:
		pyjslib['op_usub']($usub33)), (typeof ($usub34=1)=='number'?
		-$usub34:
		pyjslib['op_usub']($usub34)), (typeof ($usub35=1)=='number'?
		-$usub35:
		pyjslib['op_usub']($usub35)), (typeof ($usub36=1)=='number'?
		-$usub36:
		pyjslib['op_usub']($usub36)), (typeof ($usub37=1)=='number'?
		-$usub37:
		pyjslib['op_usub']($usub37)), (typeof ($usub38=1)=='number'?
		-$usub38:
		pyjslib['op_usub']($usub38)), (typeof ($usub39=1)=='number'?
		-$usub39:
		pyjslib['op_usub']($usub39)), (typeof ($usub40=1)=='number'?
		-$usub40:
		pyjslib['op_usub']($usub40)), (typeof ($usub41=1)=='number'?
		-$usub41:
		pyjslib['op_usub']($usub41)), (typeof ($usub42=1)=='number'?
		-$usub42:
		pyjslib['op_usub']($usub42)), (typeof ($usub43=1)=='number'?
		-$usub43:
		pyjslib['op_usub']($usub43)), (typeof ($usub44=1)=='number'?
		-$usub44:
		pyjslib['op_usub']($usub44)), (typeof ($usub45=1)=='number'?
		-$usub45:
		pyjslib['op_usub']($usub45)), (typeof ($usub46=1)=='number'?
		-$usub46:
		pyjslib['op_usub']($usub46)), (typeof ($usub47=1)=='number'?
		-$usub47:
		pyjslib['op_usub']($usub47)), (typeof ($usub48=1)=='number'?
		-$usub48:
		pyjslib['op_usub']($usub48)), (typeof ($usub49=1)=='number'?
		-$usub49:
		pyjslib['op_usub']($usub49)), (typeof ($usub50=1)=='number'?
		-$usub50:
		pyjslib['op_usub']($usub50)), (typeof ($usub51=1)=='number'?
		-$usub51:
		pyjslib['op_usub']($usub51)), (typeof ($usub52=1)=='number'?
		-$usub52:
		pyjslib['op_usub']($usub52)), (typeof ($usub53=1)=='number'?
		-$usub53:
		pyjslib['op_usub']($usub53)), (typeof ($usub54=1)=='number'?
		-$usub54:
		pyjslib['op_usub']($usub54)), (typeof ($usub55=1)=='number'?
		-$usub55:
		pyjslib['op_usub']($usub55)), 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, (typeof ($usub56=1)=='number'?
		-$usub56:
		pyjslib['op_usub']($usub56)), (typeof ($usub57=1)=='number'?
		-$usub57:
		pyjslib['op_usub']($usub57)), (typeof ($usub58=1)=='number'?
		-$usub58:
		pyjslib['op_usub']($usub58)), (typeof ($usub59=1)=='number'?
		-$usub59:
		pyjslib['op_usub']($usub59)), (typeof ($usub60=1)=='number'?
		-$usub60:
		pyjslib['op_usub']($usub60)), (typeof ($usub61=1)=='number'?
		-$usub61:
		pyjslib['op_usub']($usub61)), (typeof ($usub62=1)=='number'?
		-$usub62:
		pyjslib['op_usub']($usub62)), 10, 11, 12, 13, 14, 15, (typeof ($usub63=1)=='number'?
		-$usub63:
		pyjslib['op_usub']($usub63)), (typeof ($usub64=1)=='number'?
		-$usub64:
		pyjslib['op_usub']($usub64)), (typeof ($usub65=1)=='number'?
		-$usub65:
		pyjslib['op_usub']($usub65)), (typeof ($usub66=1)=='number'?
		-$usub66:
		pyjslib['op_usub']($usub66)), (typeof ($usub67=1)=='number'?
		-$usub67:
		pyjslib['op_usub']($usub67)), (typeof ($usub68=1)=='number'?
		-$usub68:
		pyjslib['op_usub']($usub68)), (typeof ($usub69=1)=='number'?
		-$usub69:
		pyjslib['op_usub']($usub69)), (typeof ($usub70=1)=='number'?
		-$usub70:
		pyjslib['op_usub']($usub70)), (typeof ($usub71=1)=='number'?
		-$usub71:
		pyjslib['op_usub']($usub71)), (typeof ($usub72=1)=='number'?
		-$usub72:
		pyjslib['op_usub']($usub72)), (typeof ($usub73=1)=='number'?
		-$usub73:
		pyjslib['op_usub']($usub73)), (typeof ($usub74=1)=='number'?
		-$usub74:
		pyjslib['op_usub']($usub74)), (typeof ($usub75=1)=='number'?
		-$usub75:
		pyjslib['op_usub']($usub75)), (typeof ($usub76=1)=='number'?
		-$usub76:
		pyjslib['op_usub']($usub76)), (typeof ($usub77=1)=='number'?
		-$usub77:
		pyjslib['op_usub']($usub77)), (typeof ($usub78=1)=='number'?
		-$usub78:
		pyjslib['op_usub']($usub78)), (typeof ($usub79=1)=='number'?
		-$usub79:
		pyjslib['op_usub']($usub79)), (typeof ($usub80=1)=='number'?
		-$usub80:
		pyjslib['op_usub']($usub80)), (typeof ($usub81=1)=='number'?
		-$usub81:
		pyjslib['op_usub']($usub81)), (typeof ($usub82=1)=='number'?
		-$usub82:
		pyjslib['op_usub']($usub82)), (typeof ($usub83=1)=='number'?
		-$usub83:
		pyjslib['op_usub']($usub83)), (typeof ($usub84=1)=='number'?
		-$usub84:
		pyjslib['op_usub']($usub84)), (typeof ($usub85=1)=='number'?
		-$usub85:
		pyjslib['op_usub']($usub85)), (typeof ($usub86=1)=='number'?
		-$usub86:
		pyjslib['op_usub']($usub86)), (typeof ($usub87=1)=='number'?
		-$usub87:
		pyjslib['op_usub']($usub87)), (typeof ($usub88=1)=='number'?
		-$usub88:
		pyjslib['op_usub']($usub88)), 10, 11, 12, 13, 14, 15, (typeof ($usub89=1)=='number'?
		-$usub89:
		pyjslib['op_usub']($usub89)), (typeof ($usub90=1)=='number'?
		-$usub90:
		pyjslib['op_usub']($usub90)), (typeof ($usub91=1)=='number'?
		-$usub91:
		pyjslib['op_usub']($usub91)), (typeof ($usub92=1)=='number'?
		-$usub92:
		pyjslib['op_usub']($usub92)), (typeof ($usub93=1)=='number'?
		-$usub93:
		pyjslib['op_usub']($usub93)), (typeof ($usub94=1)=='number'?
		-$usub94:
		pyjslib['op_usub']($usub94)), (typeof ($usub95=1)=='number'?
		-$usub95:
		pyjslib['op_usub']($usub95)), (typeof ($usub96=1)=='number'?
		-$usub96:
		pyjslib['op_usub']($usub96)), (typeof ($usub97=1)=='number'?
		-$usub97:
		pyjslib['op_usub']($usub97)), (typeof ($usub98=1)=='number'?
		-$usub98:
		pyjslib['op_usub']($usub98)), (typeof ($usub99=1)=='number'?
		-$usub99:
		pyjslib['op_usub']($usub99)), (typeof ($usub100=1)=='number'?
		-$usub100:
		pyjslib['op_usub']($usub100)), (typeof ($usub101=1)=='number'?
		-$usub101:
		pyjslib['op_usub']($usub101)), (typeof ($usub102=1)=='number'?
		-$usub102:
		pyjslib['op_usub']($usub102)), (typeof ($usub103=1)=='number'?
		-$usub103:
		pyjslib['op_usub']($usub103)), (typeof ($usub104=1)=='number'?
		-$usub104:
		pyjslib['op_usub']($usub104)), (typeof ($usub105=1)=='number'?
		-$usub105:
		pyjslib['op_usub']($usub105)), (typeof ($usub106=1)=='number'?
		-$usub106:
		pyjslib['op_usub']($usub106)), (typeof ($usub107=1)=='number'?
		-$usub107:
		pyjslib['op_usub']($usub107)), (typeof ($usub108=1)=='number'?
		-$usub108:
		pyjslib['op_usub']($usub108)), (typeof ($usub109=1)=='number'?
		-$usub109:
		pyjslib['op_usub']($usub109)), (typeof ($usub110=1)=='number'?
		-$usub110:
		pyjslib['op_usub']($usub110)), (typeof ($usub111=1)=='number'?
		-$usub111:
		pyjslib['op_usub']($usub111)), (typeof ($usub112=1)=='number'?
		-$usub112:
		pyjslib['op_usub']($usub112)), (typeof ($usub113=1)=='number'?
		-$usub113:
		pyjslib['op_usub']($usub113))]);
	binascii['a2b_hex'] = function(t) {
		var $iter17_nextval,a,$or29,$iter17_iter,$add116,$or30,pairs_gen,$iter17_array,b,$iter17_idx,$iter17_type,$add115,result;
		result = pyjslib['list']([]);
		pairs_gen = function(s) {
			var $pyjs_try_err,err,iterlist;
			iterlist = pyjslib['list']([]);
			while (pyjslib['bool'](s)) {
				try {
					iterlist['append'](pyjslib['tuple']([binascii['table_hex'].__getitem__(pyjslib['ord'](s.__getitem__(0))), binascii['table_hex'].__getitem__(pyjslib['ord'](s.__getitem__(1)))]));
				} catch($pyjs_try_err) {
					var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
					$pyjs.__last_exception__ = {error: $pyjs_try_err, module: binascii, try_lineno: 779};
					if (($pyjs_try_err_name == pyjslib['IndexError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['IndexError'])) {
						$pyjs.__last_exception__.except_lineno = 781;
						err = $pyjs_try_err;
						if (pyjslib['bool'](pyjslib['len'](s))) {
							throw (pyjslib['TypeError'](String('Odd-length string')));
						}
						return iterlist;
					} else { throw $pyjs_try_err; }
				}
				s = pyjslib['slice'](s, 2, null);
			}
			return iterlist;
		};
		pairs_gen.__name__ = 'pairs_gen';

		pairs_gen.__bind_type__ = 0;
		pairs_gen.__args__ = [null,null,['s']];
		$iter17_iter = pairs_gen(t);
		if (typeof ($iter17_array = $iter17_iter.__array) != 'undefined') {
			$iter17_type = 0;
		} else {
			$iter17_iter = $iter17_iter.__iter__();
			$iter17_type = typeof ($iter17_array = $iter17_iter.__array) != 'undefined'? 0 : (typeof $iter17_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter17_idx = 0;
		while (typeof ($iter17_nextval=($iter17_type?($iter17_type > 0?$iter17_iter.next(true,true):pyjslib['wrapped_next']($iter17_iter)):$iter17_array[$iter17_idx++])) != 'undefined') {
			a = $iter17_nextval.__array[0];
			b = $iter17_nextval.__array[1];
			if (pyjslib['bool']((pyjslib['bool']($or29=(pyjslib['cmp'](a, 0) == -1))?$or29:(pyjslib['cmp'](b, 0) == -1)))) {
				throw (pyjslib['TypeError'](String('Non-hexadecimal digit found')));
			}
			result['append'](pyjslib['chr']((typeof ($add115=(a)<<(4))==typeof ($add116=b) && (typeof $add115=='number'||typeof $add115=='string')?
				$add115+$add116:
				pyjslib['op_add']($add115,$add116))));
		}
		return String('')['join'](result);
	};
	binascii['a2b_hex'].__name__ = 'a2b_hex';

	binascii['a2b_hex'].__bind_type__ = 0;
	binascii['a2b_hex'].__args__ = [null,null,['t']];
	binascii['unhexlify'] = binascii['a2b_hex'];
	return this;
}; /* end binascii */


/* end module: binascii */


