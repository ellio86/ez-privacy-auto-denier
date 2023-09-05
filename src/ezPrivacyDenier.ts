import $ from "jquery";

class EzPrivacyDenier {
    dom: {
        root: HTMLDivElement,
        allCheckboxes: NodeListOf<HTMLInputElement>,
        manageSettingsButton: HTMLButtonElement
    }

    constructor(root: HTMLDivElement) {
        this.dom = {
            root: root,
            allCheckboxes: root.querySelectorAll<HTMLInputElement>("input[type='checkbox']"),
            manageSettingsButton: root.querySelector<HTMLButtonElement>("#ez-manage-settings")
        }
        this.denyCookies();
    }

    private denyCookies () {
        this.dom.manageSettingsButton.click();
        this.updateCheckboxes();
        this.dom.allCheckboxes.forEach((checkbox: HTMLInputElement) => {
            checkbox.checked = false;
        });
        let saveSettingsButton = this.dom.root.querySelector<HTMLButtonElement>("#ez-save-settings");
        saveSettingsButton.click();
    }

    private updateCheckboxes () {
        this.dom.allCheckboxes = this.dom.root.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
    }
}

$(() => {
    let cookieDialogue = document.querySelector<HTMLDivElement>("#ez-cookie-dialog");
    if(cookieDialogue) {
        console.log("Cookie dialogue detected");
        new EzPrivacyDenier(cookieDialogue);
    }
});