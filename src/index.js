const express = require('express')
const route = require('./routes/route')
const mongoose = require('mongoose')
const app = express();
const multer = require('multer')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any())

mongoose.connect("mongodb+srv://rahulravidas024:2iYJiS3c54qnkGXA@cluster0.emr6keu.mongodb.net/group67Database", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3001, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3001))
})