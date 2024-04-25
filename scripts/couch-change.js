AFRAME.registerComponent('couch-change', {
    schema: {
        targetCouch: {type: 'selector'}, // Selector for the target couch to show
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        var couch1 = document.getElementById('couch');
        var couch2 = document.getElementById('couch2');

        el.addEventListener('click', function () {
            if (data.targetCouch.id == 'couch') {
                couch1.setAttribute('visible', true);
                couch2.setAttribute('visible', false)
            }
            else if (data.targetCouch.id == 'couch2') {
                couch1.setAttribute('visible', false);
                couch2.setAttribute('visible', true)
            }
        })
    },
});
