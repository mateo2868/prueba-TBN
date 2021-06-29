const { sequelize } = require('../config/sequelize');
const Student = require("../model/student");

const getAllStudents = (req, res) => {
    const body = req.body;
    (async () => {
        await sequelize.sync();
        const students = await Student.findAll();
        res.json(students);
    })();
}

const getByid = (req, res) => {
    (async () => {
        await sequelize.sync();
        const student = await Student.findOne(req.id);
        res.json(student);
    })();
}

const createNewStudent = (req, res) => {
    const body = req.body;
    (async () => {
        await sequelize.sync();
        Student.create({
            name: body.name,
            lastname: body.lastname,
            age: body.age
        }).then(student => {
            res.json(student);
        }).catch(err => {
            res.status(500).json({message: err.message})
        });
    })();
}

const deleteStudent = (req, res ) => {
    (async () => {
        await sequelize.sync();
        const student = await Student.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json(student);
    })();
}

const updateStudent = (req, res) => {
    const body = req.body;
    (async () => {
        await sequelize.sync();
        Student.findOne({ where: { id: req.params.id } })
        .then(student => {
            // Check if record exists in db
            if (student) {
                student.update({
                    name: body.name,
                    lastname: body.lastname,
                    age: body.age
                }).then((upd) => {
                    res.json(upd);
                })
            }
        }).catch(err => console.log(err))
    })();
}

module.exports = {
    createNewStudent,
    getAllStudents, getByid,
    deleteStudent, updateStudent
}