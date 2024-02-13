const Draggble = {
  components: {ddr},
  props: ['refs'],

  data() {
    return {
      newPosX: 0, newPosY: 0, startPosX: 0, startPosY: 0,
      centerX: 0, centerY: 0,
      transform: { x: 50, y: 20, width: 100, height: 100, rotation: 0 },
    }
  },
  
  // template: `
  //   <div class="drag" @mousedown.stop="drag">
  //     <div class="closeFormatBtn" @click="$emit('remove')"></div>
  //     <div class="rotateFormatBtn" ref="rotateBtn" draggable="false" @mousedown="rotation($refs.rotateBtn)"></div>
  //     <slot></slot>
  //   </div>
  // `,
  template: `
  <ddr @resize="handleResize" @rotate="handleRotate" @drag="handleDrag" v-model="transform">
    <slot></slot>
  </ddr>
  `,

  mounted() {
    const rect = this.$el.getBoundingClientRect();
    this.centerX = rect.x + (rect.width / 2);
    this.centerY = rect.y + (rect.height / 2);
  },

  methods: {
    handleDrag(event, transform) {
      this.transform = transform;
    },
    handleResize(event, transform) {
      this.transform = transform;
    },
    handleRotate(event, transform) {
      this.transform = transform;
    },

    drag(e) {
      this.$el.classList.add('isDraggble')
      if (e.target == this.$el || e.target.classList.contains('formatWrap') && this.$el.classList.contains('isDraggble', 'active')) {
        this.startPosX = e.clientX;
        this.startPosY = e.clientY;

        this.$el.addEventListener('mousemove', this.move)
        document.body.addEventListener('mouseup', ()=> {
          this.$el.classList.remove('isDraggble')
          this.$el.removeEventListener('mousemove', this.move)
        })
      }
    },

    move(e) {
      this.newPosX = this.startPosX - e.clientX;
      this.newPosY = this.startPosY - e.clientY;
  
      // with each move we also want to update the start X and Y
      this.startPosX = e.clientX;
      this.startPosY = e.clientY;
  
      // set the element's new position:
      this.$el.style.top = (this.$el.offsetTop - this.newPosY) + "px";
      this.$el.style.left = (this.$el.offsetLeft - this.newPosX) + "px";
    },

    rotation(el, e) {
      el.addEventListener('mousemove', this.rotate)
      document.body.addEventListener('mouseup', ()=> {
        el.removeEventListener('mousemove', this.rotate)
      })
  
      // if (image) image.style.setProperty('--rotate', `${angle}deg`);
      // if (wrap) wrap.style.setProperty('--rotate', `${-angle}deg`);
      // if (innerFrameContainer) innerFrameContainer.style.setProperty('--rotate', `${-angle}deg`);
    },

    rotate(e) {
      const x = e.clientX || e.touches[0].clientX;
      const y = e.clientY || e.touches[0].clientY;
  
      const angle = (Math.atan2(y - this.centerY, x - this.centerX) + Math.PI/2) * (180 / Math.PI);
      this.$el.style.rotate = `${angle}deg`
    }
  }
}
