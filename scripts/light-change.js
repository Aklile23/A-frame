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
        var green = document.getElementById('GreenNeon');

        var lightChoice = document.getElementById('kitchenLightChoice')

        var lightPrice = document.getElementById('kitchenLightPrice')
        var floorPrice = document.getElementById('floorPrice');
        var cabinetPrice = document.getElementById('cabinetPrice');
        var wallPrice = document.getElementById('wallPrice');
        var couchPrice = document.getElementById('couchPrice');

        var Sum = function () {
            var lightPriceV = lightPrice.getAttribute('value');
            lightPriceV.replace('USD', '');
            lightPriceV = parseFloat(lightPriceV);

            var floorPriceV = floorPrice.getAttribute('value');
            floorPriceV.replace('USD', '');
            floorPriceV = parseFloat(floorPriceV);

            var wallPriceV = wallPrice.getAttribute('value');
            wallPriceV.replace('USD', '');
            wallPriceV = parseFloat(wallPriceV);

            var cabinetPriceV = cabinetPrice.getAttribute('value');
            cabinetPriceV.replace('USD', '');
            cabinetPriceV = parseFloat(cabinetPriceV);

            var couchPriceV = couchPrice.getAttribute('value');
            couchPriceV.replace('USD', '');
            couchPriceV = parseFloat(couchPriceV);

            var total = lightPriceV  + floorPriceV + wallPriceV + cabinetPriceV + couchPriceV ;
            document.getElementById('totalPrice').setAttribute('value', total + ' USD');
        }

        el.addEventListener('click', function () {
            if (data.targetLight.id == 'spotLight') {
                spot.setAttribute('visible', true);
                lightChoice.setAttribute('value', 'Spot Lights')
                lightPrice.setAttribute('value', '200 USD')
                Sum();
                blue.setAttribute('visible', false)
                red.setAttribute('visible', false)
                yellow.setAttribute('visible', false)
                green.setAttribute('visible', false)
            }
            else if (data.targetLight.id == 'BlueNeon') {
                spot.setAttribute('visible', false);
                blue.setAttribute('visible', true)
                lightChoice.setAttribute('value', 'Blue')
                lightPrice.setAttribute('value', '130 USD')
                Sum()
                red.setAttribute('visible', false)
                yellow.setAttribute('visible', false)
                green.setAttribute('visible', false)
            }
            else if (data.targetLight.id == 'RedNeon') {
                spot.setAttribute('visible', false);
                blue.setAttribute('visible', false)
                red.setAttribute('visible', true)
                lightChoice.setAttribute('value', 'Red')
                lightPrice.setAttribute('value', '130 USD')
                Sum()
                yellow.setAttribute('visible', false)
                green.setAttribute('visible', false)
            }
            else if (data.targetLight.id == 'YellowNeon') {
                spot.setAttribute('visible', false);
                blue.setAttribute('visible', false)
                red.setAttribute('visible', false)
                yellow.setAttribute('visible', true)
                lightChoice.setAttribute('value', 'Yellow')
                lightPrice.setAttribute('value', '130 USD')
                Sum()
                green.setAttribute('visible', false)
            }
            else if (data.targetLight.id == 'GreenNeon') {
                spot.setAttribute('visible', false);
                blue.setAttribute('visible', false)
                red.setAttribute('visible', false)
                yellow.setAttribute('visible', false)
                green.setAttribute('visible', true)
                lightChoice.setAttribute('value', 'Green')
                lightPrice.setAttribute('value', '130 USD')
                Sum()
            }
        })
    },
    
});
