function contar() {
  let intervalo = setInterval(() => {
    var data = document.getElementById("data").value.split("/");
    var dataDate = new Date(data[2],data[1]-1,data[0]).getTime();

    //Calculando tempo restante
    var dataAtual = new Date().getTime();
    var x = dataDate - dataAtual;
    var dia = Math.floor(x / (1000*60*60*24));
    var hora = Math.floor((x % (1000*60*60*24)) / (1000*60*60));
    var minutos = Math.floor((x % (1000*60*60)) / (1000*60));
    var segundos = Math.floor((x % (1000*60)) / 1000);

    //Imprimindo contagem regressiva para o evento
    document.getElementById("demo").innerHTML = dia + "d " + hora + "h " + minutos + "m " + segundos + "s ";

    //Mensagem ao termino do tempo
    if (x < 0) {
      document.getElementById("demo").innerHTML = "Seu evento começou!";
      clearInterval(intervalo);
    }
  }, 1000);
}