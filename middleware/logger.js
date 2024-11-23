module.exports = (req, res, next) => {
    console.log(`Request Type: ${req.method} | URL: ${req.url}`);
    next();
}
