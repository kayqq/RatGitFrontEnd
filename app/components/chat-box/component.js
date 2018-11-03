import Component from '@ember/component';


export default Component.extend({

messages: [{name:'Mary', message: 'Hi'},{name:'Bob' , message: 'How are you'},{name:'Mary',message: 'Good'},{name:'Bob',message: 'Want to watch a movie tonight'}],

  actions: {
    submitMessage() {
    alert('submit was clicked!');
    }
  }
});
