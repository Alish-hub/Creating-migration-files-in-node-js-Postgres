import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { datasource } from "./config/ormconfig";
dotenv.config();
const app = express();
app.use(morgan("combined"));
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
    await datasource
      .initialize()
      .then(() => {
        console.log("database connected successfully");
      })
      .catch((err: any) => console.log({ errorMessage: err }));
  console.log(`server is running in port ${PORT}`);
});
