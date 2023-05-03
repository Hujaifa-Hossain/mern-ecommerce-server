const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/userRoute');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', userRoute)

mongoose.connect(process.env.MONGO_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
}).then(() => {
  app.listen(port, () => {
    console.log(`server @ http://localhost:${port}`)
  })
}).catch(error => {
  console.log(error, 'failed to connect!')
})