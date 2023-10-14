const Student = require("../models/StudentModel");

try {
        let studentExists = await Student.findById(req.params.id);
        if (studentExists) {
            if (studentExists.user === req.id) {

                Note.findByIdAndDelete(req.params.id)
                    .then(
                        res.send("Student Profile Deleted")
                    );
            }
            else {
                res.status(401).send("You do NOT have access to this Student's Profile");
            }
        }
        else {
            res.status(404).send("Student Profile NOT found");
        }
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}
