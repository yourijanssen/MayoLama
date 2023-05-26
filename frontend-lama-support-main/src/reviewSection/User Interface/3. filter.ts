/**
 * @author Youri Janssen
 * This region creates the drop down menu. (not working yet.)
 */

export const createDropDownSection = (): void => {
    DropDown();
    DropDownContent('Latest First');
    DropDownContent('Oldest First');
}

export const DropDown = (): void => {
    let dropDown = document.createElement('select');
    dropDown.id = 'dropDown';
    document.getElementById('filter')!.appendChild(dropDown);
}

export const DropDownContent = (innerHTML: string): void => {
    let dropDownContent = document.createElement('option');
    dropDownContent.className = 'dropDownContent';
    dropDownContent.innerHTML = innerHTML;
    document.getElementById('dropDown')!.appendChild(dropDownContent);
}
