
import { feedbackSettings } from "./add-product.js";
import { fillEditLamaPageLeft, fillEditLamaPageRight } from "./editlama.js";

/**
 * Function gets the lama id from url which is set when clicking on a specific lama on your account. This function
 * is used for a lot of different things that need a lama id.
 * @returns Lama ID string
 */
export function getLamaID(): string {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.searchParams);
    
    return params.get("id")!;
}

/**
 * This function takes a body as request content. The id is an id that handles the type of request. 
 * update, deletelama or getlama are the id's you can use.
 * @param body JSON string containing lama info
 * @param id string id
 */
export async function editLamaCallToBackend(body: string, id: string): Promise<void> {
    let res = await fetch(`http://localhost:4001/editLama/${id}`, {
        method: 'POST',
        headers: { 
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }, body: body
    });

    let lamaData = await res.json();
    
    if (lamaData.length === 0){
        feedbackSettings('Something went wrong!');
    }
    if (id === 'update' || id === 'deletelama'){
        checkLamaStatus(res);
    } 
    if (id === 'getlama') {
        fillEditLamaPageLeft(lamaData);
    }
    if (id === 'getsubscriptions') {
        for (let i = 0; i < 3; i++){
            fillEditLamaPageRight(lamaData, i);
        }
    }
}

/**
 * sends user to their just edited lama after they updated it.
 */
export function toProductPage(): void {
    setTimeout(() => {
        window.location.href = `./product.html?id=${getLamaID()}`;
    }, 1000);
}

/**
 * Check the response status and gives feedback depending on what the status is.
 * @param res response
 */
export async function checkLamaStatus(res: Response): Promise<void> {
    if (res.status === 200) {
        feedbackSettings('Lama Edited!');
        toProductPage();
    } else {
        feedbackSettings('Something went wrong!');
    }
}

