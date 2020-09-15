import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://www.dnd5eapi.co/api/",
  timeout: 3000
})


export const sandbox = Axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})