function contar() {
  let intervalo = setInterval(() => {
    var data = document.getElementById("data").value.split("/");
    var dataDate = new Date(data[2],data[1]-1,data[0]).getTime();

    //Calculando tempo restante
    var dataAtual = new Date().getTime();
    var x = dataDate - dataAtual;
    var mes = Math.floor(x / (1000 * 60 * 60 * 24 * 30));
    var dias = Math.floor(x / (1000 * 60 * 60 * 24));
    var horas = Math.floor((x % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((x % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((x % (1000 * 60)) / 1000);

    //Imprimindo contagem regressiva para o evento
    document.getElementById("mes").innerHTML = mes;
    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    //Mensagem ao termino do tempo
    if (x < 0) {
      document.getElementById("clockdiv").innerHTML = "Seu evento começou!";
      clearInterval(intervalo);
    }
  }, 1000);
}

var x = true;

