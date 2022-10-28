import { createLogger, format, transports } from 'winston';
const { printf, combine, timestamp, label, prettyPrint } = format;

const myFormat = printf(({ level, message }) => {
    return `${level}: ${message}`;
});

const devLogger = () => {
    return createLogger({
        level: 'debug',
        format: combine(myFormat),
        transports: [new transports.Console()],
    });
};
export default devLogger;
