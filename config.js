const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Fu93DSAS#REOYweYsbhX5Jwa2X5vrht_WQpKrReGGeZEg5olWZJQ",
MONGODB: process.env.MONGODB || "mongodb://mongo:femHfGLKcnAgOqrZAMfiRNTHAbRGzJyM@junction.proxy.rlwy.net:22564",

};
