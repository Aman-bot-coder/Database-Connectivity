const Student = require("../models/StudentModel");

const newStudent = {};
    if (req.body.name) {
        newStudent.name = req.body.name;
    }

    if (req.body.class) {
        newStudent.class = req.body.class;
    }

    if (req.body.rollNo) {
        newStudent.rollNo = req.body.rollNo;
    }



    // Method 1 -->
    let studentExists = await Note.findById(req.params.id);

    if (studentExists) {
        if (studentExists.user === req.id) {
            Note.findByIdAndUpdate(req.params.id, { $set: newStudent }, { new: true })
                .then(
                    res.send(newStudent)
                );  

        }
        else {
            console.log("You do NOT have access to this Student Profile");
            res.status(401).send("You do NOT have access to this Student Profile");
        }
    }
    else {
        console.log("Student Profile NOT found");
        res.status(404).send("Student Profile NOT found");
    }
