const clinic = require('../models/clinicSchema');

exports.getAddClinic = (req, res, next) => {
  clinic.find().then((clinics) => {
    res.render('Clinic/index', {
      clinics: clinics,
      pageTitle: 'All clinics',
      user: req.user
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.showAddClinic = (req, res, next) => {
  res.render('Clinic/edit_clinic', { user: req.user });
}

exports.success = (req, res, next) => {
  res.render('Clinic/success', { user: req.user });
};

exports.postAddClinic = (req, res, next) => {
  const newClinic = new clinic({
    clinic_name: req.body.clinic_name,
    location: req.body.location,
    type: req.body.type,
    doctor: req.body.doctor,
    employees: req.body.employees
  });
  newClinic.save()
  .then(() => {
    console.log('Clinic added');
    res.redirect('/admin/show-clinic-created')
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({msg: 'Error'});
  })
};

exports.getEditClinic = (req, res, next) => {

}

exports.postEditClinic = (req, res, next) => {
 
};

exports.postDeleteClinic = (req, res, next) => {

};