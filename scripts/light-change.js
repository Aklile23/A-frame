AFRAME.registerComponent('light-change', {
    schema: {
        targetLight: {type: 'selector'}, // Selector for the target couch to show
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        var spot = document.getElementById('spotLight');
        var blue = document.getElementById('BlueNeon');
        var red = document.getElementById('RedNeon');
        var yellow = document.getElementById('YellowNeon');
        var green = document.getElementById('GreenNeon')

        el.addEventListener('click', function () {
            if (data.targetLight.id == 'spotLight') {
                spot.setAttribute('visible', true);
                blue.setAttribute('visible', false)
                red.setAttribute('visible', false)
                yellow.setAttribute('visible', false)
                green.setAttribute('visible', false)
            }
            else if (data.targetLight.id == 'BlueNeon') {
                spot.setAttribute('visible', false);
                blue.setAttribute('visible', true)
                red.setAttribute('visible', false)
                yellow.setAttribute('visible', false)
                green.setAttribute('visible', false)
            }
            else if (data.targetLight.id == 'RedNeon') {
                spot.setAttribute('visible', false);
                blue.setAttribute('visible', false)
                red.setAttribute('visible', true)
                yellow.setAttribute('visible', false)
                green.setAttribute('visible', false)
            }
            else if (data.targetLight.id == 'YellowNeon') {
                spot.setAttribute('visible', false);
                blue.setAttribute('visible', false)
                red.setAttribute('visible', false)
                yellow.setAttribute('visible', true)
                green.setAttribute('visible', false)
            }
            else if (data.targetLight.id == 'GreenNeon') {
                spot.setAttribute('visible', false);
                blue.setAttribute('visible', false)
                red.setAttribute('visible', false)
                yellow.setAttribute('visible', false)
                green.setAttribute('visible', true)
            }
        })
    },

});
