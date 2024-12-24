let y = 0;

let array1 = document.getElementsByClassName('def');

forward1();
function forward1() {

    if (y < array1.length) {
        y++
    }

    document.documentElement.style.setProperty('--ex', (y-1) * (-110) + "vw");

    selectName();

    
    document.getElementById("count").innerText = y + "/" + array1.length;
}

function backward1(){

    if (y > 1) {
        y--;
    }

    document.documentElement.style.setProperty('--ex', (y-1) * (-110) + "vw");


    selectName();
    
    document.getElementById("count").innerText = y + "/" + array1.length;
}


function selectName(){
    if(y == 1){
        document.getElementById("text").innerText = "Абилка";
        document.getElementById("dis").innerText = "Абилка — Кошка, которую Лололошка приютил и принёс в общежитие, помогая найти кошку Жаклин. Своим необычным именем обязана Дилану, который сильно привязался к ней. Судьба кошки после событий 65 серии неизвестна, однако Дилан и Ричард предполагают, что Абилка выбралась из общежития и смогла выжить.";
    }else if(y == 2){
        document.getElementById("text").innerText = "Дженна";
        document.getElementById("dis").innerText = "Дженна — первый персонаж которого встречает Ло после попадания в новую реальность. Является главой активистского совета, учится в одном университете с Лололошкой и живёт в общежитии. В 65 серии осознала, что всё происходящее вокруг — ненастоящее. Она стёрла у всех автоматонов защитный механизм и отправила им свой код, чтобы перегрузить и сломать.";
    }else if(y == 3){
        document.getElementById("text").innerText = "Джон";
        document.getElementById("dis").innerText = "JDH (John Davey Harris / Джон Дейви Харрис) — ключевой персонаж сезонов. Является альтернативной версией Лололошки из другой вселенной. Являеться создателем Автоматонов и главой по созданию островного Хенфорта (тюрьмы для мироходцев)";
    }else if(y == 4){
        document.getElementById("text").innerText = "Дилан";
        document.getElementById("dis").innerText = "Ди́лан — Один из главных персонажей сезона Последняя Реальность. Учился в одном университете с Лололошкой, а также жил в одной комнате с ним в общежитии. В 60 серии его тело оказалось в руках Джоди Арист, но в 89 серии у Дилана появилось новое, сильно похожее на его предыдущее. Являеться автоматом и лучшим другом Ло, во многом помогал ему в сезоне.";
    }else if(y == 5){
        document.getElementById("text").innerText = "Лоло";
        document.getElementById("dis").innerText = "Lololowka (Лололошка) - Покладистый, уравновешенный, не особо разговорчивый. Окружающие часто используют его как мальчика на побегушках. По отношению к персонажам добрый и справедливый. Иногда, конечно, легкомысленна; выбирает объективно неправильные решения.";
    }else if(y == 6){
        document.getElementById("text").innerText = "Ричард";
        document.getElementById("dis").innerText = "Ричард — Студент, учившийся на одном факультете вместе с Лололошкой. В 62 серии он стал его союзником, а в дальнейшем - одним из главных друзей Лололошки в сезоне. В начале очень негативно относился к автоматоном, но с началось общения с Ло стал к ним гораздо терпимее.";
    }else if(y == 7){
        document.getElementById("text").innerText = "Саймон Солус";
        document.getElementById("dis").innerText = "3.	Саймон Солус — Бывший управляющий общежития Lucky Charms University и нынешний генеральный директор JCompany. С должности управляющего общежитием был уволен из-за того, что на него пожаловались уборщики. После событий 65 серии смог успешно уплыть с острова и переселиться в материковый Хэнфорт.";

    }
}



document.getElementById('btn_forward').addEventListener('click', forward1);
document.getElementById('btn_backward').addEventListener('click', backward1);




function search(){
    let user_input = document.getElementById('input_search')

    if(user_input.value == "Абилка"){
        y = 0
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    
    }else if(user_input.value == "Дженна"){
        y = 1
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Джон"){
        y = 2
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Дилан"){
        y = 3
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Лоло"){
        y = 4
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Ричард"){
        y = 5
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else if(user_input.value == "Саймон Солус"){
        y = 6
        forward1()
        user_input.value = ""
        user_input.placeholder = "введите имя персонажа"
    }else{
        user_input.value = ""
        user_input.placeholder = "не найдено"
    }

    

}

document.getElementById('btn_search').addEventListener('click', search);



            // <ul>
            //     <li class="ul-title">Список персонажей</li>
            //     <li>1. Абилка</li>
            //     <li>2. Дженна</li>
            //     <li>3. Джон</li>
            //     <li>4. Дилан</li>
            //     <li>5. Лоло</li>
            //     <li>6. Ричард</li>
            //     <li>7. Саймон Солус</li>

            // </ul>