function addPulseAnimation(elementAnim) {
  elementAnim.classList.add('pulse')

  setTimeout(() => {
    elementAnim.classList.remove('pulse')
  }, 1000)
}

const Format = {
  props: ['format', 'active'],
  components: {ddr, Text, Image},
  data() {
    return {
      formats: {
        'a3': {w: 150, h: 250},
        'a4': {w: 120, h: 180},
        'a5': {w: 100, h: 150},
      },
    }
  },

  created() {
    if (!this.format.transform) {
      this.format.transform = {
        x: 0, y: 0, width: this.formats[this.format.format].w, height: this.formats[this.format.format].h, rotation: 0
      }
    }
  },

  computed: {
    rotate() {
      return `rotate: -${this.format.transform.rotation}deg`
    }
  },

  template: `
    <div class="formatWrap">
      <ddr
        :resizable="false"
        :class="{active : format.id === active.format}"
        v-model="format.transform"
        @rotate="handleRotate"
        :value="format.transform"
        @onMouseDown="handleMouseDown"
      >
        <div ref="drag" :style="rotate" class="formatWrap__container">
          <Text v-for="text in format.texts" :text="text"></Text>
          <Image v-for="image in format.images" :image="image"></Image>
        </div>
      </ddr>
    </div>
  `,

  mounted() {
    addPulseAnimation(this.$refs.drag)
  },

  methods: {
    handleRotate(event, transform) {
      this.format.transform = transform
    },

    handleMouseDown() {
      if (this.format.id !== this.active.format) {
        this.active.format = this.format.id
      }
    }
  }
}