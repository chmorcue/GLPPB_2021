var express = require('express');
const Donaciones = require('../class/donaciones.class');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ListarDonaciones', (req, res) => {
  let donaciones = new Donaciones();

  donaciones.Listar((err, data) => {
    res.json(data);
  })
})

module.exports = router;
