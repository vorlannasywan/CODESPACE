let games = [];

exports.CreateGame = (req, res) => {
    const game = req.body;
    games.push(game);
    res.status(201).send('Game Berhasil Dibuat');
}

exports.GetGames = (req, res) => {
    res.json(games);
}

exports.UpdateGame = (req, res) => {
    const { id } = req.params;
    const updatedGame = req.body;
    games[id] = updatedGame;
    res.send('Game Berhasil Di Update'); 
}

exports.DeleteGame = (req, res) => {
    const { id } = req.params;
    games.splice(id, 1);
    res.send('Game Berhasil Dihapus');
}
