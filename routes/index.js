const express = require('express');
const router = express.Router();
const Movies = require("../models/Movies.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get("/movies", (req, res, next) => {
    Movies.find()
    .then((response)=>{

        res.render("movies.hbs", {
            response
        })
    })
    .catch((error)=>{
        next(error)
    })
})

router.get("/movie/:id", (req, res, next)=>{
    const {id} = req.params
    Movies.findById(id)
    .then((response)=>{
        res.render("movie-details.hbs",{
            response
        })
    })
    .catch((error)=>{
        next(error)
    })
})

module.exports = router;
