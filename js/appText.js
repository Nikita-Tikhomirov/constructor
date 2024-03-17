const Text = {
  props: ['text'],
  components: {ddr},
  computed: {
    styles() {
      return `
      color:${this.text.color};
      font-family:${this.text.font};
      font-size: ${this.text.size}px;
      pointer-events:none;
      user-select:none;
      width:100%;
      `
    }
  },
  template: `
  <ddr
    class="active"
    v-model="text.transform"
    :value="text.transform"
    :id="text.id"
  >
    <p :style="styles">{{text.text}}</p>
  </ddr>
  `
}