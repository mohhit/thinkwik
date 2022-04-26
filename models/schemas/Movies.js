var mongoose = require('mongoose');

const MoviesSchema = mongoose.Schema({
    title: { type: String, required: false, default: "" },
    released_year: { type: String, required: false, default: "" },
    ratings: { type: String, required: false, default: "" },
    genres: { type: String, required: false, trim: true, default: "" },
    status: { type: Number, required: true, default: 1 },
},
    { timestamps: true });
module.exports = mongoose.model('Movies', MoviesSchema);