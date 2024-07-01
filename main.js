var siteForm = document.querySelector(".form-js");
var formInput = document.querySelector(".input-js");
var formSelect = document.querySelector(".select-js");
var formOutput = document.querySelector(".output-js");
var formBtn = document.querySelector(".js-button");

formBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  var inputValue = Number(formInput.value);
  var selectValue = Number(formSelect.value);

  if (inputValue < 0) {
    alert("Iltimos musbat son kiriting...")
  }
  else {
    var Summ = inputValue * selectValue;

    formOutput.textContent = `${Summ}`;
    console.log(formOutput);
  }
});