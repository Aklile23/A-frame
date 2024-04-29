<<<<<<< HEAD
AFRAME.registerComponent('oculus-trigger-listener', {
    init: function () {
      this.el.addEventListener('triggerdown', function (evt) {
        // Get the currently intersected element by the raycaster
        var intersectedEl = this.components.raycaster.getIntersection(this);
        if (intersectedEl && intersectedEl.el.classList.contains('clickable')) {
          // Simulate a click on the intersected element
          intersectedEl.el.emit('click');
        }
      });
    }
  });
  
=======
AFRAME.registerComponent('oculus-trigger-listener', {
    init: function () {
      this.el.addEventListener('triggerdown', function (evt) {
        // Get the currently intersected element by the raycaster
        var intersectedEl = this.components.raycaster.getIntersection(this);
        if (intersectedEl && intersectedEl.el.classList.contains('clickable')) {
          // Simulate a click on the intersected element
          intersectedEl.el.emit('click');
        }
      });
    }
  });
  
>>>>>>> c247387c75121255aecdb36308df23c4e8a1d7d2
  