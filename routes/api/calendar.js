const router = require("express").Router();
const calendarRoutes = require("./calendar");

//Calendar routes
router.use("/calendar", calendarRoutes);

module.exports = router;
