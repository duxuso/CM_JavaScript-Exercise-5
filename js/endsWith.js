/**
 * Created by xuesongdu on 10/08/15.
 */

function endsWith(string) {

    var str = "hang the dj";
    return str.match(string + "$") == string;

}

function printsf(){

    var input = document.getElementById("sf").value;

    document.getElementById("sfrs").value= endsWith(input);

}