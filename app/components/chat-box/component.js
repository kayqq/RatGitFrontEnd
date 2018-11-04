import Component from '@ember/component';


export default Component.extend({

messages: [{name:'Mary', text: 'Hi'},{name:'Bob' , text: 'How are you'},{name:'Mary',text: 'Good'},{name:'Bob',text: 'Want to watch a movie tonight'}],

  actions: {
    submitMessage() {
    alert('submit was clicked!');
    }
  }
});
