AFRAME.registerComponent('menu-switch', {
    schema: {
        targetMenu: {type: 'selector'}, // Selector for the target menu to show
    },
    init: function() {
        var data = this.data;
        var el = this.el; // The clickable menu item
        
        var livingMenu = document.getElementById('LivingMenu');
        var wallMenu = document.getElementById('WallMenu');
        var floorMenu = document.getElementById('FloorMenu');
        var couchMenu = document.getElementById('CouchMenu'); 

        // Add click event listener to this element
        el.addEventListener('click', function () {
            // Toggle the living menu's visibility off
            livingMenu.setAttribute('visible', false);
            livingMenu.setAttribute('position', '0 0.3 0.01')

            // Show the target menu, ensuring it is visible
            if(data.targetMenu.id == 'LivingMenu')
                {
                    wallMenu.setAttribute('visible', false);
                    wallMenu.setAttribute('position', '0 0.3 0.01')
                    floorMenu.setAttribute('visible', false);
                    floorMenu.setAttribute('position', '0 0.3 0.01')
                    couchMenu.setAttribute('visible', false);
                    couchMenu.setAttribute('position', '0 0.3 0.01')
                    livingMenu.setAttribute('visible', true);
                    livingMenu.setAttribute('position', '-1 1.5 0.8')
                }

            else if(data.targetMenu.id == 'WallMenu')
                {
                    livingMenu.setAttribute('visible', false);
                    livingMenu.setAttribute('position', '0 0.3 0.01')
                    floorMenu.setAttribute('visible', false);
                    floorMenu.setAttribute('position', '0 0.3 0.01')
                    couchMenu.setAttribute('visible', false);
                    couchMenu.setAttribute('position', '0 0.3 0.01')
                    wallMenu.setAttribute('visible', true);
                    wallMenu.setAttribute('position', '-1 1.5 0.8')
                }

            else if(data.targetMenu.id == 'FloorMenu')
                {
                    livingMenu.setAttribute('visible', false);
                    livingMenu.setAttribute('position', '0 0.3 0.01')
                    wallMenu.setAttribute('visible', false);
                    wallMenu.setAttribute('position', '0 0.3 0.01')
                    couchMenu.setAttribute('visible', false);
                    couchMenu.setAttribute('position', '0 0.3 0.01')
                    floorMenu.setAttribute('visible', true);
                    floorMenu.setAttribute('position', '-1 1.5 0.8')
                }
            else if(data.targetMenu.id == 'CouchMenu')
                {
                    livingMenu.setAttribute('visible', false);
                    livingMenu.setAttribute('position', '0 0.3 0.01')
                    wallMenu.setAttribute('visible', false);
                    wallMenu.setAttribute('position', '0 0.3 0.01')
                    floorMenu.setAttribute('visible', false);
                    floorMenu.setAttribute('position', '0 0.3 0.01')
                    couchMenu.setAttribute('visible', true);
                    couchMenu.setAttribute('position', '-1 1.5 0.8')
                    
                }
        });
    }
});
