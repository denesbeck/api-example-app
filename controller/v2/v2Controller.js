String.prototype.escape = function() {
    const tagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"':'&quot;',
        "'":'&#x27;',
        '/':'&#x2F;'
    };
    
    return this.replace(/[&<>"'/]/g, (tag)=> {
        return tagsToReplace[tag] || tag;
    });
};

exports.getApi = (req, res) => {
    res.send(`V2: Get Api response. Body: ${req.body.data?.escape()} Query: ${req.query.data?.escape()}`);
};
exports.postApi = (req, res) => {
    res.send(`V2: Post Api response. Body: ${req.body.data?.escape()} Query: ${req.query.data?.escape()}`);
};
exports.putApi = (req, res) => {
    res.send(`V2: Put Api response. Body: ${req.body.data?.escape()} Query: ${req.query.data?.escape()}`);
};
exports.deleteApi = (req, res) => {
    res.send(`V2: Delete Api response. Body: ${req.body.data?.escape()} Query: ${req.query.data?.escape()}`);
};