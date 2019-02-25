var express = require("express")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
mongoose.connect('mongodb://localhost/cakes')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public/dist/public"))
var RatingSchema = new mongoose.Schema({
    rating: {type: Number, required: true },
    comment: {type: String, required: true, minlength: 3},
    reviewer: {type: String, required: true}
})
mongoose.model("Rating", RatingSchema)
var Rating = mongoose.model("Rating")
var CakeSchema = new mongoose.Schema({
    imageURL: {type: String, required: true},
    baker: {type: String, required: false},
    ratings: [RatingSchema],
}, {timestamps: true})
mongoose.model('Cake', CakeSchema)
var Cake = mongoose.model('Cake')

app.get('/cakes', function(req, res) {
    Cake.find({}, function(err, cakes) {
        if (err) {
            console.log(err)
            res.json({message: "Error", data: err})

        }
        else {
            res.json({message: "Success", data: cakes})
        }
    })
})
app.get('/cakes/:id', function(req, res) {
    Cake.findOne({_id: req.params['id']}, function(err, cakes) {
        if (err) {
            console.log(err)
            res.json({message: "Error", data: err})

        }
        else {
            res.json({message: "Success", data: cakes})
        }
    })
})
app.post('/cakes', function(req, res) {
    Cake.create({baker: req.body['baker'], imageURL: req.body['imageURL']}, function(err, data){
        if (err) {
            console.log(err)
            res.json({message: "Error", data: err})
        }
        else {
            res.json({message: "Success", data: data})
        }
    })
    
})
app.put('/cakes/:id', function(req, res) {
    console.log(req.body)
    var newRating = new Rating()
    newRating.comment = req.body['comment']
    newRating.rating = req.body['rating']
    newRating.save(function(err, rating){

    
    Cake.findOneAndUpdate({_id: req.params['id']}, {$push: {ratings: newRating}}, function(err, data) {
        if (err) {
            console.log(err)
            res.json({message: "Error", data: err})
        }
        else {
            res.json({message: "Success", data: data})
        }
    })
})
})
app.delete('/cakes/:id', function(req, res) {
    Cake.findOneAndDelete({_id: req.params['id']}, function(err, data) {
        if (err) {
            console.log(err)
            res.json({message: "Error", data: err})
        }
        else {
            res.json({message: "Success", data: data})
        }
    })
}) 

app.delete('/ratings/:mv/:id', function(req, res) {
    console.log(req.params)
    Cake.updateOne({_id: req.params['mv']}, {$pull: {ratings: {_id: req.params['id']}}}, function(err, data) {
        if (err) {
            console.log(err)
            res.json({message: "Error", data: err})
        }
        else {
            res.json({message: "Success", data: data})
        }
    })
})

app.listen(8000, function() {
    console.log("port 8000")
})