import { getLamaIDReview } from "./postRequest.js";

/**
 * @author Youri Janssen
 * This file is used to get the review data from the backend. 
 * @param body The body cointains the requested data from the database.
 */
export async function getReviewData(): Promise<string> {
    let res = await fetch(`http://localhost:4001/review/read`, {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify({ lamaID: getLamaIDReview() })
    });

    let data = await res.json();
    return data;
}

/**
 * This function consolidates the CURRENT_TIMESTAMP from the back-end into a user friendly readable date.
 * @param reviewData The reviewData is the data that is requested from the database.
 */
export function consolidateDate(reviewData: any) {
    for (let i = 0; i < reviewData.length; i++) {
        let day = new Date(reviewData[i].date).getDate();
        let month = new Date(reviewData[i].date).getMonth() + 1;
        let year = new Date(reviewData[i].date).getFullYear();
        let dateOutput = day + "-" + month + "-" + year;
        return dateOutput;
    }
}

/**
 * This fuction pushes the data from the back-end into HTML ID's, created in readReview.ts.
 * @param reviewData The reviewData is the data that is requested from the database.
 * @param dates The dates is the consolidated date from the back-end.
 */
export const pushHTML = (reviewData: any, dates: any) => {
    for (let i = 0; i < reviewData.length; i++) {
        (<HTMLInputElement>document.querySelector('#readName' + i)!).innerHTML = reviewData[i].name;
        (<HTMLInputElement>document.querySelector('#readRating' + i)!).innerHTML = `${reviewData[i].rating} / 5 `;
        (<HTMLInputElement>document.querySelector('#readDate' + i)!).innerHTML = dates;
        (<HTMLInputElement>document.querySelector('#readTitle' + i)!).innerHTML = reviewData[i].title;
        (<HTMLInputElement>document.querySelector('#readExperience' + i)!).innerHTML = reviewData[i].experience;
    }
}