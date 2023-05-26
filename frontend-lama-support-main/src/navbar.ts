
/** Dynamic navbar script */

/**
 * Initialize script.
 */
/** @author Madelief van Slooten */
function initNavbar(): void{
    let navbarList: HTMLUListElement = (<HTMLUListElement>document.getElementById('navbarList'))!;
    createNavbarItem(navbarList);
    checkIfLoggedIn(navbarList);
}

/**
 * This function handles the amount of tabs in the navbar.
 * If you add an extra tab be sure to add the href link page name in the array in the next function.
 * @returns string[] Array containing navbar tab names.
 */
/** @author Madelief van Slooten */
function navbarItems(): string[]{
    return ['Home', 'Contact', 'FAQ'];
}

/**
 * This function handles the links of tabs in the navbar.
 * Onlly add extra link names if an extra name is added in the function above.
 * @returns string[] Array containing navbar tab href link names.
 */
/** @author Madelief van Slooten */
function navbarHREFs(): string[]{
    return ['index.html', 'contact.html', 'faq.html'];
}

/**
 * Loops over navbar array containing names and adds the names to an anchor. Adds href links
 * with array and appends it to mainList.
 * @param mainList list which makes up the navbar.
 */
/** @author Madelief van Slooten */
function createNavbarItem(mainList: HTMLUListElement): void{
    for (let i = 0; i < navbarItems().length; i++){
        let listItem: HTMLLIElement = document.createElement('li');
        let link: HTMLAnchorElement = document.createElement('a');
        let navbarTab: Text = document.createTextNode(navbarItems()[i]);
        link.setAttribute('href', navbarHREFs()[i]);
        listItem.appendChild(link);
        link.appendChild(navbarTab);
        mainList.appendChild(listItem);
    }
}

/** @author Mays AlTimemy */
function checkIfLoggedIn(mainList: HTMLUListElement): void{
    let user = localStorage.getItem("user");
    let mainSection : HTMLElement = document.createElement('section');
    let link: HTMLAnchorElement = document.createElement('a');
    if(user){
        mainSection.appendChild(document.createTextNode('My Account'));
        let listItem = mainSection.appendChild(document.createElement('li'));
        let icon = mainSection.appendChild(document.createElement('span'))
        let btn = listItem.appendChild(document.createElement('a'));
        let br = listItem.appendChild(document.createElement('br'));
        let btn2 = listItem.appendChild(document.createElement('a'));
        mainSection.id = 'myAccountId';
        mainSection.className = 'myAccountClassName';;
        listItem.className='listbtn';
        icon.className = "bx bx-chevron-down";
        icon.id = "arrow"
        btn.textContent='logout';
        btn2.textContent='Edit Account';
        btn.id = 'logoutId';
        btn2.id = 'editAccountId';
        mainList.appendChild(mainSection);
    }
    else{
        link.setAttribute('href', './login.html');
        mainSection.appendChild(link);
        link.appendChild(document.createTextNode('Login'));
        mainList.appendChild(mainSection);
    }
}
/** @author Mays AlTimemy */
function createDropDown(mainList: HTMLUListElement): void{
    
        let listDropDown: HTMLLIElement = document.createElement('li');
        let link: HTMLAnchorElement = document.createElement('a');
        let logout: Text = document.createTextNode('LogOut');
        link.setAttribute('href', 'account.html');
        listDropDown.appendChild(link);
        listDropDown.appendChild(logout);
        mainList.appendChild(listDropDown)
    
}

initNavbar();