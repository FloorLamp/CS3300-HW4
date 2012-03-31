/* start module: base64 */
var base64;
$pyjs.loaded_modules['base64'] = function (__mod_name__) {
	if($pyjs.loaded_modules['base64'].__was_initialized__) return $pyjs.loaded_modules['base64'];
	base64 = $pyjs.loaded_modules["base64"];
	base64.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'base64';
	var __name__ = base64.__name__ = __mod_name__;
	var $floordiv2,$mul8,$mul7,$floordiv1;

	base64['struct'] = pyjslib['___import___']('struct', null);
	base64['binascii'] = pyjslib['___import___']('binascii', null);
	base64['__all__'] = pyjslib['list']([String('encode'), String('decode'), String('encodestring'), String('decodestring'), String('b64encode'), String('b64decode'), String('b32encode'), String('b32decode'), String('b16encode'), String('b16decode'), String('standard_b64encode'), String('standard_b64decode'), String('urlsafe_b64encode'), String('urlsafe_b64decode')]);
	base64['_translation'] = function(){
var $listcomp1 = pyjslib['list']();
	$iter1_iter = pyjslib['range'](256);
	if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
		$iter1_type = 0;
	} else {
		$iter1_iter = $iter1_iter.__iter__();
		$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter1_idx = 0;
	while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
		_x = $iter1_nextval;
		$listcomp1['append'](pyjslib['chr'](_x));
	}
return $listcomp1;}();
	base64['EMPTYSTRING'] = String('');
	base64['_translate'] = function(s, altchars) {
		var c,$iter2_nextval,$iter2_type,$iter2_iter,$iter3_array,k,$iter3_type,$iter2_idx,$add2,$iter3_idx,t,v,translation,$add1,$iter3_nextval,$iter2_array,$iter3_iter;
		translation = pyjslib['slice'](base64['_translation'], 0, null);
		$iter2_iter = altchars['items']();
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,true):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			k = $iter2_nextval.__array[0];
			v = $iter2_nextval.__array[1];
			translation.__setitem__(pyjslib['ord'](k), v);
		}
		t = String('');
		$iter3_iter = s;
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			c = $iter3_nextval;
			t = (typeof ($add1=t)==typeof ($add2=translation.__getitem__(pyjslib['ord'](c))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2));
		}
		return t;
	};
	base64['_translate'].__name__ = '_translate';

	base64['_translate'].__bind_type__ = 0;
	base64['_translate'].__args__ = [null,null,['s'],['altchars']];
	base64['b64encode'] = function(s, altchars) {
		if (typeof altchars == 'undefined') altchars=arguments.callee.__args__[3][1];
		var encoded;
		encoded = pyjslib['slice'](base64['binascii']['b2a_base64'](s), 0, (typeof ($usub1=1)=='number'?
			-$usub1:
			pyjslib['op_usub']($usub1)));
		if (pyjslib['bool']((altchars !== null))) {
			return base64['_translate'](encoded, pyjslib['dict']([[String('+'), altchars.__getitem__(0)], [String('/'), altchars.__getitem__(1)]]));
		}
		return encoded;
	};
	base64['b64encode'].__name__ = 'b64encode';

	base64['b64encode'].__bind_type__ = 0;
	base64['b64encode'].__args__ = [null,null,['s'],['altchars', null]];
	base64['b64decode'] = function(s, altchars) {
		if (typeof altchars == 'undefined') altchars=arguments.callee.__args__[3][1];
		var $attr1,$attr3,$attr2,$attr4,msg,$pyjs_try_err;
		if (pyjslib['bool']((altchars !== null))) {
			s = base64['_translate'](s, pyjslib['dict']([[altchars.__getitem__(0), String('+')], [altchars.__getitem__(1), String('/')]]));
		}
		try {
			return base64['binascii']['a2b_base64'](s);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: base64, try_lineno: 82};
			if (($pyjs_try_err_name == ((($attr1=base64['binascii']['Error']) !== null & ($attr2=base64['binascii']).__is_instance__) && typeof $attr1 == 'function'?
						pyjslib['getattr']($attr2, 'Error'):
						base64['binascii']['Error']).__name__)||pyjslib['_isinstance']($pyjs_try_err,((($attr3=base64['binascii']['Error']) !== null & ($attr4=base64['binascii']).__is_instance__) && typeof $attr3 == 'function'?
						pyjslib['getattr']($attr4, 'Error'):
						base64['binascii']['Error']))) {
				$pyjs.__last_exception__.except_lineno = 84;
				msg = $pyjs_try_err;
				throw (pyjslib['TypeError'](msg));
			} else { throw $pyjs_try_err; }
		}
		return null;
	};
	base64['b64decode'].__name__ = 'b64decode';

	base64['b64decode'].__bind_type__ = 0;
	base64['b64decode'].__args__ = [null,null,['s'],['altchars', null]];
	base64['standard_b64encode'] = function(s) {

		return base64['b64encode'](s);
	};
	base64['standard_b64encode'].__name__ = 'standard_b64encode';

	base64['standard_b64encode'].__bind_type__ = 0;
	base64['standard_b64encode'].__args__ = [null,null,['s']];
	base64['standard_b64decode'] = function(s) {

		return base64['b64decode'](s);
	};
	base64['standard_b64decode'].__name__ = 'standard_b64decode';

	base64['standard_b64decode'].__bind_type__ = 0;
	base64['standard_b64decode'].__args__ = [null,null,['s']];
	base64['urlsafe_b64encode'] = function(s) {

		return base64['b64encode'](s, String('-_'));
	};
	base64['urlsafe_b64encode'].__name__ = 'urlsafe_b64encode';

	base64['urlsafe_b64encode'].__bind_type__ = 0;
	base64['urlsafe_b64encode'].__args__ = [null,null,['s']];
	base64['urlsafe_b64decode'] = function(s) {

		return base64['b64decode'](s, String('-_'));
	};
	base64['urlsafe_b64decode'].__name__ = 'urlsafe_b64decode';

	base64['urlsafe_b64decode'].__bind_type__ = 0;
	base64['urlsafe_b64decode'].__args__ = [null,null,['s']];
	base64['_b32alphabet'] = pyjslib['dict']([[0, String('A')], [9, String('J')], [18, String('S')], [27, String('3')], [1, String('B')], [10, String('K')], [19, String('T')], [28, String('4')], [2, String('C')], [11, String('L')], [20, String('U')], [29, String('5')], [3, String('D')], [12, String('M')], [21, String('V')], [30, String('6')], [4, String('E')], [13, String('N')], [22, String('W')], [31, String('7')], [5, String('F')], [14, String('O')], [23, String('X')], [6, String('G')], [15, String('P')], [24, String('Y')], [7, String('H')], [16, String('Q')], [25, String('Z')], [8, String('I')], [17, String('R')], [26, String('2')]]);
	base64['_b32tab'] = base64['_b32alphabet']['items']();
	base64['_b32tab']['sort']();
	base64['_b32tab'] = function(){
var $listcomp2 = pyjslib['list']();
	$iter4_iter = base64['_b32tab'];
	if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
		$iter4_type = 0;
	} else {
		$iter4_iter = $iter4_iter.__iter__();
		$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter4_idx = 0;
	while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,true):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
		k = $iter4_nextval.__array[0];
		v = $iter4_nextval.__array[1];
		$listcomp2['append'](v);
	}
