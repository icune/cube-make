$(function(){


	var params = {
		width: {
			label: 'Width',
			default: 300,
			type: int
		},
		height: {
			label: 'Height',
			default: 300,
			type: int
		},
		top: {
			label: 'Top',
			default: 1,
			type: bool
		},
		right: {
			label: 'Right',
			default: 1,
			type: bool
		},
		bottom: {
			label: 'Bottom',
			default: 1,
			type: bool
		},
		left: {
			label: 'Left',
			default: 1,
			type: bool
		},
		cubeWidth: {
			label: 'Cube width',
			default: 20,
			type: int
		},
		color: {
			label: 'Color',
			default: '#000000',
			type: color
		}
	}

	function makeLabel(params){
		
	}
	function makeField(params){

	}


	function makeForm(data){
		var $table = $('<table>');
		for(var k in data) {
			var $tr = $('<tr>').append($table);
			var $labelTd = $('<td>')
				.text(data[k].label)
				.appendTo($tr);
			var $inputTd = $('<td>')
				.appendTo($tr);

		}
	}

})