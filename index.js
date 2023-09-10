// Import stylesheets
import './style.css';

//Variables globales
let token = "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"
let clientXMLHttpRequest = new XMLHttpRequest();

/**
 * Función para lanzar peticiones HTTP
 * @param {string} url
 * @param {string} method
 * @param {string} token
 * @returns {void}
 */
 function request(url, method, token) {
  clientXMLHttpRequest.open(method, url, true);
  clientXMLHttpRequest.setRequestHeader("Authorization", `Bearer ${token}`);
  clientXMLHttpRequest.onload = function() {
    const res = JSON.parse(this.responseText);
    setAlert(`Numero de registros ${res.length}`);
  }
  
  clientXMLHttpRequest.send();
}

/**
 * Función para mostrar resultado
 * @param {string}  
 * @return {void}
 */
 function setAlert(value) {
  let alert = document.getElementById('alert');
  alert.removeAttribute('hidden');
  alert.innerHTML = `
  <div class="text-break">
    ${value}
  </div>
  `;
}


function getUser() {
  let url = "https://api.github.com/users";
  let method = "GET";
  get(url, method, token);
}


function onInit() {
  getUser();
}

//onInit();