return $listcomp2;}();
	base64['_b32rev'] = pyjslib['dict'](function(){
var $listcomp3 = pyjslib['list']();
	$iter5_iter = base64['_b32alphabet']['items']();
	if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
		$iter5_type = 0;
	} else {
		$iter5_iter = $iter5_iter.__iter__();
		$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
	}
	$iter5_idx = 0;
	while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,true):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
		k = $iter5_nextval.__array[0];
		v = $iter5_nextval.__array[1];
		$listcomp3['append'](pyjslib['tuple']([v, k]));
	}
return $listcomp3;}());
	base64['b32encode'] = function(s) {
		var $add20,$iter6_type,c2,$iter6_iter,$iter6_nextval,$add18,encoded,$add19,parts,quanta,$sub2,$sub1,$iter6_idx,$add14,$add15,$iter6_array,$add17,$add10,$add11,$add12,$add13,c3,leftover,c1,$mul4,$mul3,$mul2,$mul1,i,$add16,$add3,$add6,$add7,$add4,$add5,$add8,$add9;
		parts = pyjslib['list']([]);
		var $tupleassign1 = pyjslib['divmod'](pyjslib['len'](s), 5);
		quanta = $tupleassign1.__getitem__(0);
		leftover = $tupleassign1.__getitem__(1);
		if (pyjslib['bool'](leftover)) {
			s = (typeof ($add3=s)==typeof ($add4=String('')['ljust']((typeof ($sub1=5)==typeof ($sub2=leftover) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2)), String('\x00'))) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4));
			quanta = (typeof ($add5=quanta)==typeof ($add6=1) && (typeof $add5=='number'||typeof $add5=='string')?
				$add5+$add6:
				pyjslib['op_add']($add5,$add6));
		}
		$iter6_iter = pyjslib['range'](quanta);
		if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
			$iter6_type = 0;
		} else {
			$iter6_iter = $iter6_iter.__iter__();
			$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter6_idx = 0;
		while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
			i = $iter6_nextval;
			var $tupleassign2 = base64['struct']['unpack'](String('!HHB'), pyjslib['slice'](s, (typeof ($mul1=i)==typeof ($mul2=5) && typeof $mul1=='number'?
				$mul1*$mul2:
				pyjslib['op_mul']($mul1,$mul2)), (typeof ($mul3=(typeof ($add7=i)==typeof ($add8=1) && (typeof $add7=='number'||typeof $add7=='string')?
				$add7+$add8:
				pyjslib['op_add']($add7,$add8)))==typeof ($mul4=5) && typeof $mul3=='number'?
				$mul3*$mul4:
				pyjslib['op_mul']($mul3,$mul4))));
			c1 = $tupleassign2.__getitem__(0);
			c2 = $tupleassign2.__getitem__(1);
			c3 = $tupleassign2.__getitem__(2);
			c2 = (typeof ($add9=c2)==typeof ($add10=((c1)&(1))<<(16)) && (typeof $add9=='number'||typeof $add9=='string')?
				$add9+$add10:
				pyjslib['op_add']($add9,$add10));
			c3 = (typeof ($add11=c3)==typeof ($add12=((c2)&(3))<<(8)) && (typeof $add11=='number'||typeof $add11=='string')?
				$add11+$add12:
				pyjslib['op_add']($add11,$add12));
			parts['extend'](pyjslib['list']([base64['_b32tab'].__getitem__((c1)>>(11)), base64['_b32tab'].__getitem__(((c1)>>(6))&(31)), base64['_b32tab'].__getitem__(((c1)>>(1))&(31)), base64['_b32tab'].__getitem__((c2)>>(12)), base64['_b32tab'].__getitem__(((c2)>>(7))&(31)), base64['_b32tab'].__getitem__(((c2)>>(2))&(31)), base64['_b32tab'].__getitem__((c3)>>(5)), base64['_b32tab'].__getitem__((c3)&(31))]));
		}
		encoded = base64['EMPTYSTRING']['join'](parts);
		if (pyjslib['bool'](pyjslib['op_eq'](leftover, 1))) {
			return (typeof ($add13=pyjslib['slice'](encoded, 0, (typeof ($usub2=6)=='number'?
				-$usub2:
				pyjslib['op_usub']($usub2))))==typeof ($add14=String('======')) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				pyjslib['op_add']($add13,$add14));
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](leftover, 2))) {
			return (typeof ($add15=pyjslib['slice'](encoded, 0, (typeof ($usub3=4)=='number'?
				-$usub3:
				pyjslib['op_usub']($usub3))))==typeof ($add16=String('====')) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				pyjslib['op_add']($add15,$add16));
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](leftover, 3))) {
			return (typeof ($add17=pyjslib['slice'](encoded, 0, (typeof ($usub4=3)=='number'?
				-$usub4:
				pyjslib['op_usub']($usub4))))==typeof ($add18=String('===')) && (typeof $add17=='number'||typeof $add17=='string')?
				$add17+$add18:
				pyjslib['op_add']($add17,$add18));
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](leftover, 4))) {
			return (typeof ($add19=pyjslib['slice'](encoded, 0, (typeof ($usub5=1)=='number'?
				-$usub5:
				pyjslib['op_usub']($usub5))))==typeof ($add20=String('=')) && (typeof $add19=='number'||typeof $add19=='string')?
				$add19+$add20:
				pyjslib['op_add']($add19,$add20));
		}
		return encoded;
	};
	base64['b32encode'].__name__ = 'b32encode';

	base64['b32encode'].__bind_type__ = 0;
	base64['b32encode'].__args__ = [null,null,['s']];
	base64['b32decode'] = function(s, casefold, map01) {
		if (typeof casefold == 'undefined') casefold=arguments.callee.__args__[3][1];
		if (typeof map01 == 'undefined') map01=arguments.callee.__args__[4][1];
		var $mul6,$pow1,$pow2,val,$add21,$add22,parts,quanta,$sub3,$iter7_type,$sub6,$sub5,$sub4,$iter7_iter,$iter7_idx,leftover,$mul5,acc,c,last,padchars,$iter7_nextval,shift,$iter7_array;
		var $tupleassign3 = pyjslib['divmod'](pyjslib['len'](s), 8);
		quanta = $tupleassign3.__getitem__(0);
		leftover = $tupleassign3.__getitem__(1);
		if (pyjslib['bool'](leftover)) {
			throw (pyjslib['TypeError'](String('Incorrect padding')));
		}
		if (pyjslib['bool'](map01)) {
			s = base64['_translate'](s, pyjslib['dict']([[String('0'), String('O')], [String('1'), map01]]));
		}
		if (pyjslib['bool'](casefold)) {
			s = s['upper']();
		}
		padchars = 0;
		padchars = pyjslib['len'](s);
		s = s['rstrip'](String('='));
		padchars = (typeof ($sub3=padchars)==typeof ($sub4=pyjslib['len'](s)) && (typeof $sub3=='number'||typeof $sub3=='string')?
			$sub3-$sub4:
			pyjslib['op_sub']($sub3,$sub4));
		parts = pyjslib['list']([]);
		acc = 0;
		shift = 35;
		$iter7_iter = s;
		if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
			$iter7_type = 0;
		} else {
			$iter7_iter = $iter7_iter.__iter__();
			$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter7_idx = 0;
		while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):pyjslib['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
			c = $iter7_nextval;
			val = base64['_b32rev']['get'](c);
			if (pyjslib['bool']((val === null))) {
				throw (pyjslib['TypeError'](String('Non-base32 digit found')));
			}
			acc = (typeof ($add21=acc)==typeof ($add22=(typeof ($mul5=base64['_b32rev'].__getitem__(c))==typeof ($mul6=(typeof ($pow1=2)==typeof ($pow2=shift) && typeof $pow1=='number'?
				Math.pow($pow1,$pow2):
				pyjslib['op_pow']($pow1,$pow2))) && typeof $mul5=='number'?
				$mul5*$mul6:
				pyjslib['op_mul']($mul5,$mul6))) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				pyjslib['op_add']($add21,$add22));
			shift = (typeof ($sub5=shift)==typeof ($sub6=5) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				pyjslib['op_sub']($sub5,$sub6));
			if (pyjslib['bool']((pyjslib['cmp'](shift, 0) == -1))) {
				parts['append'](base64['binascii']['unhexlify'](pyjslib['sprintf'](String('%010x'), acc)));
				acc = 0;
				shift = 35;
			}
		}
		last = base64['binascii']['unhexlify'](pyjslib['sprintf'](String('%010x'), acc));
		if (pyjslib['bool'](pyjslib['op_eq'](padchars, 0))) {
			last = String('');
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](padchars, 1))) {
			last = pyjslib['slice'](last, 0, (typeof ($usub6=1)=='number'?
				-$usub6:
				pyjslib['op_usub']($usub6)));
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](padchars, 3))) {
			last = pyjslib['slice'](last, 0, (typeof ($usub7=2)=='number'?
				-$usub7:
				pyjslib['op_usub']($usub7)));
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](padchars, 4))) {
			last = pyjslib['slice'](last, 0, (typeof ($usub8=3)=='number'?
				-$usub8:
				pyjslib['op_usub']($usub8)));
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](padchars, 6))) {
			last = pyjslib['slice'](last, 0, (typeof ($usub9=4)=='number'?
				-$usub9:
				pyjslib['op_usub']($usub9)));
		}
		else {
			throw (pyjslib['TypeError'](String('Incorrect padding')));
		}
		parts['append'](last);
		return base64['EMPTYSTRING']['join'](parts);
	};
	base64['b32decode'].__name__ = 'b32decode';

	base64['b32decode'].__bind_type__ = 0;
	base64['b32decode'].__args__ = [null,null,['s'],['casefold', false],['map01', null]];
	base64['b16encode'] = function(s) {

		return base64['binascii']['hexlify'](s)['upper']();
	};
	base64['b16encode'].__name__ = 'b16encode';

	base64['b16encode'].__bind_type__ = 0;
	base64['b16encode'].__args__ = [null,null,['s']];
	base64['b16decode'] = function(s, casefold) {
		if (typeof casefold == 'undefined') casefold=arguments.callee.__args__[3][1];
		var r;
		if (pyjslib['bool'](casefold)) {
			s = s['upper']();
		}
		r = RegExp(String('[^0-9A-F]'));
		if (pyjslib['bool'](r['test'](s))) {
			throw (pyjslib['TypeError'](String('Non-base16 digit found')));
		}
		return base64['binascii']['unhexlify'](s);
	};
	base64['b16decode'].__name__ = 'b16decode';

	base64['b16decode'].__bind_type__ = 0;
	base64['b16decode'].__args__ = [null,null,['s'],['casefold', false]];
	base64['MAXLINESIZE'] = 76;
	base64['MAXBINSIZE'] = (typeof ($mul7=(typeof ($floordiv1=base64['MAXLINESIZE'])==typeof ($floordiv2=4) && typeof $floordiv1=='number' && $floordiv2 !== 0?
		Math.floor($floordiv1/$floordiv2):
		pyjslib['op_floordiv']($floordiv1,$floordiv2)))==typeof ($mul8=3) && typeof $mul7=='number'?
		$mul7*$mul8:
		pyjslib['op_mul']($mul7,$mul8));
	base64['encode'] = function(input, output) {

		throw (pyjslib['NotImplementedError'](String('encode: no file operations possible')));
		return null;
	};
	base64['encode'].__name__ = 'encode';

	base64['encode'].__bind_type__ = 0;
	base64['encode'].__args__ = [null,null,['input'],['output']];
	base64['decode'] = function(input, output) {

		throw (pyjslib['NotImplementedError'](String('decode: no file operations possible')));
		return null;
	};
	base64['decode'].__name__ = 'decode';

	base64['decode'].__bind_type__ = 0;
	base64['decode'].__args__ = [null,null,['input'],['output']];
	base64['encodestring'] = function(s) {
		var $iter8_idx,chunk,i,$iter8_type,$iter8_array,$add24,pieces,$iter8_iter,$iter8_nextval,$add23;
		pieces = pyjslib['list']([]);
		$iter8_iter = pyjslib['range'](0, pyjslib['len'](s), base64['MAXBINSIZE']);
		if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
			$iter8_type = 0;
		} else {
			$iter8_iter = $iter8_iter.__iter__();
			$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter8_idx = 0;
		while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):pyjslib['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
			i = $iter8_nextval;
			chunk = pyjslib['slice'](s, i, (typeof ($add23=i)==typeof ($add24=base64['MAXBINSIZE']) && (typeof $add23=='number'||typeof $add23=='string')?
				$add23+$add24:
				pyjslib['op_add']($add23,$add24)));
			pieces['append'](base64['binascii']['b2a_base64'](chunk));
		}
		return String('')['join'](pieces);
	};
	base64['encodestring'].__name__ = 'encodestring';

	base64['encodestring'].__bind_type__ = 0;
	base64['encodestring'].__args__ = [null,null,['s']];
	base64['decodestring'] = function(s) {

		return base64['binascii']['a2b_base64'](s);
	};
	base64['decodestring'].__name__ = 'decodestring';

	base64['decodestring'].__bind_type__ = 0;
	base64['decodestring'].__args__ = [null,null,['s']];
	base64['test'] = function() {
		var $attr20,$iter9_iter,$iter9_nextval,$iter9_idx,$pyjs_try_err,msg,getopt,$iter9_type,$attr9,$attr8,$and1,$and2,args,$attr5,$attr7,$attr6,sys,$attr19,$attr18,func,$attr15,$attr14,$attr17,$attr16,$attr11,$attr10,$attr13,$attr12,a,o,$iter9_array,opts;
		sys = pyjslib['___import___']('sys', null);
		getopt = pyjslib['___import___']('getopt', null);
		try {
			var $tupleassign4 = getopt['getopt'](pyjslib['slice'](((($attr5=sys['argv']) !== null & ($attr6=sys).__is_instance__) && typeof $attr5 == 'function'?
						pyjslib['getattr']($attr6, 'argv'):
						sys['argv']), 1, null), String('deut'));
			opts = $tupleassign4.__getitem__(0);
			args = $tupleassign4.__getitem__(1);
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: base64, try_lineno: 357};
			if (($pyjs_try_err_name == ((($attr7=getopt['error']) !== null & ($attr8=getopt).__is_instance__) && typeof $attr7 == 'function'?
						pyjslib['getattr']($attr8, 'error'):
						getopt['error']).__name__)||pyjslib['_isinstance']($pyjs_try_err,((($attr9=getopt['error']) !== null & ($attr10=getopt).__is_instance__) && typeof $attr9 == 'function'?
						pyjslib['getattr']($attr10, 'error'):
						getopt['error']))) {
				$pyjs.__last_exception__.except_lineno = 359;
				msg = $pyjs_try_err;
				sys.stdout = ((($attr11=sys['stderr']) !== null & ($attr12=sys).__is_instance__) && typeof $attr11 == 'function'?
							pyjslib['getattr']($attr12, 'stderr'):
							sys['stderr']);
				pyjslib['printFunc']([msg], 1);
				pyjslib['printFunc']([pyjslib['sprintf'](String('usage: %s [-d|-e|-u|-t] [file|-]\x0A        -d, -u: decode\x0A        -e: encode (default)\x0A        -t: encode and decode string \x27Aladdin:open sesame\x27'), ((($attr13=sys['argv']) !== null & ($attr14=sys).__is_instance__) && typeof $attr13 == 'function'?
							pyjslib['getattr']($attr14, 'argv'):
							sys['argv']).__getitem__(0))], 1);
				sys['exit'](2);
			} else { throw $pyjs_try_err; }
		}
		func = base64['encode'];
		$iter9_iter = opts;
		if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
			$iter9_type = 0;
		} else {
			$iter9_iter = $iter9_iter.__iter__();
			$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter9_idx = 0;
		while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,true):pyjslib['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
			o = $iter9_nextval.__array[0];
			a = $iter9_nextval.__array[1];
			if (pyjslib['bool'](pyjslib['op_eq'](o, String('-e')))) {
				func = base64['encode'];
			}
			if (pyjslib['bool'](pyjslib['op_eq'](o, String('-d')))) {
				func = base64['decode'];
			}
			if (pyjslib['bool'](pyjslib['op_eq'](o, String('-u')))) {
				func = base64['decode'];
			}
			if (pyjslib['bool'](pyjslib['op_eq'](o, String('-t')))) {
				base64.test1();
				return null;
			}
		}
		if (pyjslib['bool']((pyjslib['bool']($and1=args)?!pyjslib['op_eq'](args.__getitem__(0), String('-')):$and1))) {
			func(pyjslib['open'](args.__getitem__(0), String('rb')), ((($attr15=sys['stdout']) !== null & ($attr16=sys).__is_instance__) && typeof $attr15 == 'function'?
						pyjslib['getattr']($attr16, 'stdout'):
						sys['stdout']));
		}
		else {
			func(((($attr17=sys['stdin']) !== null & ($attr18=sys).__is_instance__) && typeof $attr17 == 'function'?
						pyjslib['getattr']($attr18, 'stdin'):
						sys['stdin']), ((($attr19=sys['stdout']) !== null & ($attr20=sys).__is_instance__) && typeof $attr19 == 'function'?
						pyjslib['getattr']($attr20, 'stdout'):
						sys['stdout']));
		}
		return null;
	};
	base64['test'].__name__ = 'test';

	base64['test'].__bind_type__ = 0;
	base64['test'].__args__ = [null,null];
	base64['test1'] = function() {
		var s2,s1,s0;
		s0 = String('Aladdin:open sesame');
		s1 = base64['encodestring'](s0);
		s2 = base64['decodestring'](s1);
		pyjslib['printFunc']([s0, pyjslib['repr'](s1), s2], 1);
		return null;
	};
	base64['test1'].__name__ = 'test1';

	base64['test1'].__bind_type__ = 0;
	base64['test1'].__args__ = [null,null];
	if (pyjslib['bool'](pyjslib['op_eq'](base64['__name__'], String('__main__')))) {
		base64['test']();
	}
	return this;
}; /* end base64 */


/* end module: base64 */


/*
PYJS_DEPS: ['struct', 'binascii', 'sys', 'getopt']
*/
