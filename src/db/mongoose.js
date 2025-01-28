import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/InvX25-S")
    .then(() => {
        console.log('Mongoose Connected');
    })
    .catch((err) => {
        console.log('Mongoose Connection Error' + err);
    })

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(() => {
        console.log('Mongoose connection closed due to app termination');
        process.exit(0); // Explicitly terminate the Node.js process
    });
});