/**
 * Created by xuesongdu on 13/08/15.
 */

/*(function ($) {

    $.fn.helloWorld = function () {

        // Future home of "Hello, World!"
    }

    }
(jQuery));
*/

(function($){

    $.fn.hello = function (options) {

        //this.each( function(){

            // click and open link in a new window
            this.click( function(){

                // Establish our default settings

                //    width : null,
                //    height : null,
                //    top:null,
                //    left:null,
                //    scrollbars:null

                //},options);

                //$(this).prop('target', '_blank');




                window.open(url,windowName,"top=200,left=200,width=200,height=200");
                return false;
//              window.open(this.href,'_self');


            });


            //$('a').click(function(event) {
            //    event.preventDefault();
            //    window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
            //});

            //$(this).click(function () {
           //     window.open('href');
           // });



/*
            $(this).bind('click', function(){
                window.location = $(this).find('a').html();
            });

            $(this).live('click',function () {

//                $(this).text("Hello World");
//                window.open(this.href);
//                return false;

                window.open($(this).attr('href'));
                return false;


            });

*/

       // });

    }

}(jQuery));

