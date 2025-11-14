let countUnico = 1;
document.getElementById("radio1Unico").checked = true;

setInterval( function(){
    nextImageUnico();
}, 5000);

function nextImageUnico(){
    countUnico++;
    if(countUnico>4){
        countUnico=1;
    }

    document.getElementById("radio"+countUnico+"Unico").checked = true;
}