/* start module: pyjamas.ui.FlexTable */
$pyjs.loaded_modules['pyjamas.ui.FlexTable'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.FlexTable'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.FlexTable'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['FlexTable'] = $pyjs.loaded_modules["pyjamas.ui.FlexTable"];
	pyjamas['ui']['FlexTable'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FlexTable';
	var __name__ = pyjamas['ui']['FlexTable'].__name__ = __mod_name__;
	var FlexTable = pyjamas['ui']['FlexTable'];
	var $attr1,$attr2;

	pyjamas['ui']['FlexTable']['sys'] = pyjslib['___import___']('sys', 'pyjamas.ui');
	if (pyjslib['bool'](!pyjslib['list']([String('mozilla'), String('ie6'), String('opera'), String('oldmoz'), String('safari')]).__contains__(((($attr1=pyjamas['ui']['FlexTable']['sys']['platform']) !== null & ($attr2=pyjamas['ui']['FlexTable']['sys']).__is_instance__) && typeof $attr1 == 'function'?
				pyjslib['getattr']($attr2, 'platform'):
				pyjamas['ui']['FlexTable']['sys']['platform'])))) {
	}
	pyjamas['ui']['FlexTable']['Factory'] = pyjslib['___import___']('pyjamas.Factory', 'pyjamas.ui', null, false);
	pyjamas['ui']['FlexTable']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['FlexTable']['HTMLTable'] = pyjslib['___import___']('HTMLTable.HTMLTable', 'pyjamas.ui', null, false);
	pyjamas['ui']['FlexTable']['RowFormatter'] = pyjslib['___import___']('RowFormatter.RowFormatter', 'pyjamas.ui', null, false);
	pyjamas['ui']['FlexTable']['FlexCellFormatter'] = pyjslib['___import___']('FlexCellFormatter.FlexCellFormatter', 'pyjamas.ui', null, false);
	pyjamas['ui']['FlexTable']['FlexTable'] = (function(){
		var $cls_instance = $pyjs__class_instance('FlexTable');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '9d69690ac46fe99fd9a83cbffeae762c';
		$method = $pyjs__bind_method($cls_instance, '__init__', function() {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 1 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[1];
					}
				} else {
				}
			}

			if (pyjslib['bool'](!pyjslib['bool'](kwargs['has_key'](String('CellFormatter'))))) {
				kwargs.__setitem__(String('CellFormatter'), pyjamas['ui']['FlexTable']['FlexCellFormatter'](self));
			}
			$pyjs_kwargs_call(pyjamas['ui']['FlexTable']['HTMLTable'], '__init__', null, kwargs, [{}, self]);
			return null;
		}
	, 1, [null,['kwargs'],['self']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addCell', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['insertCell'](row, self['getCellCount'](row));
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['addCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getCellCount', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}

			self['checkRowBounds'](row);
			return self['getDOMCellCount'](self['getBodyElement'](), row);
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['getCellCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getFlexCellFormatter', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getCellFormatter']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getFlexCellFormatter'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getRowCount', function() {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
			}

			return self['getDOMRowCount']();
		}
	, 1, [null,null,['self']]);
		$cls_definition['getRowCount'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'removeCells', function(row, column, num) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				num = arguments[3];
			}
			var $iter1_nextval,$iter1_type,$iter1_idx,$iter1_iter,i,$iter1_array;
			$iter1_iter = pyjslib['range'](num);
			if (typeof ($iter1_array = $iter1_iter.__array) != 'undefined') {
				$iter1_type = 0;
			} else {
				$iter1_iter = $iter1_iter.__iter__();
				$iter1_type = typeof ($iter1_array = $iter1_iter.__array) != 'undefined'? 0 : (typeof $iter1_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter1_idx = 0;
			while (typeof ($iter1_nextval=($iter1_type?($iter1_type > 0?$iter1_iter.next(true,false):pyjslib['wrapped_next']($iter1_iter)):$iter1_array[$iter1_idx++])) != 'undefined') {
				i = $iter1_nextval;
				self['removeCell'](row, column);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['num']]);
		$cls_definition['removeCells'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'prepareCell', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}
			var required,$add2,cellCount,$add1,$sub2,$sub1;
			self['prepareRow'](row);
			cellCount = self['getCellCount'](row);
			required = (typeof ($sub1=(typeof ($add1=column)==typeof ($add2=1) && (typeof $add1=='number'||typeof $add1=='string')?
				$add1+$add2:
				pyjslib['op_add']($add1,$add2)))==typeof ($sub2=cellCount) && (typeof $sub1=='number'||typeof $sub1=='string')?
				$sub1-$sub2:
				pyjslib['op_sub']($sub1,$sub2));
			if (pyjslib['bool']((pyjslib['cmp'](required, 0) == 1))) {
				self['addCells'](self['getBodyElement'](), row, required);
			}
			return null;
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['prepareCell'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'prepareRow', function(row) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
			}
			var $iter2_nextval,$iter2_type,$iter2_iter,$add3,i,rowCount,$iter2_idx,$add4,$iter2_array;
			rowCount = self['getRowCount']();
			$iter2_iter = pyjslib['range'](rowCount, (typeof ($add3=row)==typeof ($add4=1) && (typeof $add3=='number'||typeof $add3=='string')?
				$add3+$add4:
				pyjslib['op_add']($add3,$add4)));
			if (typeof ($iter2_array = $iter2_iter.__array) != 'undefined') {
				$iter2_type = 0;
			} else {
				$iter2_iter = $iter2_iter.__iter__();
				$iter2_type = typeof ($iter2_array = $iter2_iter.__array) != 'undefined'? 0 : (typeof $iter2_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter2_idx = 0;
			while (typeof ($iter2_nextval=($iter2_type?($iter2_type > 0?$iter2_iter.next(true,false):pyjslib['wrapped_next']($iter2_iter)):$iter2_array[$iter2_idx++])) != 'undefined') {
				i = $iter2_nextval;
				self['insertRow'](i);
			}
			return null;
		}
	, 1, [null,null,['self'],['row']]);
		$cls_definition['prepareRow'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'addCells', function(table, row, num) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				table = arguments[1];
				row = arguments[2];
				num = arguments[3];
			}
			var rowElem,$iter3_idx,i,$iter3_array,cell,$iter3_iter,$iter3_type,$iter3_nextval;
			rowElem = table['rows']['item'](row);
			$iter3_iter = pyjslib['range'](num);
			if (typeof ($iter3_array = $iter3_iter.__array) != 'undefined') {
				$iter3_type = 0;
			} else {
				$iter3_iter = $iter3_iter.__iter__();
				$iter3_type = typeof ($iter3_array = $iter3_iter.__array) != 'undefined'? 0 : (typeof $iter3_iter.$genfunc == 'function'? 1 : -1);
			}
			$iter3_idx = 0;
			while (typeof ($iter3_nextval=($iter3_type?($iter3_type > 0?$iter3_iter.next(true,false):pyjslib['wrapped_next']($iter3_iter)):$iter3_array[$iter3_idx++])) != 'undefined') {
				i = $iter3_nextval;
				cell = $doc['createElement'](String('td'));
				rowElem['appendChild'](cell);
			}
			return null;
		}
	, 1, [null,null,['self'],['table'],['row'],['num']]);
		$cls_definition['addCells'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['FlexTable']['HTMLTable']));
	})();
	pyjamas['ui']['FlexTable']['Factory']['registerClass'](String('pyjamas.ui.FlexTable'), pyjamas['ui']['FlexTable']['FlexTable']);
	return this;
}; /* end pyjamas.ui.FlexTable */


/* end module: pyjamas.ui.FlexTable */


/*
PYJS_DEPS: ['sys', 'pyjamas.Factory', 'pyjamas', 'pyjamas.DOM', 'HTMLTable.HTMLTable', 'HTMLTable', 'RowFormatter.RowFormatter', 'RowFormatter', 'FlexCellFormatter.FlexCellFormatter', 'FlexCellFormatter']
*/
