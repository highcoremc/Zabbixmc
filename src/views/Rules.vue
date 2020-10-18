<template>
  <div class="rules">
    <div class="row">
      <div class="col-md-12">
        <Title class="animate__animated animate__fadeInDown"
               :title="'правила'" :subtitle="'для тех, кто их читает'"
               :content="'Незнание правил не освобождает от ответсвенности.'"/>
      </div>

      <div class="col-md-12">
        <div class="accordion animate__animated animate__fadeInUp">
          <div v-for="(item, i) in contents" class="accordion-item" :key="i">
            <button :id="`accordion-button-${i}`" :aria-expanded="i === selectedAccordion ? 'true' : 'false'"
                    @click="changeAccordion(i)">
              <span class="accordion-title">{{ i + 1 }}. {{ item.title }}</span>
              <span class="icon" aria-hidden="true"></span>
            </button>
            <div class="accordion-content" v-html="item.content"></div>
          </div>
        </div>

        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue'

@Component({
  components: {
    Title
  }
})
export default class extends Vue {
  private selectedAccordion: number = -1

  private contents: {
    title: string
    content: string
  }[] = [
    {
      title: 'Общее положение',
      content:
          '<p class="accordion-text">1.1 Незнание правил не освобождает вас от ответственности.</p>\n' +
          '<p class="accordion-text">1.2 Начав играть на наших серверах, Вы автоматически подтверждаете своё согласие с данным сводом правил.</p>\n' +
          '<p class="accordion-text">1.3 Администратор вправе наказать игрока по причине, не указанной в настоящих правилах.</p>\n' +
          '<p class="accordion-text">1.4 Администрация не несет ответственности за временную или постоянную невозможность игры на сервере конкретным лицом или группой лиц.</p>\n' +
          '<p class="accordion-text">1.5 Игроки обязаны соблюдать все правила.</p>\n' +
          '<p class="accordion-text">1.6 Администрация ведет логи всех действий игроков на сервере и всех сообщений чата.</p>\n' +
          '<p class="accordion-text">1.7 Администрация имеет право корректировать данный свод правил без уведомления игрока.</p>\n' +
          '<p class="accordion-text">1.8 Запрещено распространять сторонние сервера, за любое упоминание стороннего сервера дается бан.</p>\n' +
          '<p class="accordion-text">1.9 Оскорбление, провоцирование администрации запрещено.</p>'
    },
    {
      title: 'Аккаунт',
      content:
          '<p class="accordion-text">2.1 Ник не должен содержать мата, оскорблений и т.д.</p>\n' +
          '<p class="accordion-text">2.2 Запрещается предоставлять свой аккаунт 3-м лицам для игры на сервере.</p>\n' +
          '<p class="accordion-text">2.3 Ответственность несет владелец аккаунта, независимо от того, кто совершал действия под данным аккаунтом.</p>\n' +
          '<p class="accordion-text">2.4 Запрещена продажа/передача аккаунтов, продажа привилегий.</p>\n' +
          '<p class="accordion-text">2.5 Донат не переносится на другой ник в целях безопасности.</p>'
    },
    {
      title: 'Правила поведения игроков на сервере',
      content:
          '<p class="accordion-text">3.1 Запрещено гриферить застраивать, заливать, засыпать или ломать чужие дома. Убивать на сервере можно.</p>\n' +
          '<p class="accordion-text">3.2 Запрещено мошенничество, намеренный обман администрации.</p>\n' +
          '<p class="accordion-text">3.3 Администрация НЕ обязана возвращать вещи в следующих случаях.</p>\n' +
          '<p class="accordion-text">3.4 Администрация НЕ обязана осуществлять Вам помощь в виде ускорения постройки здания, выдачи предметов, ресурсов и др.</p>\n' +
          '<p class="accordion-text">3.5 Запрещено попрошайничество (выпрашивать что-либо у администрации/игроков на безвозмездной основе).</p>\n' +
          '<p class="accordion-text">3.6 Запрещено продавать игровые предметы за реальные деньги.</p>\n' +
          '<p class="accordion-text">3.7 Простой игрок имеет право помочь новичку ресурсами. для постройки дома и т.д</p>\n' +
          '<p class="accordion-text">3.8 Игроку запрещено пользоваться сторонними программами, скриптами, модами (читы) и т.п. для облегчения или изменения игрового процесса (читы).</p>\n' +
          '<p class="accordion-text">3.9 Вызывание неполадок в работе сервера или попытки обрушить сервер, путем специально вызванных лагов или подобного, влекут за собой глобальный бан.</p>\n' +
          '<p class="accordion-text">3.10 Запрещено подстрекать третьих лиц на нарушение правил.</p>\n' +
          '<p class="accordion-text">3.11 Запрещено обманывать других игроков.</p>\n' +
          '<p class="accordion-text">3.12 Запрещено выдавать себя за администрацию.</p>'
    },
    {
      title: 'Для привелегированных игроков на сервере',
      content:
          '<p class="accordion-text">4.1 Донатер не имеет право кикать, банить, давать мут без причины.</p>\n' +
          '<p class="accordion-text">4.2 Донатер не имеет право ломать чужие дома даже если они ему не нравятся.</p>\n' +
          '<p class="accordion-text">4.3 Донатер не имеет право убивать в креативе, флае, режиме "бога", а также в ванише (невидимый режим).</p>\n' +
          '<p class="accordion-text">4.4 Донатер не имеет право давать бан/кик с причиной "за разбаном в скайп", с нецензурной лексикой, с просьбой о добавлением в регион и оскорблением игрока.</p>\n' +
          '<p class="accordion-text">4.5 Телепортация без причины и убийство без разрешения игрока запрещена.</p>\n' +
          '<p class="accordion-text">4.6 Донатерам запрещено забирать у игроков какие-либо вещи и мешать игровому процессу.</p>\n' +
          '<p class="accordion-text">4.7 Строго запрещается разбанивать игроков, которых забанила администрация.</p>\n' +
          '<p class="accordion-text">4.8 Попытка нанести вред серверу карается баном навсегда или снятием доната.</p>\n' +
          '<p class="accordion-text">4.9 Донатер имеет право проводить раздачи в небольших количествах.</p>\n' +
          '<p class="accordion-text">4.10 Запрещено распространять сторонние сервера, за любое упоминание стороннего сервера - снятие привилегии + бан.</p>\n' +
          '<p class="accordion-text">4.11 Донатер не имеет право банить другого донатера за нарушение правила из раздела "Правила для донатеров" об нарушении нужно сообщить Сюда приложив к жалобе скрины с доказательствами.</p>\n' +
          '<p class="accordion-text">4.12 Донатеру запрещено банить другого донатера навсегда</p>'
    },
    {
      title: 'Условия предоставления платных услуг',
      content:
          '<p class="accordion-text">5.1 Деньги, потраченные на услуги сервера, не возвращаются не при каких обстоятельствах.</p>\n' +
          '<p class="accordion-text">5.2 Попытки махинаций оплатами, или ввод Администрации в заблуждение наказываются баном без возврата средств.</p>\n' +
          '<p class="accordion-text">5.3 Администрация имеет полное право на отказ в предоставление услуг по причинам: неадекватность, требование несуществующих услуг, наглеж, оскорбления, и т.д.</p>\n' +
          '<p class="accordion-text">5.4 Предоставьте чек оплаты, если хотите написать Администрации о пропаже, непоявлении доната после покупки. Без данного подтверждения администрация вправе отказать Вам в предоставлении купленной услуги.</p>\n' +
          '<p class="accordion-text">5.5 Администрация не обязана предоставлять доказательства нарушений донатера у которого сняли привилегию за нарушение выше указанных правил.</p>\n' +
          '<p class="accordion-text">5.6 Если вы нарушили одно из выше перечисленных правил, и у вас забрали привилегию - то вы можете её только заново купить, больше никак.</p>\n' +
          '<p class="accordion-text">5.7 Донат из кейсов заменяется на последний выпавший.</p>\n' +
          '<p class="accordion-text">5.8 Перед покупкой донат-услуг, убедитесь, что Вы зарегистрированы на сервере. Иначе донат-услуга не выдасться.</p>'
    },
  ]

