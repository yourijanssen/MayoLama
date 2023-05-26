import { setLocalStorage } from "./contact-LocalStorage.js";
import { setStorage } from "./contact-ServerRequest.js";

/**
 * @author Youri Janssen
 * This function initializes the contact UI.
 */
const createContactUI = (): void => {
    getRoot();
    createTitle();
    insertInputs();
    createBtn();
    createtextArea();
    PopUpCreate();
}

window.addEventListener('load', createContactUI);

/**
 * Gets the HTML Root Element where the contact UI will be created. (DOM Manipulation)
 * @returns Root element.
 */
const getRoot = (): HTMLElement => {
    let root = document.getElementById('contactRoot')!;
    return root;
}

/**
 * This function is used as a container for these 3 UI elements:
 * 1. contact inputs 2. button 3. text area.
 * @returns HTMLElement section element
 */
const createSectionElement = (container: string): HTMLElement => {
    let section: HTMLElement = document.createElement('section');
    section.id = container;
    getRoot().appendChild(section);
    return section;
}

/**
 * Creates the title of the contact UI.
 */
const createTitle = (): void => {
    let title: HTMLParagraphElement = document.createElement('h3');
    title.innerHTML = 'Contact';
    title.id = 'contactTitle';
    getRoot()!.appendChild(title);
}

/**
 * Creates al input-fields for the contact UI.
 * @param placeholder string Placeholder of input-fields;
 * @param inputType string Type of input;
 * @returns HTMLInputElement.
 */
export const createInputs = (placeholder: string, inputType: string, id: string, klas: string): HTMLInputElement => {
    let input: HTMLInputElement = document.createElement('input');
    input.placeholder = placeholder;
    input.type = inputType;
    input.id = id;
    input.className = klas;
    input.required = true;
    return input;
}

/**
 * Fills input-fields with data.
 */
const insertInputs = (): void => {
    let inputElements = createSectionElement("contactInputContainer");
    inputElements.appendChild(createInputs('Name...', 'text', 'name', 'contactInput'));
    inputElements.appendChild(createInputs('Email...', 'email', 'email', 'contactInput'));
    inputElements.appendChild(createInputs('Subject...', 'text', 'subject', 'contactInput'));
}

/**
 * Creates a button for the contact UI. 
*/
export const createBtn = () => {
    let button: HTMLButtonElement = document.createElement('button');
    button.className = "button";
    button.type = "submit";
    button.innerHTML = "Send";
    createSectionElement("buttonContainer").appendChild(button);
    button!.onclick = () => {
        setStorage();
        setLocalStorage();
    }
}

/**
 * Creates a text area for the contact UI.
 */
const createtextArea = () => {
    let textArea: HTMLTextAreaElement = document.createElement('textarea');
    textArea.id = "textArea";
    textArea.placeholder = "Message.. (Max 500 characters)";
    textArea.className = "textArea";
    textArea.cols = 30;
    textArea.rows = 10;
    textArea.required = true;
    createSectionElement("textAreaContainer").appendChild(textArea);
}

/**
 * This function fills the popup according to the server status. 
 * (With the correct text and className.)
 */
export function contactPopUp(className: string, text: string): void {
    document.getElementById("popupContainer")!.className = '';
    document.getElementById("popupContainer")!.classList.add(className);
    document.getElementById("popupText")!.innerHTML = text;
}

/**
 * This function creates a popup for the contact UI.
 */
const PopUpCreate = (): void => {
    let popup: HTMLElement = createSectionElement("popupContainer");
    let popupText: HTMLElement = document.createElement('p');

    popup.className = "popupHidden";
    popupText.id = "popupText";
    popup.appendChild(popupText);
    getRoot().appendChild(popup);
}

