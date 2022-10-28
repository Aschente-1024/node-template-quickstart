import Express from "express";
import sequelize from "./models/index.js";
import logMiddleware from "./middleware/logger.middleware.js";
import logger from "./logger/index.js";
import User from "./models/userModel.js";
import routes from "./routes/index.js";

const app = Express();
sequelize.sync();
console.log(sequelize.models);

app.use(Express.json());
app.use("/", logMiddleware);

app.use("/", routes);

app.get("/", (req, res) => {
    User.findOne().then((data) => {
        logger.info(JSON.stringify(data));
    });

    res.json("Hello world");
});

export default app;
