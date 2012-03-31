/* start module: pyjamas.ui.FlexCellFormatter */
$pyjs.loaded_modules['pyjamas.ui.FlexCellFormatter'] = function (__mod_name__) {
	if($pyjs.loaded_modules['pyjamas.ui.FlexCellFormatter'].__was_initialized__) return $pyjs.loaded_modules['pyjamas.ui.FlexCellFormatter'];
	if(typeof $pyjs.loaded_modules['pyjamas.ui'] == 'undefined' || !$pyjs.loaded_modules['pyjamas.ui'].__was_initialized__) pyjslib['___import___']('pyjamas.ui', null);
	pyjamas['ui']['FlexCellFormatter'] = $pyjs.loaded_modules["pyjamas.ui.FlexCellFormatter"];
	pyjamas['ui']['FlexCellFormatter'].__was_initialized__ = true;
	if ((__mod_name__ === null) || (typeof __mod_name__ == 'undefined')) __mod_name__ = 'pyjamas.ui.FlexCellFormatter';
	var __name__ = pyjamas['ui']['FlexCellFormatter'].__name__ = __mod_name__;
	var FlexCellFormatter = pyjamas['ui']['FlexCellFormatter'];


	pyjamas['ui']['FlexCellFormatter']['DOM'] = pyjslib['___import___']('pyjamas.DOM', 'pyjamas.ui', null, false);
	pyjamas['ui']['FlexCellFormatter']['CellFormatter'] = pyjslib['___import___']('CellFormatter.CellFormatter', 'pyjamas.ui', null, false);
	pyjamas['ui']['FlexCellFormatter']['FlexCellFormatter'] = (function(){
		var $cls_instance = $pyjs__class_instance('FlexCellFormatter');
		var $cls_definition = new Object();
		var $method;
		$cls_definition.__md5__ = '04f3435e15628049e9b011f97e1d64c8';
		$method = $pyjs__bind_method($cls_instance, '__init__', function(outer) {
			if (this.__is_instance__ === true) {
				var self = this;
				var kwargs = arguments.length >= 2 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			} else {
				var self = arguments[0];
				outer = arguments[1];
				var kwargs = arguments.length >= 3 ? arguments[arguments.length-1] : arguments[arguments.length];
				if (typeof kwargs != 'object' || kwargs.__name__ != 'dict' || typeof kwargs.$pyjs_is_kwarg == 'undefined') {
					kwargs = arguments[arguments.length+1];
				} else {
					delete kwargs['$pyjs_is_kwarg'];
				}
			}
			if (typeof kwargs == 'undefined') {
				kwargs = pyjslib['__empty_dict']();
				if (typeof outer != 'undefined') {
					if (outer !== null && typeof outer['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = outer;
						outer = arguments[2];
					}
				} else 				if (typeof self != 'undefined') {
					if (self !== null && typeof self['$pyjs_is_kwarg'] != 'undefined') {
						kwargs = self;
						self = arguments[2];
					}
				} else {
				}
			}

			$pyjs_kwargs_call(pyjamas['ui']['FlexCellFormatter']['CellFormatter'], '__init__', null, kwargs, [{}, self, outer]);
			return null;
		}
	, 1, [null,['kwargs'],['self'],['outer']]);
		$cls_definition['__init__'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getColSpan', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

			return pyjamas['ui']['FlexCellFormatter']['DOM']['getIntAttribute'](self['getElement'](row, column), String('colSpan'));
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getColSpan'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'getRowSpan', function(row, column) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
			}

			return pyjamas['ui']['FlexCellFormatter']['DOM']['getIntAttribute'](self['getElement'](row, column), String('rowSpan'));
		}
	, 1, [null,null,['self'],['row'],['column']]);
		$cls_definition['getRowSpan'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setColSpan', function(row, column, colSpan) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				colSpan = arguments[3];
			}

			pyjamas['ui']['FlexCellFormatter']['DOM']['setIntAttribute'](self['ensureElement'](row, column), String('colSpan'), colSpan);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['colSpan']]);
		$cls_definition['setColSpan'] = $method;
		$method = $pyjs__bind_method($cls_instance, 'setRowSpan', function(row, column, rowSpan) {
			if (this.__is_instance__ === true) {
				var self = this;
			} else {
				var self = arguments[0];
				row = arguments[1];
				column = arguments[2];
				rowSpan = arguments[3];
			}

			pyjamas['ui']['FlexCellFormatter']['DOM']['setIntAttribute'](self['ensureElement'](row, column), String('rowSpan'), rowSpan);
			return null;
		}
	, 1, [null,null,['self'],['row'],['column'],['rowSpan']]);
		$cls_definition['setRowSpan'] = $method;
		return $pyjs__class_function($cls_instance, $cls_definition, 
		                            new Array(pyjamas['ui']['FlexCellFormatter']['CellFormatter']));
	})();
	return this;
}; /* end pyjamas.ui.FlexCellFormatter */


/* end module: pyjamas.ui.FlexCellFormatter */


/*
PYJS_DEPS: ['pyjamas.DOM', 'pyjamas', 'CellFormatter.CellFormatter', 'CellFormatter']
*/
