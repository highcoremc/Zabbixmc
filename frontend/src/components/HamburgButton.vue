<template>
  <div @click="toggleOpen" id="icon"
       :class="{'open': isOpen}">
    <span v-for="n in 4" :key="'s' + n" :style="{'background-color': spanColor }"></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class HamburgButton extends Vue {
  @Prop({default: '#000000'}) public defaultColor!: string
  @Prop({default: '#ffffff'}) public activeColor!: string
  @Prop({default: false}) public isOpen!: string

  public $refs!: { text: HTMLFormElement }

  public toggleOpen(ev: Event) {
    this.$emit('click', ev)
  }

  public get spanColor() {
    return this.isOpen
        ? this.activeColor
        : this.defaultColor;
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

$margin: 18px;

/* Icon 1 */

#icon {
  width: 60px;
  height: 45px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#icon span {
  display: block;
  position: absolute;
  height: 7px;
  width: 100%;
  border-radius: 7px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

/* Icon 3 */

#icon span:nth-child(1) {
  top: 0;
}

#icon span:nth-child(2),
#icon span:nth-child(3) {
  top: $margin;
}

#icon span:nth-child(4) {
  top: $margin * 2;
}

#icon.open span:nth-child(1) {
  top: $margin;
  width: 0;
  left: 50%;
}

#icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#icon.open span:nth-child(4) {
  top: $margin;
  width: 0;
  left: 50%;
}

</style>