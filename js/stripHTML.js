/**
 * Created by xuesongdu on 11/08/15.
 */
function strip(html)
{
    // var tmp = document.createElement("DIV");
    // tmp.innerHTML = html;
    // return tmp.textContent || tmp.innerText || "";

    return html.replace(/<(?:.|\n)*?>/gm, '');

}

function print(){

    var input = document.getElementById("input").value;
    var output = strip(input);

    document.getElementById("output").value= output;

}