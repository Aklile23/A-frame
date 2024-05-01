AFRAME.registerComponent('update-review-floor', {
    schema: {
        targetChoice: {type: 'selector'}, // Selector for the target couch to show
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        var floorChoice = document.getElementById('floorChoice');

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
            if (data.targetChoice.id == 'Wood1') {
                floorChoice.setAttribute('value', 'Wood 1');
                floorPrice.setAttribute('value', '3780 USD')
                Sum();
            }
            else if (data.targetChoice.id == 'Wood2') {
                floorChoice.setAttribute('value', 'Wood 2');
                floorPrice.setAttribute('value', '4140 USD')
                Sum();
            }
            else if (data.targetChoice.id == 'Wood3') {
                floorChoice.setAttribute('value', 'Wood 3');
                floorPrice.setAttribute('value', '4410 USD')
                Sum();
            }
            else if (data.targetChoice.id == 'Wood4') {
                floorChoice.setAttribute('value', 'Wood 3');
                floorPrice.setAttribute('value', '3870 USD')
                Sum();
            }
            else if (data.targetChoice.id == 'Ceramic1') {
                floorChoice.setAttribute('value', 'Ceramic 1');
                floorPrice.setAttribute('value', '4590 USD')
                Sum();
            }
            else if (data.targetChoice.id == 'Ceramic2') {
                floorChoice.setAttribute('value', 'Ceramic 2');
                floorPrice.setAttribute('value', '4470 USD')
                Sum();
            }
            else if (data.targetChoice.id == 'Ceramic3') {
                floorChoice.setAttribute('value', 'Ceramic 3');
                floorPrice.setAttribute('value', '4500 USD')
                Sum();
            }
            else if (data.targetChoice.id == 'Ceramic4') {
                floorChoice.setAttribute('value', 'Ceramic 4');
                floorPrice.setAttribute('value', '4860 USD')
                Sum();
            }
        })

        
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
