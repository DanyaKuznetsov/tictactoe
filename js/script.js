let markButton = document.querySelector('#mark');//Создаём первеменную для кнопки
let input1 = document.querySelector('#input1');//Создаём переменную для первого инпута 
let input2 = document.querySelector('#input2');//Создаём переменную для второго инпута
let symbol = 'X'//По умолчанию наш символ Х
let span = document.querySelector('span');
let moveNumber = 0;
let electronTable = [
    ['','',''],
    ['','',''],
    ['','','']
]
markButton.onclick = function(){
    if(input1.value > -1 && input1.value < 3 && input2.value > -1 && input2.value < 3){//Если в инпуты вписаны цифры от 0 до 2
        let cellNumber = input1.value;//Это номер ячейки
        let lineNumber = input2.value;//Это номер строки
        let lineAll = document.querySelectorAll('tr');//Создаём переменную в которую попадают все строки
        let targetLine = lineAll[lineNumber];//Создаём переменную в которую попадает выбранная строка
        let cellAll = targetLine.querySelectorAll('td');//Переменная в которую попали все ячейки в выбранной строке
        let targetCell = cellAll[cellNumber];//Переменная в которую попадает выбранная ячейка
        if (targetCell.innerHTML == ''){//Если выбранная ячейка пустая 
            targetCell.innerHTML = symbol;//Добавляем символ в выбранную ячейку
            electronTable[lineNumber][cellNumber] = symbol;
            if (symbol == 'X'){//Если символ был равен иксу делаем символ нулём
                symbol = '0';
            }else{//Иначе, делаем символ икс
                symbol = 'X';
            }
            console.log(electronTable)   
            span.innerHTML = symbol;//Вписываем в спан новый символ 
            moveNumber = moveNumber + 1;  
            check();//Вызываем функцию проверки
        }else{
            alert('Ячейка занята!')//Если в эту ячейку уже вписан знак
        } 
    }else{
        alert('Выберете строку и ячейку в диапозоне от 0 до 2.');//Если была выбрана ячейка или строка не вэтом диапозоне
    }
}
function check(){//Функция проверки победителя
    if(win() == 'X'){//Если результат функции win = 'X'
        alert('Победил "Х"')
    }
    if(win() == '0'){//Если результат функции win = '0'
        alert('Победил "0"')
    }
    if(moveNumber == 9){
        alert('Ничья!')
    }
}

function win(){
    if (electronTable[0][0] == 'X' && electronTable[0][1] == 'X' && electronTable[0][2] == 'X'){
        return'X';
    }
    if (electronTable[1][0] == 'X' && electronTable[1][1] == 'X' && electronTable[1][2] == 'X'){
        return'X';
    }
    if (electronTable[2][0] == 'X' && electronTable[2][1] == 'X' && electronTable[2][2] == 'X'){
        return'X';
    }
    if (electronTable[0][0] == 'X' && electronTable[1][0] == 'X' && electronTable[2][0] == 'X'){
        return'X';
    }
    if (electronTable[0][1] == 'X' && electronTable[1][1] == 'X' && electronTable[2][1] == 'X'){
        return'X';
    }
    if (electronTable[0][2] == 'X' && electronTable[1][2] == 'X' && electronTable[2][2] == 'X'){
        return'X';
    }
    if (electronTable[0][0] == 'X' && electronTable[1][1] == 'X' && electronTable[2][2] == 'X'){
        return'X';
    }
    if (electronTable[0][2] == 'X' && electronTable[1][1] == 'X' && electronTable[2][0] == 'X'){
        return'X';
    }
    if (electronTable[0][0] == '0' && electronTable[0][1] == '0' && electronTable[0][2] == '0'){
        return'0';
    }
    if (electronTable[1][0] == '0' && electronTable[1][1] == '0' && electronTable[1][2] == '0'){
        return'0';
    }
    if (electronTable[2][0] == '0' && electronTable[2][1] == '0' && electronTable[2][2] == '0'){
        return'0'; 
    }
    if (electronTable[0][0] == '0' && electronTable[1][0] == '0' && electronTable[2][0] == '0'){
        return'0';
    }
    if (electronTable[0][1] == '0' && electronTable[1][1] == '0' && electronTable[2][1] == '0'){
        return'0';
    }
    if (electronTable[0][2] == '0' && electronTable[1][2] == '0' && electronTable[2][2] == '0'){
        return'0';
    }
    if (electronTable[0][0] == '0' && electronTable[1][1] == '0' && electronTable[2][2] == '0'){
        return'0';
    }
    if (electronTable[0][2] == '0' && electronTable[1][1] == '0' && electronTable[2][0] == '0'){
        return'0';
    }
}