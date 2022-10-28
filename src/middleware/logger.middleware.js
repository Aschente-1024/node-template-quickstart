import logger from "../logger/index.js";

export default function (req, res, next) {
    var fullUrl = req.protocol + "://" + req.get("host") + req.originalUrl;

    logger.debug(fullUrl);
    logger.http("request method " + req.method);
    logger.debug(
        "request body " +
            JSON.stringify(req.method === "GET" ? req.query : req.body)
    );
    next();
}
