let y = 0;

let array1 = document.getElementsByClassName('def');

forward1();
function forward1() {

    if (y < array1.length) {
        y++
    }

    document.documentElement.style.setProperty('--ex', (y-1) * (-40) + "vw");

    selectMob();

    
    document.getElementById("count").innerText = y + "/" + array1.length;
}

function backward1(){

    if (y > 1) {
        y--;
    }

    document.documentElement.style.setProperty('--ex', (y-1) * (-40) + "vw");


    selectMob();
    
    document.getElementById("count").innerText = y + "/" + array1.length;
}


function selectMob(){
    if(y == 1){
        document.getElementById("text").innerText = "Последняя Реальность на данный момент самый длинный сезон по хронометражу.";
    }else if(y == 2){
        document.getElementById("text").innerText = "В этом сезоне было продемонстрировано самое большое количество сюжетных механик.";

    }else if(y == 3){
        document.getElementById("text").innerText = "Это сезон с самым большим количеством отсылок, в особенности на различные аниме, мемы и фильмы.";
    }else if(y == 4){
        document.getElementById("text").innerText = "Все персонажи и события в этой реальности, полностью или частично противоположны тем, что были показаны в прошлых пяти сезонах.";
    }else if(y == 5){
        document.getElementById("text").innerText = "В сборке практически полностью вырезана механика зачарования предметов. Чары теперь можно получить только при прокачке навыков в статуе Университета/JDH.";
    }else if(y == 6){
        document.getElementById("text").innerText = "Это второй сезон, где смерть персонажа (в несчастных случаях) обыгрывается сюжетом. Первый такой — Идеальный МИР";
    }else if(y == 7){
        document.getElementById("text").innerText = "В сезоне есть множество параллелей с сериалом 'Мир Дикого Запада' и фильмом 'Трумана'. Арка с с борьбой за права автоматонов могла быть взята из игры 'Detroit: Become Human'.";
    }else if(y == 8){
        document.getElementById("text").innerText = "Главное меню постоянно переключается между различными эпохами, и в нём также спрятано несколько пасхалок: В версии меню с самым старым компьютером, на его мониторе написано: MC-SOSSHELL, /BTL_CT /DOOM /SNAKE /IIC /LOH. В версии меню с современным компьютером, на мониторе открыт YouTube, где включено видео со знаменитым мемом 'ой, мама пришла'.";
    }else if(y == 9){
        document.getElementById("text").innerText = "Если ввести теги персонажей из Пейджера в Telegram, то появятся профили с таким же именем и аватаркой. Во всех номерах телефонов аккаунтов содержится число 993. Помимо этого, можно наткнуться на блоги персонажей. Как бы убедительно они не выглядели, они являются исключительно фанатским творчеством.";
    }
}



document.getElementById('btn_forward').addEventListener('click', forward1);
document.getElementById('btn_backward').addEventListener('click', backward1);