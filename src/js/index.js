const container = document.querySelector("#input")
const inputSubmit = document.querySelector("#submit")


//Events

function generateQrCode() {
  const inputValue = container.value
  
  if (!inputValue) {
    console.log("é obrigatorio inserir um valor ");
    return 
  }
  
  console.log("teste");
  console.log(inputValue);

  
}
inputSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  generateQrCode()
  
})