var orm         = require("orm");
var database    = require("../config/database")

var connection = null;

/** Function to set up models. **/
function setup(db, cb) {
    require("./ingredient")(orm, db);
    require("./recipe")(orm, db);
    return cb(null, db);
}

module.exports = function(cb) {
    if (connection) return cb(null, connection);

    orm.connect(database.url, function (err, db) {
        if (err) return cb(err);

        connection = db;
        db.settings.set('instance.returnAllErrors', true);
        setup(db, cb);
    });
};
