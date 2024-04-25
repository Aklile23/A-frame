AFRAME.registerComponent('color-toggle', {

    init: function () {
      // Do something when component first attached.
      let el=this.el;
      this.toggleColor = function(){
        el.setAttribute('material', 'src: ../textures/Plywood_b.jpg');
        el.setAttribute('color', '#C0B79F');
         alert('clicked');
      }
      this.el.addEventListener('click', this.toggleColor);
    },
    remove: function () {
      // Do something the component or its entity is detached.
      this.el.removeEventListener('click', this.toggleColor);
    },
});

