const Movies = require('../../models/Movies');

exports.FindByTitle = async function (req, res, next) {
    const data = await Movies.GetByTitle();
    res.status(200).json(data);

};

exports.Update = function (req, res, next) {
    Movies.Update(req, res, function (data) {
        res.status(200).json(data);
    });
};

