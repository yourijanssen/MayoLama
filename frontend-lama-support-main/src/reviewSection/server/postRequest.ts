import { initReviewPopup } from "../User Interface/5. postReview.js";
import { getReviewName, getReviewTitle, getReviewExperience, getReviewRating } from "./getUserInput.js";

/**
 * @author Youri Janssen
 * This function is used to create a new post review request. The data inserted by the user is sent to the database via a server running on port 4001.
 */
export async function savePostReview() {
    if (getReviewName().length >= 1 && getReviewTitle().length >= 1 && getReviewExperience().length >= 1) {
        let name: string = getReviewName();
        let title: string = getReviewTitle();
        let rating: number = parseInt(getReviewRating());
        let experience: string = getReviewExperience();
        const request = new Request('http://localhost:4001/review/post');
        const headers = new Headers();
        headers.append('Content-Type', 'application/json'); // content is json
        headers.append('Accept', 'application/json'); // only json is accepted back from server.
        let content = JSON.stringify({ name: name, title: title, rating: rating, experience: experience, lamaID: getLamaIDReview()})
        let rawData: Response = await fetch(request, { method: 'POST', headers, body: content });
        initReviewPopup('popupSucces', 'Your review has been sent!');
        setTimeout(() => {
            window.location.href = `./product.html?id=${getLamaIDReview()}`;
        }, 1500);
    } else {
        initReviewPopup('popupReviewFail', 'Please fill in all fields.');
    }
}

/**
 * @returns The lamaID from the URL
 */
export const getLamaIDReview = (): string => {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.searchParams);
    return params.get("id")!;
}

