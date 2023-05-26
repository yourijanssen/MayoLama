/**  @author Mays AlTimemy */
import { sendSubData } from "./support-serverRequest.js";

//**Creates elemnt H2 for (title) support one arrea */

function initSupportOneTitel() {
  let supOneSec = document.getElementById("supOne");
  let titel: HTMLElement = document.createElement("h2");
  titel.textContent = "Helping Hand";
  titel.className = "titel";
  supOneSec?.appendChild(titel);
}

//**Creates table for (benefits ) support one arrea */
function initSupportOneBenefits() {
  let supOneSec = document.getElementById("supOne");
  let supBenefits: HTMLElement = document.createElement("tabel");
  let benefitsOne = document.createElement("td");
  let br = document.createElement("br");
  let benefitsTwo = document.createElement("td");
  let brr = document.createElement("br");

  benefitsOne.textContent = "- Weekly picture";
  benefitsTwo.textContent = "- Berrie keychain";
  supBenefits.className = "supBenefitsClass";
  supOneSec?.appendChild(supBenefits);
  supBenefits.appendChild(benefitsOne);
  supBenefits.appendChild(br);
  supBenefits.appendChild(benefitsTwo);
  supBenefits.appendChild(brr);
}

//**Creates element H3 for support one arrea */
function initSupportOnePrice() {
  let supOneSec = document.getElementById("supOne");
  let price: HTMLElement = document.createElement("h3");
  price.textContent = "$5.00";
  price.className = "Price";
  supOneSec?.appendChild(price);
}

//**Creates a button with an event listener, this button send your data to database.(support one arrea) */
export function initSupportOneBtn() {
  let supOneSec = document.getElementById("supOne");
  let btn: HTMLButtonElement = document.createElement("button");
  btn.textContent = "Subscribe";
  btn.id = "btnOne";
  supOneSec?.appendChild(btn);
  btn.addEventListener("click", sendSubData);

  return btn;
}
initSupportOneTitel();
initSupportOneBenefits();
initSupportOnePrice();
initSupportOneBtn();


//**Creates elemnt H2 for (title) support two arrea */
function initSupportTwoTitel() {
  let supTwoSec = document.getElementById("supTwo");
  let titel: HTMLElement = document.createElement("h2");
  titel.textContent = "Lama Support";
  titel.className = "titel";
  supTwoSec?.appendChild(titel);
}

//**Creates table for (benefits ) support two arrea */
function initSupportTwoBenefits() {
  let supTwoSec = document.getElementById("supTwo");
  let supBenefits: HTMLElement = document.createElement("tabel");
  let benefitsOne = document.createElement("td");
  let br = document.createElement("br");
  let benefitsTwo = document.createElement("td");

  benefitsOne.textContent = "- Weekly picture";
  benefitsTwo.textContent = "- Berrie keychain";

  supBenefits.className = "supBenefitsClass";
  supTwoSec?.appendChild(supBenefits);
  supBenefits.appendChild(benefitsOne);
  supBenefits.appendChild(br);
  supBenefits.appendChild(benefitsTwo);
}

//**Creates element H3 for support two arrea */
function initSupportTwoPrice() {
  let supTwoSec = document.getElementById("supTwo");
  let price: HTMLElement = document.createElement("h3");
  price.textContent = "$5.00";
  price.className = "Price";
  supTwoSec?.appendChild(price);
}

//**Creates a button with an event listener, this button send your data to database.(support two arrea) */
export function initSupportTwoBtn() {
  let supTwoSec = document.getElementById("supTwo");
  let btn: HTMLButtonElement = document.createElement("button");
  btn.textContent = "Subscribe";
  btn.id = "btnTwo";
  supTwoSec?.appendChild(btn);
  supTwoSec?.appendChild(btn);
  btn.addEventListener("click", sendSubData);

  return btn;
}
initSupportTwoTitel();
initSupportTwoBenefits();
initSupportTwoPrice();
initSupportTwoBtn();


//**Creates elemnt H2 for (title) support three arrea */
function initSupportThreeTitel() {
  let supThreeSec = document.getElementById("supThree");
  let titel: HTMLElement = document.createElement("h2");
  titel.textContent = "Lama Lover";
  titel.className = "titel";
  supThreeSec?.appendChild(titel);
}

//**Creates table for (benefits ) support three arrea */
function initSupportThreeBenefits() {
  let supThreeSec = document.getElementById("supThree");
  let supBenefits: HTMLElement = document.createElement("tabel");
  let benefitsOne = document.createElement("td");
  let br = document.createElement("br");
  let benefitsTwo = document.createElement("td");

  benefitsOne.textContent = "- Weekly picture";
  benefitsTwo.textContent = "- Berrie keychain";

  supBenefits.className = "supBenefitsClass";
  supThreeSec?.appendChild(supBenefits);
  supBenefits.appendChild(benefitsOne);
  supBenefits.appendChild(br);
  supBenefits.appendChild(benefitsTwo);
}

//**Creates element H3 for support three arrea */
function initSupportThreePrice() {
  let supThreeSec = document.getElementById("supThree");
  let price: HTMLElement = document.createElement("h3");
  price.textContent = "$5.00";
  price.className = "Price";
  supThreeSec?.appendChild(price);
}

//**Creates a button with an event listener, this button send your data to database.(support three arrea) */
export function initSupportThreeBtn() {
  let supThreeSec = document.getElementById("supThree");
  let btn: HTMLButtonElement = document.createElement("button");
  btn.textContent = "Subscribe";
  btn.id = "btnThree";
  supThreeSec?.appendChild(btn);
  btn.addEventListener("click", sendSubData);

  return btn;
}
initSupportThreeTitel();
initSupportThreeBenefits();
initSupportThreePrice();
initSupportThreeBtn();



/**finctions maak een unieke ID voor subscribe */

export function SubIDButtonOne() {
  let supButton = document.getElementById("supOne");
  supButton!.addEventListener("click", subIDOne);
}
function subIDOne(): void {
  let subIDOne = "1";
  localStorage.setItem("subID", subIDOne);
  console.log(subIDOne);
}
SubIDButtonOne();

/**finctions maak een unieke ID voor subscribe */
export function SubIDButtonTwo() {
  let supButton = document.getElementById("supTwo");
  supButton!.addEventListener("click", subIDTwo);
}
function subIDTwo(): void {
  let subIDTwo = "2";
  localStorage.setItem("subID", subIDTwo);
  console.log(subIDTwo);
}
SubIDButtonTwo();

/**finctions maak een unieke ID voor subscribe */
export function SubIDButtonThree() {
  let supButton = document.getElementById("supThree");
  supButton!.addEventListener("click", subIDThree);
}
function subIDThree(): void {
  let subIDThree = "3";
  localStorage.setItem("subID", subIDThree);
  console.log(subIDThree);
}
SubIDButtonThree();

/**een function haal userID van localstoarge */
export function userID(): number {
  let userJson = JSON.parse(localStorage.getItem("user") || "{}").userID;
  return userJson;
}

/**
 *  een function haal de sub Id van local stoarge
 */
export function subID(): string {
  let subID = localStorage.getItem("subID")!;
  return subID;
}

/**een function maak een opject van subID en userId */

export function userSubOpject() {
  let userSub = {
    userID: userID(),
    subID: localStorage.getItem("subID"),
  };
  return userSub;
}
