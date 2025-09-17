// Imports
class Encode{
    process(video:string){
        return 'Encoded - ' + video
    }
}

class WaterMark{
    process(video:string){
        return 'added watermark - ' + video + ' - added watermark - ';
    }
}

//Facade pattern
class VideoProcess{
    encode = new Encode();
    waterMark = new WaterMark();

    process(video:string){
        const encode = this.encode.process(video);
        const wm = this.waterMark.process(encode)
        return wm;
    }

}


const videoObj = new VideoProcess();
console.log(videoObj.process('New video'))