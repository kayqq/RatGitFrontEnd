import Component from '@ember/component';

export default Component.extend({

        
    items: null,

    init () {
        this._super();
        //mocks api call here
        this.set('items', [{name:'rice',price:2},{name:'rice',price:2}])
      }
});
