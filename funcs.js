
function validate(age){
    var ans="not eigible";
    if(age>=18){
        ans="eligible";
    }
    return(ans);
}



function hhmm(dt){
    var hour = dt.getHours();
    var min = dt.getMinutes();
    var time = hour + ':' + min;
    return(time);

}