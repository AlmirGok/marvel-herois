import exios from "axios";

//Criar uma constante com a url
//url completa: https://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
  baseURL: "https://sujeitoprogramador.com/",
});

export default api;
