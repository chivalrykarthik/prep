class Car{
    carType:string;
    variant:string;
    wheel:string
    constructor(carType:string, variant:string, wheel:string){
        this.carType = carType;
        this.variant = variant;
        this.wheel = wheel
    }

    // Add other required logics 
    builtCar(color: string){
        console.log(`A new ${color} color ${this.carType} car is made with ${this.wheel} wheel`)
    }
    clone(){
        return new Car(this.carType, this.variant, this.wheel);
    }
}


class CarRegistry{
    map:Record<string,Car> = {};
    register(keyHash:string, instance: Car){
        this.map[keyHash] = instance
    }

    create(keyHash:string){
        if(!this.map[keyHash]){
            throw "Not mathcing"
        }
        return this.map[keyHash].clone();
    }
}


const registry = new CarRegistry();

registry.register('hatchBaseHash', new Car('HatchBack', 'base', 'steel'))
registry.register('hatchPremiumHash', new Car('HatchBack', 'premium','alloy'))

registry.register('suvBaseHash', new Car('Suv', 'base', 'steel'))
registry.register('suvPremiumHas', new Car('Suv', 'Premium', 'alloy'))


const hb = registry.create('hatchBaseHash')
hb.builtCar('Red')

const hbp = registry.create('hatchPremiumHash')
hbp.builtCar('Blue')


const sb = registry.create('suvBaseHash')
sb.builtCar('Red')

const sp = registry.create('suvPremiumHas')
sp.builtCar('Blue')