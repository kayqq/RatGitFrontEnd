import Component from '@ember/component';

export default Component.extend({
    isExpanded: false,
    actions: {
        expandItemAdd() {
            this.set('isExpanded', true);
        },
        contractItemAdd() {
            this.set('isExpanded', false)
        }
    }
});
