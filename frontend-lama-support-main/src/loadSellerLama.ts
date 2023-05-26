/**
 * @author Lars Brinker
 */


/**
 * Initialize the page for the seller.
 */
export function initAccountLama(): void{
    let lamaSection = document.getElementById("sellerLama")!;
    let lamaText = document.getElementById("lamaText")!;
    lamaText.appendChild(addTextElement());
    addLamaCardToAccount(lamaSection);
}

/**
 * Adds a text to the top of the page, with some explaining.
 */
function addTextElement(): HTMLElement{
    let textElement = document.createElement("h5");
    textElement.innerText = "Click on one of the lama's below to edit it.";
    textElement.id = "editText";
    return textElement;
}

/**
 * Add section to the page.
 */
function createSectionToAccountPage(): HTMLElement{
    let section = document.createElement("section");
    return section;
}

/**
 * Create and add a lama card to the account page.
 */
async function addLamaCardToAccount(area: HTMLElement): Promise<void> {
    let lamaObject = await getLamaFromDB();
    for (let i = 0; i < lamaObject.length; i++) {
        let card: HTMLElement = createSectionToAccountPage();
        card.classList.add('lamaCard');
        card.appendChild(createImage(lamaObject[i].picture));
        card.appendChild(addSectionToAccountLamaCard(lamaObject[i]));
        card.addEventListener('click', function() {
            goToEditLama(lamaObject[i].lamaID);
        });
        area.appendChild(card);
    }
}

/**
 * Get the lama information from the database.
 */
async function getLamaFromDB() {
    let user = JSON.parse(localStorage.getItem("user")!);
    let rawData = await fetch(`http://localhost:4001/getLamaSumSeller?userID=${user.userID}`,{method: 'POST'});
    let cleanData = await rawData.json();
    if(cleanData.length < 3){
        setSectionError();
    }
    cleanData = JSON.parse(cleanData);
    for (let i = 0; i < cleanData.length; i++) {
        cleanData[i].picture = getStringFromDbBuf(cleanData[i].picture.data);
    }
    return cleanData;
}

/**
 * Convert Mysql blob (buffer) to string. 
 */
function getStringFromDbBuf(asciiString: number[]): string {
    return String.fromCharCode.apply(null, asciiString);
}

/**
 * Redirect to editLama page with an attachted lamaID
 */
function goToEditLama(id: string): void {
    const full = location.protocol + '//' + location.host + `/editLama.html?id=${id}`;
    window.location.href = full;
}

/**
 * Create a image element for the lamacard.
 */
function createImage(lama: string): HTMLImageElement {
    let lamaImg: HTMLImageElement = document.createElement('img');
    lamaImg.src = lama;
    lamaImg.classList.add('lamaCardImage');
    return lamaImg;
}

/**
 * Add a section to the section, where the name and info from the lama is set.
 */
function addSectionToAccountLamaCard(object: any): HTMLElement {
    let textSection: HTMLElement = createSectionToAccountPage();
    textSection.classList.add('lamaCardtext');
    textSection.appendChild(createNameElement(object.name));
    textSection.appendChild(getLamaInfo(object));
    return textSection;
}

/**
 * Get the lama information (age and gender).
 */
function getLamaInfo(object: { age: string, gender: string }): HTMLParagraphElement {
    let lamaInfoText: HTMLParagraphElement = document.createElement('p');
    lamaInfoText.innerText = `${object.age} years old - ${object.gender}`;
    return lamaInfoText;
}

/**
 * Create an paragraph element.
 */
function createNameElement(object: string): HTMLParagraphElement {
    let lamaNameText: HTMLParagraphElement = document.createElement('h5');
    lamaNameText.innerText = object;
    return lamaNameText;
}

/**
 * Adds an error message to the page.
 */
function setSectionError(): void{
    let errorSection = document.getElementById("lamaError");
    if (document.getElementById("errorText") === null){
        let errorText = document.createElement("h5");
        errorText.innerText = "Could not load any lama's try again later!";
        errorText.id = "errorText";
        errorSection!.appendChild(errorText);
    }
}