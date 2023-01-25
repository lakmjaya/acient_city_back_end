const express = require('express');
const router = express.Router();
const Cities = require('../models/cities.js')
// Remember INDUCES

// Index
router.get('/', (req, res)=>{
    Cities.find({}, (err, foundCities)=>{
        res.json(foundCities)
    })
});
// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res)=>{
    Cities.findByIdAndRemove(req.params.id, (err, deletedTodo)=>{
        res.json(deletedTodo)
    })
});
// Update
router.put('/:id', (req, res)=>{
    Cities.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
        res.json(updatedTodo)
    })
});
// Create
router.post('/', (req, res)=>{
    Cities.create(req.body, (err, createdTodo)=>{
        res.json(createdTodo) //.json() will send proper headers in response so client knows it's json coming back
    })
})
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Cities.findById(req.params.id, (err, foundTodo)=>{
        res.json(foundTodo)
    })
})


module.exports = router