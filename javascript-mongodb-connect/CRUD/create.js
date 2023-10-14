const Student = require("../models/StudentModel");


const student = await Student.create({            // The .create() method calls the .save() method of mongoose to save the user as a new document into databasse.
    enrollNo: 143,
    name: "Aryan Gupta",
    class: 10,
    rollNo: 3
});

console.log(student);
