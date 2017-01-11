	$(document).ready(function () {
		$('.totalCount').append("<label id='percent'> %</label>");
		$(':text').on('keyup', function () {
			$('label').remove();
			$('.totalCount').append("<label id='percent'> %</label>");
		});
	});

	
