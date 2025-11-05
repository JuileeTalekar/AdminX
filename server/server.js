require("dotenv").config();
const express = require("express");
const app = express();
const AuthRoute = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");


app.use(express.json());
app.use("/api/auth", AuthRoute);
app.use("/api/form", contactRoute);


const PORT = 5000;


// app.use(errorMiddleware);

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});