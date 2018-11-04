import Component from '@ember/component';

export default Component.extend({
    items: null,
    init () {
        this._super();
        //mocks api call here
        this.set('items', [
            {
                name: 'Pho',
                price: 12.50,
                numOfOrders: 400,
                image: null,
                ingredients: ['noodles', 'soup', 'meat', 'cilantro'],
                food_allergies: []
            },
            {
                name: 'Pizza',
                price: 7.89,
                numOfOrders: 250,
                image: null,
                ingredients: ['pepperoni', 'cheese', 'crust'],
                food_allergies: ['cheese']
            }
        ])
      }
});
