
$(function() {

	var count = 67;
	
	$('#picture_tab').one('shown.bs.tab', initPictures);
	
	//$('#picture_graph > button').on('click', initPictures);
	$('#picture_modal .left').on('click', picturePrevious);
	$('#picture_modal .right').on('click', pictureNext);
	
	function initPictures() {
		// Picture graph
		$("#picture_graph").empty();
		var $div, $img, index = 0;
		displayPics(index, count);
	
		function displayPics(index, cap) {
			// Four per row
		
			for (var i = index; i < cap; i++) {
				$img = $('<img src="images/practice/small/-' + i + '" alt="Picture">');
				$div = $('<div class="picture-block col-sm-3"></div>')
					.append($img)
					.data('index', i)
					.on('click', i, showPictureModal);
				$("#picture_graph").append($div);
			};
		}
	}
	
	function showPictureModal(params) {
		var index = params.data;
		//var index = $(this).data('index');
		$('.modal-body > .picture-block').remove();
		$('.modal-body').append('<div class="picture-block"><img src="images/practice/small/-' + index + '" alt="Picture"></div>');
		$('#picture_modal').data('index', index).modal('show');
	}
	
	function picturePrevious() {
		var index = $('#picture_modal').data('index');
		if (index > 0) {
			showPictureModal({'data': index - 1})
		}
	}
	
	function pictureNext() {
		var index = $('#picture_modal').data('index');
		if (index + 1 < count) {
			showPictureModal({'data': index + 1})
		}
	}
});
