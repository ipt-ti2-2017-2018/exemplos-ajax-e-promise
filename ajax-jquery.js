// Este exemplo faz uso do $.getJSON para obter JSON a partir do servidor.

function exemploJQueryAjax() {
  var url =
    "https://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers";

  // Os objectos de AJAX do jQuery são parecidos (mas não o mesmo)
  // que as Promise nativas. O uso é semelhante, no entanto.
  return (
    $.getJSON(url)
      .done(function(pilotos) {
        mostraPilotos(pilotos);
      })
      // Nota: Só estou a explicitar o 'nada' por questões demonstrativas;
      // não é preciso colocarem nada se não precisam (ou não há) valor.
      .done(function(nada) {
        console.log("Feito!");
      })
      .fail(function(erro) {
        console.error(erro);
        alert("Lamentamos, mas ocorreu um erro...");
      })
  );
}
