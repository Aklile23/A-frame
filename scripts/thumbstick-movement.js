AFRAME.registerComponent('thumbstick-movement', {
  schema: {
      speed: {type: 'number', default: 1}
  },
  init: function() {
      this.vector = new THREE.Vector3();
  },
  tick: function(time, timeDelta) {
      var data = this.data;
      var el = this.el;
      var movementVector = this.vector;

      // Get thumbstick input from the controller
      var inputX = this.el.components['oculus-touch-controls'].data.thumbstickAxis.x;
      var inputY = this.el.components['oculus-touch-controls'].data.thumbstickAxis.y;

      // Apply movement
      movementVector.x = inputX * data.speed * timeDelta / 1000;
      movementVector.z = inputY * data.speed * timeDelta / 1000;
      el.object3D.position.add(movementVector);
  }
});
