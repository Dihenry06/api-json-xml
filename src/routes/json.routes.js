const routes = require('express').Router();

routes.post('/', (req, res) => {
    const { teste } = req.body;
    console.log(teste);
    return res.status(200).json({ message: 'foi' });
});

module.exports = routes