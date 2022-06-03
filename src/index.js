const express = require('express');
var bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://chetanya-rohilla:chetanya@cluster0.jsshkkh.mongodb.net/Chetanya-DB?retryWrites=true&w=majority", {
    //userNewurlParser: true
})
.then(( ) => console.log("connected"))
.catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
