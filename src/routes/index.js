const geoRouter = require("./geos");
const companyRouter = require("./companies");
const addressRouter = require("./addresses");
const userRouter = require("./users");
const postRouter = require("./posts");
const commentRouter = require("./comments");

function route(app) {
  app.use("/geos", geoRouter);

  app.use("/companies", companyRouter);

  app.use("/addresses", addressRouter);

  app.use("/users", userRouter);

  app.use("/posts", postRouter);

  app.use("/comments", commentRouter);

}

module.exports = route;
