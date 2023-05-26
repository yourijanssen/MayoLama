/**
 * @author Youri Janssen
 * @returns HTMLInputElements containinging User input data from postReview. 
 */

export const getReviewName = (): string => {
    return (<HTMLInputElement>document.querySelector('#name'))!.value;
}

export const getReviewTitle = (): string => {
    return (<HTMLInputElement>document.querySelector('#title'))!.value;
}

export const getReviewRating = (): string => {
   return (<HTMLSelectElement>document.querySelector('#rating'))!.value;
}

export const getReviewExperience = (): string => {
    return (<HTMLInputElement>document.querySelector('#textArea'))!.value;
}

