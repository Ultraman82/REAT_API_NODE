const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling get request to /produts'
    })
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
        price: req.body.price
    }
    res.status(201).json({
        message: 'Handling post request to /produts',
        createdProduct: product
    })
});

router.get('/:productId', (req, res, next) => {
    console.log(req.params.productId);
    res.status(200).json({
        message: ':productId'
    })
});

router.patch('/:productId', (req, res, next) => {    
    res.status(200).json({
        message: 'Updated product!'
    })
});

router.delete('/:productId', (req, res, next) => {    
    res.status(200).json({
        message: 'Deleted product!'
    })
});


module.exports = router;
