AFRAME.registerComponent('change-wall-color', {
    schema: {
        color: {type: 'color'} // Define the color as a property of the component
    },
    init: function() {
        var wall = document.querySelector('#wall'); // Assuming the ID of your wall entity is 'walls'

        this.el.addEventListener('click', (evt) => {
            if (wall) {
                // Set the material component's color property to the specified color
                wall.setAttribute('material', 'color', this.data.color);
            }
        });
    }
});
