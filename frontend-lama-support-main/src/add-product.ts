import { getLamaInfo, lamaInstance, saveLamaCallToBackend} from "./add-product-logica.js";
import { getSection, createSection, addTitle as createTitle, createTextArea, createInputField } from "./UI-elements.js";

/** @author Madelief van Slooten */
// Creates UI for the add product page. Uses reusable UI functions from other file.

if (window.location.href == 'http://127.0.0.1:8080/addProduct.html'){
    initAddUI();
}

/**
 * Initializer, creates the structure of the page.
 */
function initAddUI(): void {
    getSection('addRight').appendChild(createTitle('Pricing Options'));
    addPricingCards();
    buildTopLeftSection();
    buildBottemLeftSection();
    fileInputSettings();
}
/** Init function is called here, because the body onload wouldn't work, there wasn't time to look into it. */

/**
 * Creates a price option card.
 * @returns HTMLElement A pricing card
 */
function createPricingOptionCard(inputID: string): HTMLElement {
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
export function createButton(id: string, text: string, action: string): HTMLButtonElement {
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
function addPricingCards(): void {
    for (let i = 0; i < 3; i++) {
        getSection('addRight').appendChild(createPricingOptionCard(`${i}`));
    }
}

/**
 * Builds the left top elements
 */
function buildTopLeftSection(): void {
    getSection('addLeft').appendChild(createTitle('Lama Information'));
    getSection('addLeft')!.appendChild(createSection('pictureSelectSection')!);

    document.getElementById('pictureSelectSection')!.appendChild(createTitle('Lama Pictures')!);
    document.getElementById('pictureSelectSection')!.appendChild(createInputField('fileButton', 'Select Files', 'file', 15)!);
    

    getSection('addLeft').appendChild(createSection('lamaNameSection'));
    document.getElementById('lamaNameSection')!.appendChild(createInputField('Lama Name', 'lamaname', 'text', 20));
    document.getElementById('lamaNameSection')!.appendChild(createInputField('Lama Age', 'lamaage', 'text', 2));
    document.getElementById('lamaNameSection')!.appendChild(createInputField('Lama Gender (M/F/T/O/X)', 'lamagender', 'text', 1));
}

function fileInputSettings(){
    let fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById('Select Files')!;
    fileInput.setAttribute('multiple', '');
}
/**
 * Builds the left bottem elements
 */
function buildBottemLeftSection(): void {
    getSection('addLeft').appendChild(createTextArea('Tell us about your lama! (max. 750 char.)', 'lamabio', 10, 80, 750));

    getSection('addLeft').appendChild(createSection('buttonSection'));
    document.getElementById('buttonSection')!.appendChild(createButton('saveButton', 'Save Lama', 'saveLama'));
    document.getElementById('buttonSection')!.appendChild(createButton('cancelButton', 'Cancel', 'cancelLama'));
    getSection('addLeft').appendChild(createPopUpSection());
}

/**
 * Creates a section for feedback when user clicks buttons.
 * @returns HTMLElement section
 */
function createPopUpSection(): HTMLElement{
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
export function feedbackSettings(text: string){
    document.getElementById('feedbackText')!.innerHTML = text;
    document.getElementById('feedbackSection')!.classList.remove('feedbackHidden');
    document.getElementById('feedbackSection')!.classList.add('feedback');
}

/**
 * 
 */
function saveLama() {
    saveLamaCallToBackend();
}

/**
 * Cancel lama function
 */
function cancelLama() {
    feedbackSettings('Lama Cancelled!')

    setTimeout(() => {
        window.location.href = './account.html';
    }, 1000);

    console.log('Lama Cancelled!');
}



