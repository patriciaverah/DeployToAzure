const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const hobbiesSchema = new mongoose.Schema({year: String, contest: String, link: String});
const stuiesandjobsSchema = new mongoose.Schema({category: String, year: String, what: String, link: String});
const contactSchema = new mongoose.Schema({link: String});

/*  Models will contain compiled instances of the schemas
 *  so they can be used in the app later on
 */
mongoose.model('hobbies', hobbiesSchema, 'hobbies');
mongoose.model('studiesandjobs', stuiesandjobsSchema, 'studiesandjobs');
mongoose.model('contact', contactSchemam, 'contacts');