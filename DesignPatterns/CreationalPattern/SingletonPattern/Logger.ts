class Logger{
    private static _instance:Logger;
    private level:string;
    private constructor(level:string){
        this.level = level;
    }

    static instance(level:string):Logger{
        if(!Logger._instance)
            Logger._instance = new Logger(level)
        return Logger._instance;
    }

    print(msg:string){
        console.log(`${this.level} - ${msg}`)
    }
}


const logger = Logger.instance('Info')

logger.print('Welcome to my World')