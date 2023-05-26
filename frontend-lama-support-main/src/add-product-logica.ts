/** @author Madelief van Slooten */

import { feedbackSettings } from "./add-product.js";
import { getLamaID } from "./editlamlogica.js";
import { lama, sub } from "./lama-class.js";

/**
 * Gets value of inputs
 */
export function getLamaInfo(id: string): any {
    return (<HTMLInputElement>document.getElementById(id)).value;
}

/**
 * creates a lama object.
 * @returns lama instance
 */
export function lamaInstance(): lama {
    let lamaInstance: lama = new lama(getLamaInfo('lamaname'), getLamaInfo('lamaage'), getLamaInfo('lamagender'), getLamaInfo('lamabio'), JSON.parse(localStorage.getItem('user')!).userID);
    return lamaInstance;
}

/**
 * 
 * @param num number of subscription
 * @returns subscription instance
 */
export function subscriptionInstance(num: number): sub {
    let subscription: sub = new sub(getLamaInfo(`title${num}`), getLamaInfo(`benefits${num}`), getLamaInfo(`price${num}`));
    return subscription;
}

/**
 * Creates an array of file names.
 * @returns array of images
 */
export function getImages(): string[]{
    let fileInput: HTMLInputElement = <HTMLInputElement>document.getElementById('Select Files')!;
    let arrayImages: any = [];

    for (let i = 0; i <= fileInput.files!.length - 1; i++){
        arrayImages.push(fileInput.files!.item(i)!.name);
    }

    return arrayImages;
}
/**
 * sends a reuqest to backend to save a product
 */
export async function saveLamaCallToBackend(): Promise<void> {
    if (checkIfFieldsNotEmpty()) {
        
        const request = new Request('http://localhost:4001/addProduct');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); // content is json
        headers.append('Accept', 'application/json'); // only json is accepted back from server.

        let content = lamaContent();
        let rawData: Response = await fetch(request, { method: 'POST', headers, body: content });
        let lamaData = await rawData.json();
        checkLamaStatus(rawData, lamaData);
        
    } else {
        feedbackSettings('Please enter all fields!');
    }
}

/**
 * uses different functions to create an object.
 * @returns object with the body for the request
 */
export function lamaContent(): string{
    return JSON.stringify({ lamaname: lamaInstance().lamaName, lamaage: lamaInstance().age, 
        lamagender: lamaInstance().gender, lamatext: lamaInstance().bioText, userid: lamaInstance().userid, 
        subscription0title: subscriptionInstance(0).title, subscription0price: subscriptionInstance(0).price, subscription0benefits: subscriptionInstance(0).benefits, 
        subscription1title: subscriptionInstance(1).title, subscription1price: subscriptionInstance(1).price, subscription1benefits: subscriptionInstance(1).benefits,
        subscription2title: subscriptionInstance(2).title, subscription2price: subscriptionInstance(2).price, subscription2benefits: subscriptionInstance(2).benefits,
        imgArray: getImages(), lamaID: getLamaID()});
}

/**
 * Is called when adding product was a succes. Sends user to their lama page to check if it's right.
 * @param res Response
 */
function toProductPage(res: any): void{
    setTimeout(() => {
        window.location.href = `./product.html?id=${JSON.parse(JSON.stringify(res))[0].lamaID}`;
    }, 1000);
}

/**
 * Checks response status and calls on feedback.
 * @param res Response
 * @param result Result data
 */
async function checkLamaStatus(res: Response, result: any): Promise<void>{
    if (res.status === 200){
        feedbackSettings('Lama Saved!');
        toProductPage(result);
    } else {
        feedbackSettings('Something went wrong!');
    }
}

/**
 * Check if all input fields have a value.
 * @returns boolean
 */
function checkIfFieldsNotEmpty(): boolean{
    return getLamaInfo('lamaname').length > 0 && getLamaInfo('lamaage').length > 0 && getLamaInfo('lamagender').length > 0 && 
    getLamaInfo('lamabio').length > 0 && getLamaInfo('title0').length > 0 && getLamaInfo('benefits0').length > 0 && getLamaInfo('price0').length > 0
    && getLamaInfo('title1').length > 0 && getLamaInfo('benefits1').length > 0 && getLamaInfo('price1').length > 0
    && getLamaInfo('title2').length > 0 && getLamaInfo('benefits2').length > 0 && getLamaInfo('price2').length > 0;
}