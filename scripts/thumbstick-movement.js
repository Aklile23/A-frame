AFRAME.registerComponent('thumbstick-movement', {
    schema: {
      speed: {type: 'number', default: 5}  // Speed of movement
    },
  
    init: function () {
      this.vector = new THREE.Vector3();  // Create a vector for movement
    },
  
    tick: function (time, timeDelta) {
      var el = this.el;
      var data = this.data;
      var vector = this.vector;
  
      // Get current input from the thumbstick
      el.addEventListener('thumbstickmoved', (evt) => {
        vector.x = evt.detail.x * data.speed * timeDelta / 1000;  // Movement on the x-axis
        vector.z = evt.detail.y * data.speed * timeDelta / 1000;  // Movement on the z-axis
        vector.y = 0;  // Typically no vertical movement for basic navigation
  
        // Apply movement vector based on the camera's heading
        el.object3D.localToWorld(vector);  // Adjust vector to align with the direction the camera is facing
        el.object3D.position.add(vector);  // Update position
      });
    }
  });
  