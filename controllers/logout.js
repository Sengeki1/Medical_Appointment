const logout = (req, res) => {
    res.clearCookie("token", {
        path: "/",
        secure: true, 
        httpOnly: true,
        sameSite: "None",
    });

    res.clearCookie("authToken", {
        path: "/",
        secure: true, 
        httpOnly: true,
        sameSite: "None",
    });

    res.redirect('/loginUser');
};

module.exports = logout;