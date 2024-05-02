AFRAME.registerComponent('oculus-thumbstick-movement', {
    schema: {
        rotationSpeed: { default: 0.1 },
        rigSelector: {default: "#rig"},
        enabled: {default: true}
    },
    init: function () {
        this.tsData = new THREE.Vector2(0, 0);
    this.thumbstickMoved = this.thumbstickMoved.bind(this);
    this.el.addEventListener('thumbstickmoved', this.thumbstickMoved);
    },
    update: function() {
        this.rigElement = document.querySelector(this.data.rigSelector);
    },
    tick: function (time, delta) {
        if (!this.el.sceneEl.is('vr-mode') || !this.data.enabled) return;
        var el = this.rigElement;
        if (this.tsData.x !== 0) {
            let rotationAmount = -(this.tsData.x) * this.data.rotationSpeed;
            el.object3D.rotation.y += rotationAmount;
        }
    },
    thumbstickMoved: function (evt) {
        this.tsData.set(evt.detail.x, evt.detail.y);
    },
    remove: function () {
        this.el.removeEventListener('thumbstickmoved', this.thumbstickMoved);
    }
});
