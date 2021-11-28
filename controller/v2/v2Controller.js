exports.getApi = (req, res) => {
    res.send(`V2: Get Api response. Body: ${req.body.data} Query: ${req.query.data}`);
};
exports.postApi = (req, res) => {
    res.send(`V2: Post Api response. Body: ${req.body.data} Query: ${req.query.data}`);
};
exports.putApi = (req, res) => {
    res.send(`V2: Put Api response. Body: ${req.body.data} Query: ${req.query.data}`);
};
exports.deleteApi = (req, res) => {
    res.send(`V2: Delete Api response. Body: ${req.body.data} Query: ${req.query.data}`);
};