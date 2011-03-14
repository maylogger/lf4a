jQuery.fn.clearCol = function() {
    return this.each(function() {
    	var saveCol = 'save'
			$(this).removeClass(function(index, cls) {
			    var classes = cls.split(' ');
			    var result = new Array();
			    $.each(classes, function(index, value) {
			    	if(value.substring(0, 3) == 'col') {
			        result.push(value);
			        saveCol = saveCol + value;
			      }
			    });
			    return result.join(' ');
			}).addClass(saveCol);
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