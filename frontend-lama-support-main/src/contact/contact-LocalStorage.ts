import { getContactName, getContactEmail, getContactSubject, getContactMessage } from "./contact-UserInput.js";

/**
 * @author Youri Janssen
 * This function sends contact data to local storage.
 */
export const setLocalStorage = (): void => {
    const name: string = getContactName();
    const email: string = getContactEmail();
    const subject: string = getContactSubject();
    const message: string = getContactMessage();

    let contactUser = {
        name: name,
        email: email,
        subject: subject,
        message: message
    };

    localStorage.setItem('contactUser', JSON.stringify(contactUser));
    console.log("your data is saved in local storage");
}
