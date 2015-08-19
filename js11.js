/**
 * Created by xuesongdu on 15/08/15.
 */
(function($){

    $.fn.sizeableWindow = function(){

        this.click(function(){

            //var url = $this.attr("href");
            var url = this.href;
            //var windowName = $this.data("name");
            var windowName = this.data("name");
            //var windowSize = $this.data("popup");
            var windowSize = this.data("popup");

            window.open(url, windowName, windowSize);
            window.open(this.href, "_blank","toolbar=yes, scrollbars=yes, resizable=yes, top=200, left=200, width=200, height=200");
            window.open($(this).attr('href'),'title', 'width=800, height=700');

            // window.open(url,windowName,"top=200,left=200,width=200,height=200");
            return false;

        });

    }

}(jQuery));