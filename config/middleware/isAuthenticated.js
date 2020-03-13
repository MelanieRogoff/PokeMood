// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res) {
    // If user is logged in, continue w/ request to restricted route
    if (req.userData) {
        return next();
    }

    // If the user isn't logged in, redirect them to the login page
    return res.redirect("/login");
};