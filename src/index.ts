import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use("/", router);
const port = process.env.PORT || "3000";
app.listen(port);
export default app;
