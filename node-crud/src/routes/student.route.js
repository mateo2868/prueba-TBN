const router = require("express").Router();
const studentCtrl = require("../controller/student.controller");

//Crear estudiantes
router.get("", studentCtrl.getAllStudents); // get All students
router.get("/:id", studentCtrl.getByid); // get by id
router.post("", studentCtrl.createNewStudent); // Create new student
router.put("/:id", studentCtrl.updateStudent);
router.delete("/:id", studentCtrl.deleteStudent);


module.exports = router;