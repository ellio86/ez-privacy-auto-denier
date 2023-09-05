class Popup {
    dom: {
        root: HTMLDivElement,
    }

    constructor(root: HTMLDivElement) {
        this.dom = {
            root: root,
        }
    }
}

// Async statements can only be executed from a module, export {} makes the file a module.
export {}

const popup = new Popup(document.querySelector<HTMLDivElement>("#main"));