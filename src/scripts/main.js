import "../styles/main.css";
import { showRegister } from "./register.js";
import { showHome } from "./home.js";

const app = document.getElementById("app");

const isRegistered = localStorage.getItem("registered");

if (!isRegistered) {
  showRegister(app);
} else {
  showHome(app);
}