AFRAME.registerComponent('floor-material', {
    schema: { src: { type: 'string' } }, // Expecting a path to an image

    init: function() {
        var data = this.data;
        var el = this.el;
        var floor = document.getElementById('floor'); // Ensure this ID matches your floor entity

        el.addEventListener('click', function () {
            if (floor) {
                floor.setAttribute('material', 'src', data.src);
                floor.setAttribute('material', 'repeat', '1 2'); // Assuming you always want 5x repeat
            }
        });
    }
});
