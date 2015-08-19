/**
 * Created by xuesongdu on 14/08/15.
 */
/**
 * Created by xuesongdu on 13/08/15.
 */

(function($){

    $.fn.hello2 = function (options){

        var opts = $.extend({}, $.fn.hello2.defaults, options);

        this.click(function(){

            var $this = $(this);

            var href = $this.attr("href");

            var custom = $this.attr("data-window-group");

            //var customWindow = "customWindow";

            if ( opts.windowSize ) {

                var size = opts.windowSize;
            }

            alert(custom);

            //window.open(href,custom,size);
            //window.open(href,customWindow,size);
            window.open(href,custom,size);



            return false;

        });

    }

    $.fn.hello2.defaults = {

        windowSize : "width=100,height=100,toolbar=yes, scrollbars=yes,resizable=yes,top=100,left=100"

    };

}(jQuery));