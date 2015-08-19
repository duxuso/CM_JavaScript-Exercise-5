/**
 * Created by xuesongdu on 10/08/15.
 */

function startsWith(string) {

    var str = "hang the dj";
     return str.indexOf(string) === 0;
    // return str.lastIndexOf(string, 0) === 0;
    // return str.slice(0, string.length) == string;
    // return str.startsWith(string);

}

function printpf(){

    var input = document.getElementById("pf").value;

    document.getElementById("pfrs").value= startsWith(input);

}