// Este exemplo mostra como se usa o objecto XMLHttpRequest para
// criar uma função que não só retorna JSON, como o retorna com recurso ao
// objecto Promise.

/**
 * Lê o JSON presente num URL.
 *
 * @param {string} url
 * @returns {Promise<any>}
 */
function getJSONXHR(url) {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  // Informar o servidor que queremos JSON
  xhr.setRequestHeader("Accept", "application/json");

  return new Promise(function(resolve, reject) {
    xhr.onload = function() {
      var texto = xhr.responseText;

      try {
        var resultado = JSON.parse(texto);

        if (xhr.status === 200) {
          resolve(resultado);
        } else {
          reject(resultado);
        }
      } catch (erroParseJson) {
        reject(erroParseJson);
      }
    };

    xhr.onerror = function() {
      reject(new Error("Failed to load " + url));
    };
  });
}

// Esta função faz uso da API dos pilotos
// e mostra os seus conteúdos no ecrã.
// Este é um exemplo de uma função que usa Promise, logo deve retornar Promise.
// como nada é retornado no then, esta função retorna uma Promise vazia.
function exemploXHR() {
  var url =
    "https://ipt-ti2-racinglegends-api.eu-gb.mybluemix.net/api/v1/drivers";

  return (
    getJSONXHR(url)
      .then(function(pilotos) {
        mostraPilotos(pilotos);
      })
      // Nota: Só estou a explicitar o 'nada' por questões demonstrativas;
      // não é preciso colocarem nada se não precisam (ou não há) valor.
      .then(function(nada) {
        console.log("Feito!");
      })
      .catch(function(erro) {
        console.error(erro);

        alert("Lamentamos, mas ocorreu um erro.");
      })
  );
}
