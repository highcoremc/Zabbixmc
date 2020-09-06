<template>
    <div class="logo-badge">
        <div class="logo-badge__text">{{ title }}</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  @Prop() private title!: string;
}
</script>


<style scoped lang="stylus">

.logo-badge
    width 84px
    height 74px
    margin-top 34px
    margin-left 35px
    position: absolute;

    &__text
        width 100%
        height 100%
        font-family AcromBold
        position relative
        background-image linear-gradient(180deg, rgb(13 218 65) 17%, rgba(18,125,22,1) 100%)
        -webkit-text-stroke 1px #246b1f
        text-transform uppercase
        color #246b1f
        letter-spacing 2px
        text-decoration none
        display flex
        justify-content center
        align-items center
        font-weight bold
        font-size 26px
        border-radius 0 0 .2rem 0
        box-shadow -5px 5px 20px 0px #43a73b
        &::before
            content ""
            position absolute
            width 9px
            height 100%
            background-color #30b828
            background-image linear-gradient(180deg, rgb(61 232 104) 17%, rgb(39 117 42) 100%)
            top .27rem
            left -9px
            transform skewY(-45deg)
            border-radius 0 0 0 1px
        &::after
            content ""
            position absolute
            bottom -0.53rem
            right .3rem
            width calc(100%)
            height 9px
            background-color #156f0e
            transform skewX(-45deg)
            border-radius 0.1rem 0 0.1rem 0.05rem
</style>
