const Student = require("../models/moodel1");

// Assuming there is specific student document you want to delete
const studentIdToDelete = "your_student_id_here"; // Replace with the actual ID of the document you want to delete

// Use the `findByIdAndRemove` method to delete a document by its ID
Student.findByIdAndRemove(studentIdToDelete, (err, deletedStudent) => {
    if (err) {
        console.error("Error deleting student:", err);
    } else {
        if (deletedStudent) {
            console.log("Deleted student:", deletedStudent);
        } else {
            console.log("Student not found or already deleted.");
        }
    }
});
