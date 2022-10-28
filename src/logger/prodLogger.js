import { createLogger, format, transports } from "winston";
const { printf } = format;

const prodLogger = () => {
    return createLogger({
        level: "info",
        format: format.json(),
        transports: [new transports.Console()],
    });
};
export default prodLogger;
