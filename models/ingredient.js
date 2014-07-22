/** Model for an ingredient in mealman
 * An ingredien is comprised of the following aspects:
 *  - A name
 */

module.exports = function(orm, db) {
    var Ingredient = db.define('ingredient', {
        id: { type: 'serial', key: true },
        name: { type: 'text', required: true }
    },
    {

    });
};
