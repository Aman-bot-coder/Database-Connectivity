const Student = require("../models/moodel1");

try {
    const student = await Student.find({ name: "Aryan Gupta" });
    console.log(student);
}
catch (error) {
    console.log(error.message)
}
