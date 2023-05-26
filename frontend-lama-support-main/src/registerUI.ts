/** @author Madelief van Slooten */
/** Creates UI for register block */

import { register } from './register-server.js';
import { checkUsernameRequirements, checkPasswordRequirements, checkEmail } from "./register-logica.js";
import { addTitle, getSection, createSection, createRadioButton } from './UI-elements.js';

// makes sure the UI is created when someone enters the /register URL.
window.onload = (event) => {
  createRegisterArea();
}
/**
 * Builds the register block.
 */
function createRegisterArea(): void {
  getSection('registerBlock').style.display = 'flex';
  getSection('registerBlock').appendChild(addTitle('Register'));
  addInputElements();
  createBottomSection();
  addToRequirementArea();
  createPopUp();
}

/**
 * Creates an input field with the correct info you give it.
 * @param placeholdertext string Placeholder text for input field.
 * @param inputType string Type of input, like email or password.
 * @returns HTMLInputElement an input field
 */
function createRegisterInputElement(placeholdertext: string, inputType: string, id: string): HTMLInputElement {
  let input: HTMLInputElement = document.createElement('input');

  input.type = inputType;
  input.placeholder = placeholdertext;
  input.className = 'registerInput';
  input.id = id;
  input.name = id;

  (id === 'username') ? input.addEventListener('input', checkUsernameRequirements) : input.addEventListener('input', checkPasswordRequirements);
  if (id === 'email') { input.addEventListener('input', checkEmail.bind(null, 'email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) };

  return input;
}

/**
 * builds the section with the inputfields.
 */
function addInputElements(): void {
  let inputSection: HTMLElement = createSection('inputSec');

  inputSection.appendChild(createRegisterInputElement('username...', 'text', 'username'));
  inputSection.appendChild(createRegisterInputElement('email...', 'email', 'email'));
  inputSection.appendChild(createRegisterInputElement('password...', 'password', 'password'));

  getSection('registerBlock').appendChild(inputSection);
}

/**
 * Builds bottom section of registerblock.
 */
function createBottomSection(): void {
  let accountButtonSection: HTMLElement = createSection('buttonSec');

  accountButtonSection.id = 'accountButtonSection';
  accountButtonSection.appendChild(createRadioButton("I want to support lama's", 'user', 'yes'));
  accountButtonSection.appendChild(createRadioButton("I want to sell lama's", 'seller', 'no'));
  accountButtonSection.appendChild(createRegisterButton('registerButton', 'register'));

  getSection('registerBlock').appendChild(accountButtonSection);
}

/**
 * Creates a button with an event listener, this button registers your account. Here the button is not made using the
 * UI-elements button function, because the import of the register function didn't work that way. With more time a
 * solution will maybe be found for this.
 * @returns HTMLButtonElement Button to register
 */
function createRegisterButton(id: string, text: string): HTMLButtonElement {
  let button: HTMLButtonElement = document.createElement('button');

  button.id = id;
  button.type = 'button';
  button.innerHTML = text;
  button.addEventListener('click', register);

  return button;
}

/**
 * Creates text that shows rules.
 * @param id string id for the element
 * @param text string for the requirement rule
 * @returns 
 */
function addRequirementsText(id: string, text: string): HTMLParagraphElement {
  let passwordRequirement: HTMLParagraphElement = document.createElement('p');

  passwordRequirement.innerText = text;
  passwordRequirement.classList.add('requirementRed');
  passwordRequirement.id = id;

  return passwordRequirement;
}

/**
 * adds requirement text to the correct area.
 */
function addToRequirementArea(): void {
  let requirementSection: HTMLElement = createSection('reqSec');

  requirementSection.id = 'requirementSection';
  requirementSection.appendChild(addRequirementsText('passReq', 'Password is at least 8 characters'));
  requirementSection.appendChild(addRequirementsText('userReq', 'Username is between 5 and 20 characters'));

  getSection('registerBlock').appendChild(requirementSection);
}

/**
 * Succes pop up, changed text to give feedback to user.
 */
export function feedbackPopUp(className: string, text: string): void {
  console.log('Registered Succesfully');
  document.getElementById('popupsection')!.className = '';
  document.getElementById('popupsection')!.classList.add(className);
  document.getElementById('popuptext')!.innerText = text;
}

/**
 * Creates an area for the popups to get displayed in.
 */
function createPopUp() {
  let popupsection: HTMLElement = createSection('popSec');
  let popuptext: HTMLParagraphElement = document.createElement('p');

  popuptext.id = 'popuptext';
  popupsection.id = 'popupsection';
  popupsection.classList.add('popupHidden');
  popupsection.appendChild(popuptext);
  getSection('registerBlock').appendChild(popupsection);
}

