let publishers = [];

exports.CreatePublisher = (req, res) => {
    const publisher = req.body;
    publishers.push(publisher);
    res.status(201).send('Publisher Berhasil Dibuat');
}

exports.GetPublishers = (req, res) => {
    res.json(publishers);
}

exports.UpdatePublisher = (req, res) => {
    const { id } = req.params;
    const updatedPublisher = req.body;
    publishers[id] = updatedPublisher;
    res.send('Publisher Berhasil Di Update'); 
}

exports.DeletePublisher = (req, res) => {
    const { id } = req.params;
    publishers.splice(id, 1);
    res.send('Publisher Berhasil Dihapus');
}
