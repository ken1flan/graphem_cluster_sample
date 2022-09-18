/*
設置方法
数えたいテキストフィールドなどのクラスにjs_character-counterと、
文字数を表示するところのIDをdata-targetに指定します。
*/

window.addEventListener('load', function (event) {
  var textInputs = document.querySelectorAll('.js_character-counter');
  textInputs.forEach(function (textInput) {
    CharacterCounter.initialize(textInput);
  });
});

var CharacterCounter = CharacterCounter || {};

CharacterCounter.initialize = function (textInput) {
  var updateTarget = function (textInput) {
    var text = textInput.value;
    var length = [...text].length;
    var targets = document.querySelectorAll(textInput.dataset.target);
    targets.forEach(function (target) {
      target.textContent = length.toString();
    });
  };
  updateTarget(textInput);
  textInput.addEventListener('input', (event) => {
    updateTarget(textInput);
  });
};
