const Text = {
  props: ['text'],
  components: {ddr},
  computed: {
    styles() {
      return `
      color:${this.text.color};
      font-family:${this.text.font};
      pointer-events:none;
      user-select:none;
      width:100%;
      `
    }
  },
  template: `
  <ddr class="active" v-model="text.transform" :value="text.transform">
    <p :style="styles">{{text.text}}</p>
  </ddr>
  `
}