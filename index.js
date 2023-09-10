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
  request(url, method, token);
}


function onInit() {
  getUser();
}

onInit();