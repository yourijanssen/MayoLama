import { checkContactEmail, getContactEmail, getContactMessage, getContactName, getContactSubject } from "./contact-UserInput.js";
import { contactPopUp } from "./contactUI.js";

/**
* @author Youri Janssen
* This function (which is far to lang) is used to create a new contact request. 
* The data inserted by the user is sent to the database via a server running on port 4001.
*/
export async function setStorage() {
    if (getContactName().length >= 1 && getContactEmail().length >= 1 && getContactSubject().length >= 1 &&
        getContactMessage().length >= 1
        && checkContactEmail('email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == true) {
        let name: string = getContactName();
        let email: string = getContactEmail();
        let subject: string = getContactSubject();
        let message: string = getContactMessage();
        const request = new Request('http://localhost:4001/contact');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); // content is json
        headers.append('Accept', 'application/json'); // only json is accepted back from server.

        let content = JSON.stringify({ name: name, email: email, subject: subject, message: message })
        let rawData: Response = await fetch(request, { method: 'POST', headers, body: content });
        contactPopUp('popupSucces', 'Your message has been sent!');
        setTimeout(() => {
            window.location.href = './contact.html';
        }, 1700);
    } else {
        contactPopUp('popupFail', `Fill in all fields. Include an '@' in your email address.`);
    }
}
    	


