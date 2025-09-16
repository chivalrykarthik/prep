class HtmlRepot{
    parts:string[] = []

    toString(){
        return 'HTML->'+this.parts.join(',')
    }
}
class PdfRepot{
    parts:string[] = []

    toString(){
        return 'PDF->'+this.parts.join(',')
    }
}


interface ReportBuilder{
    reset():void;
    addHead(title:string):void;
    addSections(section:string):void;
    addFooter():void;
    print():void;
}


class HTMLReporBuilder implements ReportBuilder{
    private Product: HtmlRepot = new HtmlRepot();
    reset(){
        this.Product = new HtmlRepot()
    }
    addHead(title:string){
        this.Product.parts.push(title)
    }
    addFooter(){
        this.Product.parts.push('Footer')
    }
    addSections(section:string){
        this.Product.parts.push(section)
    }
    print(){
        return this.Product.toString();
    }
}


class PdfReporBuilder implements ReportBuilder{
    private Product: PdfRepot = new PdfRepot();
    reset(){
        this.Product = new PdfRepot()
    }
    addHead(title:string){
        this.Product.parts.push(title)
    }
    addFooter(){
        this.Product.parts.push('Footer')
    }
    addSections(section:string){
        this.Product.parts.push(section)
    }
    print(){
        return this.Product.toString();
    }
}


class ReportDirector{
    buildReport(instance:ReportBuilder){
        instance.addHead('Customer')
        instance.addSections('Row 1')
        instance.addSections('Row 2')
        instance.addFooter()
        return instance.print()
    }
}

const html = new HTMLReporBuilder();
const pdf = new PdfReporBuilder();

console.log(new ReportDirector().buildReport(html))
console.log(new ReportDirector().buildReport(pdf))
