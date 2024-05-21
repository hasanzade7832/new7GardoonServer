const mongoose = require('mongoose');
const CategorySchema = new mongoose.Schema({
    image: {
        required: true,
        type: String,
    },
    slug: {
        required: true,
        type: String,
    },
    image: {
        required: true,
        type: String,
    },
    imageAlt: {
        required: true,
        type: String,
    },
    situation: {
        required: true,
        type: Boolean,
    },
    shortDesc: {
        required: true,
        type: String,
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString('fa-IR', { hour: '2-digit', minute: '2-digit' })
    },
});
module.exports = mongoose.model("Category", CategorySchema);