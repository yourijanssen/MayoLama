import { getReviewData } from "../server/readRequest.js";

/**
 * @author Youri Janssen
 * This function calculates the amount of reviews present on the page.
 */
export const ReviewCount = async (): Promise<void> => {
    let data = await getReviewData();
    let count = data.length;
    let section = document.createElement('p');
    section.innerHTML = ` Average from ${count} review(s):`;
    section.id = 'reviewCount';
    document.getElementById('average')!.appendChild(section);
}

/**
 * @author Youri Janssen
 * This function calculates the average rating of reviews present on the page.
 */
export const AverageRating = async (reviewData: any): Promise<void> => {
    let section = document.createElement('p');
    section.id = 'averageNumber';
    document.getElementById('average')!.appendChild(section);

    for (let i = 0; i < reviewData.length; i++) {
        let averageRating = reviewData[i].rating;
        console.log(averageRating);
        section.innerHTML = `${averageRating}`;
    }
}
