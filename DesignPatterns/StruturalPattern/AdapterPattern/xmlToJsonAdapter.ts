interface Fetch{
    request():string;
}

class JsonFetch implements Fetch{
    request(){
        return 'json response'
    }
}

class xmlFetch {
    getXmlData(){
        return 'xml response'
    }
}


class XmltoJsonAdapter implements Fetch{
    xmlInstance:xmlFetch
    constructor(xmlInstance:xmlFetch){
        this.xmlInstance = xmlInstance;
    }
    convertToJson(xmlResonse:string){
        return 'Json Converted '+xmlResonse; 
    }
    request(){
        const xmlRes = this.xmlInstance.getXmlData();
        const jsonRes = this.convertToJson(xmlRes)
        return jsonRes;
    }
}


const jsonObj = new JsonFetch();
console.log(jsonObj.request())

const adapterObj = new XmltoJsonAdapter(new xmlFetch());
console.log(adapterObj.request())
