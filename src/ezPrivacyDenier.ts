class EzPrivacyDenier {
    dom: {
        root: HTMLDivElement,
        allCheckboxes: NodeListOf<HTMLInputElement>
    }

    constructor(root: HTMLDivElement) {
        this.dom = {
            root: root,
            allCheckboxes: root.querySelectorAll<HTMLInputElement>("input[type='checkbox']")
        }

        this.dom.allCheckboxes.forEach((checkbox: HTMLInputElement) => {
            checkbox.checked = false;
        });
    }
    
}

$(() => {
    let cookieDialogue = document.querySelector<HTMLDivElement>("#ez-cookie-dialog");
    if(cookieDialogue) {
        new EzPrivacyDenier(cookieDialogue);
    }
});