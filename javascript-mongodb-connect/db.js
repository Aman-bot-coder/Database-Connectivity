const mongoose = require('mongoose');
const mongoose_url = "mongodb://127.0.0.1/cloudnotes"

const connectToMongo = async () => {
    await mongoose.connect(mongoose_url)
    const dbConnect = mongoose.connection;          // Connection object

    console.log("Connected To Mongo Successfully");
}

module.exports = connectToMongo;
