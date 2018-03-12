const mongoose = require('mongoose');

// Schemas define the document structure used in the app
const hobbiesSchema = new mongoose.Schema({});
const stuiesandjobsSchema = new mongoose.Schema({});

/*  Models will contain compiled instances of the schemas
 *  so they can be used in the app later on
 */
mongoose.model('hobbies', hobbiesSchema);
mongoose.model('studiesandjobs', stuiesandjobsSchema);
