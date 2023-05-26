/**
 * @author Youri Janssen
 * This function initializes the info section.
 */
const createInfoSection = (): void => {
    getInfoRoot();
    createInfoLooper();
    createInfoTitle();
    createInfoText();
    createInfoImage();
    // createfaqSection();
}

/**
 * This function initializes the faq section.
 */
const createfaqSection = (): void => {
    getFaqRoot();
    faqLoopContainer();
}

window.addEventListener('load', createInfoSection);

const getInfoRoot = (): HTMLElement => {
    let root = document.getElementById('infoSectionRoot')!;
    return root;
}

const createInfoLooper = (): void => {
    for (let i = 0; i < 2; i++) {
        let sectionRoot = document.createElement('div');
        sectionRoot.className = "infoContainer";
        sectionRoot.id = "infoContainer" + i;
        getInfoRoot().appendChild(sectionRoot);
    }
}

const createInfoTitle = (): void => {
    for (let i = 0; i < 2; i++) {
        let section = document.createElement('h2');
        section.className = 'info-title';
        section.innerHTML = 'Lama Support';
        document.getElementById("infoContainer" + i)!.appendChild(section);
    }
}

const createInfoText = (): void => {
    for (let i = 0; i < 2; i++) {
        let section = document.createElement('p');
        section.className = 'info-text';
        section.innerHTML = "Mayonaise Lama is a non-profit orginasation that is created by volunteers. Support our lama's with subscriptions to help us continue to care for and protect these amazing animals. Your contribution will go towards feeding, veterinary care, and conservation efforts for our lama herd. Become a part of our lama community and gain exclusive access to updates, photos, and videos of our lamas. Help us ensure a bright future for these gentle giants.";
        document.getElementById("infoContainer" + i)!.appendChild(section);
    }
}

const createInfoImage = () => {
    for (let i = 0; i < 2; i++) {
        let section = document.createElement('img');
        section.className = 'info-image';
        section.src = 'assets/berrie2.jpg';
        document.getElementById("infoContainer" + i)!.appendChild(section);
    }
}

const getFaqRoot = (): HTMLElement => {
    let root = document.getElementById('faqRoot')!;
    return root;
}

const faqLoopContainer = (): void => {
    for (let i = 0; i < 5; i++) {
        createFaqSection();
        createFaqText();
        creatFaqLineBreak();
    }
}

const createFaqSection = (): void => {
    let section = document.createElement('section');
    section.id = 'faqContainer' + 1;
    document.getElementById('faqRoot')!.appendChild(section);
}

const createFaqText = (): void => {
    let section = document.createElement('p');
    section.id = 'faq-text';
    section.innerHTML = 'Q: How old can Lama’s get? <br> A: Lama’s can get around 20 years old!';
    getFaqRoot().appendChild(section);
}

const creatFaqLineBreak = (): void => {
    let section = document.createElement('img');
    section.src = 'assets/line-breaker.png';
    section.id = "break";
    getFaqRoot().appendChild(section);
}
