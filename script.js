document.getElementById("year").textContent = new Date().getFullYear();

const checkoutButton = document.getElementById("checkoutButton");
checkoutButton.addEventListener("click", function (event) {
  const url = this.dataset.checkoutUrl;
  if (!url || url === "PON_AQUI_TU_URL_DE_HOTMART") {
    event.preventDefault();
    alert("El checkout aún no está conectado. Sustituye PON_AQUI_TU_URL_DE_HOTMART por la URL real de Hotmart.");
  } else {
    this.href = url;
  }
});
