const mongoose = require('mongoose');
const Movies = require('./schemas/Movies');


module.exports.getById = function (id) {
    return new Promise(function (resolve, reject) {
        Movies.findOne().where({ _id: mongoose.Types.ObjectId(id) }).then(async function (data, err) {
            if (!data) {
                resolve(data); return;
            }
            resolve(data);
        });
    });
};

module.exports.GetByTitle = function () {
    return new Promise(function (resolve, reject) {
        Movies.find().select('-_id title').then(function (data, err) {
            if (!data) {
                resolve(data); return;
            }
            resolve(data);
        });
    });
};

module.exports.Update = async function (req, res, next) {
    console.log(req.body)
    const moviesData = {
        ratings: req.body.ratings,
        genres: req.body.genres,

    }
    Movies.findOneAndUpdate({ '_id': req.body.target }, moviesData).then(function (data, err) {
        if (err) {
            return next({ status: 0, message: trans.lang('message.something_went_wrong') })
        }
        if (!data) {
            return next({ status: 0, message: trans.lang('message.something_went_wrong') })
        }
        return next({ status: 1, message: trans.lang('message.Successfully Loaded') })
    });
};
