interface Button{
    render():string;
}

interface Checkbox{
    render(): string;
}


class WinButton implements Button{
    render(){
        return 'Windows styled button'
    }
}

class WinCheckbox implements Checkbox{
    render(){
        return 'Window styles Checkbox'
    }
}

class MacButton implements Button{
    render(){
        return 'Mac styled button'
    }
}

class MacCheckbox implements Checkbox{
    render(){
        return 'Mac styles Checkbox'
    }
}


interface GUIFactory{
    createButton():Button;
    createCheckbox():Checkbox;
}

class WindowFactory implements GUIFactory{
    createButton(){
        return new WinButton();
    }
    createCheckbox(){
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory{
    createButton(){
        return new MacButton();
    }
    createCheckbox(){
        return new MacCheckbox();
    }
}

class SystemSettings{
    factory: GUIFactory;
    constructor(factory:GUIFactory){
        this.factory = factory;
    }
    log(str:string){
        console.log(str)
    }
    render(){
        const btn = this.factory.createButton();
        const checkbox = this.factory.createCheckbox();
        this.log(btn.render())
        this.log(checkbox.render())
    }
}

const winObj = new SystemSettings(new WindowFactory);
winObj.render();

const macObj = new SystemSettings(new MacFactory);
macObj.render()