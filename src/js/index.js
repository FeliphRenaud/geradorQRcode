const inputText = document.querySelector("#input")// input de entrada
const inputSubmit = document.querySelector("#submit")//antigo input de submit trocado por btn 
const qrCodeImg = document.querySelector("#qr-img")// imagem de qrcode gerado
const container = document.querySelector(".container")

//Events

function generateQrCode() {
  const inputValue = inputText.value
  
  if (!inputValue) {
    console.log("é obrigatorio inserir um valor ");
    return 
  }
  inputSubmit.innerText = "Gerando QRcode..."
  qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
  

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active")
    inputSubmit.innerText = "QRcode Gerado"
  })

  console.log("teste");
  console.log(inputValue);

  
}
inputSubmit.addEventListener("click", () => {
 
  generateQrCode()
  
})