import { format } from 'date-fns';

class Logger {
    static logInfo(message: string): void {
        const timestamp = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSX");
        console.log(`${timestamp} [info]: ${message}`);
    }

    static logError(message: string): void {
        const timestamp = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSX");
        console.error(`${timestamp} [error]: ${message}`);
    }
}

export default Logger;