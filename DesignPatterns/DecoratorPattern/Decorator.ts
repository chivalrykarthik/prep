interface Component{
    operation():string;
}


class ConcreteComponent implements Component{
    operation(){
        return 'ConcreateComponent'
    }
}


class Decorator implements Component{
    instance:Component;

    constructor(component:Component){
        this.instance = component;
    }
    operation(){
        return this.instance.operation();
    }
}

class concreteDecoratorA extends Decorator{
    operation(){
        return `WrappedByDecoratorA(${super.operation()})`
    }
}

class concreateDecoratorB extends Decorator{
    operation(){
        return `WrappedByDecoratorB(${super.operation()})`
    }
}

const clientCode = (instance:Component)=>{
    console.log(instance.operation())
}


const simple = new ConcreteComponent();
clientCode(simple)


const decoratorA = new concreteDecoratorA(simple);

clientCode(decoratorA)

const decoratorB = new concreateDecoratorB(decoratorA);

clientCode(decoratorB)