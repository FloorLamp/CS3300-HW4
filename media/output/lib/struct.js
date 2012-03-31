/* start module: struct */
var struct;
$pyjs.loaded_modules['struct'] = function (__mod_name__) {
	if($pyjs.loaded_modules['struct'].__was_initialized__) return $pyjs.loaded_modules['struct'];
	struct = $pyjs.loaded_modules["struct"];
	struct.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'struct';
	var __name__ = struct.__name__ = __mod_name__;
	var $attr3,$attr1,$attr2,$attr4;

	struct['math'] = pyjslib['___import___']('math', null);
	struct['sys'] = pyjslib['___import___']('sys', null);
	struct['StructError'] = (function(){
		var $cls_instance = $pyjs__class_instance('StructError');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = 'b13a27c51077f5df2a7123a1545fd885';
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjslib['Exception']));
	})();
	struct['error'] = struct['StructError'];
	struct['unpack_int'] = function(data, index, size, le) {
		var $iter2_type,$iter2_iter,bytes,number,$iter2_idx,$iter2_nextval,b,$iter2_array;
		bytes = function(){
var $listcomp1 = pyjslib['list']();
		$iter1_iter = pyjslib['slice'](data, index, (typeof ($add1=index)==typeof ($add2=size) && (typeof $add1=='number'||typeof $add1=='string')?
			$add1+$add2:
			pyjslib['op_add']($add1,$add2)));
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			b = $iter1_nextval;
			$listcomp1['append'](pyjslib['ord'](b));
		}
return $listcomp1;}();
		if (pyjslib['bool'](pyjslib['op_eq'](le, String('little')))) {
			bytes['reverse']();
		}
		number = 0;
		$iter2_iter = bytes;
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			b = $iter2_nextval;
			number = ((number)<<(8))|(b);
		}
		return pyjslib['float_int'](number);
	};
	struct['unpack_int'].__name__ = 'unpack_int';

	struct['unpack_int'].__bind_type__ = 0;
	struct['unpack_int'].__args__ = [null,null,['data'],['index'],['size'],['le']];
	struct['unpack_signed_int'] = function(data, index, size, le) {
		var number,$pow3,$pow2,$pow1,$sub3,$sub2,$sub1,$sub6,$sub5,$sub4,max,$pow4,$mul6,$mul5,$mul4,$mul3,$mul2,$mul1;
		number = struct['unpack_int'](data, index, size, le);
		max = (typeof ($pow1=2)==typeof ($pow2=(typeof ($mul1=size)==typeof ($mul2=8) && typeof $mul1=='number'?
			$mul1*$mul2:
			pyjslib['op_mul']($mul1,$mul2))) && typeof $pow1=='number'?
			Math.pow($pow1,$pow2):
			pyjslib['op_pow']($pow1,$pow2));
		if (pyjslib['bool']((pyjslib['cmp'](number, (typeof ($sub3=(typeof ($pow3=2)==typeof ($pow4=(typeof ($sub1=(typeof ($mul3=size)==typeof ($mul4=8) && typeof $mul3=='number'?
			$mul3*$mul4:
			pyjslib['op_mul']($mul3,$mul4)))==typeof ($sub2=1) && (typeof $sub1=='number'||typeof $sub1=='string')?
			$sub1-$sub2:
			pyjslib['op_sub']($sub1,$sub2))) && typeof $pow3=='number'?
			Math.pow($pow3,$pow4):
			pyjslib['op_pow']($pow3,$pow4)))==typeof ($sub4=1) && (typeof $sub3=='number'||typeof $sub3=='string')?
			$sub3-$sub4:
			pyjslib['op_sub']($sub3,$sub4))) == 1))) {
			number = pyjslib['float_int']((typeof ($mul5=(typeof ($usub1=1)=='number'?
				-$usub1:
				pyjslib['op_usub']($usub1)))==typeof ($mul6=(typeof ($sub5=max)==typeof ($sub6=number) && (typeof $sub5=='number'||typeof $sub5=='string')?
				$sub5-$sub6:
				pyjslib['op_sub']($sub5,$sub6))) && typeof $mul5=='number'?
				$mul5*$mul6:
				pyjslib['op_mul']($mul5,$mul6)));
		}
		return number;
	};
	struct['unpack_signed_int'].__name__ = 'unpack_signed_int';

	struct['unpack_signed_int'].__bind_type__ = 0;
	struct['unpack_signed_int'].__args__ = [null,null,['data'],['index'],['size'],['le']];
	struct['unpack_float'] = function(data, index, size, le) {
		var $sub22,$sub23,$sub20,$sub21,$sub24,number,sign,$div2,bias,$pow9,$iter4_type,$iter4_iter,$pow7,$pow5,revbytes,prec,$pow8,$sub13,$sub9,$sub8,$pow10,$sub7,$sub19,$sub18,$pow6,mantissa,$sub12,$sub11,$sub10,$sub17,$sub16,$sub15,$sub14,$add10,$mul9,$mul8,$mul7,$div3,$div1,$div4,b,e,$mul10,$iter4_nextval,bytes,$iter4_idx,$add6,$add7,exp,$add5,$iter4_array,$add8,$add9;
		bytes = function(){
var $listcomp2 = pyjslib['list']();
		$iter3_iter = pyjslib['slice'](data, index, (typeof ($add3=index)==typeof ($add4=size) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			pyjslib['op_add']($add3,$add4)));
		if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
			$iter3_type = 0;
		} else {
			$iter3_iter = $iter3_iter.__iter__();
			$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter3_idx = 0;
		while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
			b = $iter3_nextval;
			$listcomp2['append'](pyjslib['ord'](b));
		}
return $listcomp2;}();
		if (pyjslib['bool'](!pyjslib['op_eq'](pyjslib['len'](bytes), size))) {

			var $pyjs__raise_expr1 = struct['StructError'];
			var $pyjs__raise_expr2 = String('Not enough data to unpack');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if (pyjslib['bool'](pyjslib['op_eq'](pyjslib['max'](bytes), 0))) {
			return 0.0;
		}
		if (pyjslib['bool'](pyjslib['op_eq'](le, String('big')))) {
			bytes['reverse']();
		}
		if (pyjslib['bool'](pyjslib['op_eq'](size, 4))) {
			bias = 127;
			exp = 8;
			prec = 23;
		}
		else {
			bias = 1023;
			exp = 11;
			prec = 52;
		}
		mantissa = pyjslib['float_int']((bytes.__getitem__((typeof ($sub7=size)==typeof ($sub8=2) && (typeof $sub7=='number'||typeof $sub7=='string')?
			$sub7-$sub8:
			pyjslib['op_sub']($sub7,$sub8))))&((typeof ($sub11=(typeof ($pow5=2)==typeof ($pow6=(typeof ($sub9=15)==typeof ($sub10=exp) && (typeof $sub9=='number'||typeof $sub9=='string')?
			$sub9-$sub10:
			pyjslib['op_sub']($sub9,$sub10))) && typeof $pow5=='number'?
			Math.pow($pow5,$pow6):
			pyjslib['op_pow']($pow5,$pow6)))==typeof ($sub12=1) && (typeof $sub11=='number'||typeof $sub11=='string')?
			$sub11-$sub12:
			pyjslib['op_sub']($sub11,$sub12))));
		revbytes = bytes;
		revbytes['reverse']();
		$iter4_iter = pyjslib['slice'](revbytes, 3, null);
		if (typeof ($iter4_array = $iter4_iter.__array) != 'undefined') {
			$iter4_type = 0;
		} else {
			$iter4_iter = $iter4_iter.__iter__();
			$iter4_type = typeof ($iter4_array = $iter4_iter.__array) != 'undefined'? 0 : (typeof $iter4_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter4_idx = 0;
		while (typeof ($iter4_nextval=($iter4_type?($iter4_type > 0?$iter4_iter.next(true,false):pyjslib['wrapped_next']($iter4_iter)):$iter4_array[$iter4_idx++])) != 'undefined') {
			b = $iter4_nextval;
			mantissa = ((mantissa)<<(8))|(b);
		}
		mantissa = (typeof ($add5=1)==typeof ($add6=(typeof ($div1=(typeof ($mul7=1.0)==typeof ($mul8=mantissa) && typeof $mul7=='number'?
			$mul7*$mul8:
			pyjslib['op_mul']($mul7,$mul8)))==typeof ($div2=(typeof ($pow7=2)==typeof ($pow8=prec) && typeof $pow7=='number'?
			Math.pow($pow7,$pow8):
			pyjslib['op_pow']($pow7,$pow8))) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			pyjslib['op_div']($div1,$div2))) && (typeof $add5=='number'||typeof $add5=='string')?
			$add5+$add6:
			pyjslib['op_add']($add5,$add6));
		mantissa = (typeof ($div3=mantissa)==typeof ($div4=2) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			pyjslib['op_div']($div3,$div4));
		e = ((bytes.__getitem__((typeof ($usub2=1)=='number'?
			-$usub2:
			pyjslib['op_usub']($usub2))))&(127))<<((typeof ($sub13=exp)==typeof ($sub14=7) && (typeof $sub13=='number'||typeof $sub13=='string')?
			$sub13-$sub14:
			pyjslib['op_sub']($sub13,$sub14)));
		e = (typeof ($add7=e)==typeof ($add8=((bytes.__getitem__((typeof ($sub15=size)==typeof ($sub16=2) && (typeof $sub15=='number'||typeof $sub15=='string')?
			$sub15-$sub16:
			pyjslib['op_sub']($sub15,$sub16))))>>((typeof ($sub17=15)==typeof ($sub18=exp) && (typeof $sub17=='number'||typeof $sub17=='string')?
			$sub17-$sub18:
			pyjslib['op_sub']($sub17,$sub18))))&((typeof ($sub21=(typeof ($pow9=2)==typeof ($pow10=(typeof ($sub19=exp)==typeof ($sub20=7) && (typeof $sub19=='number'||typeof $sub19=='string')?
			$sub19-$sub20:
			pyjslib['op_sub']($sub19,$sub20))) && typeof $pow9=='number'?
			Math.pow($pow9,$pow10):
			pyjslib['op_pow']($pow9,$pow10)))==typeof ($sub22=1) && (typeof $sub21=='number'||typeof $sub21=='string')?
			$sub21-$sub22:
			pyjslib['op_sub']($sub21,$sub22)))) && (typeof $add7=='number'||typeof $add7=='string')?
			$add7+$add8:
			pyjslib['op_add']($add7,$add8));
		e = (typeof ($sub23=e)==typeof ($sub24=bias) && (typeof $sub23=='number'||typeof $sub23=='string')?
			$sub23-$sub24:
			pyjslib['op_sub']($sub23,$sub24));
		e = (typeof ($add9=e)==typeof ($add10=1) && (typeof $add9=='number'||typeof $add9=='string')?
			$add9+$add10:
			pyjslib['op_add']($add9,$add10));
		sign = (bytes.__getitem__((typeof ($usub3=1)=='number'?
			-$usub3:
			pyjslib['op_usub']($usub3))))&(128);
		number = struct['math']['ldexp'](mantissa, e);
		if (pyjslib['bool'](sign)) {
			number = (typeof ($mul9=number)==typeof ($mul10=(typeof ($usub4=1)=='number'?
				-$usub4:
				pyjslib['op_usub']($usub4))) && typeof $mul9=='number'?
				$mul9*$mul10:
				pyjslib['op_mul']($mul9,$mul10));
		}
		return number;
	};
	struct['unpack_float'].__name__ = 'unpack_float';

	struct['unpack_float'].__bind_type__ = 0;
	struct['unpack_float'].__args__ = [null,null,['data'],['index'],['size'],['le']];
	struct['unpack_char'] = function(data, index, size, le) {
		var $add11,$add12;
		return pyjslib['slice'](data, index, (typeof ($add11=index)==typeof ($add12=size) && (typeof $add11=='number'||typeof $add11=='string')?
			$add11+$add12:
			pyjslib['op_add']($add11,$add12)));
	};
	struct['unpack_char'].__name__ = 'unpack_char';

	struct['unpack_char'].__bind_type__ = 0;
	struct['unpack_char'].__args__ = [null,null,['data'],['index'],['size'],['le']];
	struct['pack_int'] = function(number, size, le) {
		var $iter5_nextval,$iter5_idx,$iter5_array,res,i,$iter5_iter,$iter5_type,x;
		x = number;
		res = pyjslib['list']([]);
		$iter5_iter = pyjslib['range'](size);
		if (typeof ($iter5_array = $iter5_iter.__array) != 'undefined') {
			$iter5_type = 0;
		} else {
			$iter5_iter = $iter5_iter.__iter__();
			$iter5_type = typeof ($iter5_array = $iter5_iter.__array) != 'undefined'? 0 : (typeof $iter5_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter5_idx = 0;
		while (typeof ($iter5_nextval=($iter5_type?($iter5_type > 0?$iter5_iter.next(true,false):pyjslib['wrapped_next']($iter5_iter)):$iter5_array[$iter5_idx++])) != 'undefined') {
			i = $iter5_nextval;
			res['append'](pyjslib['chr']((x)&(255)));
			x >>= 8;
		}
		if (pyjslib['bool'](pyjslib['op_eq'](le, String('big')))) {
			res['reverse']();
		}
		return String('')['join'](res);
	};
	struct['pack_int'].__name__ = 'pack_int';

	struct['pack_int'].__bind_type__ = 0;
	struct['pack_int'].__args__ = [null,null,['number'],['size'],['le']];
	struct['pack_signed_int'] = function(number, size, le) {
		var $sub29,$sub30,$mul15,$sub26,$mul12,$mul11,$sub25,$mul16,$sub28,$or2,$sub27,$mul14,$or1,$mul13,$pow14,$pow13,$pow12,$pow11;
		if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](number, pyjslib['tuple']([pyjslib['float_int'], pyjslib['float_int']]))))) {

			var $pyjs__raise_expr1 = struct['StructError'];
			var $pyjs__raise_expr2 = String('argument for i,I,l,L,q,Q,h,H must be integer');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if (pyjslib['bool']((pyjslib['bool']($or1=(pyjslib['cmp'](number, (typeof ($sub27=(typeof ($pow11=2)==typeof ($pow12=(typeof ($sub25=(typeof ($mul11=8)==typeof ($mul12=size) && typeof $mul11=='number'?
			$mul11*$mul12:
			pyjslib['op_mul']($mul11,$mul12)))==typeof ($sub26=1) && (typeof $sub25=='number'||typeof $sub25=='string')?
			$sub25-$sub26:
			pyjslib['op_sub']($sub25,$sub26))) && typeof $pow11=='number'?
			Math.pow($pow11,$pow12):
			pyjslib['op_pow']($pow11,$pow12)))==typeof ($sub28=1) && (typeof $sub27=='number'||typeof $sub27=='string')?
			$sub27-$sub28:
			pyjslib['op_sub']($sub27,$sub28))) == 1))?$or1:(pyjslib['cmp'](number, (typeof ($mul15=(typeof ($usub5=1)=='number'?
			-$usub5:
			pyjslib['op_usub']($usub5)))==typeof ($mul16=(typeof ($pow13=2)==typeof ($pow14=(typeof ($sub29=(typeof ($mul13=8)==typeof ($mul14=size) && typeof $mul13=='number'?
			$mul13*$mul14:
			pyjslib['op_mul']($mul13,$mul14)))==typeof ($sub30=1) && (typeof $sub29=='number'||typeof $sub29=='string')?
			$sub29-$sub30:
			pyjslib['op_sub']($sub29,$sub30))) && typeof $pow13=='number'?
			Math.pow($pow13,$pow14):
			pyjslib['op_pow']($pow13,$pow14))) && typeof $mul15=='number'?
			$mul15*$mul16:
			pyjslib['op_mul']($mul15,$mul16))) == -1)))) {

			var $pyjs__raise_expr1 = struct.OverflowError;
			var $pyjs__raise_expr2 = pyjslib['sprintf'](String('Number:%i too large to convert'), number);
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return struct['pack_int'](number, size, le);
	};
	struct['pack_signed_int'].__name__ = 'pack_signed_int';

	struct['pack_signed_int'].__bind_type__ = 0;
	struct['pack_signed_int'].__args__ = [null,null,['number'],['size'],['le']];
	struct['pack_unsigned_int'] = function(number, size, le) {
		var $mul17,$sub31,$mul18,$sub32,$pow16,$pow15;
		if (pyjslib['bool'](!pyjslib['bool'](pyjslib['isinstance'](number, pyjslib['tuple']([pyjslib['float_int'], pyjslib['float_int']]))))) {

			var $pyjs__raise_expr1 = struct['StructError'];
			var $pyjs__raise_expr2 = String('argument for i,I,l,L,q,Q,h,H must be integer');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if (pyjslib['bool']((pyjslib['cmp'](number, 0) == -1))) {

			var $pyjs__raise_expr1 = pyjslib['TypeError'];
			var $pyjs__raise_expr2 = String('can\x27t convert negative long to unsigned');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		if (pyjslib['bool']((pyjslib['cmp'](number, (typeof ($sub31=(typeof ($pow15=2)==typeof ($pow16=(typeof ($mul17=8)==typeof ($mul18=size) && typeof $mul17=='number'?
			$mul17*$mul18:
			pyjslib['op_mul']($mul17,$mul18))) && typeof $pow15=='number'?
			Math.pow($pow15,$pow16):
			pyjslib['op_pow']($pow15,$pow16)))==typeof ($sub32=1) && (typeof $sub31=='number'||typeof $sub31=='string')?
			$sub31-$sub32:
			pyjslib['op_sub']($sub31,$sub32))) == 1))) {

			var $pyjs__raise_expr1 = struct.OverflowError;
			var $pyjs__raise_expr2 = pyjslib['sprintf'](String('Number:%i too large to convert'), number);
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return struct['pack_int'](number, size, le);
	};
	struct['pack_unsigned_int'].__name__ = 'pack_unsigned_int';

	struct['pack_unsigned_int'].__bind_type__ = 0;
	struct['pack_unsigned_int'].__args__ = [null,null,['number'],['size'],['le']];
	struct['pack_char'] = function($$char, size, le) {
		var $$char;
		return pyjslib['str']($$char);
	};
	struct['pack_char'].__name__ = 'pack_char';

	struct['pack_char'].__bind_type__ = 0;
	struct['pack_char'].__args__ = [null,null,['$$char'],['size'],['le']];
	struct['sane_float'] = function(man, e) {

		return true;
	};
	struct['sane_float'].__name__ = 'sane_float';

	struct['sane_float'].__bind_type__ = 0;
	struct['sane_float'].__args__ = [null,null,['man'],['e']];
	struct['pack_float'] = function(number, size, le) {
		var $iter6_type,$pow21,sign,$sub48,$sub40,bias,$sub47,$pow19,$pow18,$pow17,$sub41,$iter6_iter,$sub43,$sub44,$sub42,$sub46,$sub37,res,$sub50,prec,$sub45,$sub39,$sub38,$mul24,$iter6_nextval,$mul22,$mul23,$mul20,$mul21,$sub33,$sub35,$sub34,$iter6_idx,$sub36,mantissa,$and1,$and2,$add14,$add15,$add16,$add17,$pow22,$pow20,$add13,$add18,man,e,$sub49,i,$iter6_array,$mul19,exp;
		if (pyjslib['bool']((pyjslib['cmp'](number, 0) == -1))) {
			sign = 1;
			number = (typeof ($mul19=number)==typeof ($mul20=(typeof ($usub6=1)=='number'?
				-$usub6:
				pyjslib['op_usub']($usub6))) && typeof $mul19=='number'?
				$mul19*$mul20:
				pyjslib['op_mul']($mul19,$mul20));
		}
		else if (pyjslib['bool'](pyjslib['op_eq'](number, 0.0))) {
			return String('')['ljust'](size, String('\x00'));
		}
		else {
			sign = 0;
		}
		if (pyjslib['bool'](pyjslib['op_eq'](size, 4))) {
			bias = 127;
			exp = 8;
			prec = 23;
		}
		else {
			bias = 1023;
			exp = 11;
			prec = 52;
		}
		var $tupleassign1 = struct['math']['frexp'](number);
		man = $tupleassign1.__getitem__(0);
		e = $tupleassign1.__getitem__(1);
		if (pyjslib['bool']((pyjslib['bool']($and1=(pyjslib['cmp'](0.5, man) < 1))?(pyjslib['cmp'](man, 1.0) == -1):$and1))) {
			man = (typeof ($mul21=man)==typeof ($mul22=2) && typeof $mul21=='number'?
				$mul21*$mul22:
				pyjslib['op_mul']($mul21,$mul22));
			e = (typeof ($sub33=e)==typeof ($sub34=1) && (typeof $sub33=='number'||typeof $sub33=='string')?
				$sub33-$sub34:
				pyjslib['op_sub']($sub33,$sub34));
		}
		if (pyjslib['bool'](struct['sane_float'](man, e))) {
			man = (typeof ($sub35=man)==typeof ($sub36=1) && (typeof $sub35=='number'||typeof $sub35=='string')?
				$sub35-$sub36:
				pyjslib['op_sub']($sub35,$sub36));
			e = (typeof ($add13=e)==typeof ($add14=bias) && (typeof $add13=='number'||typeof $add13=='string')?
				$add13+$add14:
				pyjslib['op_add']($add13,$add14));
			mantissa = pyjslib['float_int']((typeof ($add15=(typeof ($mul23=(typeof ($pow17=2)==typeof ($pow18=prec) && typeof $pow17=='number'?
				Math.pow($pow17,$pow18):
				pyjslib['op_pow']($pow17,$pow18)))==typeof ($mul24=man) && typeof $mul23=='number'?
				$mul23*$mul24:
				pyjslib['op_mul']($mul23,$mul24)))==typeof ($add16=0.5) && (typeof $add15=='number'||typeof $add15=='string')?
				$add15+$add16:
				pyjslib['op_add']($add15,$add16)));
			res = pyjslib['list']([]);
			if (pyjslib['bool']((mantissa)>>(prec))) {
				mantissa = 0;
				e = (typeof ($add17=e)==typeof ($add18=1) && (typeof $add17=='number'||typeof $add17=='string')?
					$add17+$add18:
					pyjslib['op_add']($add17,$add18));
			}
			$iter6_iter = pyjslib['range']((typeof ($sub37=size)==typeof ($sub38=2) && (typeof $sub37=='number'||typeof $sub37=='string')?
				$sub37-$sub38:
				pyjslib['op_sub']($sub37,$sub38)));
			if (typeof ($iter6_array = $iter6_iter.__array) != 'undefined') {
				$iter6_type = 0;
			} else {
				$iter6_iter = $iter6_iter.__iter__();
				$iter6_type = typeof ($iter6_array = $iter6_iter.__array) != 'undefined'? 0 : (typeof $iter6_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter6_idx = 0;
			while (typeof ($iter6_nextval=($iter6_type?($iter6_type > 0?$iter6_iter.next(true,false):pyjslib['wrapped_next']($iter6_iter)):$iter6_array[$iter6_idx++])) != 'undefined') {
				i = $iter6_nextval;
				res['extend'](pyjslib['list']([(mantissa)&(255)]));
				mantissa >>= 8;
			}
			res['extend'](pyjslib['list']([((mantissa)&((typeof ($sub41=(typeof ($pow19=2)==typeof ($pow20=(typeof ($sub39=15)==typeof ($sub40=exp) && (typeof $sub39=='number'||typeof $sub39=='string')?
				$sub39-$sub40:
				pyjslib['op_sub']($sub39,$sub40))) && typeof $pow19=='number'?
				Math.pow($pow19,$pow20):
				pyjslib['op_pow']($pow19,$pow20)))==typeof ($sub42=1) && (typeof $sub41=='number'||typeof $sub41=='string')?
				$sub41-$sub42:
				pyjslib['op_sub']($sub41,$sub42))))|(((e)&((typeof ($sub45=(typeof ($pow21=2)==typeof ($pow22=(typeof ($sub43=exp)==typeof ($sub44=7) && (typeof $sub43=='number'||typeof $sub43=='string')?
				$sub43-$sub44:
				pyjslib['op_sub']($sub43,$sub44))) && typeof $pow21=='number'?
				Math.pow($pow21,$pow22):
				pyjslib['op_pow']($pow21,$pow22)))==typeof ($sub46=1) && (typeof $sub45=='number'||typeof $sub45=='string')?
				$sub45-$sub46:
				pyjslib['op_sub']($sub45,$sub46))))<<((typeof ($sub47=15)==typeof ($sub48=exp) && (typeof $sub47=='number'||typeof $sub47=='string')?
				$sub47-$sub48:
				pyjslib['op_sub']($sub47,$sub48))))]));
			res['extend'](pyjslib['list']([((sign)<<(7))|((e)>>((typeof ($sub49=exp)==typeof ($sub50=7) && (typeof $sub49=='number'||typeof $sub49=='string')?
				$sub49-$sub50:
				pyjslib['op_sub']($sub49,$sub50))))]));
			if (pyjslib['bool'](pyjslib['op_eq'](le, String('big')))) {
				res['reverse']();
			}
			return String('')['join'](function(){
var $listcomp3 = pyjslib['list']();
			$iter7_iter = res;
			if (typeof ($iter7_array = $iter7_iter.__array) != 'undefined') {
				$iter7_type = 0;
			} else {
				$iter7_iter = $iter7_iter.__iter__();
				$iter7_type = typeof ($iter7_array = $iter7_iter.__array) != 'undefined'? 0 : (typeof $iter7_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter7_idx = 0;
			while (typeof ($iter7_nextval=($iter7_type?($iter7_type > 0?$iter7_iter.next(true,false):pyjslib['wrapped_next']($iter7_iter)):$iter7_array[$iter7_idx++])) != 'undefined') {
				x = $iter7_nextval;
				$listcomp3['append'](pyjslib['chr'](x));
			}
return $listcomp3;}());
		}
		return null;
	};
	struct['pack_float'].__name__ = 'pack_float';

	struct['pack_float'].__bind_type__ = 0;
	struct['pack_float'].__args__ = [null,null,['number'],['size'],['le']];
	struct['big_endian_format'] = pyjslib['dict']([[String('x'), pyjslib['dict']([[String('size'), 1], [String('alignment'), 0], [String('pack'), null], [String('unpack'), null]])], [String('b'), pyjslib['dict']([[String('size'), 1], [String('alignment'), 0], [String('pack'), struct['pack_signed_int']], [String('unpack'), struct['unpack_signed_int']]])], [String('B'), pyjslib['dict']([[String('size'), 1], [String('alignment'), 0], [String('pack'), struct['pack_unsigned_int']], [String('unpack'), struct['unpack_int']]])], [String('c'), pyjslib['dict']([[String('size'), 1], [String('alignment'), 0], [String('pack'), struct['pack_char']], [String('unpack'), struct['unpack_char']]])], [String('s'), pyjslib['dict']([[String('size'), 1], [String('alignment'), 0], [String('pack'), null], [String('unpack'), null]])], [String('p'), pyjslib['dict']([[String('size'), 1], [String('alignment'), 0], [String('pack'), null], [String('unpack'), null]])], [String('h'), pyjslib['dict']([[String('size'), 2], [String('alignment'), 0], [String('pack'), struct['pack_signed_int']], [String('unpack'), struct['unpack_signed_int']]])], [String('H'), pyjslib['dict']([[String('size'), 2], [String('alignment'), 0], [String('pack'), struct['pack_unsigned_int']], [String('unpack'), struct['unpack_int']]])], [String('i'), pyjslib['dict']([[String('size'), 4], [String('alignment'), 0], [String('pack'), struct['pack_signed_int']], [String('unpack'), struct['unpack_signed_int']]])], [String('I'), pyjslib['dict']([[String('size'), 4], [String('alignment'), 0], [String('pack'), struct['pack_unsigned_int']], [String('unpack'), struct['unpack_int']]])], [String('l'), pyjslib['dict']([[String('size'), 4], [String('alignment'), 0], [String('pack'), struct['pack_signed_int']], [String('unpack'), struct['unpack_signed_int']]])], [String('L'), pyjslib['dict']([[String('size'), 4], [String('alignment'), 0], [String('pack'), struct['pack_unsigned_int']], [String('unpack'), struct['unpack_int']]])], [String('q'), pyjslib['dict']([[String('size'), 8], [String('alignment'), 0], [String('pack'), struct['pack_signed_int']], [String('unpack'), struct['unpack_signed_int']]])], [String('Q'), pyjslib['dict']([[String('size'), 8], [String('alignment'), 0], [String('pack'), struct['pack_unsigned_int']], [String('unpack'), struct['unpack_int']]])], [String('f'), pyjslib['dict']([[String('size'), 4], [String('alignment'), 0], [String('pack'), struct['pack_float']], [String('unpack'), struct['unpack_float']]])], [String('d'), pyjslib['dict']([[String('size'), 8], [String('alignment'), 0], [String('pack'), struct['pack_float']], [String('unpack'), struct['unpack_float']]])]]);
	struct['$$default'] = struct['big_endian_format'];
	struct['formatmode'] = pyjslib['dict']([[String('\x3C'), pyjslib['tuple']([struct['$$default'], String('little')])], [String('\x3E'), pyjslib['tuple']([struct['$$default'], String('big')])], [String('!'), pyjslib['tuple']([struct['$$default'], String('big')])], [String('='), pyjslib['tuple']([struct['$$default'], ((($attr1=struct['sys']['byteorder']) !== null & ($attr2=struct['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'byteorder'):
				struct['sys']['byteorder'])])], [String('@'), pyjslib['tuple']([struct['$$default'], ((($attr3=struct['sys']['byteorder']) !== null & ($attr4=struct['sys']).__is_instance__) && typeof $attr3 == 'function'?
				pyjslib['getattr']($attr4, 'byteorder'):
				struct['sys']['byteorder'])])]]);
	struct['getmode'] = function(fmt) {
		var index,err,$pyjs_try_err,endianness,formatdef;
		try {
			var $tupleassign2 = struct['formatmode'].__getitem__(fmt.__getitem__(0));
			formatdef = $tupleassign2.__getitem__(0);
			endianness = $tupleassign2.__getitem__(1);
			index = 1;
		} catch($pyjs_try_err) {
			var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
			$pyjs.__last_exception__ = {error: $pyjs_try_err, module: struct, try_lineno: 206};
			if (($pyjs_try_err_name == pyjslib['KeyError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['KeyError'])) {
				$pyjs.__last_exception__.except_lineno = 209;
				err = $pyjs_try_err;
				var $tupleassign3 = struct['formatmode'].__getitem__(String('@'));
				formatdef = $tupleassign3.__getitem__(0);
				endianness = $tupleassign3.__getitem__(1);
				index = 0;
			} else { throw $pyjs_try_err; }
		}
		return pyjslib['tuple']([formatdef, endianness, index]);
	};
	struct['getmode'].__name__ = 'getmode';

	struct['getmode'].__bind_type__ = 0;
	struct['getmode'].__args__ = [null,null,['fmt']];
	struct['getNum'] = function(fmt, i) {
		var $add22,cur,$add20,$and3,$and4,$add21,num,$mul26,$mul25,$add19;
		num = null;
		cur = fmt.__getitem__(i);
		while (pyjslib['bool']((pyjslib['bool']($and3=(pyjslib['cmp'](String('0'), cur) < 1))?(pyjslib['cmp'](cur, String('9')) < 1):$and3))) {
			if (pyjslib['bool'](pyjslib['op_eq'](num, null))) {
				num = pyjslib['float_int'](cur);
			}
			else {
				num = (typeof ($add19=(typeof ($mul25=10)==typeof ($mul26=num) && typeof $mul25=='number'?
					$mul25*$mul26:
					pyjslib['op_mul']($mul25,$mul26)))==typeof ($add20=pyjslib['float_int'](cur)) && (typeof $add19=='number'||typeof $add19=='string')?
					$add19+$add20:
					pyjslib['op_add']($add19,$add20));
			}
			i = (typeof ($add21=i)==typeof ($add22=1) && (typeof $add21=='number'||typeof $add21=='string')?
				$add21+$add22:
				pyjslib['op_add']($add21,$add22));
			cur = fmt.__getitem__(i);
		}
		return pyjslib['tuple']([num, i]);
	};
	struct['getNum'].__name__ = 'getNum';

	struct['getNum'].__bind_type__ = 0;
	struct['getNum'].__args__ = [null,null,['fmt'],['i']];
	struct['calcsize'] = function(fmt) {
		var $add28,cur,err,format,i,$mul28,$add25,$pyjs_try_err,$add27,$add24,num,result,endianness,$mul27,$add26,$add23,formatdef;
		var $tupleassign4 = struct['getmode'](fmt);
		formatdef = $tupleassign4.__getitem__(0);
		endianness = $tupleassign4.__getitem__(1);
		i = $tupleassign4.__getitem__(2);
		num = 0;
		result = 0;
		while (pyjslib['bool']((pyjslib['cmp'](i, pyjslib['len'](fmt)) == -1))) {
			var $tupleassign5 = struct['getNum'](fmt, i);
			num = $tupleassign5.__getitem__(0);
			i = $tupleassign5.__getitem__(1);
			cur = fmt.__getitem__(i);
			try {
				format = formatdef.__getitem__(cur);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: struct, try_lineno: 236};
				if (($pyjs_try_err_name == pyjslib['KeyError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['KeyError'])) {
					$pyjs.__last_exception__.except_lineno = 238;
					err = $pyjs_try_err;

					var $pyjs__raise_expr1 = struct['StructError'];
					var $pyjs__raise_expr2 = pyjslib['sprintf'](String('%s is not a valid format'), cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw pyjslib['TypeError']('instance exception may not have a separate value');
					}
					if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { throw $pyjs_try_err; }
			}
			if (pyjslib['bool'](!pyjslib['op_eq'](num, null))) {
				result = (typeof ($add23=result)==typeof ($add24=(typeof ($mul27=num)==typeof ($mul28=format.__getitem__(String('size'))) && typeof $mul27=='number'?
					$mul27*$mul28:
					pyjslib['op_mul']($mul27,$mul28))) && (typeof $add23=='number'||typeof $add23=='string')?
					$add23+$add24:
					pyjslib['op_add']($add23,$add24));
			}
			else {
				result = (typeof ($add25=result)==typeof ($add26=format.__getitem__(String('size'))) && (typeof $add25=='number'||typeof $add25=='string')?
					$add25+$add26:
					pyjslib['op_add']($add25,$add26));
			}
			num = 0;
			i = (typeof ($add27=i)==typeof ($add28=1) && (typeof $add27=='number'||typeof $add27=='string')?
				$add27+$add28:
				pyjslib['op_add']($add27,$add28));
		}
		return result;
	};
	struct['calcsize'].__name__ = 'calcsize';

	struct['calcsize'].__bind_type__ = 0;
	struct['calcsize'].__args__ = [null,null,['fmt']];
	struct['pack'] = function(fmt) {
		var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,1,arguments.length));

		var $iter8_array,$iter8_iter,num,result,$iter8_idx,$sub64,$sub62,$sub63,$sub60,$sub61,$add29,cur,$add40,$pyjs_try_err,endianness,$$var,$sub57,$sub56,$sub55,$sub54,$sub53,$sub52,$sub51,format,$iter8_type,$sub59,$sub58,padding,$add32,$iter8_nextval,formatdef,$add38,$add39,err,i,$add33,$add30,$add31,$add36,$add37,$add34,$add35,n_args,$$var,num_s;
		var $tupleassign6 = struct['getmode'](fmt);
		formatdef = $tupleassign6.__getitem__(0);
		endianness = $tupleassign6.__getitem__(1);
		i = $tupleassign6.__getitem__(2);
		args = pyjslib['list'](args);
		n_args = pyjslib['len'](args);
		result = pyjslib['list']([]);
		while (pyjslib['bool']((pyjslib['cmp'](i, pyjslib['len'](fmt)) == -1))) {
			var $tupleassign7 = struct['getNum'](fmt, i);
			num = $tupleassign7.__getitem__(0);
			i = $tupleassign7.__getitem__(1);
			cur = fmt.__getitem__(i);
			try {
				format = formatdef.__getitem__(cur);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: struct, try_lineno: 259};
				if (($pyjs_try_err_name == pyjslib['KeyError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['KeyError'])) {
					$pyjs.__last_exception__.except_lineno = 261;
					err = $pyjs_try_err;

					var $pyjs__raise_expr1 = struct['StructError'];
					var $pyjs__raise_expr2 = pyjslib['sprintf'](String('%s is not a valid format'), cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw pyjslib['TypeError']('instance exception may not have a separate value');
					}
					if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { throw $pyjs_try_err; }
			}
			if (pyjslib['bool'](pyjslib['op_eq'](num, null))) {
				num_s = 0;
				num = 1;
			}
			else {
				num_s = num;
			}
			if (pyjslib['bool'](pyjslib['op_eq'](cur, String('x')))) {
				result['extend'](pyjslib['list']([String('')['ljust'](num, String('\x00'))]));
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](cur, String('s')))) {
				if (pyjslib['bool'](pyjslib['isinstance'](args.__getitem__(0), pyjslib['str']))) {
					padding = (typeof ($sub51=num)==typeof ($sub52=pyjslib['len'](args.__getitem__(0))) && (typeof $sub51=='number'||typeof $sub51=='string')?
						$sub51-$sub52:
						pyjslib['op_sub']($sub51,$sub52));
					result['extend'](pyjslib['list']([(typeof ($add29=pyjslib['slice'](args.__getitem__(0), 0, num))==typeof ($add30=String('')['ljust'](padding, String('\x00'))) && (typeof $add29=='number'||typeof $add29=='string')?
						$add29+$add30:
						pyjslib['op_add']($add29,$add30))]));
					args['pop'](0);
				}
				else {

					var $pyjs__raise_expr1 = struct['StructError'];
					var $pyjs__raise_expr2 = String('arg for string format not a string');
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw pyjslib['TypeError']('instance exception may not have a separate value');
					}
					if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](cur, String('p')))) {
				if (pyjslib['bool'](pyjslib['isinstance'](args.__getitem__(0), pyjslib['str']))) {
					padding = (typeof ($sub55=(typeof ($sub53=num)==typeof ($sub54=pyjslib['len'](args.__getitem__(0))) && (typeof $sub53=='number'||typeof $sub53=='string')?
						$sub53-$sub54:
						pyjslib['op_sub']($sub53,$sub54)))==typeof ($sub56=1) && (typeof $sub55=='number'||typeof $sub55=='string')?
						$sub55-$sub56:
						pyjslib['op_sub']($sub55,$sub56));
					if (pyjslib['bool']((pyjslib['cmp'](padding, 0) == 1))) {
						result['extend'](pyjslib['list']([(typeof ($add33=(typeof ($add31=pyjslib['chr'](pyjslib['len'](args.__getitem__(0))))==typeof ($add32=pyjslib['slice'](args.__getitem__(0), 0, (typeof ($sub57=num)==typeof ($sub58=1) && (typeof $sub57=='number'||typeof $sub57=='string')?
							$sub57-$sub58:
							pyjslib['op_sub']($sub57,$sub58)))) && (typeof $add31=='number'||typeof $add31=='string')?
							$add31+$add32:
							pyjslib['op_add']($add31,$add32)))==typeof ($add34=String('')['ljust'](padding, String('\x00'))) && (typeof $add33=='number'||typeof $add33=='string')?
							$add33+$add34:
							pyjslib['op_add']($add33,$add34))]));
					}
					else {
						if (pyjslib['bool']((pyjslib['cmp'](num, 255) == -1))) {
							result['extend'](pyjslib['list']([(typeof ($add35=pyjslib['chr']((typeof ($sub59=num)==typeof ($sub60=1) && (typeof $sub59=='number'||typeof $sub59=='string')?
								$sub59-$sub60:
								pyjslib['op_sub']($sub59,$sub60))))==typeof ($add36=pyjslib['slice'](args.__getitem__(0), 0, (typeof ($sub61=num)==typeof ($sub62=1) && (typeof $sub61=='number'||typeof $sub61=='string')?
								$sub61-$sub62:
								pyjslib['op_sub']($sub61,$sub62)))) && (typeof $add35=='number'||typeof $add35=='string')?
								$add35+$add36:
								pyjslib['op_add']($add35,$add36))]));
						}
						else {
							result['extend'](pyjslib['list']([(typeof ($add37=pyjslib['chr'](255))==typeof ($add38=pyjslib['slice'](args.__getitem__(0), 0, (typeof ($sub63=num)==typeof ($sub64=1) && (typeof $sub63=='number'||typeof $sub63=='string')?
								$sub63-$sub64:
								pyjslib['op_sub']($sub63,$sub64)))) && (typeof $add37=='number'||typeof $add37=='string')?
								$add37+$add38:
								pyjslib['op_add']($add37,$add38))]));
						}
					}
					args['pop'](0);
				}
				else {

					var $pyjs__raise_expr1 = struct['StructError'];
					var $pyjs__raise_expr2 = String('arg for string format not a string');
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw pyjslib['TypeError']('instance exception may not have a separate value');
					}
					if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
			}
			else {
				if (pyjslib['bool']((pyjslib['cmp'](pyjslib['len'](args), num) == -1))) {

					var $pyjs__raise_expr1 = struct['StructError'];
					var $pyjs__raise_expr2 = String('insufficient arguments to pack');
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw pyjslib['TypeError']('instance exception may not have a separate value');
					}
					if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				}
				$iter8_iter = pyjslib['slice'](args, 0, num);
				if (typeof ($iter8_array = $iter8_iter.__array) != 'undefined') {
					$iter8_type = 0;
				} else {
					$iter8_iter = $iter8_iter.__iter__();
					$iter8_type = typeof ($iter8_array = $iter8_iter.__array) != 'undefined'? 0 : (typeof $iter8_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter8_idx = 0;
				while (typeof ($iter8_nextval=($iter8_type?($iter8_type > 0?$iter8_iter.next(true,false):pyjslib['wrapped_next']($iter8_iter)):$iter8_array[$iter8_idx++])) != 'undefined') {
					$$var = $iter8_nextval;
					result['extend'](pyjslib['list']([format.__getitem__(String('pack'))($$var, format.__getitem__(String('size')), endianness)]));
				}
				args = pyjslib['slice'](args, num, null);
			}
			num = null;
			i = (typeof ($add39=i)==typeof ($add40=1) && (typeof $add39=='number'||typeof $add39=='string')?
				$add39+$add40:
				pyjslib['op_add']($add39,$add40));
		}
		if (pyjslib['bool'](!pyjslib['op_eq'](pyjslib['len'](args), 0))) {

			var $pyjs__raise_expr1 = struct['StructError'];
			var $pyjs__raise_expr2 = String('too many arguments for pack format');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		return String('')['join'](result);
	};
	struct['pack'].__name__ = 'pack';

	struct['pack'].__bind_type__ = 0;
	struct['pack'].__args__ = ['args',null,['fmt']];
	struct['unpack'] = function(fmt, data) {
		var $iter9_iter,$iter9_idx,num,result,$sub66,$sub65,$add58,$iter9_array,cur,$add49,$add48,$add47,$add46,$add44,$add43,$add42,$add41,$pyjs_try_err,endianness,$iter9_nextval,$iter9_type,format,formatdef,$add50,$add51,$add52,$add53,$add54,$add55,err,$add57,i,j,n,$add56,length,$add45;
		var $tupleassign8 = struct['getmode'](fmt);
		formatdef = $tupleassign8.__getitem__(0);
		endianness = $tupleassign8.__getitem__(1);
		i = $tupleassign8.__getitem__(2);
		j = 0;
		num = 0;
		result = pyjslib['list']([]);
		length = struct['calcsize'](fmt);
		if (pyjslib['bool'](!pyjslib['op_eq'](length, pyjslib['len'](data)))) {

			var $pyjs__raise_expr1 = struct['StructError'];
			var $pyjs__raise_expr2 = String('unpack str size does not match format');
			if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
				throw pyjslib['TypeError']('instance exception may not have a separate value');
			}
			if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
				throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
			} else {
				throw ($pyjs__raise_expr1($pyjs__raise_expr2));
			}

		}
		while (pyjslib['bool']((pyjslib['cmp'](i, pyjslib['len'](fmt)) == -1))) {
			var $tupleassign9 = struct['getNum'](fmt, i);
			num = $tupleassign9.__getitem__(0);
			i = $tupleassign9.__getitem__(1);
			cur = fmt.__getitem__(i);
			i = (typeof ($add41=i)==typeof ($add42=1) && (typeof $add41=='number'||typeof $add41=='string')?
				$add41+$add42:
				pyjslib['op_add']($add41,$add42));
			try {
				format = formatdef.__getitem__(cur);
			} catch($pyjs_try_err) {
				var $pyjs_try_err_name = (typeof $pyjs_try_err.__name__ == 'undefined' ? $pyjs_try_err.name : $pyjs_try_err.__name__ );
				$pyjs.__last_exception__ = {error: $pyjs_try_err, module: struct, try_lineno: 327};
				if (($pyjs_try_err_name == pyjslib['KeyError'].__name__)||pyjslib['_isinstance']($pyjs_try_err,pyjslib['KeyError'])) {
					$pyjs.__last_exception__.except_lineno = 329;
					err = $pyjs_try_err;

					var $pyjs__raise_expr1 = struct['StructError'];
					var $pyjs__raise_expr2 = pyjslib['sprintf'](String('%s is not a valid format'), cur);
					if ($pyjs__raise_expr2 !== null && $pyjs__raise_expr1.__is_instance__ === true) {
						throw pyjslib['TypeError']('instance exception may not have a separate value');
					}
					if (pyjslib['isinstance']($pyjs__raise_expr2, pyjslib['tuple'])) {
						throw ($pyjs__raise_expr1.apply($pyjs__raise_expr1, $pyjs__raise_expr2.getArray()));
					} else {
						throw ($pyjs__raise_expr1($pyjs__raise_expr2));
					}

				} else { throw $pyjs_try_err; }
			}
			if (pyjslib['bool'](!pyjslib['bool'](num))) {
				num = 1;
			}
			if (pyjslib['bool'](pyjslib['op_eq'](cur, String('x')))) {
				j = (typeof ($add43=j)==typeof ($add44=num) && (typeof $add43=='number'||typeof $add43=='string')?
					$add43+$add44:
					pyjslib['op_add']($add43,$add44));
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](cur, String('s')))) {
				result['append'](pyjslib['slice'](data, j, (typeof ($add45=j)==typeof ($add46=num) && (typeof $add45=='number'||typeof $add45=='string')?
					$add45+$add46:
					pyjslib['op_add']($add45,$add46))));
				j = (typeof ($add47=j)==typeof ($add48=num) && (typeof $add47=='number'||typeof $add47=='string')?
					$add47+$add48:
					pyjslib['op_add']($add47,$add48));
			}
			else if (pyjslib['bool'](pyjslib['op_eq'](cur, String('p')))) {
				n = pyjslib['ord'](data.__getitem__(j));
				if (pyjslib['bool']((((pyjslib['cmp'](n, num))|1) == 1))) {
					n = (typeof ($sub65=num)==typeof ($sub66=1) && (typeof $sub65=='number'||typeof $sub65=='string')?
						$sub65-$sub66:
						pyjslib['op_sub']($sub65,$sub66));
				}
				result['append'](pyjslib['slice'](data, (typeof ($add49=j)==typeof ($add50=1) && (typeof $add49=='number'||typeof $add49=='string')?
					$add49+$add50:
					pyjslib['op_add']($add49,$add50)), (typeof ($add53=(typeof ($add51=j)==typeof ($add52=n) && (typeof $add51=='number'||typeof $add51=='string')?
					$add51+$add52:
					pyjslib['op_add']($add51,$add52)))==typeof ($add54=1) && (typeof $add53=='number'||typeof $add53=='string')?
					$add53+$add54:
					pyjslib['op_add']($add53,$add54))));
				j = (typeof ($add55=j)==typeof ($add56=num) && (typeof $add55=='number'||typeof $add55=='string')?
					$add55+$add56:
					pyjslib['op_add']($add55,$add56));
			}
			else {
				$iter9_iter = pyjslib['range'](num);
				if (typeof ($iter9_array = $iter9_iter.__array) != 'undefined') {
					$iter9_type = 0;
				} else {
					$iter9_iter = $iter9_iter.__iter__();
					$iter9_type = typeof ($iter9_array = $iter9_iter.__array) != 'undefined'? 0 : (typeof $iter9_iter.$genfunc == 'function'? 1 : -1);
				}
				$iter9_idx = 0;
				while (typeof ($iter9_nextval=($iter9_type?($iter9_type > 0?$iter9_iter.next(true,false):pyjslib['wrapped_next']($iter9_iter)):$iter9_array[$iter9_idx++])) != 'undefined') {
					n = $iter9_nextval;
					result['extend'](pyjslib['list']([format.__getitem__(String('unpack'))(data, j, format.__getitem__(String('size')), endianness)]));
					j = (typeof ($add57=j)==typeof ($add58=format.__getitem__(String('size'))) && (typeof $add57=='number'||typeof $add57=='string')?
						$add57+$add58:
						pyjslib['op_add']($add57,$add58));
				}
			}
		}
		return pyjslib['tuple'](result);
	};
	struct['unpack'].__name__ = 'unpack';

	struct['unpack'].__bind_type__ = 0;
	struct['unpack'].__args__ = [null,null,['fmt'],['data']];
	struct['pack_into'] = function(fmt, buf, offset) {
		var args = pyjslib['tuple']($pyjs_array_slice.call(arguments,3,arguments.length));


		throw (pyjslib['NotImplementedError'](String('pack_into')));
		return null;
	};
	struct['pack_into'].__name__ = 'pack_into';

	struct['pack_into'].__bind_type__ = 0;
	struct['pack_into'].__args__ = ['args',null,['fmt'],['buf'],['offset']];
	struct['unpack_from'] = function(fmt, buf, offset) {
		if (typeof offset == 'undefined') offset=arguments.callee.__args__[4][1];

		throw (pyjslib['NotImplementedError'](String('unpack_from')));
		return null;
	};
	struct['unpack_from'].__name__ = 'unpack_from';

	struct['unpack_from'].__bind_type__ = 0;
	struct['unpack_from'].__args__ = [null,null,['fmt'],['buf'],['offset', 0]];
	return this;
}; /* end struct */


/* end module: struct */


/*
PYJS_DEPS: ['math', 'sys']
*/
