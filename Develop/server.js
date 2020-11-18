
const express = require("express")
const app = express();
const PORT = process.env.PORT || 8080;
var mongoose = require("mongoose");
var logger = require("morgan");
const path = require("path")
const apiRoutes = require(path.join(__dirname, "/routes/routes"))
mongoose.connect 
process.env.MONGODB_URI || ('mongodb://localhost/Workitout',
    {
        useNewUrlParser: true,
        useFindAndModify: false
    });



//Middleware for data parsing to JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(logger("dev"));


// this is pulling in the router from routes
app.use(apiRoutes)
// Routes

app.get('/', (request, response) => {
    console.log(__dirname + 'index.html')
    response.sendFile(path.join(__dirname, + 'index.html'));
})

app.get('/exercise', (request, response) => {
    console.log(__dirname + '/exercise.html')
    response.sendFile(path.join(__dirname, 'public/exercise.html'));
})

app.get('/stats', (request, response) => {
    console.log(__dirname + '/stats.html')
    response.sendFile(path.join(__dirname, 'public/stats.html'));
})
// Running the server PORT 
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});



