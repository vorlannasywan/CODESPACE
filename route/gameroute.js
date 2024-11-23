const express = require('express');
const validategame = require('../middleware/validategame');
const GameController = require('../controller/GameController');
const router = express.Router();

router.post('/', validategame, GameController.CreateGame);
router.get('/get', GameController.GetGames);
router.put('/:id', validategame, GameController.UpdateGame);
router.delete('/:id', GameController.DeleteGame);

module.exports = router;
