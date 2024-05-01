AFRAME.registerComponent('couch-change', {
    schema: {
        targetCouch: {type: 'selector'}, // Selector for the target couch to show
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        var couch1 = document.getElementById('couch');
        var couch2 = document.getElementById('couch2');
        var couch3 = document.getElementById('couch3');

        var couchChoice = document.getElementById('couchChoice');

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
            if (data.targetCouch.id == 'couch') {
                couch1.setAttribute('visible', true);
                couchChoice.setAttribute('value', 'Couch 1');
                couchPrice.setAttribute('value', '2500 USD');
                Sum();
                couch2.setAttribute('visible', false)
                couch3.setAttribute('visible', false)
            }
            else if (data.targetCouch.id == 'couch2') {
                couch1.setAttribute('visible', false);
                couch2.setAttribute('visible', true)
                couchChoice.setAttribute('value', 'Couch 2');
                couchPrice.setAttribute('value', '3400 USD');
                Sum();
                couch3.setAttribute('visible', false)
            }
            else if (data.targetCouch.id == 'couch3') {
                couch1.setAttribute('visible', false);
                couch2.setAttribute('visible', false);
                couch3.setAttribute('visible', true)
                couchChoice.setAttribute('value', 'Couch 3');
                couchPrice.setAttribute('value', '1500 USD');
                Sum();
            }
        })
    },
});
