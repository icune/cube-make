$(function(){


	var params = {
		width: {
			label: 'Width',
			default: 300,
			type: 'int'
		},
		height: {
			label: 'Height',
			default: 300,
			type: 'int'
		},
		top: {
			label: 'Top',
			default: 1,
			type: 'bool'
		},
		right: {
			label: 'Right',
			default: 1,
			type: 'bool'
		},
		bottom: {
			label: 'Bottom',
			default: 1,
			type: 'bool'
		},
		left: {
			label: 'Left',
			default: 1,
			type: 'bool'
		},
		cubeWidth: {
			label: 'Cube width',
			default: 20,
			type: 'int'
		},
		color: {
			label: 'Color',
			default: '#000000',
			type: 'color'
		}
	}

	function Ret($el, ext){
		var ret = {
			$el : $el,
			del : function () {
				if ($el)
					$el.detach()
			}
		};
		ret = $.extend(ret, {
			disable: function(){}
		});
		ret = $.extend(ret, ext);
		return ret;
	}

	function makeContainer(name, params){
		var $cont = $('<div>').addClass('form-group row');
		var $lab = $('<label>').addClass('col-lg-3')
			.text(params.label)
			.attr({
			'for' : name
			}).appendTo($cont);
		var $forInput = $('<div>').addClass('col-lg-9').appendTo($cont);
		return Ret($cont, {
			$cont: $forInput
		})
	}
	function makeField(name, params){
		var $inp = $('<input>')
			.attr({
				type: 'text',
				placeholder: params.label
			});
		$inp.val(params.default);
		if (params.type == 'int') {
			$inp.addClass('form-control');
			$inp.numericInput({min:0,max:100000});
		} else if (params.type == 'color'){
			$inp.addClass('form-control');
			$inp.addClass('jscolor');
		} else if (params.type == 'bool') {
			$inp.attr('type', 'checkbox');
		}
		$inp.attr('id', name);
		return Ret($inp);
	}


	function makeForm(data){
		var $container = $('#form');
		for(var k in data) {
			var cont = makeContainer(k, data[k]);
			var inp = makeField(k, data[k]);
			cont.$cont.append(inp.$el);
			cont.$el.appendTo($container);
		}
	}
	makeForm(params);
})