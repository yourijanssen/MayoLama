
/** @author Madelief van Slooten */
// Creates UI for the add product page. Uses reusable UI functions from other file.


import { lamaContent } from "./add-product-logica.js";
import { editLamaCallToBackend, getLamaID } from "./editlamlogica.js";
import { addTitle, createInputField, createSection, createTextArea, getSection } from "./UI-elements.js";


/** Init function is called here, because the body onload wouldn't work, there wasn't time to look into it. */
// window.addEventListener('load', initAddUIlamaedit);
if (window.location.href != 'http://127.0.0.1:8080/addProduct.html'){
    initAddUIlamaedit();
    // window.addEventListener('load', initAddUIlamaedit);
} 
/**
 * Initializer, creates the structure of the page.
 */
function initAddUIlamaedit(): void {
    getSection('addRightEdit').appendChild(addTitle('Pricing Options'));
    addPricingCardslamaedit();
    buildTopLeftSectionlamaedit();
    buildBottemLeftSectionlamaedit();
    fileInputSettingseditlama();
    getLama();
}

/**
 * Creates a price option card.
 * @returns HTMLElement A pricing card
 */
function createPricingOptionCardlamaedit(inputID: string): HTMLElement {
    let card: HTMLElement = createSection('pricingCard');

    card.classList.add('pricingCard');

    card.appendChild(createInputField('Title', `title${inputID}`, 'text', 20));
    card.appendChild(createInputField('Benefits', `benefits${inputID}`, 'text', 300));
    card.appendChild(createInputField('Price', `price${inputID}`, 'number', 5));

    return card;
}

/**
 * Creates a button with a function as actoin. It uses an eval so a function name can be entered as a parameter.
 * @param id string id
 * @param text string button text
 * @param action string of function name
 * @returns button element
 */
export function createButtonlamaedit(id: string, text: string, action: string): HTMLButtonElement {
    let button: HTMLButtonElement = document.createElement('button');

    button.type = 'button';
    button.innerHTML = text;
    button.id = id;
    button.classList.add('button');
    button.addEventListener('click', eval(action))

    return button;
}

/**
 * This creates the 3 cards. It is now set on 3 cards, but it can easily be changed if PO wants more prices need to be set.
 */
function addPricingCardslamaedit(): void {
    for (let i = 0; i < 3; i++) {
        getSection('addRightEdit').appendChild(createPricingOptionCardlamaedit(`${i}`));
    }
}

/**
 * Builds the left top elements
 */
function buildTopLeftSectionlamaedit(): void {
    getSection('addLeftEdit').appendChild(addTitle('Lama Information'));
    getSection('addLeftEdit')!.appendChild(createSection('pictureSelectSection')!);

    document.getElementById('pictureSelectSection')!.appendChild(addTitle('Lama Pictures')!);
    document.getElementById('pictureSelectSection')!.appendChild(createInputField('fileButton', 'Select Files', 'file', 15)!);

    getSection('addLeftEdit').appendChild(createSection('lamaNameSection'));
    document.getElementById('lamaNameSection')!.appendChild(createInputField('Lama Name', 'lamaname', 'text', 20));
    document.getElementById('lamaNameSection')!.appendChild(createInputField('Lama Age', 'lamaage', 'text', 2));
    document.getElementById('lamaNameSection')!.appendChild(createInputField('Lama Gender (M/F/O)', 'lamagender', 'text', 1));
}

function fileInputSettingseditlama(): void{
    let fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById('Select Files')!;
    fileInput.setAttribute('multiple', '');
}

/**
 * Builds the left bottem elements
 */
function buildBottemLeftSectionlamaedit(): void {
    getSection('addLeftEdit').appendChild(createTextArea('Tell us about your lama! (max. 750 char.)', 'lamabio', 10, 80, 750));

    getSection('addLeftEdit').appendChild(createSection('buttonSection'));
    document.getElementById('buttonSection')!.appendChild(createButtonlamaedit('saveButton', 'Save Lama', 'saveLama'));
    document.getElementById('buttonSection')!.appendChild(createButtonlamaedit('cancelButton', 'Cancel Edit', 'cancelLama'));
    document.getElementById('buttonSection')!.appendChild(createButtonlamaedit('deleteButton', 'Delete Lama', 'deleteLama'));
    getSection('addLeftEdit').appendChild(createPopUpSectionlamaedit());
}

/**
 * Creates a section for feedback when user clicks buttons.
 * @returns HTMLElement section
 */
function createPopUpSectionlamaedit(): HTMLElement{
    let feedbackSection: HTMLElement = createSection('feedbackSection');
    let text: HTMLParagraphElement = document.createElement('p');

    text.id = 'feedbackText';
    feedbackSection.classList.add('feedbackHidden');
    feedbackSection.appendChild(text);

    return feedbackSection;
}

/**
 * Makes sure the right feedback is set for when something is clicked
 * @param text string of feedback text
 */
export function feedbackSettingslamaedit(text: string){
    document.getElementById('feedbackText')!.innerHTML = text;
    document.getElementById('feedbackSection')!.classList.remove('feedbackHidden');
    document.getElementById('feedbackSection')!.classList.add('feedback');
}

/**
 * Calls on request to update lama, containing the lama object and the id update.
 */
function saveLama(): void {
    editLamaCallToBackend(lamaContent(), 'update');
} 

/**
 * Sends you back to your account.
 */
function cancelLama(): void {
    feedbackSettingslamaedit('Lama edit Cancelled!')

    setTimeout(() => {
        window.location.href = './account.html';
    }, 1000);

}

/**
 * Takes your lama id and deletes the lama.
 */
function deleteLama(): void{
    editLamaCallToBackend(JSON.stringify({lamaID: getLamaID()}), 'deletelama');
}

/**
 * This function gets called by loading the page, it gets a lama and from there the response is sent back.
 * The response gets used in the fillEditLamaPage function.
 */
function getLama(): void{
    editLamaCallToBackend(JSON.stringify({lamaID: getLamaID()}), 'getlama');
    editLamaCallToBackend(JSON.stringify({lamaID: getLamaID()}), 'getsubscriptions');
}

/**
 * This function now fills some of your lama info, this will be split in two sections later.
 * @param lamaData object containing lamadata response
 */
export function fillEditLamaPageLeft(lamaData: any): void{
    let lama = lamaData[0];

    (<HTMLInputElement>document.getElementById('lamaname')!).value = lama.name;
    (<HTMLInputElement>document.getElementById('lamaage')!).value = lama.age;
    (<HTMLInputElement>document.getElementById('lamagender')!).value = lama.gender;
    (<HTMLTextAreaElement>document.getElementById('lamabio')!).value = String.fromCharCode.apply(null, lama.biotext.data);
}

/**
 * This function now fills some of your lama info, this will be split in two sections later.
 * @param lamaData object containing lamadata response
 */
export function fillEditLamaPageRight(lamaData: any, subscriptionNum: number): void{
    let lama = lamaData[subscriptionNum];

    (<HTMLInputElement>document.getElementById(`title${subscriptionNum}`)!).value = lama.title;
    (<HTMLInputElement>document.getElementById(`benefits${subscriptionNum}`)!).value = lama.benefits;
    (<HTMLInputElement>document.getElementById(`price${subscriptionNum}`)!).value = lama.price;
}