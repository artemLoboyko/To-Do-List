(function($){
	$.fn.gallery = function(options){
		
		var defaults = {
			classes: '',
			current: 0
		}
		return this.each(function(){
			var $gallery = $(this),
				$children = $gallery.children();
			options = $.extend(defaults, options);
			$gallery.addClass('gallery').addClass(options.classes);
			$children.addClass('gallery-item');
			
		
	
			var maxHeight= 0;
			[].slice.apply($children).forEach(function(item){
				if(maxHeight < $(item).height() )
					maxHeight = $(item).height();
			});
			$gallery.height(maxHeight + 'px');
		
				
			$children.eq(options.current).addClass('current');
			$gallery.attr('tabindex', 1);
			$gallery.on('keyup', function(){
				console.log(event);
				var $current = $('.current', $gallery);
				switch(event.which){
					case 39: 
						console.log('go right');
						
						var index = $current.next().length ? $current.index() + 1 : 0;
						console.log(index);
						
						break;
					case 37: 
						console.log('go left');
						var index = $current.prev().length ? $current.index() - 1 : $children.length -1;
						break;
				}
				$children.removeClass('current').eq(index).addClass('current');
			});
		});
	}
})(jQuery);