function asin(v, ejecucion) {
    console.log(`EMpezar ejecución: el Valor es = ${v}`);
    return new Promise((resolve, reject) => {
      return resolve(
        setTimeout(function () {
          ejecucion(v, v * v);
        }, 0 | (Math.random() * 100))
      );
    });
  }
  var maximo = 10;
  var cnt = 0;
  