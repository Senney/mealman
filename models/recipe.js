/** Model for storing data required for a recipe
 *
 * This model should contain the following information that is persisted in some form of database backend:
 *  - Recipe name
 *  - Ingredients
 *  - Related diets
 */

module.exports = function(orm, db) {
    var Ingredient = db.models.ingredient;
    var Recipe = db.define('recipe', {
        id: { type: 'serial', key: true },
        name: { type: 'text', required: true },
        createdTime: { type: 'date', required: true, time: true }
    },
    {
        hooks: {
            beforeValidation: function() {
                this.createdTime = new Date();
            }
        },
        validations: {
            name: orm.enforce.ranges.length(1, 1024)
        }
    });

    Recipe.hasMany('ingredients', Ingredient, {}, { required: false, reverse: 'recipes', key: true });
};
