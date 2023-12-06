(function($) {
    $.fn.highlightRate = function(threshold) {
        return this.each(function() {
            var rate = parseFloat($(this).text().split(': ')[1]);
            if(rate > threshold) {
                $(this).css('color', 'red');
            }
        });
    
    };
 
}(jQuery));
