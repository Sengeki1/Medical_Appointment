exports.loginUser = (req, res, next) => {
    res.render('Login/index',);
};

exports.singupUser = (req, res, next) => {
    res.render('Register/index',);
};

exports.appointment = (req, res, next) => {
    res.render('Appointment/index',);
};

exports.success = (req, res, next) => {
    res.render('Appointment/success',);
};