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
            if (data.targetMenu) {
                data.targetMenu.setAttribute('visible', true);
                if(data.targetMenu.id == 'WallMenu')
                alert('yes');
                else{
                    alert('damn');
                }
            }
        });
    }
});
