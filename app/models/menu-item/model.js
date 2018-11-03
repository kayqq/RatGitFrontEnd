import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    price: DS.attr('number'),
    numOfOrders: DS.attr('number'),
    image: DS.attr('string'),
    ingredients: DS.hasMany('ingredients'),
    food_allergies: DS.hasMany('food_allergies'),
});
