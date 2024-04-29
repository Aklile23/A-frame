AFRAME.registerComponent('menu-toggle', {
    init: function () {
        // Listening for the keyup event on the window object
        window.addEventListener('keyup', (event) => {
        if (event.code === 'Space') {
            this.toggleMenu();
        }
        });
    },
    toggleMenu: function () {
        // Define the target position
        const targetPosition = '-1 1.5 0.8';
        // Select all menus
        const menus = document.querySelectorAll('.menu');
        menus.forEach((menu) => {
        const position = menu.getAttribute('position');
        if (position && position.x === -1 && position.y === 1.5 && position.z === 0.8) {
            // Toggle visibility
            const isVisible = menu.getAttribute('visible');
            menu.setAttribute('visible', !isVisible);
        }else if (position && position.x === -3.034 && position.y === 1.5 && position.z === -4.6) {
            // Toggle visibility
            const isVisible = menu.getAttribute('visible');
            menu.setAttribute('visible', !isVisible);
        }
        });
    }
    });
