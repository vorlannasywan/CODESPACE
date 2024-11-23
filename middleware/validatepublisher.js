module.exports = (req, res, next) => {
    const { name, contact } = req.body;
    if (!name || !contact) {
        return res.status(400).send('Nama dan Kontak Harus Ada');
    }
    next();
}
