AFRAME.registerComponent('kitchen-material', {
    schema: { src: { type: 'string' } }, // Expecting a path to an image

    init: function() {
        var data = this.data;
        var el = this.el;
        var kitchen = document.getElementById('kitchen'); // Ensure this ID matches your floor entity

        el.addEventListener('click', function () {
            if (kitchen) {
                kitchen.setAttribute('material', 'src', data.src);
                kitchen.setAttribute('material', 'repeat', '3 2'); // Assuming you always want 5x repeat
            }
        });
    }
});
