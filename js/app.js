const App = {
  components: {
    Format,
    Helper,
  },

  data() {
    return {
      selectedElement: {
        format: '.fs-a3-0',
        text: null,
        image: null,
      },

      sideNow: '.fs',
      isLeftSidebar: false,
      totalPrice: 1000,
      frontFormats: [
        {
          id: '.fs-a3-0',
          format: 'a3',
          transform: {x: 0, y: 0, width: 150, height: 250, rotation: 0},
          images: [],
          texts: []
        }
      ],
      backFormats: [],
      
      productType: 'tshirts',
      productTypeFrontImage: 'tshirt.png',
      productTypeBackImage: 'tshirt_bs.png',

      popupProduct: false,
      popupColor: false,
      popupSize: false,
      popupImage: false,
      popupShape: false,

      helperIsShow: true,
      helperText: 'Передвиньте зеленую рамку(формат) в ту область, где хотите расположить свой принт. Затем добавьте изображение, форму или текст'
    }
  },

  methods: {
    selectProductType(type, frontImage, backImage) {
      this.productType = type
      this.popupProduct = false
      this.productTypeFrontImage = frontImage
      this.productTypeBackImage = backImage
    },

    addNewFormat(format) {
      if (this.sideNow === '.fs') {
        const key = `${this.sideNow}-${format}-${Math.random()}`
        this.selectedElement.format = key
        this.frontFormats.push({
          id: key, format: format,
          transform: {x: 0, y: 0, width: 150, height: 250, rotation: 0},
          images: [],
          texts: []
        })
      }
      if (this.sideNow === '.bs') {
        const key = `${this.sideNow}-${format}-${Math.random()}`
        this.selectedElement.format = key
        this.backFormats.push({id: key, format: format})
      }

      if (this.frontFormats.length === 2) {
        this.helperIsShow = true
        this.helperText = 'Для смены области редактирования(формата) нажмите на ту область, которую хотите выбрать'
      }

      this.isLeftSidebar = false
    },

    removeFormat(id) {
      console.log(id);
      if (this.sideNow === '.fs') {
        this.frontFormats = this.frontFormats.filter((el)=> el.id !== id)
      }
      if (this.sideNow === '.bs') {
        this.backFormats = this.backFormats.filter((el)=> el.id !== id)
      }
    },

    selectActiveFormat(id) {
      this.selectedElement.format = id
    },

    addText() {
      this.frontFormats.find((el) => el.id === this.selectedElement.format)
        .texts.push({
          text: 'Ваш текст',
          color: '#FE4536',
          font: 'Times New Roman',
          transform: {x: 0, y: 0, width: 100, height: 100, rotation: 0}
        })
    },

    addImage(e) {
      this.popupImage = false
      this.frontFormats.find((el) => el.id === this.selectedElement.format)
        .images.push({
          src: e.target.src,
          transform: {x: 0, y: 0, width: 100, height: 100, rotation: 0}
        })
    },
  },
}


Vue.createApp(App)
  .mount('#app')