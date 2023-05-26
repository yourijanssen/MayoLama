import { savePostReview } from "../server/postRequest.js";
import { createInnerSection } from "./1. base.js";

/**
 * @author Youri Janssen
 * @returns new section asset
 */
const newSection = (id: string, targetID: string): HTMLElement => {
    let section = document.getElementById(targetID)!.appendChild(createInnerSection(id));
    return section;
}

/**
 * @author Youri Janssen
 * This function is used as the main initializer for the entire post review section.
 */
export const postReview = (): void => {
    newSection('inputSection', 'postReview');
    titleName();
    titleTitle();
    newSection('ratingSection', 'inputSection');
    titleRating();
    titleExperience();
    newSection('buttons', 'postReview');
    addPictureButton();
    addPostButton();
    newSection('popupSection', 'postReview');
    createReviewPopup();
}

/**
 * This function is the initializer of the name section.
 */
export const titleName = (): void => {
    lineBreak(2);
    inputTitle('Your Name:');
    lineBreak(2);
    inputText('name', 'Your name..');
    lineBreak(2);
}

/**
 * This function is the initializer of the title section.
 */
const titleTitle = (): void => {
    inputTitle('Title:');
    lineBreak(2);
    inputText('title', 'Title..');
    lineBreak(2);
}

/**
 * This function is the initializer of the rating section.
 */
const titleRating = (): void => {
    inputTitle('Rating:');
    lineBreak(1);
    ratingDropdown();
    ratingContent();
    lineBreak(2);
}

/**
 * This function is the initializer of the experience section.
 */
const titleExperience = (): void => {
    inputTitle('Your Experience:');
    lineBreak(2);
    textArea('textArea', 'Your experience.. (max 500 characters)');
    lineBreak(2);
}

export const inputTitle = (labelName: string): HTMLLabelElement => {
    let label: HTMLLabelElement = document.createElement('label');
    label.innerHTML = labelName;
    label.id = 'inputTitle';
    document.getElementById('inputSection')!.appendChild(label);
    return label;
}

const inputText = (id: string, placeholder: string): HTMLInputElement => {
    let input: HTMLInputElement = document.createElement('input');
    input.placeholder = placeholder;
    input.type = 'text';
    input.id = id;
    input.className = 'inputText';
    document.getElementById('inputSection')!.appendChild(input);
    return input;
}

const lineBreak = (amount: number) => {
    for (let i = 0; i < amount; i++) {
        let lineBreak: HTMLElement = document.createElement('br');
        document.getElementById('inputSection')!.appendChild(lineBreak);
    }
}

const ratingDropdown = (): void => {
    let dropdown = document.createElement('select');
    dropdown.id = 'rating';
    document.getElementById('inputSection')!.appendChild(dropdown);
}

const ratingContent = (): void => {
    for (let i = 1; i < 6; i++) {
        let ratingContent = document.createElement('option');
        ratingContent.innerHTML = i.toString();
        document.getElementById('rating')!.appendChild(ratingContent);
    }
}

const textArea = (id: string, placeholder: string): HTMLTextAreaElement => {
    let textArea: HTMLTextAreaElement = document.createElement('textarea');
    textArea.placeholder = placeholder;
    textArea.id = id;
    document.getElementById('inputSection')!.appendChild(textArea);
    return textArea;
}

const addPictureButton = (): void => {
    let button: HTMLButtonElement = document.createElement('button');
    button.innerHTML = 'Add Picture';
    button.id = 'pictureButton';
    button.className = 'button';
    document.getElementById('buttons')!.appendChild(button);
}

const addPostButton = (): void => {
    let button: HTMLButtonElement = document.createElement('button');
    button.innerHTML = 'Post Review';
    button.id = 'postButton';
    button.className = 'button';
    document.getElementById('buttons')!.appendChild(button);
    button!.onclick = () => {
        savePostReview();
    }
}

export const createReviewPopup = (): void => {
    let popup = document.getElementById('popupSection')!;
    let popupText: HTMLElement = document.createElement('p');

    popup.className = 'reviewPopupHidden';
    popupText.id = 'reviewPopupText';
    popup.appendChild(popupText);
}

export const initReviewPopup = (className: string, text: string): void => {
    document.getElementById('popupSection')!.className = '';
    document.getElementById('popupSection')!.classList.add(className)
    document.getElementById('reviewPopupText')!.innerHTML = text;
}