/**
 * Created by xuesongdu on 13/08/15.
 */
// plugin definition
(function($){

    $.fn.somename = function(options){

        // Establish our default settings
        var settings = $.extend({

            text : 'Hello World!',
            color : null,
            fontStyle : null
        },options);

        return this.each(function () {

            $(this).text(settings.text);

            if(settings.color){

                $(this).css('color',settings.color);

            }

            if(settings.fontStyle){
                $(this).css('font-style',settings.fontStyle);
            }

            //$(this).text("¡Hola, mundo!");
        });

    }

}(jQuery));

