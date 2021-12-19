
function validate(age){
    var ans="not eigible";
    if(age>=18){
        ans="eligible";
    }
    return(ans);

}

function hhmm(UNIX_timestamp){
    var a = Date(UNIX_timestamp * 1000);
    return(a.getHours() + ":" + a.getMinutes());
}