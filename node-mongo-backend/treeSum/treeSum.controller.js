const express = require('express');
const router = express.Router();
const treeSumService = require('./treeSum.service');

// routes
router.post('/sum', maxSum);
// router.get('/', getTree);

// router.post('/authenticate', authenticate);
// router.post('/register', register);
// router.get('/', getAll);
// router.get('/current', getCurrent);
// router.get('/:id', getById);
// router.put('/:id', update);
// router.delete('/:id', _delete);

module.exports = router;

function maxSum(req, res, next) {
    // console.log(req.body);
        treeSumService.maxSum(req.body)
            .then(sum => sum ? res.json(sum) : res.status(400).json({ message: 'Invalid input entered, please check your entered string.' }))
            .catch(err => next(err));
    }
// function getTree(req, res, next) {
//         treeSumService.getAll()
//             .then(users => res.json(users))
//             .catch(err => next(err));
//     }

// function authenticate(req, res, next) {
//     userService.authenticate(req.body)
//         .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
//         .catch(err => next(err));
// }

// function register(req, res, next) {
//     userService.create(req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function getAll(req, res, next) {
//     userService.getAll()
//         .then(users => res.json(users))
//         .catch(err => next(err));
// }

// function getCurrent(req, res, next) {
//     userService.getById(req.user.sub)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function getById(req, res, next) {
//     userService.getById(req.params.id)
//         .then(user => user ? res.json(user) : res.sendStatus(404))
//         .catch(err => next(err));
// }

// function update(req, res, next) {
//     userService.update(req.params.id, req.body)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }

// function _delete(req, res, next) {
//     userService.delete(req.params.id)
//         .then(() => res.json({}))
//         .catch(err => next(err));
// }