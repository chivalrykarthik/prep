interface Button{
    click():string;
}

interface Panel{
    display():string;
}

interface Elements{
    createButton():Button;
    createPanel():Panel;
}

class DarkButton implements Button{
    click(): string {
        return 'Dark button clicked'
    }
}

class DarkPanel implements Panel{
    display(): string {
        return 'Displaying dark panel content'
    }
}

class LightButton implements Button{
    click(): string {
        return 'Light button clicked'
    }
}

class LightPanel implements Panel{
    display(): string {
        return 'Displaying light panel content'
    }
}




class DarkTheme implements Elements{
    createButton(): Button {
        return new DarkButton();
    }
    createPanel(): Panel {
        return new DarkPanel()
    }
}


class LightTheme implements Elements{
    createButton(): Button {
        return new LightButton();
    }
    createPanel(): Panel {
        return new LightPanel()
    }
}


const buildHtml = (instance : Elements)=>{
    const button = instance.createButton();
    console.log(button.click())

    const panel = instance.createPanel();
    console.log(panel.display())
}


const dark = new DarkTheme();
buildHtml(dark);

const light = new LightTheme();
buildHtml(light);