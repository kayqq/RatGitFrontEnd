import Component from '@ember/component';

export default Component.extend({

  taskItems : [{task:'Gym'}, {task:'School'}, {task:'Dog Walk'}],

  actions: {
    submitTask() {
      alert('task was submitted!');
    }
  }

});
