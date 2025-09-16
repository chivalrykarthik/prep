interface Payment{
    charge(amt:number):number;
}


class Razor implements Payment{
    charge(amt:number){
        return amt + 10
    }
}


class Stripe implements Payment{
    charge(amt:number){
        return amt + 15
    }
}


abstract class PaymentCreator{
    protected abstract createGateway():Payment;

    checkout(cartAmt:number){
        const paymentInstance = this.createGateway();
        const finalAmt = paymentInstance.charge(cartAmt);
        console.log(`Final Amount is ${finalAmt}`)
    }
}

class IndiaPayment extends PaymentCreator{
    createGateway(){
        return new Razor();
    }
}

class RestPayment extends PaymentCreator{
    createGateway(){
        return new Stripe();
    }
}


function cart(countryCode:string){
    return countryCode === 'in' ? new IndiaPayment() : new RestPayment();
}

const cartObj = cart('us');
cartObj.checkout(10)