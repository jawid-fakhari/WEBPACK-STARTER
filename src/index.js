import generateJoke from "./generateJoke";
import "./styles/main.scss";
import myImage from "./assets/IMG_20240217_165218.jpg";

const myface = document.querySelector("#myImage");
myface.src = myImage;
console.log(generateJoke);
