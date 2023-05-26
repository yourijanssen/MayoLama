import { getUserInfo, checkEmail, getAccountType } from './register-logica.js';
import {feedbackPopUp} from './registerUI.js';

/**
 * @author Madelief van Slooten
 * Checks if fields are filled in first. Otherwise empty data is send to system. If data is present a request is made, using 
 * get function that return the input field values.
 * Succes and Fail popups get called here.
 */
export async function register() {
    if (getUserInfo('username').length <= 20 && getUserInfo('username').length >= 5 && getUserInfo('password').length >= 8 
    && getUserInfo('email').length > 0 
    && checkEmail('email', /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) == true) {
        const request = new Request('http://localhost:4001/register');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); // content is json
        headers.append('Accept', 'application/json'); // only json is accepted back from server.

        let content = JSON.stringify({ username: getUserInfo('username'), email: getUserInfo('email'), 
        password: getUserInfo('password'), isSeller: getAccountType() });
        let rawData: Response = await fetch(request, {method: 'POST', headers, body: content });

        checkStatus(rawData);
    } else {
        feedbackPopUp('popupFail', 'Registration failed. User already excists or fields are not correct.');
    }
}

/** 
 * @author Madelief van Slooten
 * Check response status and shows certain popups. Also redirects the user to the relevant page.
 * @param res Resonse
 */
function checkStatus(res: Response){
    if (res.status === 200){
        feedbackPopUp('popupSucces', 'Registration succeeded! Welcome to Mayo Lama!');
        if (getAccountType() === 'seller'){
            setTimeout(() => {
                window.location.href = './index.html';
            }, 1000);
        } else {
            setTimeout(() => {
                window.location.href = './index.html';
            }, 1000);
        }
        
    } else {
        feedbackPopUp('popupFail', 'Registration failed. User already excists or fields are not correct.');
    }
}

// /* Madelief:
// https://www.freecodecamp.org/news/javascript-promise-methods/ -->
// then : when a promise is successful, you can then use the resolved data.
// catch : when a promise fails, you catch the error, and do something with the error information.
// finally : when a promise settles (fails or passes), you can finally do something. */

