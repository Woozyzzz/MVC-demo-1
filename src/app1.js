import "./app1.css";
import $ from "jquery";

const $number = $(`#app1 p`);
const $button1 = $(`#plus`);
const $button2 = $(`#subtract`);
const $button3 = $(`#multiply`);
const $button4 = $(`#divide`);
let number = Number(localStorage.getItem("number")) || 100;
$number.text(number);

$button1.on("click", () => {
  $number.text(Number($number.text()) + 1);
  localStorage.setItem("number", Number($number.text()));
});
$button2.on("click", () => {
  $number.text(Number($number.text() - 1));
  localStorage.setItem("number", Number($number.text()));
});
$button3.on("click", () => {
  $number.text(Number($number.text() * 2));
  localStorage.setItem("number", Number($number.text()));
});
$button4.on("click", () => {
  $number.text(Number($number.text() / 2));
  localStorage.setItem("number", Number($number.text()));
});
