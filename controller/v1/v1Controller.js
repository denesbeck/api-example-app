exports.getApi = (req, res) => {
    res.send(`V1: Get Api response. Body: ${req.body.data} Query: ${req.query.data}`);
};
exports.postApi = (req, res) => {
    res.send(`V1: Post Api response. Body: ${req.body.data} Query: ${req.query.data}`);
};
exports.putApi = (req, res) => {
    res.send(`V1: Put Api response. Body: ${req.body.data} Query: ${req.query.data}`);
};
exports.deleteApi = (req, res) => {
    res.send(`V1: Delete Api response. Body: ${req.body.data} Query: ${req.query.data}`);
};