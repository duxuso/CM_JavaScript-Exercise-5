/**
 * Created by xuesongdu on 13/08/15.
 */
$("a[href*='http://']:not([href*='"+location.hostname+"']),[href*='https://']:not([href*='"+location.hostname+"'])")
    .addClass("external")
    .attr("target","_blank");