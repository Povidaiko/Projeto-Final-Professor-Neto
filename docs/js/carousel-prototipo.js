let countLand = 1;
document.getElementById("radio1Land").checked = true;

setInterval( function(){
    nextImageLand();
}, 5000);

function nextImageLand(){
    countLand++;
    if(countLand>4){
        countLand=1;
    }

    document.getElementById("radio"+countLand+"Land").checked = true;
}