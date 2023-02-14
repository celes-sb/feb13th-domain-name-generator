/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("button").addEventListener("click", ejecutar);
};

let pronoun = ["the", "our", "my"];
let adj = ["great", "big", "silent"];
let noun = ["jogger", "racoon", "sun"];
let domain = [".com", ".org", ".edu"];

const ejecutar = () => {
  let texto;
  let parrafo;
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < noun.length; l++) {
          console.log(pronoun[i] + adj[j] + noun[k] + domain[l]);
          parrafo = document.createElement("p");
          texto = document.createTextNode(
            pronoun[i] + adj[j] + noun[k] + domain[l]
          );
          parrafo.appendChild(texto);
          document.querySelector("#resultados-dominios").appendChild(parrafo);
        }
      }
    }
  }
};
