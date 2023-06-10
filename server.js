const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//env config
dotenv.config();

//router import
const restroRoutes = require('./routes/restroRoutes')
const ngoRoutes = require('./routes/ngoRoutes')
// const restruentRoutes = require('./routes/resturentRoutes')

//mongoDB connection
connectDB();

//rest object
const app = express();


//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// routes
// app.get('/', (req, res) =>{
//     res.status(200).send({
//         "message": "Node server"
//     });
// });
app.use('/api/v1/restro', restroRoutes);
app.use('/api/v1/ngo', ngoRoutes);
// app.use('/api/v1/restruent', restruentRoutes);


//port
const PORT = process.env.PORT || 8000

//listen
app.listen(PORT, () => {
    console.log(`sever Running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white);
})
