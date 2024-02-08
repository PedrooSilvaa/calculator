var n1;
var temp1;
var b = true;
var qOpe = "padrao";
var qNumero = 0;
var resultado = 0;

function teclaAc(){
    qNumero = 0;
    document.getElementById("saida").innerText = qNumero ;
}

function teclaNp(){
    if(qNumero > 0){
        qNumero = qNumero - qNumero - qNumero;
    }else{
        qNumero = qNumero - qNumero - qNumero;
    }
    document.getElementById("saida").innerText = qNumero;
}

function teclaPor(){
    qNumero = qNumero / 100;
    document.getElementById("saida").innerText = qNumero;
}

function teclaOpD(){
    qOpe = " / ";
    temp1 = qNumero;
    qNumero = 0;
    document.getElementById("saida").innerText = qNumero;
}

function teclaOpS(){
    qOpe = " - ";
    temp1 = qNumero;
    qNumero = 0;
    document.getElementById("saida").innerText = qNumero;
}

function teclaOpM(){
    qOpe = " + ";
    temp1 = qNumero;
    qNumero = 0;
    document.getElementById("saida").innerText = qNumero;
}

function teclaOpV(){
    qOpe = " * ";
    temp1 = qNumero;
    qNumero = 0;
    document.getElementById("saida").innerText = qNumero;
}

function teclaOpI(){
    if(qOpe == " + "){
        resultado = temp1 + qNumero;
    }
    if(qOpe == " - "){
        resultado = temp1 - qNumero;
    }
    if(qOpe == " * "){
        resultado = (temp1 * qNumero);
    }
    if(qOpe == " / "){
        resultado = temp1 / qNumero;
    }
    qNumero = resultado;
    document.getElementById("saida").innerText = resultado;
}

function teclaZ(){
    if(qNumero == 0){
        qNumero = 0;
    }else{
        n1 = 0;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaU(){
    if(qNumero == 0){
        qNumero = 1;
    }else{
        n1 = 1;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaD(){
    if(qNumero == 0){
        qNumero = 2;
    }else{
        n1 = 2;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaT(){
    if(qNumero == 0){
        qNumero = 3;
    }else{
        n1 = 3;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaQ(){
    if(qNumero == 0){
        qNumero = 4;
    }else{
        n1 = 4;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaC(){
    if(qNumero == 0){
        qNumero = 5;
    }else{
        n1 = 5;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaS(){
    if(qNumero == 0){
        qNumero = 6;
    }else{
        n1 = 6;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaST(){
    if(qNumero == 0){
        qNumero = 7;
    }else{
        n1 = 7;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaO(){
    if(qNumero == 0){
        qNumero = 8;
    }else{
        n1 = 8;
        qNumero = (qNumero * 10) + n1;
    }
    document.getElementById("saida").innerText = qNumero ;
}

function teclaN(){
if(qNumero == 0){
    qNumero = 9;
}else{
    n1 = 9;
    qNumero = (qNumero * 10) + n1;
}
    document.getElementById("saida").innerText = qNumero ;
}