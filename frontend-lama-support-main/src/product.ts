/**
 * @author Lars Brinker
 */

window.addEventListener('load', initImages);

/**
 * Initalize the image slider.
 */
async function initImages(): Promise<void> {
    setSlideIndex(0);
    createImageElement();
    await getImagesFromDB();
    moveToNextImage();
    await setProductText();
    await setProductName();
    await setProductProfilePicture();
}

/**
 * Create and add an image element to the page.
 */
function createImageElement(): void {
    let imgSec = document.getElementById("productImg");
    let imgEl: HTMLImageElement = document.createElement("img");
    imgEl.id = "slidingPicture";
    imgSec!.appendChild(imgEl);
}

/**
 * Get the available images from the database, and save them in the localStorage for later use.
 */
async function getImagesFromDB(): Promise<void> {
    let dummyLama = await getLamaPicturesFromDatabase();
    let imagesArray: string[] = [];
    let imagesCount = 0;
    for (let i = 0; i < dummyLama.length; i++) {
        if (dummyLama[i].isProfilePicture === "0") {
            imagesArray[imagesCount] = getStringFromBuffer(dummyLama[i].picture.data);
            imagesCount++;
        }
    }
    localStorage.setItem("lamaImages", JSON.stringify(imagesArray));
}

/**
 * Retrieve the images from the localStorage.
 */
function getImagesFromLocalStorage(): string[] {
    let images = JSON.parse(localStorage.getItem("lamaImages")!);
    return images;
}

/**
 * Move the image slider to the next image.
 */
function moveToNextImage(): void {
    let images: string[] = getImagesFromLocalStorage();
    let imgSec = document.getElementById("productImg");
    let imgEl = document.getElementById("slidingPicture")! as HTMLImageElement;
    let slideIndex = getSlideIndex();
    imgEl.src = images[slideIndex];
    imgSec!.appendChild(imgEl);
}

/**
 * Event listener function which is triggered, if one of the buttons next to the images is pressed.
 */
function plusSlides(n: number): void {
    let imageCount = getImagesFromLocalStorage();
    setSlideIndex(getSlideIndex() + n);
    if (getSlideIndex() < 0) {
        setSlideIndex(imageCount.length - 1);
    }
    else if (getSlideIndex() > (imageCount.length - 1)) {
        setSlideIndex(0);
    }
    moveToNextImage();
}

/**
 * Get the current slide index.
 */
function getSlideIndex(): number {
    return Number(localStorage.getItem("slideIndex"));
}

/**
 * Save the slide index to the localstorage.
 */
function setSlideIndex(slideIndex: number) {
    localStorage.setItem("slideIndex", slideIndex as unknown as string);
}

/**
 * Set the bio text in the page, which is retrieved from the database.
 */
async function setProductText(): Promise<void> {
    let dummyLama = await getLamaInfoFromDatabase();
    document.getElementById("lamaText")!.innerText = getStringFromBuffer(dummyLama[0].biotext.data);
}

/**
 * Set the product from, which is retrieved from the database.
 */
async function setProductName(): Promise<void> {
    let dummyLama = await getLamaInfoFromDatabase();
    document.getElementById("lamaName")!.innerText = `${dummyLama[0].name} - ${dummyLama[0].age} years old - ${dummyLama[0].gender}`;
}

/**
 * Get the picture which is assigned as the profile picture from the database.
 */
async function getProfilePictureFromDB(): Promise<string> {
    let dummyLama = await getLamaPicturesFromDatabase();
    for (let i = 0; i < dummyLama.length; i++) {
        if (dummyLama[i].isProfilePicture === "1") {
            return getStringFromBuffer(dummyLama[i].picture.data);
        }
    }
    return "No profile picture exists";
}

/**
 * Set the retrieved profile picture.
 */
async function setProductProfilePicture(): Promise<void> {
    let imgEl: HTMLImageElement = new Image;
    let profileSec = document.getElementById("lamaProfilePicture");
    imgEl = document.createElement("img");
    imgEl.id = "profilePicture";
    imgEl.src = await getProfilePictureFromDB();
    profileSec!.appendChild(imgEl);
}

/**
 * Add a section to the page.
 */
function addSection(id: string): HTMLElement {
    let section = document.createElement("section");
    section.className = id;
    return section;
}

/**
 * Get the id from URL which is given as an URL parameter.
 */
function getIdFromURL(): string {
    let url = new URL(window.location.href);
    let params = new URLSearchParams(url.searchParams);
    return params.get("id")!;
}

/**
 * Send a request to the server to fetch the lama information from the database.
 */
async function getLamaInfoFromDatabase() {
    let rawLamaInfo = await fetch(`http://localhost:4001/product/getLamaInfo?lamaID=${getIdFromURL()}`, { method: 'post' });
    checkForErrorResponse(rawLamaInfo.status);
    let lamaInfo = await rawLamaInfo.json();
    lamaInfo = JSON.parse(lamaInfo);
    return lamaInfo;
}

/**
 * Send a request to the server, to fetch all the pictures from the given lama.
 */
async function getLamaPicturesFromDatabase() {
    let rawPictures = await fetch(`http://localhost:4001/product/getLamaPictures?lamaID=${getIdFromURL()}`, { method: 'post' });
    let lamaPictures = await rawPictures.json();
    lamaPictures = JSON.parse(lamaPictures);
    return lamaPictures;
}

/**
 * Convert a Buffer(Blob) from Mysql to a string.
 */
function getStringFromBuffer(asciiString: number[]): string {
    return String.fromCharCode.apply(null, asciiString);
}

/**
 * Check if the status code from the server is a 404.
 */
function checkForErrorResponse(fetchResponse: number): void {
    if (fetchResponse == 404) {
        window.location.href = "404.html";
    }
}
