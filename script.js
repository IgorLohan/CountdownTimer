function contar(){
    var data = new Date("dec 31, 2023 15:37:25").getTime();
    //document.getElementById("data").getTime()

    //Calculando tempo restante
    var dataAtual = new Date().getTime();
    var x = data - dataAtual;
    var dia = Math.floor(x / (1000*60*60*24));
    var hora = Math.floor((t % (1000*60*60*24)) / (1000*60*60));
    var minutos = Math.floor((t % (1000*60*60)) / (1000*60));
    var segundos = Math.floor((t % (1000*60)) / 1000);

    //Imprimindo contagem regressiva para o evento
    document.getElementById("demo").innerHTML = dia + "d " + hora + "h " + minutos + "m " + segundos + "s ";

    //Mensagem ao termino do tempo
    if(x < 0){
        document.getElementById("demo").innerHTML = "Seu evento começou!";
    }

}