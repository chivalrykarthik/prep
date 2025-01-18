interface Button {
    render: () => void;
    onClick: () => void;
}

abstract class Dialog {
    // Factory method
    public abstract createButton(): Button;

    // Common logic for rendering
    public render(): Button {
        const button = this.createButton();
        return button;
    }
}

class WindowsButton implements Button {
    render() {
        console.log("Windows button render called");
    }
    onClick() {
        console.log("Windows button click called");
    }
}

class HTMLButton implements Button {
    render() {
        console.log("HTML button render called");
    }
    onClick() {
        console.log("HTML button click called");
    }
}

class WindowsDialog extends Dialog {
    public createButton(): Button {
        return new WindowsButton();
    }
}

class WebDialog extends Dialog {
    public createButton(): Button {
        return new HTMLButton();
    }
}

// Factory function
function DialogFactory(os: string): Dialog | null {
    if (os === "Windows") return new WindowsDialog();
    if (os === "Web") return new WebDialog();
    return null;
}

// Client code
function ClientCode() {
    const dialog = DialogFactory(config.os);
    if (!dialog) {
        console.log("No match");
        return;
    }
    const button = dialog.render();
    button.render();
}

// Config
const config = { os: "Windows" };
ClientCode();
