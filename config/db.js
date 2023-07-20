require('dotenv').config();


const mongoose = require('mongoose');
const { LoadingManager } = require('three');

function connectDB() {
      mongoose.connect(process.env.MONGO_CONNECTION_URL, { } );

      const connection = mongoose.connection;
      
      connection.once('open', () => {
        console.log('Database connected.'); 
      })

    }

module.exports = connectDB;