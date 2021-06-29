const student = require("./student.route");
const router = require("express").Router();

router.use("/student", student);

module.exports = router;
