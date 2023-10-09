const mongoose = require("mongoose");



const connectDatabase = () => {
    // mongoose.connect("process.env.DB_URI",{useNewUrlParser:true,useUnifiedTopoplogy:true,useCreateIndex:true}).then(
    mongoose.connect('mongodb://localhost:27017/Ecommerce', { useNewUrlParser: true }).then(
        (data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);

        });
};

module.exports = connectDatabase



// var mongoose = require('mongoose');

// const connectDatabase =( )=>{
//     mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
//     var connectDatabase = mongoose.connection;
//     connectDatabase.on('connected', function() {
//         console.log('database is connected successfully');
//     });
//     connectDatabase.on('disconnected',function(){
//         console.log('database is disconnected successfully');
//     })
//     connectDatabase.on('error', console.error.bind(console, 'connection error:'));
//     }

// module.exports = connectDatabase;