/** @author Madelief van Slooten */
// Most of the UI element functions are made here so there is no duplicate code in the specific UI creation files.
// These functions get used in multiple files.

export function getSection(element: string): HTMLElement {
    return <HTMLElement>document.getElementById(element)!;
}

/**
 * Creates a section, this is used many times in different functions.
 * @returns HTMLElement section element
 */
export function createSection(id: string): HTMLElement {
    let section: HTMLElement = document.createElement('section');
    section.id = id;
    return section;
}

/**
 * creates an h3 contaning title text. Can be used as header for sections and child sections.
 * @param text string title text
 * @returns HTMLParagraphElement
 */
export function addTitle(text: string): HTMLParagraphElement {
    let title: HTMLParagraphElement = document.createElement('h3');

    title.innerHTML = text;

    return title;
}

/**
 * Creates an input with given attributes and gives it a class so the input styling is the same everywhere.
 * @param text string placeholder text
 * @param id string id
 * @param type string input type
 * @returns HTMLInputElement
 */
export function createInputField(text: string, id: string, type: string, maxlength: number): HTMLInputElement {
    let input: HTMLInputElement = document.createElement('input');

    input.setAttribute('required', '');
    input.id = id;
    input.placeholder = text;
    input.type = type;
    input.maxLength = maxlength;
    input.classList.add('Input');

    return input;
}

/**
 * Makes radio button with the info in a label and value you give it.
 * @param labelName string name of the label.
 * @param value string value of the radio button.
 * @returns HTMLLabelElement
 */
export function createRadioButton(labelName: string, value: string, checked: string): HTMLLabelElement {
    let label: HTMLLabelElement = document.createElement('label');
    let button: HTMLInputElement = (<HTMLInputElement>document.createElement('input'));

    button.type = 'radio';
    button.value = value;
    button.name = 'account type';
    (checked === 'yes') ? button.checked = true : button.checked = false;
    label.innerHTML = labelName;
    label.appendChild(button);

    return label;
}

/**
 * Creates a text area with the given attributes.
 * @param text string placeholder text
 * @param id string id
 * @param rows number of rows
 * @param cols number of columns
 * @param maxLength number of max character length
 * @returns HTMLTextAreaElement
 */
export function createTextArea(text: string, id: string, rows: number, cols: number, maxLength: number): HTMLTextAreaElement{
    let area: HTMLTextAreaElement = document.createElement('textarea');
    
    area.id = id;
    area.placeholder = text;
    area.rows = rows;
    area.cols = cols;
    area.maxLength = maxLength;

    return area;
}

