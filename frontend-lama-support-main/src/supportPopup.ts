function choseSub(): void {
    let supButton = document.getElementById("supOne");
   supButton!.addEventListener("click", supMelding);
}
choseSub()
 function supMelding():void{
    let popup = document.getElementById("popupSupMelding");
    let popupMelding = document.createElement("p");
    popupMelding.textContent = "you have chosen the subscription 'helping hand' to support !!";
    popup?.appendChild(popupMelding);
}
////////////////////////////////////////
function choseSubTwo(): void {
    let supButton = document.getElementById("supTwo");
   supButton!.addEventListener("click", supMeldingTwo);
}
choseSubTwo()
 function supMeldingTwo():void{
    let popup = document.getElementById("popupSupMelding");
    let popupMelding = document.createElement("p");
    popupMelding.textContent = "you have chosen the subscription 'Lama Support' to support !!";
    popup?.appendChild(popupMelding);
}
//////////////////////////////

function choseSubThree(): void {
    let supButton = document.getElementById("supThree");
   supButton!.addEventListener("click", supMeldingThree);
}
choseSubThree()
 function supMeldingThree():void{
    let popup = document.getElementById("popupSupMelding");
    let popupMelding = document.createElement("p");
    popupMelding.textContent = "you have chosen the subscription 'Lama Lover' to support !!";
    popup?.appendChild(popupMelding);
}