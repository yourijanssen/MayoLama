/**
 * @author Youri Janssen
 * @returns HTMLInputElements containinging User input data from contact UI:
 * getContactName() returns the name input field.
 * getContactEmail() returns the email input field.    
 * getContactSubject() returns the subject input field.
 * getContactMessage() returns the message input field.
 */
export const getContactName = (): string => {
    return (<HTMLInputElement>document.querySelector('#name'))!.value;
}

export const getContactEmail = (): string => {
    return (<HTMLInputElement>document.querySelector('#email'))!.value;
}

export const getContactSubject = (): string => {
    return (<HTMLInputElement>document.querySelector('#subject'))!.value;
}

export const getContactMessage = (): string => {
    return (<HTMLInputElement>document.querySelector('#textArea'))!.value;
}

export const checkContactEmail = (id: string, regex: RegExp): boolean => {
    let email: string = (<HTMLInputElement>document.getElementById(id))!.value;
    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}
