import Component from '@ember/component';

export default Component.extend({
    isExpanded: false,
    actions: {
        expandItemAdd() {
            console.log('expanding');
            this.set('isExpanded', true);
        },
        contractItemAdd() {
            console.log('contracting');
            this.set('isExpanded', false)
        }
    }
});
