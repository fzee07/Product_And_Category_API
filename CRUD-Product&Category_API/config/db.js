require('dotenv').config();
import mongoose from 'mongoose';

module.exports = {
    connectDB: async() => {
        //Database Connection
        mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });
        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'Connection Error:'));

        db.once('open', () => {
                console.log('Database Connected.....');
            })
            // .catch(err => {
            //     console.log('Connection Failed.');
            // })
    }
};



// module.exports = connectDB;
