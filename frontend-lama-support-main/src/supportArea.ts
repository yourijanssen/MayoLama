// window.addEventListener("load", getSupportData);

// async function getSupportData(body: any): Promise<void> {
//   let res = await fetch(`http://localhost:4001/support/read`, {
//     method: "post",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ subID: body }),
//   });

//   let response = await res.json();
//   console.log(JSON.stringify(response));
//   console.log(response);
//   supportDataHtml(response);
// }

// function supportDataHtml(SupportData: any) {
//   let data = SupportData[0];
//   for (let i = 0; i < 2; i++) {
//     (<HTMLDataElement>document.querySelector(".titelAreaOne")!).innerHTML =
//       data.title;
//       (<HTMLDataElement>document.querySelector(".priceAreaOne")!).innerHTML =
//       data.price;
//     console.log("hoi");
//   }
// }

// function initSupportAreaOne() {
//   let sup = document.getElementById("supportArea");
//   let supAreaOne: HTMLElement = document.createElement("section");
//   supAreaOne.className = "supAreaOne";
//   supAreaOne.id = "supAreaOne";
//   sup?.appendChild(supAreaOne);
// }

// function initSupportOneAreaTitel() {
//   let supOne = document.getElementById("supportArea");
//   let title: HTMLElement = document.createElement("h2");
//   title.className = "titelAreaOne";
//   title.id = "titleArea";
//   supOne?.appendChild(title);
// }

// function initSupportOneAreaPrice() {
//   let supOne = document.getElementById("supportArea");
//   let price: HTMLElement = document.createElement("h2");
//   price.className = "priceAreaOne";
//   price.id = "priceAreaOne";
//   supOne?.appendChild(price);
// }

// function addSupprtButtonOne() {
//   let supOne = document.getElementById("supportArea");
//   let button: HTMLButtonElement = document.createElement("button");
//   button.innerHTML = "Cancel";
//   button.id = "suportCancelButton";
//   button.className = "suportCancelButton";
//   supOne?.appendChild(button);
//   button.addEventListener("click", getSubData);
//   return button;
// }

// initSupportAreaOne();
// initSupportOneAreaTitel();
// initSupportOneAreaPrice();
// addSupprtButtonOne();

// function initSupportAreaTwo() {
//   let sup = document.getElementById("supportArea");
//   let supAreaTwo: HTMLElement = document.createElement("section");
//   supAreaTwo.className = "supAreaTwo";
//   supAreaTwo.id = "supAreaTwo";
//   sup?.appendChild(supAreaTwo);
// }
// function initSupportTwoAreaTitel() {
//   let supTwo = document.getElementById("supportArea");
//   let title: HTMLElement = document.createElement("h2");
//   title.className = "titelAreaTwo";
//   title.id = "titleAreaTwo";
//   supTwo?.appendChild(title);
// }
// function initSupportTwoAreaPrice() {
//   let supTwo = document.getElementById("supportArea");
//   let price: HTMLElement = document.createElement("h2");
//   price.className = "priceAreaTwo";
//   price.id = "priceAreaTwo";
//   supTwo?.appendChild(price);
// }
// function addSupprtButtonTwo() {
//   let supTwo = document.getElementById("supportArea");
//   let button: HTMLButtonElement = document.createElement("button");
//   button.innerHTML = "Cancel";
//   button.id = "suportCancelButton";
//   button.className = "suportCancelButton";
//   supTwo?.appendChild(button);
//   button.addEventListener("click", getSubData);

//   return button;
// }
// initSupportAreaTwo();
// initSupportTwoAreaTitel();
// initSupportTwoAreaPrice();
// addSupprtButtonTwo();
// /** */

// function initSupportAreaThree() {
//   let sup = document.getElementById("supportArea");
//   let supAreaThree: HTMLElement = document.createElement("section");
//   supAreaThree.className = "supAreaThree";
//   supAreaThree.id = "supAreaThree";
//   sup?.appendChild(supAreaThree);
// }
// function initSupportThreeAreaTitel() {
//   let supThree = document.getElementById("supportArea");
//   let title: HTMLElement = document.createElement("h2");
//   title.className = "titelAreaThree";
//   title.id = "titleAreaThree";
//   supThree?.appendChild(title);
// }
// function initSupportThreeAreaPrice() {
//   let supThree = document.getElementById("supportArea");
//   let price: HTMLElement = document.createElement("h2");
//   price.className = "priceAreaThree";
//   price.id = "priceAreaThree";
//   supThree?.appendChild(price);
// }

// function addSupprtButtonThree() {
//   let supThree = document.getElementById("supportArea");
//   let button: HTMLButtonElement = document.createElement("button");
//   button.innerHTML = "Cancel";
//   button.id = "suportCancelButton";
//   button.className = "suportCancelButton";
//   supThree?.appendChild(button);
//   button.addEventListener("click", getSubData);

//   return button;
// }
// initSupportAreaThree();
// initSupportThreeAreaTitel();
// initSupportThreeAreaPrice();
// addSupprtButtonThree();

// function getSubData(this: HTMLButtonElement, ev: MouseEvent) {
//   throw new Error("Function not implemented.");
// }
