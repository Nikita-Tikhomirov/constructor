const Helper = {
  props: ['text'],

  template: `
  <div class="helper">
    <div class="helperWrap">
      <div class="helperClose" @click="$emit('close')"></div>
      <div class="helperText">{{ text }}</div>
      <div class="helperTrigerWrap">
        <div class="helperTrigerCheckbox active"></div>
        <div class="helpertrigerText">Отключить подсказки</div>
      </div>
    </div>
  </div>
  `
}