  public changeAccordion(index: number) {
    this.selectedAccordion = index == this.selectedAccordion ? -1 : index
  }
}
</script>

<style lang="stylus">
  @import '~@/styles/shared/variables.styl'
  .accordion-text
    color #a7a7bf
    font-size 1rem
    font-weight 300
    margin 1em 0
    &:first-child
      margin-top 0
</style>

<style lang="stylus" scoped>
@import '~@/styles/common.styl'
p
  background #000

.accordion
  justify-content center
  margin-top 2rem
  flex-wrap wrap
  display flex
  width: 100%

  &-item
    border-bottom 1px solid default-primary
    background-color #fdfdfd
    padding 20px
    width 60%

  &-content
    opacity 0
    max-height 0
    overflow hidden
    -webkit-transition opacity .3s linear, height .3s linear, max-height .3s linear, padding .3s linear
    transition opacity .3s linear, height .3s linear, max-height .3s linear, padding .3s linear
    will-change opacity, height, max-height

  &-title
    padding 1em 1.5em 1em 0
    @extend .disable-highlight

  button
    color default-secondary
    position relative
    display block
    text-align left
    width 100%
    padding 1em 0
    font-size 1.15rem
    font-weight 400
    border none
    background none
    outline none

    &:hover,
    &:focus,
    &:active
      color darken(default-secondary, 10%)
      cursor pointer

    .icon
      display inline-block
      position absolute
      top 18px
      right 0
      width 22px
      height 22px
      border 1px solid
      border-radius 22px
      transition all .2s linear

      &::before
        display block
        position absolute
        content ""
        top 9px
        left 5px
        width 10px
        height 2px
        background currentColor

      &::after
        display block
        position absolute
        content ""
        top 5px
        left 9px
        width 2px
        height 10px
        background currentColor

  button[aria-expanded="true"]
    color darken(default-secondary, 10%)

    .icon
      &:after
        width 0

    & + .accordion-content
      opacity 1
      max-height 35rem
      padding 20px 0
      will-change opacity, height

</style>
