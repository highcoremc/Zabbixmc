<template>
  <div class="form__group" :class="`form__${level}`">
    <input :class="{ 'disabled': disabled }" :name="name" :value="value"
           :placeholder="placeholder" :id="`field${name}`"
           type="text" autocomplete="off" class="form__field"
           spellcheck="false" required ref="text"
           @keydown="unfocus" @input="update()"
    />
    <span class="form__field-border"></span>
    <label :for="`field${name}`" class="form__label">{{ placeholder }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class extends Vue {
  @Prop() public placeholder!: string
  @Prop() public disabled!: string
  @Prop() public level!: string
  @Prop() public value!: string
  @Prop() public name!: string

  $refs!: { text: HTMLFormElement }

  public update(): void {
    this.$emit('input', this.$refs.text.value)
  }

  public unfocus(ev: KeyboardEvent): void {
    const target: HTMLElement = <HTMLElement>ev.target;

    if ('Escape' === ev.key && !!target) {
      target.blur();
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/styles/common.styl'

.form
  &__group
    @extend .disable-highlight
    position relative
    padding 15px 0 0
    margin-top 10px
    width 100%

  &__label
    font-family AcromBold, sans-serif
    @extend .disable-highlight
    position absolute
    display block
    transition 0.2s
    font-size 1rem
    color alpha(gray, 75%)
    top 0

  &__field
    font-family AcromMedium, sans-serif
    background transparent
    color alpha(gray, 75%)
    position relative
    font-size 1.3rem
    padding 7px 0
    width 100%
    outline 0
    border 0

    &:required, &:invalid
      box-shadow: none

    &::placeholder
      color transparent

    &:placeholder-shown ~ .form__label
      font-family AcromExtraBold, sans-serif
      line-height 30px
      font-size 1.3rem
      cursor text
      top 20px

    &:focus:not(.disabled) ~ .form__label,
    &:valid:not(.disabled) ~ .form__label
      position absolute
      transition 0.2s
      font-size 1rem
      display block
      color gray
      top 0

    &-border
      background-image linearGradient(alpha(gray, 60%), alpha(gray, 70%))
      display block
      content ''
      width 100%
      height 4px

      &:after
        background-image linearGradient(default-primary, default-secondary)
        transition width .25s
        display block
        content ''
        height 4px
        width 0

    &:focus:not(.disabled),
    &:valid:not(.disabled)
      color gray

    &:focus:not(.disabled) + &-border:after,
    &:valid:not(.disabled) + &-border:after
      width 100%

  &__low &__field:focus:not(.disabled) ~ .form__label,
  &__low &__field:valid:not(.disabled) ~ .form__label
    color light-primary
  &__low &__field:focus:not(.disabled),
  &__low &__field:valid:not(.disabled)
    color light-primary
  &__low &__field-border:after
    background-image linearGradient(light-primary, light-secondary)

  &__medium &__field:focus:not(.disabled) ~ .form__label,
  &__medium &__field:valid:not(.disabled) ~ .form__label
    color medium-primary
  &__medium &__field:focus:not(.disabled),
  &__medium &__field:valid:not(.disabled)
    color medium-primary
  &__medium &__field-border:after
    background-image linearGradient(medium-primary, medium-secondary)

  &__high &__field:focus:not(.disabled) ~ .form__label,
  &__high &__field:valid:not(.disabled) ~ .form__label
    color high-primary
  &__high &__field:focus:not(.disabled),
  &__high &__field:valid:not(.disabled)
    color high-primary
  &__high &__field-border:after
    background-image linearGradient(high-primary, high-secondary)

</style>