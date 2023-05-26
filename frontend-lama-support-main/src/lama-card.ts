/** @author Madelief van Slooten */
/** Creates lama-cards in a grid.
 * Uses dummy data for now, will add lama cards with a database when it is made.
 */

import { createSection } from "./UI-elements.js";

window.addEventListener('load', getLamaInfoFromDB);

/**
 * gets the Lama card product area and sets a dummydata lama.
 */
async function initLamaCard(): Promise<void> {
    let cardArea: HTMLElement = document.getElementById('lamaProductArea')!;
    await addLamaCards(cardArea);
}

/**
 * This function creates a string containing info about the lama. This will eventually be pulled out a database
 * @param object {[key: string]: string} key, value pairs containing lama data.
 * @returns HTMLParagraphElement
 */
function getInfo(object: { age: string, gender: string }): HTMLParagraphElement {
    let lamaInfoText: HTMLParagraphElement = document.createElement('p');
    lamaInfoText.innerText = `${object.age} years old - ${object.gender.toUpperCase()}`;
    return lamaInfoText;
}

/**
 * This function creates a string containing the name of the lama. This will eventually be pulled out a database
 * @param object {[key: string]: string} key, value pairs containing lama data.
 * @returns HTMLParagraphElement
 */
function getName(object: string): HTMLParagraphElement {
    let lamaNameText: HTMLParagraphElement = document.createElement('h5');
    lamaNameText.innerText = object;
    return lamaNameText;
}

/**
 * Get's image of the lama and adds the class so that the right css is added. This image will eventually be pulled out a database
 * @param object {[key: string]: string} key, value pairs containing lama data.
 * @returns HTMLImageElement
 */
function getImage(lama: string): HTMLImageElement {
    let lamaImg: HTMLImageElement = document.createElement('img');
    lamaImg.src = lama;
    lamaImg.classList.add('lamaCardImage');
    return lamaImg;
}

/**
 * Using a for loop (This will eventually be the length of lama's in database) cards are created using the correct info.
 * event listeners are added so the cards lead to product page.
 * !! This function will be replaced by backend code later on. !!
 * @param area HTMLElement section for the lama-cards
 */
async function addLamaCards(area: HTMLElement): Promise<void> {
    let lamaObject = await getLamaInfoFromDB();
    for (let i = 0; i < lamaObject.length; i++) {
        let card: HTMLElement = createSection('lamacardsec');
        card.classList.add('lamaCard');
        card.appendChild(getImage(lamaObject[i].picture));
        card.appendChild(addSectionToLamaCard(lamaObject[i]));
        card.addEventListener('click', function () {
            goToProduct(lamaObject[i].lamaID);
        });
        area.appendChild(card);
    }
}

/**
 * Adds a section to the card so the info text can get outlined correctly.
 * @param object {[key: string]: string} key, value pairs containing lama data.
 * @returns HTMLElement section
 */
function addSectionToLamaCard(object: any): HTMLElement {
    let textSection: HTMLElement = createSection('textsec');
    textSection.classList.add('lamaCardtext');
    textSection.appendChild(getName(object.name));
    textSection.appendChild(getInfo(object));
    return textSection;
}

/**
 * @author Lars Brinker
 * Event listener function
 */
async function goToProduct(id: string): Promise<void> {
    let rawData = await fetch(`http://localhost:4001/redirect/${id}`, { method: 'POST' });
    let data = await rawData.json();
    window.location.href = data;
}

/**
 * @author Lars Brinker
 * Fetch the lama information from the database.
 */
async function getLamaInfoFromDB() {
    let rawData = await fetch(`http://localhost:4001/getLamaSum`);
    let cleanData = await rawData.json();
    if (cleanData.length < 3) {
        setErrorSection();
    }
    cleanData = JSON.parse(cleanData);
    for (let i = 0; i < cleanData.length; i++) {
        cleanData[i].picture = getStringFromBuf(cleanData[i].picture.data);
    }
    return cleanData;
}

/**
 * @author Lars Brinker
 * Convert Mysql blobl(buffer) to string.
 */
function getStringFromBuf(asciiString: number[]): string {
    return String.fromCharCode.apply(null, asciiString);
}

/**
 * @author Lars Brinker
 * Adds an error message if no products are retrieved.
 */
function setErrorSection(): void {
    let errorSection = document.getElementById("lamaError");
    if (document.getElementById("errorText") === null){
        let errorText = document.createElement("h5");
        errorText.innerText = "Could not load any lama's try again later!";
        errorText.id = "errorText";
        errorSection!.appendChild(errorText);
    }
}

initLamaCard();