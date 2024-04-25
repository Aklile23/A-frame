AFRAME.registerComponent('kitchen-menu-switch', {
    schema: {
        targetMenu: {type: 'selector'}, // Selector for the target menu to show
    },

    init: function () {
        var data = this.data;
        var el = this.el; // The clickable menu item

        var kitchenMenu = document.getElementById('KitchenMenu');
        var cabinetMenu = document.getElementById('CabinetMenu');
        var underLightMenu = document.getElementById('UnderLightMenu');

        el.addEventListener('click', function () {

            kitchenMenu.setAttribute('visible', false);
            kitchenMenu.setAttribute('position', '0 0.3 0.01')

            if(data.targetMenu.id == 'KitchenMenu'){
                cabinetMenu.setAttribute('visible', false);
                cabinetMenu.setAttribute('position','0 0.3 0.01')
                kitchenMenu.setAttribute('visible', true);
                kitchenMenu.setAttribute('position','-3.034 1.5 -4.6')
                underLightMenu.setAttribute('visible', false);
                underLightMenu.setAttribute('position', '0 0.3 0.01');
            }
            else if(data.targetMenu.id == 'CabinetMenu'){
                kitchenMenu.setAttribute('visible', false);
                kitchenMenu.setAttribute('position', '0 0.3 0.01');
                cabinetMenu.setAttribute('visible', true);
                cabinetMenu.setAttribute('position','-3.034 1.5 -4.6')
                underLightMenu.setAttribute('visible', false);
                underLightMenu.setAttribute('position', '0 0.3 0.01');
            }
            else if (data.targetMenu.id == 'UnderLightMenu') {
                kitchenMenu.setAttribute('visible', false);
                kitchenMenu.setAttribute('position', '0 0.3 0.01');
                cabinetMenu.setAttribute('visible', false);
                cabinetMenu.setAttribute('position','0 0.3 0.01')
                underLightMenu.setAttribute('visible', true);
                underLightMenu.setAttribute('position','-3.034 1.5 -4.6')
            }
            
        })
    },
});
