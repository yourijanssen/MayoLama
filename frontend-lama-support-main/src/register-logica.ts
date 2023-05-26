/** @author Madelief van Slooten */
/** Handles requirements and handles which data gets sent */

/**
 * Takes the username input field as an event. So everytime the user types it is checked so the requirement text can show feedback.
 * @param event Event. 
 * @returns boolean
 */
export function checkUsernameRequirements(event: Event): boolean {
    let usernameLength: number = (<HTMLInputElement>event.target!).value.length;
  
    (usernameLength <= 20 && usernameLength >= 5) ? document.getElementById('userReq')?.classList.replace('requirementRed', 'requirementGreen') :
      document.getElementById('userReq')?.classList.replace('requirementGreen', 'requirementRed');
  
    return (usernameLength <= 20 && usernameLength >= 5);
  }
  
  /**
   * Takes the password input field as an event. So everytime the user types it is checked so the requirement text can show feedback.
   * @param event Event. 
   * @returns boolean
   */
  export function checkPasswordRequirements(event: Event): boolean {
    let passwordLength: number = (<HTMLInputElement>event.target!).value.length;
  
    (passwordLength >= 8) ? document.getElementById('passReq')?.classList.replace('requirementRed', 'requirementGreen') :
      document.getElementById('passReq')?.classList.replace('requirementGreen', 'requirementRed');
  
    return (passwordLength >= 8);
  }
  
  /**
   * Regular Expression to check if email format. Pattern was found here:
   * Bron: https://www.w3resource.com/javascript/form/email-validation.php
   * @returns boolean
   */
  export function checkEmail(element: string, regex: RegExp): boolean {
    let email: string = (<HTMLInputElement>document.getElementById(element)!).value;
  
    return (email.match(regex) !== null);
  }
  
  /**
   * Gets input value. This is used often so it's made into a getter function.
   * @returns string
   */
  export function getUserInfo(element: string): string {
    return (<HTMLInputElement>document.getElementById(element)!).value;
  }
  
  /**
   * Checks if radiobutton selected user or seller. Returns number value depending on account type.
   * This will be used later to make the right objects for account saving.
   * @returns number
   */
  export function getAccountType(): string {
    let radioButton: string = (<HTMLInputElement>document.querySelector('input[name="account type"]:checked')).value;
  
    if (radioButton === 'user') {
      return 'user';
    } else {
      return 'seller';
    }
  }