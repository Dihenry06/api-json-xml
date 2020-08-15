const routes = require('express').Router();

routes.post('/', (req, res) => {
    const { teste } = req.body;
    console.log(teste);

    res.set('Content-Type', 'text/xml');
    return res.status(200).send("<message>foi</message>");
});

module.exports = routes