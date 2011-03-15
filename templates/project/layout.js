jQuery.fn.clearCol = function() {
    return this.each(function() {
			this.className = this.className.replace(/col\d+/g, '');
    });
};

function adjCol(){
	if ( $('.wrapper').width() == 896 ) {
		$('#sidebar .box').clearCol().addClass('col3');
	} else if ( $('.wrapper').width() == 712 ) {
		$('#sidebar .box').clearCol().addClass('col4');
	} else if ( $('.wrapper').width() == 436 ) {
		$('#sidebar .box').clearCol().addClass('col5');
	} else if ( $('.wrapper').width() == 252 ) {
		$('#sidebar .box').clearCol().addClass('col3');
	};
};
$(function(){
	adjCol();
	$('.masonry').masonry({
		columnWidth: 92,
		itemSelector: '.box'
	});
});

$(window).resize(function() {
	adjCol();
});