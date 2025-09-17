interface Device{
    setVolume(volumen:number):number;
}


class TvRemote implements Device{
    volume:number = 0;
    setVolume(volume:number){
        this.volume = volume;
        return this.volume;
    }

}

class RadioRemote implements Device{
     volume:number = 0;
    setVolume(volume:number){
        this.volume = volume;
        return this.volume;
    }
}

class UpdRemote{
    device:Device;
    constructor(device:Device){
        this.device = device;
    }

    mute(){
       return this.device.setVolume(0);
    }
}



const tvRemote = new TvRemote();
console.log(tvRemote.setVolume(10))

const radioRemote = new TvRemote();
console.log(radioRemote.setVolume(10))


const UpdRemoteTv = new UpdRemote(tvRemote);
console.log(UpdRemoteTv.mute())