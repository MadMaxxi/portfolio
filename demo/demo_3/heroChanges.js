var clickInfo=0;
function MenuClick() {
    if(clickInfo == 0) {
        document.getElementById('menu1').style.display = 'flex';
        clickInfo=1;
    }else if(clickInfo == 1) {
        document.getElementById('menu1').style.display = 'none';
        clickInfo=0;
    }
}
function change1() {
    document.getElementById("h2_tittle").innerHTML = "D.VA";
    document.getElementById("p_tittle").innerHTML = "Бывшая киберспортсменка, ныне — знаменитый пилот новейшей боевой мехи на страже родины.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/d.va.png')";
}
function change2() {
    document.getElementById("h2_tittle").innerHTML = "АНА";
    document.getElementById("p_tittle").innerHTML = "После долгих лет отсутствия верная сторонница Overwatch вернулась, чтобы защитить новое поколение агентов.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/ana.png')";
}
function change3() {
    document.getElementById("h2_tittle").innerHTML = "АНГЕЛ";
    document.getElementById("p_tittle").innerHTML = "Ангел-хранитель, самоотверженный целитель, талантливый врач, блестящий ученый и горячая заступница мира во всем мире.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/mercy.png')";
}
function change4() {
    document.getElementById("h2_tittle").innerHTML = "БАСТИОН";
    document.getElementById("p_tittle").innerHTML = "Робот-трансформер, который жаждет исследовать мир. Природа его очаровывает, люди — вызывают подозрение.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/bastion.png')";
}
function change5() {
    document.getElementById("h2_tittle").innerHTML = "БАТИСТ";
    document.getElementById("p_tittle").innerHTML = "Опытный военный врач с арсеналом экспериментальной медицинской техники.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/baptist.png')";
}
function change6() {
    document.getElementById("h2_tittle").innerHTML = "БРИГИТТА";
    document.getElementById("p_tittle").innerHTML = "Эта закованная в броню воительница всегда готова броситься на помощь тем, кто в ней нуждается.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/briggita.png')";
}
function change7() {
    document.getElementById("h2_tittle").innerHTML = "ГЭНДЗИ";
    document.getElementById("p_tittle").innerHTML = "Этот киборг-ниндзя и смертельно опасный воин смог найти умиротворение, обретя свое механическое тело.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/genji.png')";
}
function change8() {
    document.getElementById("h2_tittle").innerHTML = "ДЗЕНЪЯТТА";
    document.getElementById("p_tittle").innerHTML = "Робот-монах, странствующий по свету в поисках духовного просветления.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/dzen.png')";
}
function change9() {
    document.getElementById("h2_tittle").innerHTML = "ЖНЕЦ";
    document.getElementById("p_tittle").innerHTML = "Беспощадный убийца, который сеет смерть на своем пути, преследуя агентов Overwatch.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/reaper.png')";
}
function change10() {
    document.getElementById("h2_tittle").innerHTML = "ЗАРЯ";
    document.getElementById("p_tittle").innerHTML = "Одна из самых сильных женщин планеты, которая поставила безопасность страны выше собственной славы.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/zarya.png')";
}
function change11() {
    document.getElementById("h2_tittle").innerHTML = "КРЫСАВЧИК";
    document.getElementById("p_tittle").innerHTML = "Помешанный на взрывах псих, единственная мечта которого — сеять хаос и разрушение.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/junkrat.png')";
}
function change12() {
    document.getElementById("h2_tittle").innerHTML = "КУЛАК СМЕРТИ";
    document.getElementById("p_tittle").innerHTML = "Блестящий тактик, стремящийся изменить мир. Полагается на свой ум, природное обаяние и грубую силу.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/doomfist.png')";
}
function change13() {
    document.getElementById("h2_tittle").innerHTML = "ЛУСИО";
    document.getElementById("p_tittle").innerHTML = "Звезда международного масштаба, своей музыкой и своими действиями Лусио вдохновляет людей на перемены.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/lucio.png')";
}
function change14() {
    document.getElementById("h2_tittle").innerHTML = "МАККРИ";
    document.getElementById("p_tittle").innerHTML = "Меткий стрелок, который жаждет восстановить справедливость. Но понимает он ее по-своему.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/mccree.png')";
}
function change15() {
    document.getElementById("h2_tittle").innerHTML = "МОЙРА";
    document.getElementById("p_tittle").innerHTML = "Блестящий генетик, который ставит научный прогресс превыше любых этических норм.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/moira.png')";
}
function change16() {
    document.getElementById("h2_tittle").innerHTML = "МЭЙ";
    document.getElementById("p_tittle").innerHTML = "Мэй — ученый-климатолог, и она решила взять в свои руки дело по спасению окружающей среды.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/mei.png')";
}
function change17() {
    document.getElementById("h2_tittle").innerHTML = "ОРИСА";
    document.getElementById("p_tittle").innerHTML = "Робот-миротворец, созданный для защиты жителей Нумбани.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/orisa.png')";
}
function change18() {
    document.getElementById("h2_tittle").innerHTML = "РАЙНХАРДТ";
    document.getElementById("p_tittle").innerHTML = "Рыцарь, живущий согласно кодексу чести, справедливости и мужества.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/rainhardt.png')";
}
function change19() {
    document.getElementById("h2_tittle").innerHTML = "РОКОВАЯ ВДОВА";
    document.getElementById("p_tittle").innerHTML = "Идеальный убийца: терпеливая, беспощадная, эффективная, без тени эмоций или сомнений.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/widowmaker.png')";
}
function change20() {
    document.getElementById("h2_tittle").innerHTML = "СИГМА";
    document.getElementById("p_tittle").innerHTML = "Эксцентричный астрофизик, превратившийся в живое оружие в результате неудачного эксперимента на орбитальной станции.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/sigma.png')";
}
function change21() {
    document.getElementById("h2_tittle").innerHTML = "СИММЕТРА";
    document.getElementById("p_tittle").innerHTML = "Симметра в буквальном смысле искажает реальность, манипулируя конструкциями из «жесткого» света.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/symmetra.png')";
}
function change22() {
    document.getElementById("h2_tittle").innerHTML = "СОЛДАТ-76";
    document.getElementById("p_tittle").innerHTML = "Загадочный боец, стремящийся раскрыть миру причины краха Overwatch.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/soldat-76.png')";
}
function change23() {
    document.getElementById("h2_tittle").innerHTML = "СОМБРА";
    document.getElementById("p_tittle").innerHTML = "Известный хакер, охотящийся за секретами — и властью, которую они дают.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/sombra.png')";
}
function change24() {
    document.getElementById("h2_tittle").innerHTML = "ТАРАН";
    document.getElementById("p_tittle").innerHTML = "Этим катящимся танком управляет генетически модифицированный хомяк с Луны.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/hammond.png')";
}
function change25() {
    document.getElementById("h2_tittle").innerHTML = "ТОРБЬОРН";
    document.getElementById("p_tittle").innerHTML = "Гениальный инженер, который кует оружие из расплавленного металла прямо на поле боя.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/torbjorn.png')";
}
function change26() {
    document.getElementById("h2_tittle").innerHTML = "ТРЕЙСЕР";
    document.getElementById("p_tittle").innerHTML = "Бывший агент Overwatch, путешественница во времени с душой нараспашку.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/tracer.png')";
}
function change27() {
    document.getElementById("h2_tittle").innerHTML = "ТУРБОСВИН";
    document.getElementById("p_tittle").innerHTML = "Этот грозный и беспощадный убийца известен своей жестокостью и тягой к разрушению.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/roadhog.png')";
}
function change28() {
    document.getElementById("h2_tittle").innerHTML = "УИНСТОН";
    document.getElementById("p_tittle").innerHTML = "Сверхразумная генетически модифицированная горилла и блестящий ученый в одном лице.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/winston.png')";
}
function change29() {
    document.getElementById("h2_tittle").innerHTML = "ФАРРА";
    document.getElementById("p_tittle").innerHTML = "Боец, получивший множество наград за боевые заслуги, теперь патрулирует небеса в экспериментальном боевом костюме Raptora.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/phara.png')";
}
function change30() {
    document.getElementById("h2_tittle").innerHTML = "ХАНДЗО";
    document.getElementById("p_tittle").innerHTML = "Непревзойденный лучник и убийца. Старший брат Гендзи";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/hanzo.png')";
}
function change31() {
    document.getElementById("h2_tittle").innerHTML = "ЭХО";
    document.getElementById("p_tittle").innerHTML = "Эхо — высокотехнологичный робот, управляемый быстро адаптирующимся искусственным интеллектом.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/echo.png')";
}
function change32() {
    document.getElementById("h2_tittle").innerHTML = "ЭШ";
    document.getElementById("p_tittle").innerHTML = "Лидер знаменитой банды Мертвецов, которая держит в ужасе американский Юго-Запад.";
    var block = document.getElementById('block');
    block.style.backgroundImage =  "url('images/heroes-model/ashe.png')";
}