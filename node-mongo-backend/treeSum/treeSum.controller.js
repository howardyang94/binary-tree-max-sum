const express = require('express');
const router = express.Router();
const treeSumService = require('./treeSum.service');

// routes
router.post('/sum', maxSum);

module.exports = router;

function maxSum(req, res, next) {
        treeSumService.maxSum(req.body)
            .then(sum => sum ? res.json(sum) : res.status(400).json({ message: 'Invalid input entered, please check your entered string.' }))
            .catch(err => next(err));
    }