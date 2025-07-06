module.exports = function CheckAuth(req, res, next) {
    if (!req.session.userid) {
        return res.redirect("/login");
    }
    next();
};