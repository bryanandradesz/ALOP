function logComDelay(mensagem, tempo) {
    setTimeout(function() {
      console.log(mensagem);
    }, tempo);
  }
  
  function logComDelayEntreLogs(mensagens, intervalo) {
    mensagens.forEach(function(mensagem, index) {
      var tempo = index * intervalo;
      logComDelay(mensagem, tempo);
    });
  }
  
  // Exemplo de uso:
  var mensagens = ['Cara', 'Esta', 'tão facil', 'de', 'saber', 'qual', 'é', 'o mistério', 'analise os fatos!'];
  var intervalo = 1000; // 1 segundo
  
  logComDelayEntreLogs(mensagens, intervalo);
  