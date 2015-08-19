/**
 * Created by xuesongdu on 14/08/15.
 */
/**
 * Created by xuesongdu on 13/08/15.
 */

(function($){

    $.fn.hello2 = function (options){

        var options = $.extend({}, $.fn.hello2.defaults, options);

        this.click(function(){

            var $this = $(this);

            var href = $this.attr("href");
            var customWindow = "customWindow";
            // var windowSize = $this.data("po"); // $(this).data("po"), only jQuery >= 1.4.3
            var windowSize = $this.attr("data-po"); // jQuery version before 1.4.3
            // var windowSize = "toolbar=yes, scrollbars=yes,resizable=yes,top=30,left=200,width=200,height=200";
            
            var opts = options;

            //var windowSize = $this.data("popup");
            window.open(href,customWindow,windowSize);
            // window.open($(this).attr('href'),'title', 'width=100, height=100');
            // window.open(this.href,”customWindow”,”toolbar=yes, scrollbars=yes,resizable=yes,top=30,left=200,width=200,height=200”);
            return false;

        });

    }

    $.fn.hello2().defaults = {};



}(jQuery));