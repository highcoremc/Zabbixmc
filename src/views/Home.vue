<template>
  <div class="home">
    <div class="row">
      <div class="col-md-12">
        <div class="title">
          <div class="title__background">zabbixmc</div>
          <div class="title__content">Почувствуй себя настоящим майнкрафтером!</div>
          <div class="title__subtitle">Выживание на 1.15.2 с друзьями. Только у нас ты сможешь почувствовать всю
            силу этой прекрасной игры!
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <div class="game-start">
          <div class="btn btn-primary btn-title">
            <i class="icon">
              <img src="~@mojang/web-theme-bootstrap/assets/svg/icons/color-steve-alex.svg" alt="">
            </i>
            В магазин
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <Subtitle :title="'выгодные'" :content="'предложения'"/>
        <div class="offers">
          <div class="offers-left">
            <div class="offers__card offers__card-sales">
              <div class="offers__card-content">
                <div class="offers__card-title">Скидки!</div>
                <div class="offers__card-subtitle">Неделя бешенных скидок. Успей выгодно закупиться!</div>
              </div>
            </div>
            <div class="offers__group">
              <div class="offers__card offers__card-clans">
                <div class="offers__card-content">
                  <div class="offers__card-title">Кланы</div>
                  <div class="offers__card-subtitle">Собери клан и давайте отпор обидчикам
                    вместе.
                  </div>
                </div>
              </div>
              <div class="offers__card offers__card-youtube">
                <div class="offers__card-content">
                  <div class="offers__card-title">YouTube</div>
                  <div class="offers__card-subtitle">Снимай у нас на нашем сервере за это награду.</div>
                </div>
              </div>
            </div>
          </div>
          <div class="offers-center">
            <div class="offers__card offers__card-cases">
              <div class="offers__card-content">
                <div class="offers__card-title">Кейсы</div>
                <div class="offers__card-subtitle">Выбей топовый шмот за фикс прайс.</div>
                <div class="offers__card-badge-price">
                  <div class="badge badge-price">50 ₽</div>
                  <div class="badge badge-price-old">150 ₽</div>
                </div>
              </div>
            </div>
          </div>
          <div class="offers-right">
            <div class="offers__card offers__card-tokens">
              <div class="offers__card-content">
                <div class="offers__card-title">Tokens</div>
                <div class="offers__card-subtitle">
                  Любой товар на сервере можно купить за токены.
                </div>
              </div>
            </div>
            <div class="offers__card offers__card-tokens">
              <div class="offers__card-content">
                <div class="offers__card-title">Tokens</div>
                <div class="offers__card-subtitle">
                  Любой товар на сервере можно купить за токены.
                </div>
              </div>
            </div>
            <div class="offers__card offers__card-helps">
              <div class="offers__card-content">
                <div class="offers__card-title">Помощь</div>
                <div class="offers__card-subtitle">
                  Адекватная администрация, которая спешит на помощь
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12">
        <Subtitle :title="'связь с нами'" :content="'наши контакты'"/>
        <div class="contacts">
          <a href="#" class="contacts__card contacts__discord">
            <div class="contacts__card-badge">
              <i class="fab fa-discord"></i>
            </div>
            <div class="card-content">
              <div class="card-title">Discord сервер</div>
              <div class="card-subtitle">Общаемся, тусим и флексим с админами на нашем ламповом DS сервере.</div>
              <a href="#" class="card-link">Написать в Discord</a>
            </div>
          </a>
          <a href="#" class="contacts__card contacts__telegram">
            <div class="contacts__card-badge">
              <i class="fab fa-telegram-plane"></i>
            </div>
            <div class="card-content">
              <div class="card-title">Telegram канал</div>
              <div class="card-subtitle">Мемы, приколы, новости и скидки публикуются в Телеграм канале.</div>
              <div class="card-link">Написать в Telegram</div>
            </div>
          </a>
          <a href="#" class="contacts__card contacts__vk">
            <div class="contacts__card-badge">
              <i class="fab fa-vk"></i>
            </div>
            <div class="card-content">
              <div class="card-title">Сообщество Vk</div>
              <div class="card-subtitle">Лента новостей, свежие апдейты и конкурсы, все это в нашей группе вконтакте.</div>
              <div class="card-link">Написать в Vk</div>
            </div>
          </a>
        </div>
        <div class="contacts__footer-title">Тех-Поддержка 24/7</div>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
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
@import '~@/styles/common.styl'

.home
  position: relative
  &:before
    background-image url("~@/assets/images/pirate.png")
    background-repeat no-repeat
    background-size contain
    width 25%
    right 0
    top -6rem
    position absolute
    content ''
    height 100%

.card
  &-link
    font-family AcromBold, sans-serif
    letter-spacing -1px
    text-decoration underline
    color #000
    &:hover
      text-decoration none
      color #000

  &-content
    background-color #FFFFFF
    position relative
    text-align center
    height 100%
    padding 20px
    content ''

  &-title
    font-family GilroyBlack, sans-serif
    letter-spacing .08rem
    font-size 1.75rem
    color black

  &-subtitle
    font-family AcromMedium, sans-serif
    letter-spacing .02rem
    color #e6e5ed
    padding-top 10px
    font-size 1rem
    height 55px

