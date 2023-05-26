function linkListContainer(innerhtml: string[], linkTitle: string[]) {
    for (let i = 0; i < 6; i++) {
        let links = document.createElement('a');
        links.setAttribute('href', linkTitle[i]);
        let mainList = document.createElement('li');
        mainList.setAttribute('id', 'link-tekst');
        mainList.innerHTML = innerhtml[i];
        document.getElementById('link-list-container')!.appendChild(links);
        links.appendChild(mainList);
    }
}

linkListContainer(["Home", "Contact", "FAQ", "Account", "Login", "Terms and Conditions"], ["index.html", "contact.html", "faq.html", "account.html", "login.html", "conditions.html"]);

function socials() {
    for (let i = 0; i < 4; i++) {
        let svgg = document.createElement('svg');
        svgg.setAttribute('fill', 'currentColor');
        svgg.setAttribute('roll', 'img');
        svgg.setAttribute('src', '/assets/twitter.svg');
        document.getElementById('footer-social-icon')!.appendChild(svgg)
    }
}

socials();