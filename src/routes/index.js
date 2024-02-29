const geoRouter = require("./geos");
const companyRouter = require("./companies");

function route(app) {
  app.use("/geos", geoRouter);

  app.use("/companies", companyRouter);

}

module.exports = route;
