/**
 * @author Lars Brinker.
 */

import { initAccountLama } from "./loadSellerLama.js";
import { User } from "./user-verkoper-class.js";

window.addEventListener('load', checkForUserLogin);

/**
 * Check if a user is logged in, if user is logged in, check if it is a seller.
 */
function checkForUserLogin(): void {
    addAccountInformationSections();
    let user: { [key: string]: string } = JSON.parse(localStorage.getItem("user")!);
    if (user != null) {
        createAccountPage();
        if(user.role === "seller"){
            initAccountLama();
            changeStylingForSellerAccount();
        }
    }
    else {
        notLoggedIn();
    }
}

/**
 * Change the styling if a user is a seller.
 */
function changeStylingForSellerAccount(): void{
    let account = document.getElementById("account");
    let lamaGrid = document.getElementById("sellerLama");
    account!.style.marginTop = "20px";
    account!.style.marginLeft = "950px";
    lamaGrid!.style.display = "grid";
    lamaGrid!.style.width = "900px";
    lamaGrid!.style.height = "700px";
}

/**
 * Init function for the account page.
 */
function createAccountPage(): void {
    fillUserInfoOutLocal();
    addEventListenerToButton(updateUserInfo, "save");
    addEventListenerToButton(cancelUpdatingUserInfo, "cancel");
    addEventListenerToButton(deleteUserInfo, "delete");
    addSellerButton();
}

/**
 * Add different sections to account.html which are used througout the code.
 */
function addAccountInformationSections(): void {
    let accountInfoSec: HTMLElement = addSectionToAccount("accountInfo");
    let accountButtonSec: HTMLElement = addSectionToAccount("accountButton");
    addButtons(accountButtonSec);
    addInputELementsWithLabels(accountInfoSec);
    document.getElementById("account")!.appendChild(accountInfoSec);
    document.getElementById("account")!.appendChild(accountButtonSec);
    document.getElementById("account")!.appendChild(addErrorSectionToPage());
}

/**
 * Add all the input elements to the page with labels attached.
 */
function addInputELementsWithLabels(accountSec: HTMLElement): void {
    createInputwithLabels(createLabels("Username", "labelInput"), createInputElements("text", "username", "Username...", "accountInput"), accountSec);
    createInputwithLabels(createLabels("Full Name", "labelInput"), createInputElements("text", "name", "Full Name...", "accountInput"), accountSec);
    createInputwithLabels(createLabels("Address", "labelInput"), createInputElements("text", "address", "Address...", "accountInput"), accountSec);
    createInputwithLabels(createLabels("Email", "labelInput"), createInputElements("mail", "mail", "Email...", "accountInput"), accountSec);
    createInputwithLabels(createLabels("Password", "labelInput"), createInputElements("password", "password", "Password...", "accountInput"), accountSec);
    createInputwithLabels(createLabels("Biotext", "bioLabel"), createInputElements("text", "bioText", "Biotext...", "bioTextInput"), accountSec);
}

/**
 * Create labels for inputelements.
 */
function createLabels(text: string, className: string): HTMLElement {
    let label = document.createElement("label");
    label.innerHTML = text;
    label.className = className;
    return label;
}

/**
 * Create an input element with an label attached to it.
 */
function createInputwithLabels(label: HTMLElement, input: HTMLInputElement, accountSection: HTMLElement): void {
    accountSection.appendChild(input);
    accountSection.appendChild(label);
    accountSection.appendChild(document.createElement("br"));
}

/**
 * Add 3 buttons to the page.
 */
function addButtons(accountSec: HTMLElement): void {
    accountSec.appendChild(createButton("save", "save", "Save", "accountButton"));
    accountSec.appendChild(createButton("cancel", "cancel", "Cancel", "accountButton"));
    accountSec.appendChild(createButton("delete", "delete", "Delete account", "accountButton"));
    document.getElementById("account")!.appendChild(accountSec);
}

/**
 * Add a section to the page.
 */
function addSectionToAccount(id: string): HTMLElement {
    let section = document.createElement("section");
    section.id = id;
    return section;
}

/**
 * Create a input element with the given input values.
 */
function createInputElements(inputType: string, inputID: string, placeHolder: string, className: string): HTMLInputElement {
    let input: HTMLInputElement = document.createElement("input");
    input.type = inputType;
    input.name = inputID;
    input.id = inputID;
    input.placeholder = placeHolder;
    input.className = className;
    return input;
}

/**
 * Create a button with the given input values.
 */
function createButton(buttonID: string, buttonName: string, buttonText: string, className: string): HTMLButtonElement {
    let button = document.createElement("button");
    let textNode = document.createTextNode(buttonText);
    button.id = buttonID;
    button.className = className;
    button.name = buttonName;
    button.appendChild(textNode);
    return button;
}

/**
 * Check if a user is seller.
 */
function checkIfUserIsSeller(): boolean {
    let isSeller = false;
    let user = JSON.parse(localStorage.getItem("user")!);
    if (user.role === "seller") {
        isSeller = true;
    }
    return isSeller
}

/**
 * Adds a button to the page, which is specific to the seller.
 */
