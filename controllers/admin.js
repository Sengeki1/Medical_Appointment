const clinic = require('../models/clinicSchema');

exports.getAddClinic = (req, res, next) => {
  clinic.findAll().then((clinics) => {
    res.render('clinic/clinic-list', {
      clinic: clinics,
      pageTitle: 'All clinics'
    });
  }).catch(err => {
    console.log(err);
  });
};

exports.postAddClinic = (req, res, next) => {

  const Clinic = {
    name: req.body.clinic_name,
    location: req.body.location,
    doctor: req.body.doctor,
    employees: req.body.employees
  }
  Clinic.save()
  .then(() => {
    console.log('Clinic added');
    res.status(200)
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