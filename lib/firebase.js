
var admin = require("firebase-admin");

var serviceAccount = require("./admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ditto-2ae17.firebaseio.com"
});


module.exports = {
    db : admin.database(),
    auth : admin.auth()
};