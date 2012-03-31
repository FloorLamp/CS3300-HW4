/* start module: math */
var math;
$pyjs.loaded_modules['math'] = function (__mod_name__) {
	if($pyjs.loaded_modules['math'].__was_initialized__) return $pyjs.loaded_modules['math'];
	math = $pyjs.loaded_modules["math"];
	math.__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'math';
	var __name__ = math.__name__ = __mod_name__;



math.ceil = Math.ceil;
math.fabs = Math.abs;
math.floor = Math.floor;
math.exp = Math.exp;
math.log = Math.log;
math.pow = Math.pow;
math.sqrt = Math.sqrt;
math.cos = Math.cos;
math.sin = Math.sin;
math.tan = Math.tan;
math.acos = Math.acos;
math.asin = Math.asin;
math.atan = Math.atan;
math.atan2 = Math.atan2;
math.pi = Math.PI;
math.e = Math.E;

	math['__log2__'] = math.log(2);
	math['fsum'] = function(x) {
		var $iter2_nextval,$iter2_type,$iter2_iter,i,sum,$iter2_idx,$add2,xx,$add1,$iter2_array;
		xx = function(){
var $listcomp1 = pyjslib['list']();
		$iter1_iter = pyjslib['enumerate'](x);
		if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
			$iter1_type = 0;
		} else {
			$iter1_iter = $iter1_iter.__iter__();
			$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter1_idx = 0;
		while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,true):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
			i = $iter1_nextval.__array[0];
			v = $iter1_nextval.__array[1];
			$listcomp1['append'](pyjslib['tuple']([math.fabs(v), i]));
		}
return $listcomp1;}();
		xx['sort']();
		sum = 0;
		$iter2_iter = xx;
		if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
			$iter2_type = 0;
		} else {
			$iter2_iter = $iter2_iter.__iter__();
			$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
		}
		$iter2_idx = 0;
		while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
			i = $iter2_nextval;
			sum = (typeof ($add1=sum)==typeof ($add2=x.__getitem__(i.__getitem__(1))) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2));
		}
		return sum;
	};
	math['fsum'].__name__ = 'fsum';

	math['fsum'].__bind_type__ = 0;
	math['fsum'].__args__ = [null,null,['x']];
	math['frexp'] = function(x) {
		var e,$pow2,$pow1,m,$add3,$add4,$div3,$div2,$div1,$div4;
		if (pyjslib['bool'](pyjslib['op_eq'](x, 0))) {
			return pyjslib['tuple']([0.0, 0]);
		}
		e = (typeof ($add3=pyjslib['float_int']((typeof ($div1=math.log(pyjslib['abs'](x)))==typeof ($div2=math['__log2__']) && typeof $div1=='number' && $div2 !== 0?
			$div1/$div2:
			pyjslib['op_div']($div1,$div2))))==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
			$add3+$add4:
			pyjslib['op_add']($add3,$add4));
		m = (typeof ($div3=x)==typeof ($div4=(typeof ($pow1=2.0)==typeof ($pow2=e) && typeof $pow1=='number'?
			Math.pow($pow1,$pow2):
			pyjslib['op_pow']($pow1,$pow2))) && typeof $div3=='number' && $div4 !== 0?
			$div3/$div4:
			pyjslib['op_div']($div3,$div4));
		return pyjslib['tuple']([m, e]);
	};
	math['frexp'].__name__ = 'frexp';

	math['frexp'].__bind_type__ = 0;
	math['frexp'].__args__ = [null,null,['x']];
	math['ldexp'] = function(x, i) {
		var $pow4,$pow3,$mul2,$mul1;
		return (typeof ($mul1=x)==typeof ($mul2=(typeof ($pow3=2)==typeof ($pow4=i) && typeof $pow3=='number'?
			Math.pow($pow3,$pow4):
			pyjslib['op_pow']($pow3,$pow4))) && typeof $mul1=='number'?
			$mul1*$mul2:
			pyjslib['op_mul']($mul1,$mul2));
	};
	math['ldexp'].__name__ = 'ldexp';

	math['ldexp'].__bind_type__ = 0;
	math['ldexp'].__args__ = [null,null,['x'],['i']];
	return this;
}; /* end math */


/* end module: math */


