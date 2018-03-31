const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const contactSchema = new mongoose.Schema({contact: String, description: String});
const hobbiesSchema = new mongoose.Schema({year: String, contest: String});
const studiesandjobsSchema = new mongoose.Schema({category: String, year: String, what: String, link: String});

/* Models will contain compiled instances of the schemas
 * so they can be used in the app later
 */
mongoose.model('contact', contactSchema);
mongoose.model('hobbies', hobbiesSchema);
mongoose.model('studiesandjobs', studiesandjobsSchema);