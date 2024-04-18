AFRAME.registerComponent('material-menu', {
    init: function () {
        var el = this.el;
        var menuVisible = false;
        var materials = el.querySelectorAll('a-plane');
        
        // Function to toggle menu visibility
        this.toggleMenu = function () {
            menuVisible = !menuVisible;
            materials.forEach(function(material) {
                material.setAttribute('visible', menuVisible);
            });
        };

        // Function to set material on click
        this.setMaterial = function (evt) {
            if (!menuVisible) return; // Ignore if menu is not visible
            var materialSrc = evt.target.getAttribute('material').src;
            el.setAttribute('material', 'src', materialSrc);
            el.setAttribute('color', 'white')
        };

        el.addEventListener('click', this.toggleMenu);
        materials.forEach(function(material) {
            material.addEventListener('click', this.setMaterial);
        }, this);
    },
    remove: function () {
        var materials = this.el.querySelectorAll('a-plane');
        this.el.removeEventListener('click', this.toggleMenu);
        materials.forEach(function(material) {
            material.removeEventListener('click', this.setMaterial);
        }, this);
    }
});
