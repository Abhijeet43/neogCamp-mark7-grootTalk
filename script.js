const translateInputEl = document.querySelector('#translate-input');
const translateBtn = document.querySelector('#translate-button');
const translateOutput = document.querySelector('#translate-output');

function getURL(text){
  return `https://api.funtranslations.com/translate/groot.json?text=${text}`;
}

translateBtn.addEventListener('click',()=>{
  const userInput = translateInputEl.value;
  const finalURL = getURL(userInput);
  
  fetch(finalURL)
    .then(response => response.json())
    .then(data => {
      translateOutput.textContent = data.contents.translated;
    })
    .catch(e => console.log(`Error: ${e}`));

});