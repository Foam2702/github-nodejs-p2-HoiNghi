const app = require("express");
const router = app.Router();
const hoinghiC = require("../controllers/hoinghi.c");

router.post("/", hoinghiC.signUp);
// router.post("/", hoinghiC.response);

module.exports = router;
