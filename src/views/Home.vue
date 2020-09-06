<template>
  <div class="home">
    <div class="row">
      <div class="col-md-8 col-sm-12">
        <div class="title">
          <div class="title__background">zabbixmc</div>
          <div class="title__content">Почувствуй себя настоящим майнкрафтером!</div>
          <div class="title__subtitle">Выживание на 1.15.2 с друзьями. Только у нас ты сможешь почувствовать всю
            силу этой прекрасной игры!
          </div>
        </div>
      </div>

      <div class="col-md-4">
        {image}
      </div>

      <div class="col-md-12">
        <div class="game-start">
          <div class="btn btn-primary btn-title">
            <i class="icon">
              <img src="~@mojang/web-theme-bootstrap/assets/svg/icons/color-steve-alex.svg" alt="">
            </i>
            Начать игру
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <Subtitle :title="'выгодные'" :content="'предложения'"/>
        <div class="offers">
          <div class="offers__card">
            <div class="offers__card-title">Скидки!</div>
            <div class="offers__card-subtitle">Неделя бешенных скидок. Успей выгодно закупиться!</div>
            <div class="offers__card-content"></div>
          </div>
          <div class="offers__card">
            <div class="offers__card-title">Кланы</div>
            <div class="offers__card-subtitle">Хватит получать п?*ды. Собери и давайте отпор обидчикам вместе.</div>
            <div class="offers__card-content"></div>
          </div>
          <div class="offers__card">
            <div class="offers__card-title">YouTube</div>
            <div class="offers__card-subtitle">Снимай у нас на нашем сервере за это награду.</div>
            <div class="offers__card-content"></div>
          </div>
          <div class="offers__card">c</div>
          <div class="offers__card">l</div>
          <div class="offers__card">l</div>
          <div class="offers__card">l</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Subtitle from '@/components/Subtitle.vue'

@Component({
  components: {
    Subtitle
  }
})
export default class extends Vue {
}
</script>

<style lang="stylus">

.offers
  &__card
    content ''
    background-color #0F4FE6
    padding 100px;

.game-start
  margin 4rem 5.8rem

  &::before
    content ' '
    width 258px
    height 258px
    position absolute
    top -100px
    left 30%
    background-repeat no-repeat
    background url("~@/assets/images/green-plus.png")


.title
  &__content
    font-family AcromExtraBold, sans-serif
    text-transform uppercase
    color black
    font-size 31px
    max-width 700px
    margin-left 88px
    margin-top -65px
    position relative

  &__background
    font-family ProximaNovaBlack, sans-serif
    text-transform uppercase
    font-size 8.1875rem
    color #ebebf9
    margin-top 5rem
    margin-left 1rem
    position relative
    -moz-user-select none
    -khtml-user-select none
    -webkit-user-select none
    -ms-user-select none
    user-select none

    &::before
      background-image url('~@/assets/images/grid_title.png')
      background-repeat no-repeat
      content ''
      position absolute
      width 158px
      height 159px
      top 34px
      left 20px

    &::after
      background-image url('~@/assets/images/cross.png')
      background-repeat no-repeat
      content ''
      position absolute
      width 47px
      height 46px
      top -36px
      right 70px

  &__subtitle
    font-family AcromMedium, sans-serif
    color #000
    font-size 24.91px
    max-width 700px
    margin-left 92px
    margin-top 80px

</style>