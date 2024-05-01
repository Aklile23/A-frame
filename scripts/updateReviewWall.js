AFRAME.registerComponent('update-review-wall', {
    schema: {
        targetChoice: {type: 'selector'}, // Selector for the target couch to show
    },

    init: function () {
        var data = this.data;
        var el = this.el;

        //review menu elements
        var wallChoice = document.getElementById('wallChoice');
        var cabinetChoice = document.getElementById('cabinetChoice');

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
        

        el.addEventListener('click', function() {
            if (data.targetChoice.id == 'Blue') {
                wallChoice.setAttribute('value', 'Blue');
                wallPrice.setAttribute('value', '3780 USD');
                Sum()
            }else if (data.targetChoice.id == 'Grey') {
                wallChoice.setAttribute('value', 'Grey');
                wallPrice.setAttribute('value', '3780 USD');
                Sum()
            }else if (data.targetChoice.id == 'Green') {
                wallChoice.setAttribute('value', 'Green');
                wallPrice.setAttribute('value', '3780 USD');
                Sum()
            }else if (data.targetChoice.id == 'Orange') {
                wallChoice.setAttribute('value', 'Orange');
                wallPrice.setAttribute('value', '3780 USD');
                Sum()
            } 

            else if (data.targetChoice.id == 'Type1') {
                cabinetChoice.setAttribute('value', 'Type 1')
                cabinetPrice.setAttribute('value', '1900 USD')
                Sum()
            }else if (data.targetChoice.id == 'Type2') {
                cabinetChoice.setAttribute('value', 'Type 2')
                cabinetPrice.setAttribute('value', '1720 USD')
                Sum()
            }else if (data.targetChoice.id == 'Type3') {
                cabinetChoice.setAttribute('value', 'Type 3')
                cabinetPrice.setAttribute('value', '1550 USD')
                Sum()
            }else if (data.targetChoice.id == 'Type4') {
                cabinetChoice.setAttribute('value', 'Type 4')
                cabinetPrice.setAttribute('value', '1650 USD')
                Sum()
            }else if (data.targetChoice.id == 'Type5') {
                cabinetChoice.setAttribute('value', 'Type 5')
                cabinetPrice.setAttribute('value', '1700 USD')
                Sum()
            }else if (data.targetChoice.id == 'Type6') {
                cabinetChoice.setAttribute('value', 'Type 6')
                cabinetPrice.setAttribute('value', '1400 USD')
                Sum()
            }
        })

    },

    
});
