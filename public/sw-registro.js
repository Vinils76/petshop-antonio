if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw-petshop.js")
    .then(function () {
      console.log("Service Worker foi registrado com sucesso!");
    })
    .catch(function (error) {
      console.log("Erro no service Worker: " + error.message);
    });
} else {
  console.log("Este navegador não suporta Service Worker");
}
