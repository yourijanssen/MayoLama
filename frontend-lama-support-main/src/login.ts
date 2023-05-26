/**
 * @author Lars Brinker.
 */

window.addEventListener('load', createLoginPage);

/**
 * Create the login page. 
 */
async function createLoginPage(): Promise<void> {
    addTitleToForm();
    addInputElements();
    addEventListenerToRegister();
    addEventListenerToLogin();
}

/**
 * Adds an section to the page.
 */
function addSectionToLogin(): HTMLElement {
    let section = document.createElement("section");
    return section;
}

/**
 * Add input elements, for the login page.
 */
function addInputElements(): void {
    let inputSection: HTMLElement = addSectionToLogin();
    inputSection.id = "loginInput";
    let errorMessageSection: HTMLElement = addSectionToLogin();
    errorMessageSection.id = "errorMes"
    inputSection.appendChild(createInputElements("text", "email", "Username..."));
    inputSection.appendChild(createInputElements("password", "password", "Password..."));
    inputSection.appendChild(errorMessageSection);
    inputSection.appendChild(createButton("login", "login", "Login"));
    inputSection.appendChild(createButton("register", "register", "Register"));
    document.getElementById("loginForm")!.appendChild(inputSection);
}

/**
 * Create an input element with the given parameters.
 */
function createInputElements(inputType: string, inputID: string, placeHolder: string): HTMLInputElement {
    let input: HTMLInputElement = document.createElement("input");
    input.type = inputType;
    input.name = inputID;
    input.id = inputID;
    input.placeholder = placeHolder;
    input.className = "loginInput";
    return input;
}

/**
 * Create an button with the given parameters.
 */
function createButton(buttonID: string, buttonName: string, buttonText: string): HTMLButtonElement {
    let button = document.createElement("button");
    let textNode = document.createTextNode(buttonText);
    button.id = buttonID;
    button.className = buttonID;
    button.name = buttonName;
    button.appendChild(textNode);
    return button;
}

/**
 * Adds a text above the input elements.
 */
function addTitleToForm(): void {
    let loginForm: HTMLElement = document.getElementById("loginForm")!;
    let titleText = document.createElement("h3");
    titleText.innerHTML = "Login";
    loginForm.appendChild(titleText);
}

/**
 * Add an eventlistener register button.
 */
function addEventListenerToRegister(): void {
    let registerButton = document.getElementById("register");
    registerButton!.addEventListener("click", sendToRegisterPage);
}

/**
 * Add an event listener to the login page.
 */
function addEventListenerToLogin(): void {
    let loginButton = document.getElementById("login");
    let loginInput = document.getElementById("password");
    loginButton!.addEventListener("click", sendCredentialsToServer);
    loginInput!.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            loginInput!.click();
        }
    });
}

/**
 * Redirect to the register page.
 */
function sendToRegisterPage(): void {
    window.location.href = 'register.html';
}

/**
 * Send an request to the server with the user credentials.
 */
async function sendCredentialsToServer(): Promise<void> {
    const resp = await fetch(`http://localhost:4001/login?username=${getValueFromInput("email")}&password=${getValueFromInput("password")}`, { method: 'post' });
    let data = await resp.json();
    if (data["login"] === "ok") {
        if(data.results[0].bioText != null){
            data.results[0].bioText = getStringFromBioText(data.results[0].bioText.data);
        }
        localStorage.setItem("user", JSON.stringify(data["results"][0]));
        gotGoodCredentials();
        setTimeout(() => { sendToHomePage(); }, 500);
    }
    else {
        gotWrongCredentials();
    }
}

/**
 * Get the values from an input element.
 */
function getValueFromInput(id: string) {
    return (document.getElementById(id) as HTMLInputElement).value;
}

/**
 * Give an error message if user gave wrong credentials.
 */
function gotWrongCredentials(): void {
    if (document.getElementById("err") === null) {
        let errorSec: HTMLElement = document.getElementById("errorMes")!;
        let errorMesage = document.createElement("p");
        errorMesage.innerHTML = "Incorrect username or password";
        errorMesage.id = "err";
        errorMesage.className = "err";
        errorSec.appendChild(errorMesage);
    }
    else {
        return;
    }
}

/**
 * Give an success message if user gave good credentials.
 */
function gotGoodCredentials(): void {
    let errorSec: HTMLElement = document.getElementById("errorMes")!;
    let messagePara = document.getElementById("err");
    if (messagePara) {
        messagePara.innerHTML = "Correct username and password";
        messagePara.className = "good";
        errorSec.appendChild(messagePara);
    }
    else {
        let mesage = document.createElement("p");
        mesage.className = "good";
        mesage.innerHTML = "Correct username and password";
        errorSec.appendChild(mesage);
    }
}

/**
 * Redirect to home page.
 */
function sendToHomePage() {
    window.location.href = "index.html";
}

/**
 * Convert blob from database to a usable string.
 */
function getStringFromBioText(asciiString: number[]): string {
    return String.fromCharCode.apply(null, asciiString);
}