jQuery(function($){
	$('.ba-box').hover(
		function() {
			var id = $( this ).data('text');
			$('#'+id).addClass('ba-show');
			$('[data-text="'+id+'"]').addClass('ba-hover');
		}, function() {
			var id = $( this ).data('text');
			$('#'+id).delay( 800 ).removeClass('ba-show');
			$('[data-text="'+id+'"]').removeClass('ba-hover');
		}
	);
});