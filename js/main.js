$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});



$(".pagination-inner a").on("click", function() {
	$(this)
		.siblings()
		.removeClass("pagination-active");
	$(this).addClass("pagination-active");
});


//* signin script *//

function redirect(){
	window.open('file:///C:/Users/tt-136/Downloads/my-app-store-2/login_form.html?username=fucku&password=abc#')
}