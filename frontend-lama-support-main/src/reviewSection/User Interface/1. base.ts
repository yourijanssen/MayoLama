import { ReviewCount } from "./2. average.js";
import { createDropDownSection } from "./3. filter.js";
import { readReview } from "./4. readReview.js";
import { postReview } from "./5. postReview.js";

/**
 * @author Youri Janssen
 * This function initializes the base section on which the review builds.
 */
export const createBase = (): void => {
    getReviewRoot();
    initUIDom();
    ReviewCount();
    createDropDownSection();
    readReview();
    postReview();
}

window.addEventListener('load', createBase);

/**
 * This function creates the root elements for the review section. 
 * Later these elements will be used to append the payload.
 */
export const initUIDom = (): void => {
    createInnerSection('mainTitle');
    createInnerSection('average');
    createInnerSection('filter');
    createInnerSection('readReview');
    createInnerSection('postReview');
}

export const getReviewRoot = (): HTMLElement => {
    let root = document.getElementById('reviewRoot')!;
    return root;
}

export const createInnerSection = (innerSectionID: string): HTMLElement => {
    let innerSection = document.createElement('section');
    innerSection.id = innerSectionID;
    getReviewRoot().append(innerSection);
    return innerSection;
}


