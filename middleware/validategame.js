module.exports = (req, res, next) => {
    const { name, price, genre } = req.body;
    if (!name || typeof price !== 'number' || !genre) {
        return res.status(400).send('Nama dan Genre Harus Ada, dan Price Harus Angka');
    }
    next();
}