.offers
  //align-items flex-start
  flex-direction row
  flex-wrap wrap
  display flex
  height 32rem
  margin-top 4.2rem

  &-left
    width 45%

  &-center
    width 22%

  &-right
    justify-content space-between
    flex-direction column
    display flex
    width 33%

  &-right &__card
    &-content
      text-align left

  &__group
    display flex
    height 50%

    & > div
      width 50%

  &__card
    padding 15px

    &-content
      @extend .card-content

    &-title
      @extend .card-title

    &-subtitle
      @extend .card-subtitle

    &-clans &-content,
    &-youtube &-content
      height 100%

    &-cases
      height 100%

    &-helps &-content,
    &-tokens &-content
      padding 35px 25px 35px 90px

    &-sales
      position relative
      display flex
      height 50%

      &:after
        content ''
        top -50px
        left 80px
        width 184px
        height 181px
        background-image url("~@/assets/images/sale-badge.png")
        background-repeat no-repeat
        background-size contain
        position: absolute


    &-sales &-title
      text-transform uppercase
      font-size 1.9rem
      letter-spacing .15rem

    &-sales &-subtitle
      font-size 1.1rem
      letter-spacing .05rem

    &-sales &-content
      padding 90px 60px 50px 180px
      width 100%
      text-align left

      &:before
        content ''
        left 75px
        top 93px
        height 73px
        width 50px
        background-image url("~@/assets/images/bottle-rainbow.png")
        background-repeat no-repeat
        background-size contain
        position: absolute

    &-clans &-content
      padding-top 125px
      text-align center

      &:before
        content ''
        top 20px
        height 100px
        width 58px
        left 0
        right 0
        margin-left auto
        margin-right auto
        background-image url("~@/assets/images/diamond-mace.png")
        background-repeat no-repeat
        background-size contain
        position: absolute

    &-youtube &-content
      padding-top 125px

      &:before
        content ''
        top 20px
        height 100px
        width 100px
        left 0
        right 0
        margin-left auto
        margin-right auto
        background-image url("~@/assets/images/chest-youtube-play.png")
        background-repeat no-repeat
        background-size contain
        position: absolute

    &-cases &-title
      position relative

      &:before
        background-image url("~@/assets/images/grid-cases.png")
        background-repeat no-repeat
        background-size contain
        position: absolute
        height 70px
        width 70px
        content ''
        right 11px
        top -32px

    &-cases &-subtitle
      padding-top 1.8rem

    &-cases &-badge-price
      display block
      padding 30px 10px 0

      & > .badge
        padding 10px
        font-size 28px
        letter-spacing 2px
        font-family GilroyBlack, sans-serif
      & > .badge-price
        color #FFFFFF
        background-image radial-gradient(circle farthest-corner at 7px 24px, #9f53ee, #1b77ea)
      & > .badge-price-old
        text-decoration line-through
        background-color #e8e8f4
        color #cfcfe1

    &-cases &-content
      padding 250px 30px 30px
      height 100%

      &:before
        height 140px
        width 150px
        content ''
        top 80px
        left 0
        right 0
        margin-left auto
        margin-right auto
        background-image url("~@/assets/images/gift-chest.png")
        background-repeat no-repeat
        background-size contain
        position: absolute

.contacts
  display flex

  &__footer-title
    text-align center
    font-family AcromExtraBold, sans-serif
    text-transform uppercase
    font-size 1.3rem
    color #c4c4d6
    @extend .disable-highlight

  &__card
    transition all .4s
    position relative
    width 33.3333%
    padding 15px

    &:hover
      transform matrix(1, 0, 0, 1, 0, -8)
      text-decoration none

    &:hover .card-link
      text-decoration none

    &-badge
      background #000
      width 60px
      height 60px
      text-align center
      line-height 5.2rem
      border-radius 2px
      position absolute
      top 57px
      z-index 1
      left calc(20px + 33px)
      i
        font-size 2.5rem
        background linear-gradient(to top, #2F80ED, #56CCF2)
        -webkit-background-clip text
        -webkit-text-fill-color transparent

    .card-title
      text-transform uppercase
      font-size 1.3rem

    .card-subtitle
      font-size .8rem

    .card-content
      text-align left
      padding 40px 25px 40px 125px

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

    &:after
      background-image url('~@/assets/images/cross.png')
      background-repeat no-repeat
      content ''
      position absolute
      width 47px
      height 46px
      top -36px
      right 38%

  &__subtitle
    font-family AcromMedium, sans-serif
    color #000
    font-size 24.91px
    max-width 700px
    margin-left 92px
    margin-top 80px

@media screen and (max-width: 1024px)
  .home:before
    display none
  .offers-center
    display none
</style>