function addSellerButton(): void {
    if (checkIfUserIsSeller()) {
        let button = createButton("addLama", "addLama", "Add Lama", "accountButton");
        document.getElementById("account")!.appendChild(button);
        addEventListenerToButton(redirectToAddProduct, "addLama");
    }
}

/**
 * Fill in the input fields, with values retrieved from the localStorage.
 */
function fillUserInfoOutLocal(): void {
    let user = JSON.parse(localStorage.getItem("user")!);
    (document.getElementById("username") as HTMLInputElement).placeholder = user.username;
    (document.getElementById("name") as HTMLInputElement).placeholder = user.name;
    (document.getElementById("address") as HTMLInputElement).placeholder = user.address;
    (document.getElementById("mail") as HTMLInputElement).placeholder = user.mail;
    (document.getElementById("password") as HTMLInputElement).placeholder = user.password;
    (document.getElementById("bioText") as HTMLInputElement).placeholder = user.bioText;
}

/**
 * Update the user information in the localstorage, and send an request to the server to update the information.
 */
function updateUserInfo(): void {
    if (localStorage.getItem("user") != null) {
        let user = createNewUserWithInputValues();
        updateInfoToDB(JSON.stringify(user));
        localStorage.setItem("user", JSON.stringify(user));
        setTimeout(function () { location.reload(); }, 1500);
    }
    else {
        notLoggedIn();
    }
}

/**
 * Creates a new user with the input values from the page.
 */
function createNewUserWithInputValues(): string {
    let user = JSON.parse(localStorage.getItem("user")!);
    user.username = getValueFromInput("username");
    user.name = getValueFromInput("name");
    user.address = getValueFromInput("address");
    user.mail = getValueFromInput("mail");
    user.password = getValueFromInput("password");
    user.bioText = getValueFromInput("bioText");
    return user;
}

/**
 * Get the value from the input field.
 */
function getValueFromInput(id: string): string {
    let inputValue = (document.getElementById(id) as HTMLInputElement).value;
    let user = JSON.parse(localStorage.getItem("user")!);
    if (inputValue.length < 1) {
        inputValue = user[id];
    }
    return inputValue;
}

/**
 * Adds an event listener to the button.
 */
function addEventListenerToButton(func: EventListenerOrEventListenerObject, element: string): void {
    let eventListenerObject = document.getElementById(element);
    eventListenerObject!.addEventListener("click", func);
}

/**
 * Event listener function for the cancel button.
 */
function cancelUpdatingUserInfo(): void {
    emptyInputFields();
    fillUserInfoOutLocal();
}

/**
 * Empty all the input fields.
 */
function emptyInputFields(): void {
    (document.getElementById("username") as HTMLInputElement).value = "";
    (document.getElementById("name") as HTMLInputElement).value = "";
    (document.getElementById("address") as HTMLInputElement).value = "";
    (document.getElementById("mail") as HTMLInputElement).value = "";
    (document.getElementById("password") as HTMLInputElement).value = "";
    (document.getElementById("bioText") as HTMLInputElement).value = "";
}

/**
 * Event listener function for the delete button.
 */
async function deleteUserInfo(): Promise<void> {
    localStorage.removeItem("user");
    await fetch("http://localhost:4001/account/delete")
}

/**
 * Send an request to the server to update the user info, from the given user.
 */
async function updateInfoToDB(user: string): Promise<void> {
    let res = await fetch(`http://localhost:4001/account/update`, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: user
    });
    if (res.status === 200) {
        gotSuccesCodeFromServer();
    }
    else {
        gotErrorCodeFromServer();
    }
}

/**
 * Adds an section to the page, which is used for an error message..
 */
function addErrorSectionToPage(): HTMLElement {
    let section = document.createElement("section");
    section.id = "errorMes";
    return section;
}

/**
 * Add an error message to the page.
 */
function gotErrorCodeFromServer(): void {
    if (document.getElementById("err") === null) {
        let errorSec: HTMLElement = document.getElementById("errorMes")!;
        let errorMesage = document.createElement("p");
        errorMesage.innerHTML = "Could not save data to server, please try again later!";
        errorMesage.id = "err";
        errorMesage.className = "err";
        errorSec.appendChild(errorMesage);
    }
    else {
        return;
    }
}

/**
 * Add a success message to the page.
 */
function gotSuccesCodeFromServer(): void {
    let errorSec: HTMLElement = document.getElementById("errorMes")!;
    let messagePara = document.getElementById("err");
    if (messagePara) {
        messagePara.innerHTML = "Changes saved successfully!";
        messagePara.className = "good";
        errorSec.appendChild(messagePara);
    }
    else {
        let mesage = document.createElement("p");
        mesage.className = "good";
        mesage.innerHTML = "Changes saved successfully!";
        errorSec.appendChild(mesage);
    }
}

/**
 * Add an error message if user is not logged in.
 */
function notLoggedIn(): void {
    if (document.getElementById("err") === null) {
        let errorSec: HTMLElement = document.getElementById("errorMes")!;
        let errorMesage = document.createElement("p");
        errorMesage.innerHTML = "Please login first!";
        errorMesage.id = "err";
        errorMesage.className = "err";
        errorSec.appendChild(errorMesage);
    }
    else {
        return;
    }
}

/**
 * Redirect user to addProduct.html
 */
function redirectToAddProduct(): void {
    window.location.href = "addProduct.html";
}