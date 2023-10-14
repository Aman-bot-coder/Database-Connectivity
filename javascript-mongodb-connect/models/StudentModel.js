const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    enrollNo: {
        type: Number,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    class: {
        type: String,
        required: true
    },

    rollNo: {
        type: Number,
        required: true
    }
})


module.exports = mongoose.model("notes", StudentSchema);
