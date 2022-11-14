const app = require("express");
const router = app.Router();
const phanhoiC = require("../controllers/phanhoi.c");
router.post("/", phanhoiC.response);

module.exports = router;
