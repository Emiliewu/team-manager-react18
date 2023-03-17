const express = require('express');
const cors = require('cors');
const app = express();
const dotenv=require('dotenv').config({path:'./config/.env'});
// console.log(process.env);
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

require('./config/mongoose.config');
require('./routes/player.route')(app);



app.listen(port, () => console.log(`You are listening at port:${port}...`));