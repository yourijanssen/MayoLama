import { consolidateDate, getReviewData, pushHTML } from "../server/readRequest.js";
import { AverageRating, ReviewCount } from "./2. average.js";

/**
 * @author Youri Janssen
 * This function initializes the readReview section. First it awaits the data from the server, then it creates the elements and fills them with the data.
 * After that it calls the functions to calculate the average rating and the amount of reviews.
 */
export const readReview = async (): Promise<void> => {
    let reviewData = await getReviewData();
    console.log(reviewData);
    for (let i = 0; i < reviewData.length; i++) {
        createReviewContainer(i);
        createReadRating(i);
        createReadName(i);
        createReadDate(i);
        createReadTitle(i);
        createReadExperience(i);
        linebreak(i);
    }
    let dates = consolidateDate(reviewData);
    pushHTML(reviewData, dates);
    AverageRating(reviewData);
}


export const createReviewContainer = (amount: number): void => {
    let reviewContainer = document.createElement('section');
    reviewContainer.className = 'reviewContainer';
    reviewContainer.id = 'reviewContainer' + amount;
    document.getElementById('readReview')!.appendChild(reviewContainer);
}

export const linebreak = (amount: number): void => {
    let section = document.createElement('img');
    section.src = 'assets/line-breaker.png';
    section.id = "break" + amount;
    section.className = 'break';
    document.getElementById('reviewContainer' + amount)!.appendChild(section);
}
const createReadName = (amount: number): void => {
    let name = document.createElement('p');
    name.className = 'readName';
    name.id = 'readName' + amount;
    document.getElementById('reviewContainer' + amount)!.appendChild(name);
}

const createReadRating = (amount: number): void => {
    let rating = document.createElement('h4');
    rating.className = 'readRating';
    rating.id = 'readRating' + amount;
    document.getElementById('reviewContainer' + amount)!.appendChild(rating);
}

const createReadDate = (amount: number): void => {
    let date = document.createElement('p');
    date.className = 'readDate';
    date.id = 'readDate' + amount;
    document.getElementById('reviewContainer' + amount)!.appendChild(date);
}

const createReadTitle = (amount: number): void => {
    let title = document.createElement('h4');
    title.className = 'readTitle';
    title.id = 'readTitle' + amount;
    document.getElementById('reviewContainer' + amount)!.appendChild(title);
}

const createReadExperience = (amount: number): void => {
    let experience = document.createElement('p');
    experience.className = 'readExperience';
    experience.id = 'readExperience' + amount;
    document.getElementById('reviewContainer' + amount)!.appendChild(experience);
}


