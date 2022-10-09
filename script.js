function contar() {
  let intervalo = setInterval(function() {
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

    if(x > 0){
      //Imprimindo contagem regressiva para o evento
      document.getElementById("mes").innerHTML = mes;
      document.getElementById("dias").innerHTML = dias;
      document.getElementById("horas").innerHTML = horas;
      document.getElementById("minutos").innerHTML = minutos;
      document.getElementById("segundos").innerHTML = segundos;
    }else{  
      //Mensagem ao termino do tempo
      document.getElementById("inserir").style.display = "none";
      document.getElementById("nomeEventoTitulo").style.display = "none";
      document.getElementById("relogio").innerHTML = "Seu evento começou!";
      var f = document.getElementById('relogio') ;
      setInterval(function() {
        f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
      }, 500);
      clearInterval(intervalo);
    }
  }, 1000);

  var txt = document.getElementById("nomeEvento")
  document.getElementById("inserir").style.display = "none";
  document.getElementById("nomeEventoTitulo").innerHTML = txt.value;
}

function addNovoEvento() {
  var tabela = document.getElementById("tabela");
  var linha = tabela.insertRow();
  var celula = linha.insertCell();
  celula.innerHTML = `
  <div class="eventos">
    <div id="inserir">
      Evento: <input type="text" id="nomeEvento" placeholder="nome evento"> 
      <input type="text" id="data" placeholder="02/10/2022"> 
      <button onclick="contar()">add event</button>
    </div>
    <h1 id="nomeEventoTitulo"><h1>
    <div id="relogio">
      <div>
        <span class="meses" id="mes"></span>
        <div class="smalltext">Mês</div>
      </div>

      <div>
        <span class="days" id="dias"></span>
        <div class="smalltext">Dias</div>
      </div>

      <div>
        <span class="hours" id="horas"></span>
        <div class="smalltext">Horas</div>
      </div>

      <div>
        <span class="minutes" id="minutos"></span>
        <div class="smalltext">Minutos</div>
      </div>

      <div>
        <span class="seconds" id="segundos"></span>
        <div class="smalltext">Segundos</div>
      </div>
    </div>
  </div>`;

}

