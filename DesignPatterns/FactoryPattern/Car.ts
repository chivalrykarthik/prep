interface Vehicle {
    drive():string;
}


class Car implements Vehicle{
    drive(): string {
        return 'Driving a car'
    }
}


class Bike implements Vehicle{
    drive(): string {
        return 'Driving a bike'
    }
}


abstract class Product {
    abstract createProduct():Vehicle;

    public getNewProduct(){
        const obj = this.createProduct();
        return obj.drive();
    }
}


class CarFactory extends Product{
    createProduct(): Vehicle {
        return new Car();
    }
}

class BikeFactory extends Product{
    createProduct(): Vehicle {
        return new Bike();
    }
}


const executeFactory = (instance:Product)=>{
    console.log(instance.getNewProduct());
}


const car = new CarFactory();
executeFactory(car);

const bike = new BikeFactory();
executeFactory(bike)