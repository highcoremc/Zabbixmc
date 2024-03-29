<!--
  - Copyright (c) 2021 Loper.me <bizrenay@gmail.com>
  -
  - Licensed under the Apache License, Version 2.0 (the "License");
  - you may not use this file except in compliance with the License.
  - You may obtain a copy of the License at
  -
  -     http://www.apache.org/licenses/LICENSE-2.0
  -
  - Unless required by applicable law or agreed to in writing, software
  - distributed under the License is distributed on an "AS IS" BASIS,
  - WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  - See the License for the specific language governing permissions and
  - limitations under the License.
  -->

<template>
  <div class="oferta">
    <div class="row">
      <div class="col-md-12">
        <Title
          class="animate__animated animate__fadeInDown"
          :title="'оферта'"
          :subtitle="'публичная'"
          :content="'Прими или покинь страницы этого сайта..'"
        />
      </div>
      <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12">
        <div class="page-content">
          <p>
            Настоящий документ представляет собой
            предложение правообладателя<br>
            майнкрафт-сервера {{ projectName }} (далее – «Администрация») физическим лицам (далее –<br>
            «Пользователи»), принявшим (акцептовавшим) настоящее предложение на<br>
            заключение договора оказания услуг, оказываемых Администрацией с помощью<br>
            программы для ЭВМ (веб-сайта), размещённой в информационно-телекоммуникационной сети Интернет по адресу
            <a :href="projectUrl">{{ projectUrl }}</a> (далее – «Сайт»). В соответствии с пунктом 3 статьи 438 ГК
            РФ акцепт оферты равносилен заключению договора на условиях, изложенных в оферте.
          </p>
          <p>
            Пользователь обязан полностью ознакомиться с
            настоящим документом до<br>
            момента пользования ресурсами Сайта, начала поиска услуги и оформления заказа<br>
            услуги на Сайте.
          </p>
          <p>
            Зарегистрировавшись на Сайте, а также
            используя Сайт или воспользовавшись<br>
            любой его функциональной возможностью, обратившись к любой странице Сайта без<br>
            регистрации, Пользователь выражает свое безоговорочное согласие со всеми<br>
            условиями настоящей Оферты и обязуется их соблюдать или прекратить<br>
            использование Сайта, на следующих условиях:
          </p>
          <h1>1. <strong>Определения и термины</strong></h1>
          <p>
            1.1. Нижеприведенные термины используются в
            настоящем документе в<br>
            следующем значении:<br>
            «Акцепт Оферты» - полное и безоговорочное принятие Пользователем условий<br>
            настоящей публичной оферты путем совершения действий, указанных в ней.<br>
            «Пользователь» - физическое лицо, посетитель Сайта, который знакомится с<br>
            каталогом Услуг, представленных Администрацией, пользуется справочными и<br>
            информационными ресурсами Сайта, собирается сделать Заказ Услуг, или уже<br>
            осуществляет Заказ в режиме реального времени, или который уже использует<br>
            Услуги, приобретенные им ранее у Администрации.<br>
            «Администрация» («Администрация») - правообладатель майнкрафт-сервера<br>
            {{ projectName }}, который оказывает Услуг посредством Сайта.<br>
            «Сайт» - Интернет-ресурс Администрации, расположенный по адресу<br>
            <a :href="projectUrl">{{ projectUrl }}</a>, содержащий в себе все технические
            возможности, необходимые<br>
            для осуществления Пользователем просмотра описаний Услуг и их приобретения<br>
            (заказа). Исключительные права на Сайт принадлежат Администрации.<br>
            «Услуги» - услуги, реализуемые Администрацией Пользователям, информация<br>
            о которых размещена на Сайте (привилегированный вход на игровой сервер Игры,<br>
            передача Пользователю игровой валюты и игровых ключей от кейсов при из заказе<br>
            Пользователем для дальнейшей их реализации в Игре). Информация об Услугах<br>
            размещена на Сайте.
          </p>
          <p>
            «Игра» - компьютерная игра Minecraft
            (Майнкрафт) в жанре песочницы,<br>
            принадлежащая компании Mojang AB.<br>
            «Договор» - договор оказания услуг, заключаемый между Администрацией и<br>
            Пользователем путем Акцепта оферты последним.<br>
            «Заказ» - заявка Пользователя на приобретение Услуг у Администрации,<br>
            оформленная через Сайт и представляющая собой свободное и самостоятельное<br>
            намерение и волеизъявление Пользователя приобрести у Администрации выбранную<br>
            Пользователем Услугу.
          </p>
          <p>
            1.2. В настоящей Оферте могут быть
            использованы термины, не определенные<br>
            в пункте 1.1. Оферты. В этих случаях толкование терминов производится в<br>
            соответствии с текстом и смыслом данной Оферты. В случае отсутствия<br>
            однозначного толкования термина в тексте Оферты, следует руководствоваться, во-первых, толкованием терминов,
            применяемым на Сайте, в том числе в юридической<br>
            документации, размещенной на Сайте; во-вторых, законодательством Российской<br>
            Федерации и обычаями деловой практики в соответствующей сфере деятельности.
          </p>
          <h1>2. Общие положения</h1>
          <p>
            2.1. Поиск, заказ, оплата Пользователем
            Услуг, размещенных на Сайте,<br>
            использование Сайта, включая просмотр размещенной в разделах Сайта информации,<br>
            пользуется справочными и информационными ресурсами Сайта, означает согласие<br>
            Пользователя с настоящей Офертой.<br>
            2.2. Администрация имеет право вносить изменения в Оферту без<br>
            уведомления Пользователя.<br>
            2.3. Администрация и Пользователь предоставляют взаимные гарантии своих<br>
            прав и дееспособности, необходимых для заключения Договора и его исполнения на<br>
            базе настоящей Оферты.<br>
            2.4. Наименование, ассортимент и вид Услуг, их описание, стоимость и<br>
            способы оплаты, а также иные условия, указываются на Сайте на соответствующей<br>
            веб-странице Сайта.<br>
            2.5. Данные об Исполнителе, его контактные данные можно найти на<br>
            страницах Сайта.<br>
            2.6. Оферта не требует скрепления печатями и/или подписания<br>
            Администрацией и Пользователем (далее по тексту – «Стороны») на бумажном<br>
            носителе, сохраняя при этом полную юридическую силу.<br>
            2.7. Заключаемый между сторонами Договор имеет силу акта об оказании<br>
            Услуг. Приемка-передача Товара производится без подписания между Сторонами<br>
            соответствующих актов.
          </p>
          <h1>3. Предмет Оферты.</h1>
          <p>
            3.1. При Заказе Пользователем Услуг через
            Сайт Администрация оказывает<br>
            следующие Услуги Пользователю, представленные на Сайте:<br>
            3.1.1. «Привилегия» - предоставление Пользователю привилегированного<br>
            входа на сервер Игры, дающая Пользователю возможность реализации<br>
            дополнительного функционала на игровом сервере Игры и выделять Пользователя<br>
            среди других Пользователей.<br>
            3.1.2. «Валюта» - зачисление на аккаунт Пользователя соответствующей<br>
            валюты Игры и предоставление Пользователю возможности покупать в Игре<br>
            различные ресурсы (предметы), улучшать свой аккаунт в Игре.<br>
            3.1.3. «Кейсы» - “сундуки удачи” (лотерея), из которых Пользователь может<br>
            выиграть привилегию, игровые ресурсы или валюту. Для их открытия необходимы<br>
            соответствующие ключи.<br>
            3.1.4. «Прочее» - дополнительный функционал, который предоставляет на<br>
            игровой аккаунт Пользователя иные услуги.<br>
            3.2. Стоимость Услуг, а также прочие необходимые условия Оферты<br>
            определяются на основании сведений, предоставленных Пользователем при<br>
            оформлении Заказа.<br>
            3.3. Все Услуги предоставляются исключительно для пользования в Игре на<br>
            игровом сервере.<br>
            3.4. Использование материалов и функций Сайта регулируется нормами<br>
            действующего законодательства Российской Федерации.<br>
            3.5. Пользователь несет персональную ответственность за проверку настоящей<br>
            Оферты на наличие изменений в ней.<br>
            3.6. При несогласии Пользователя с соответствующими изменениями<br>
            Пользователь обязан прекратить использование Сайта и отказаться от Услуг,<br>
            предоставляемых Администрацией. В противном случае продолжение использования<br>
            Пользователем Сайта означает, что Пользователь согласен с условиями Оферты в<br>
            новой редакции.
          </p>
          <h1>
            4. Момент заключения Оферты
            (акцепт Оферты)
          </h1>
          <p>
            4.1. Акцептом настоящей Оферты (и как итог
            – заключение Договора)<br>
            является оформление Пользователем Заказа в соответствии с условиями настоящей<br>
            Оферты.<br>
            4.2. Оферта вступает в силу с момента Акцепта и действует до полного<br>
            исполнения Сторонами своих обязательств.<br>
            4.3. Осуществляя Акцепт Оферты Пользователь гарантирует, что<br>
            ознакомлен, соглашается, полностью и безоговорочно принимает все условия Оферты<br>
            в том виде, в каком они изложены в тексте Оферты, в том числе в приложениях к<br>
            Оферте, являющихся неотъемлемой частью Оферты (п. 3 ст. 438 ГК РФ).<br>
            4.4. Пользователь понимает, что Акцепт Оферты равносилен заключению<br>
            договора на условиях, изложенных в Оферте.<br>
            4.5. Совершая действия по акцепту Оферты Пользователь гарантирует, что<br>
            он имеет законные права вступать в договорные отношения с Администрацией.<br>
            4.6. Акцептируя настоящую Оферту, Пользователь выражает согласие в том,<br>
            что:<br>
            4.6.1. никнейм Пользователя указан им добровольно;<br>
            4.6.2. иные данные, добровольно указанные Пользователем при Заказе,<br>
            передаются Администрации в электронной форме по каналам связи сети Интернет;<br>
            4.6.3. данные переданы Продавцу для реализации целей, указанных в<br>
            настоящей Оферте;<br>
            4.6.4. данное Пользователем согласие на обработку его данных является<br>
            бессрочным и может быть отозвано Пользователем или его законным<br>
            представителем, подачей письменного заявления, переданного Администрации.
          </p>
          <h1>
            5. Права и обязанности
            Сторон
          </h1>
          <p>
            5.1. Администрация обязуется:<br>
            5.1.1. Принять Заказ Пользователя согласно установленным на Сайте формам.<br>
            5.1.2. Предоставлять достоверную информацию об Услугах.<br>
            5.1.3. На основании Заказа оказать соответствующую Услугу.<br>
            5.1.4. Давать устные и письменные консультации Пользователю по<br>
            дополнительным вопросам Пользователя.<br>
            5.1.5. Обеспечивать своевременное оказание Услуг.<br>
            5.1.6. Использовать информацию, предоставленную Пользователем, только для<br>
            оказания Услуг.<br>
            5.1.7. Рассматривать и проверять мотивированные претензии, поступающие от<br>
            Пользователя.<br>
            5.2. Администрация в праве:<br>
            5.2.1. Отказаться от исполнения Договора в одностороннем порядке при<br>
            нарушении Пользователем условий, указанных в Оферте.<br>
            5.2.2. Отказать Пользователю в исполнении его Заказа без объяснения<br>
            причин.<br>
            5.2.3. Расширять и сокращать предложение Услуг на Сайта, регулировать<br>
            доступ к заказу Услуг, а также приостанавливать или прекращать реализацию любых<br>
            Услуг по своему собственному усмотрению.<br>
            5.2.4. Изменять условия Оферты в одностороннем порядке.<br>
            5.2.5. Отказать в оказании Услуг Пользователю в случае не поступления<br>
            оплаты за Услугу в установленные в Оферте сроки, а также при отсутствии от<br>
            Пользователя своевременно полученного Заказа или иных действий Пользователя,<br>
            необходимых для оказания ему Услуги.<br>
            5.2.6. Получать от Пользователя любую информацию, необходимую для<br>
            выполнения своих обязательств по Оферте. В случае непредставления либо<br>
            неполного или неверного представления Пользователем информации Администрация<br>
            вправе приостановить исполнение своих обязательств по Оферте до представления<br>
            необходимой информации.<br>
            5.2.7. Приостановить работу Сайта в любое время без предварительного<br>
            уведомления в целях обновления Сайта, проведения профилактических работ, в<br>
            случае технических сбоев, действием и/или бездействием третьих лиц и по иным<br>
            причинам, не зависящим от Администрации.<br>
            5.2.8. За нарушение условий настоящей Оферты заблокировать доступ<br>
            Пользователя к Сайту без объяснения причин.<br>
            5.2.9. Не возвращать вещи, потерянные в результате бага, отката, обмана,<br>
            гриферства, воровства и т.д.<br>
            5.3. Пользователь обязуется:<br>
            5.3.1. Знакомиться с информацией об Услугах, их ассортименте и условиях их<br>
            приобретения до оформления Заказа.<br>
            5.3.2. Самостоятельно и своевременно знакомится со всей информацией,<br>
            размещаемой на Сайте, уведомлениях.<br>
            5.3.3. Предоставить при оформлении Заказа только достоверные данные.<br>
            5.3.4. Действовать добросовестно и не злоупотреблять своими правами, в<br>
            частности не приобретать Услуги с целью совершения недобросовестных действий,<br>
            причиняющих ущерб, убытки или затраты для иных Пользователей, Игры,<br>
            Администрации.<br>
            5.3.5. Не использовать информацию, полученную от Администрации<br>
            способами, способными привести к нанесению ущерба интересам Администрации.<br>
            5.3.6. Не использовать материалы Сайта без согласия Администрации как<br>
            правообладателя (статья 1270 ГК РФ).<br>
            5.3.7. При цитировании материалов Сайта в электронном виде размещать<br>
            активные гиперссылки на главную страницу Сайта или на страницу размещения<br>
            соответствующего материала. При использовании информации на любом другом<br>
            носителе необходимо указание источника в виде «Источник: https://<a :href="projectUrl">{{ projectDomain }}</a>».<br>
            5.3.8. Оплатить Услугу в полном объеме.<br>
            5.3.9. Незамедлительно уведомлять Администрации о наличии претензий к<br>
            Услуге (при наличии таковых).<br>
            5.4. Пользователь вправе:<br>
            5.4.1. Отказаться от оплаты Услуг, аннулировав Заказ, о чем немедленно<br>
            известить Администрацию. При этом Пользователь обязан компенсировать<br>
            возможные убытки, причиненные Администрации в связи с выполнением принятого в<br>
            работу Заказа.<br>
            5.4.2. Требовать от Администрации надлежащего и своевременного оказания<br>
            Услуг.<br>
            5.4.3. Осуществить выбор Услуг.<br>
            5.4.4. Обращаться к Администрации по всем вопросам, связанным с оказанием<br>
            Услуг.
          </p>
          <h1>6. Финансовые условия</h1>
          <p>
            6.1. Покупка Услуги является добровольным
            пожертвованием на развитие Сайта и не подлежит возврату.<br>
            6.2. Стоимость Услуг определяется Администрацией самостоятельно и<br>
            указываются на страницах Сайта.<br>
            6.3. Администрация вправе без объяснения причин и без предварительного<br>
            уведомления Пользователей в одностороннем порядке изменять стоимость Товаров<br>
            путем публикации новой стоимости Услуг на Сайте.<br>
            6.4. Цена Товара указывается в рублях РФ. Все взаиморасчеты ведутся в<br>
            рублях РФ.<br>
            6.5. Стоимость Услуг включает в себя все комиссии, взимаемые платежными<br>
            системами, с использованием которых производится оплата стоимости Услуг<br>
            Пользователем.<br>
            6.6. Основанием для оплаты стоимости Услуг является оформляемый<br>
            Пользователем Заказ.<br>
            6.7. Оплата стоимости Услуг производится Пользователем способами,<br>
            установленными в соответствии с техническим и технологическим устройством<br>
            Сайта.<br>
            6.8. Оплата стоимости Услуг производится Пользователем на условиях 100 %<br>
            (стопроцентной) предварительной оплаты.<br>
            6.9. Датой оплаты признается дата поступления средств на расчетный счет<br>
            Администрации.<br>
            6.10. Более подробную информацию о финансовых условиях Пользователь<br>
            может получить по электронной почте contact@<a :href="projectUrl">{{ projectDomain }}</a> .
          </p>
          <h1>
            7. Порядок приобретения
            Услуг. Гарантии.
          </h1>
          <p>
            7.1. Пользователь вправе оформить Заказ на
            любую Услугу, представленную<br>
            на Сайте и в любом количестве.<br>
            7.2. Пользователь осуществляет выбор Услуг из перечня Услуг,<br>
            предложенных на Сайте, и нажатие на кнопку «Купить» на веб-странице с описанием<br>
            соответствующей Услуги.<br>
            7.3. Пользователь, реализуя алгоритм, предложенный Сайтом,<br>
            самостоятельно создает Заказ через соответствующий веб-интерфейс.<br>
            7.4. Выбор Услуг, оформление Заказа и все последующие действия<br>
            Пользователя, описанные в настоящем разделе, осуществляются им без участия<br>
            Администрации.<br>
            7.5. Для того, чтобы оформить Заказ на Сайте Пользователю необходимо<br>
            предоставить Продавцу никнейм с сервера Игры и промокод (при наличии).<br>
            7.6. Выбор способа оплаты и совершение иных сопутствующих действий,<br>
            необходимых в связи с требованиями соответствующей выбранной платежной<br>
            системы возлагается на Пользователя.<br>
            7.7. Администрация не несет ответственности за содержание и достоверность<br>
            информации, предоставленной Пользователем при оформлении Заказа. Пользователь<br>
            берет на себя полную ответственность за предоставление неправильных данных о<br>
            себе, своем аккаунте в Игре, которое сделало невозможным надлежащее исполнение<br>
            Администрацией настоящей Оферты.<br>
            7.8. Заказ с Сайта передается в программу Администрации автоматически.<br>
            7.9. Администрация считается исполнившей свои обязательства по<br>
            настоящей Оферте с момента предоставления Пользователю результата Услуг,<br>
            описанных в п. 3.1. Оферты.
          </p>
          <h1>8. Ответственность</h1>
          <p>
            8.1. При неисполнении или ненадлежащем
            исполнении обязательств<br>
            Стороны несут ответственность, предусмотренную действующим законодательством<br>
            РФ.<br>
            8.2. Пользователь не имеет права продавать игровые аккаунты, валюту и<br>
            ресурсы за реальные деньги третьим лицам.<br>
            8.3. Администрация никак не принуждает Пользователя, не настаивает<br>
            делать какие-либо действия посредством Сайта.<br>
            8.4. Пользователь признает и соглашается, что:<br>
            8.4.1. Он на добровольной основе вкладывает реальные деньги с целью<br>
            получения результата Услуг.<br>
            8.4.2. В техническое устройство Игры, для использования которой оказывается<br>
            Услуга, могут быть внесены изменения со стороны производителя. В указанных<br>
            случаях Пользователь обязуется не предъявлять в адрес Администрации какие-либо<br>
            претензии и требования.<br>
            8.4.3. Он несет ответственность за свои действия, совершенные на Сайте или<br>
            сервере с его учетной записи.<br>
            8.4.4. Внутренней политикой производителя компьютерной Игры могут быть<br>
            установлены ограничения на передачу/применение результата Услуг, в связи с чем со<br>
            стороны производителя могут проводиться мероприятия по блокировке<br>
            соответствующих пользователей, использующих данный результат Услуг или<br>
            совершаться иные действия, направленные на недопущение использования Игры.<br>
            Администрация не несет ответственность в указанной части, а Пользователь<br>
            обязуется не предъявлять к ней претензии или требования, самостоятельно неся все<br>
            негативные последствия указанных ограничений со стороны производителя.<br>
            8.4.5. Услуги, приобретаемые Пользователем, предоставляется по принципу<br>
            «как есть». При этом Администрация не несет ответственность в какой бы то ни было<br>
            форме за несоответствие результата Услуг целям, задачам, представлениям или<br>
            желаниям Пользователя.<br>
            8.4.6. Ничто в настоящей Оферте не может гарантировать для Пользователя<br>
            полное удовлетворение его интересов и потребностей, связанных с приобретением<br>
            Услуг.<br>
            8.5. Администрация не несет ответственности:<br>
            8.5.1. За убытки и расходы, возникшие у Пользователя, в частности, убытки и<br>
            расходы, вызванные действиями/бездействием третьих лиц и/или возникшие в связи<br>
            со сбоями и перерывами в работе Сайта и/или возникшие в связи с воздействием<br>
            компьютерных вирусов, «троянов», «червей» и т.д. и/или связанные с блокировкой<br>
            Пользователя, использующего результат Услуг, после ее заказа, вне зависимости от<br>
            причины блокировки.<br>
            8.5.2. За аккаунт Пользователя.<br>
            8.5.3. За неполучение результата Услуг Пользователем по причинам не<br>
            зависящим от воли Администрации (отсутствие у Пользователя необходимого<br>
            программного обеспечения, возможности выхода в Интернет, действий провайдеров,<br>
            энергетических компаний, производителя Игры, воздействием компьютерных<br>
            вирусов и (или) вредоносных программ и т.п.).
          </p>
          <h1>9. Разрешение споров.</h1>
          <p>
            9.1. Все споры, разногласия и претензии
            Стороны будут стремиться решить<br>
            путем переговоров. Сторона, у которой возникли претензии и/или разногласия,<br>
            направляет другой Стороне сообщение с указанием возникших претензий и/или<br>
            разногласий.<br>
            9.2. Сообщение направляется Пользователем по электронной почте на адрес<br>
            contact@<a :href="projectUrl">{{ projectDomain }}</a>. Сообщение должно содержать суть предъявляемого
            требования,<br>
            доказательства, подтверждающие требование.<br>
            9.3. В течение 10 (десяти) дней с момента получения оригинала сообщения,<br>
            Сторона, получившая его, обязана направить ответ на это сообщение.<br>
            9.4. В случае, если ответ на сообщение не будет получен направившей<br>
            сообщение Стороной в течение 30 (Тридцати) рабочих дней с даты направления<br>
            соответствующего сообщения, либо если Стороны не придут к соглашению по<br>
            возникшим претензиям и/или разногласиям спор подлежит рассмотрению в суде в<br>
            соответствии с законодательством РФ.<br>
            9.5. За неисполнение или ненадлежащее исполнение обязательств по<br>
            настоящем Договоре, стороны несут ответственность в соответствии с<br>
            законодательством Российской Федерации.
          </p>
          <h1>10.Срок действия Оферты</h1>
          <p>
            10.1. Настоящая Оферта вступает в силу с
            момента ее размещения в сети<br>
            Интернет на Сайте.<br>
            10.2. Настоящая Оферта размещена на неопределенный срок и утрачивает<br>
            свою силу при ее аннулировании Администрацией.<br>
            10.3. Пользователь соглашается и признает, что внесение изменений в Оферту<br>
            влечет за собой внесение этих изменений в заключенный и действующий между<br>
            Пользователем и Администрацией Договор, и эти изменения вступают в силу<br>
            одновременно с такими изменениями в Договор.
          </p>
          <h1>11.Исключительные права</h1>
          <p>
            11.1. Все объекты, доступные на Сайте, в
            том числе элементы дизайна, текст,<br>
            графические изображения, видео, и другие объекты (далее – «материалы»), а также<br>
            любые Товары, размещенные на Сайте, являются объектами исключительных прав<br>
            Администрации и других правообладателей (в том числе, производителей Товаров)<br>
            соответственно.<br>
            11.2. Материалы Сайта, а также любой контент, размещенный на Сервисе, не<br>
            могут быть использованы без предварительного разрешения правообладателя(-ей)<br>
            (статья 1270 ГК РФ).<br>
            11.3. Использование Пользователем материалов, а также любого контента в<br>
            личных, некоммерческих целях, возможно при условии сохранения всех знаков<br>
            охраны авторского права, товарных знаков, и сохранении соответствующего объекта<br>
            в неизменном виде. Исключение составляют случаи, прямо предусмотренные<br>
            законодательством.<br>
            11.4. При цитировании материалов Сайта Пользователь обязуется в<br>
            электронном виде размещать активные гиперссылки на главную страницу Сайта или<br>
            на страницу размещения соответствующего материала. При использовании<br>
            информации на любом другом носителе необходимо указание источника в виде<br>
            «Источник https://<a :href="projectUrl">{{ projectDomain }}</a> ».
          </p>
          <h1>12.Дополнительные условия</h1>
          <p>
            12.1. Администрация вправе переуступать
            либо каким-либо иным способом<br>
            передавать свои права и обязанности, вытекающие из его отношений с<br>
            Пользователем, третьим лицам.<br>
            12.2. Сайт и предоставляемые сервисы могут временно частично или<br>
            полностью недоступны по причине проведения профилактических, иных работ или<br>
            по любым другим причинам технического характера. Техническая служба Сайта<br>
            имеет право периодически проводить необходимые профилактические или иные<br>
            работы с предварительным уведомлением Пользователей или без такового.<br>
            12.3. К отношениям между Пользователем и Администрацией применяются<br>
            положения Российского законодательства.<br>
            12.4. Признание судом недействительности какого-либо положения настоящей<br>
            Оферты не влечет за собой недействительность остальных положений.
          </p>
          <h1>13. Реквизиты Администрации</h1>
          <p>
            Электронная почта: contact@<a :href="projectUrl">{{ projectDomain}}</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Title from "@/components/Title.vue"

@Component({
  components: {
    Title,
  }
})
export default class extends Vue {
}
</script>

<style lang="stylus" scoped>
.page-content
  background #ffffff
  padding 40px 30px
  border-radius 7px
  box-shadow 6px 2px 8px 1px #f0f0f9
  font-family Arial, sans-serif

h1
  font-weight bold
  font-size 1.3rem
  letter-spacing 0
  padding 20px 0

p
  letter-spacing 1px
</style>
