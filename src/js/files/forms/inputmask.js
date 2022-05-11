/* Маски для полей (в работе) */
// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
  flsModules.inputmask = Inputmask().mask(inputMasks);
  let selector = document.getElementById("formTel");

  let im = new Inputmask("+7(999)-999-99-99");
  im.mask(selector);
}

