//Практика
//1. Создать страницу с полем textarea с аттрибутом readonly (только для чтения)
//    Разместить ниже кнопку, по нажатию на которую открывается окно
//    В окне есть поле ввода и кнопка. В поле ввода можно ввести любой текст
//    Нажав на кнопку этот текст должен добавиться к тексту в textarea в родительском окне.

//Домашнее задание:
//2. На странице разместить кнопку. По нажатию на кнопу, создается новое окно каждый раз,
//    как нажали.
//    На каждой созданной странице вывести список уже созданных окон (на старых не обновлять)
//    Список в виде даты создания окна, имени и кнопки заркытия.
//    По нажатию на кнопку должно закрыться это окно.


//Открытие окна. На кнопке, чтобы не блокировалось 


function func1() {
    var newWindow = window.open('HtmlPage2.html', 'newWindow', 'width=500, height=300, left=500, top=200, scrollbars=no')
    newWindow.onload = function () {
        newWindow.document.querySelector('#openbtn2').addEventListener('click', function () {
            window.document.getElementById('txtarea').value += ' ' + newWindow.document.querySelector('input[name="myInput"]').value;
        })
    }
}


