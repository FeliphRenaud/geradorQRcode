# 🔳 Gerador de QR Code

Este é um projeto simples de geração de QR Code usando HTML, CSS e JavaScript. Ele permite que o usuário insira uma URL ou texto e, com base nisso, gera um QR Code usando a API gratuita do [GoQR.me](https://goqr.me/api/).

## 📸 Prévia do Projeto

![Interface inicial](![alt text](image.png))
![QR Code gerado](![alt text](image-1.png))

---

## 🚀 Funcionalidades

- Inserção de URL ou texto livre
- Geração dinâmica de QR Code via API
- Interface intuitiva e responsiva
- Feedback visual de carregamento e sucesso
- Estilização moderna e clean

---

## 🗂 Estrutura de Pastas

    geradorQRcode
    │
    ├── public
    │ └── index.html # Página principal
    │
    ├── src
    │ ├── assets
    │ │ └── img
    │ │ └── qr-code-236-32.png # Favicon e imagem default
    │ ├── css
    │ │ └── styles.css # Estilos customizados
    │ └── js
    │ └── index.js # Lógica de geração do QR Code
    │
    └── README.md # Documentação do projeto

## 🧠 Como funciona?

O botão **"Gerar QRcode"** escuta um clique e então:

1. Verifica se há valor no campo de entrada.
2. Se houver, altera o texto do botão para "Gerando QRcode..."
3. Faz a requisição para a API:  
   `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=SEU_TEXTO`
4. Exibe a imagem do QR Code gerado.
5. Muda o botão para "QRcode Gerado".

---

## 🛠 Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript Vanilla**
- **[GoQR API](https://goqr.me/api/)** (para geração do QR Code)

---

## 📦 Como usar

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/geradorQRcode.git

Abra o arquivo public/index.html em seu navegador.

💡 Você pode usar o Live Server do VS Code para facilitar a execução local.

```

## ✅ Melhorias Futuras

Adicionar opção de download do QR Code

Permitir escolha de tamanho do QR

Salvar histórico de códigos gerados

Versão em TypeScript com validações

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para usar, modificar e distribuir.

# 🙋‍♂️ Autor

Desenvolvido por Feliph Renaud
