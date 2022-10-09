function contar(eventoId) {
  let intervalo = setInterval(function() {
    var data = document.getElementById(`data-${eventoId}`).value.split("/");
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
      document.getElementById(`mes-${eventoId}`).innerHTML = mes;
      document.getElementById(`dias-${eventoId}`).innerHTML = dias;
      document.getElementById(`horas-${eventoId}`).innerHTML = horas;
      document.getElementById(`minutos-${eventoId}`).innerHTML = minutos;
      document.getElementById(`segundos-${eventoId}`).innerHTML = segundos;
    }else{  
      //Mensagem ao termino do tempo
      document.getElementById(`inserir-${eventoId}`).style.display = "none";
      document.getElementById(`nomeEventoTitulo-${eventoId}`).style.display = "none";
      document.getElementById("relogio").innerHTML = "Seu evento começou!";
      var f = document.getElementById("relogio") ;
      setInterval(function() {
        f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
      }, 500);
      clearInterval(intervalo);
    }
  }, 1000);

  var txt = document.getElementById(`nomeEvento-${eventoId}`)
  document.getElementById(`inserir-${eventoId}`).style.display = "none";
  document.getElementById(`nomeEventoTitulo-${eventoId}`).innerHTML = txt.value;
}

function addNovoEvento() {
  var totalEventosElemento = document.getElementById("total-eventos");
  var totalEventos = parseInt(totalEventosElemento.value) + 1;
  totalEventosElemento.value = totalEventos;
  var tabela = document.getElementById("tabela");
  var linha = tabela.insertRow();
  var celula = linha.insertCell();
  celula.innerHTML = `
  <div class="eventos">
    <div id="inserir-${totalEventos}">
      Evento: <input type="text" id="nomeEvento-${totalEventos}" placeholder="nome evento"> 
      <input type="text" id="data-${totalEventos}" placeholder="02/10/2022"> 
      <button onclick="contar(${totalEventos})">add event</button>
    </div>
    <h1 id="nomeEventoTitulo-${totalEventos}" class="nomeEventoTitulo"><h1>
    <div id="relogio">
      <div>
        <span class="meses" id="mes-${totalEventos}"></span>
        <div class="smalltext">Mês</div>
      </div>

      <div>
        <span class="days" id="dias-${totalEventos}"></span>
        <div class="smalltext">Dias</div>
      </div>

      <div>
        <span class="hours" id="horas-${totalEventos}"></span>
        <div class="smalltext">Horas</div>
      </div>

      <div>
        <span class="minutes" id="minutos-${totalEventos}"></span>
        <div class="smalltext">Minutos</div>
      </div>

      <div>
        <span class="seconds" id="segundos-${totalEventos}"></span>
        <div class="smalltext">Segundos</div>
      </div>
    </div>
  </div>`;
  
  if(totalEventosElemento.value == 10){
    document.getElementById("btn-add-evento").style.display = "none";
  }
}

