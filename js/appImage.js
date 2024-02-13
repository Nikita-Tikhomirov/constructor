const Image = {
  props: ['image'],
  components: {ddr},
  template: `
  <ddr class="active" v-model="image.transform" :value="image.transform">
    <img :src="image.src" /> 
  </ddr>
  `
}