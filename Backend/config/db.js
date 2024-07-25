const mongoose = require ('mongoose')

const connectDB = async () => {
    try {
        await
        mongoose.connect(process.env,"mongodb+srv:",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } );
        console.log("Mongodb Connected");
    }
    catch(error){
        console.error(error);
        process.exit(1);
    }
}

module.exports = connectDB;