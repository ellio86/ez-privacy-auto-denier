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
            manageSettingsButton: root.querySelector<HTMLButtonElement>("#ez-manage-settings"),
        }
        this.denyCookies();
    }


    private denyCookies () {
        this.dom.manageSettingsButton.click();

        console.log("Removing cookie consent...");
        this.uncheckCheckboxes();

        let showVendorsButton =  this.dom.root.querySelector<HTMLButtonElement>("#ez-show-vendors");
        showVendorsButton.click();

        console.log("Removing vendor consent...");
        this.uncheckCheckboxes();

        console.log("Saving cookie preferences...");
        this.saveCookiePreferences();
    }

    private updateCheckboxes () {
        this.dom.allCheckboxes = this.dom.root.querySelectorAll<HTMLInputElement>("input[type='checkbox']");
    }

    private saveCookiePreferences() {
        let saveSettingsButton = this.dom.root.querySelector<HTMLButtonElement>("#ez-save-settings");
        saveSettingsButton.click();

        console.log("Cookie preferences saved.");
    }

    private uncheckCheckboxes() {
        this.updateCheckboxes();
        this.dom.allCheckboxes.forEach((checkbox: HTMLInputElement) => {
            checkbox.checked = false;
        });
    }
}

$(() => {
    let cookieDialogue = document.querySelector<HTMLDivElement>("#ez-cookie-dialog");
    if(cookieDialogue) {
        console.log("EZ Cookie dialogue detected.");
        new EzPrivacyDenier(cookieDialogue);
    }
});