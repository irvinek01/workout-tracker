const router = require("express").Router();
const routerApi = require("./api");

router.use("/api", routerApi);

module.exports = router;
