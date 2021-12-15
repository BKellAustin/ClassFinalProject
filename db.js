const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://<username>:<password>@cluster0.adnml.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {useNewUrlParser: true});

module.exports = mongoose;

