export default function handler(req, res) {
    res.setPreviewData({
        user: "Shiv"
    })
    // res.end("Preview Mode Enabled")
    res.redirect(req.query.redirect);
    // http://localhost:3000/api/preview?redirect=/news
}