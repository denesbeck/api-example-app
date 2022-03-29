exports.getApi = (req, res) => {
    res.send(`V2: Get Api response. Body: ${req.body.data?.escape()} Query: ${req.query.data?.escape()}`)
}
exports.postApi = (req, res) => {
    res.send(`V2: Post Api response. Body: ${req.body.data?.escape()} Query: ${req.query.data?.escape()}`)
}
exports.putApi = (req, res) => {
    res.send(`V2: Put Api response. Body: ${req.body.data?.escape()} Query: ${req.query.data?.escape()}`)
}
exports.deleteApi = (req, res) => {
    res.send(`V2: Delete Api response. Body: ${req.body.data?.escape()} Query: ${req.query.data?.escape()}`)
}
