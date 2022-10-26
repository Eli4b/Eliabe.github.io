// Criaçãp da Var - Constante(Não muda) myImage
const myImage = document.querySelector("img");

// Atributo onclick na var

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    // Testa o endereço do mySrc se for estritamente igual (===) altera oatributo
    if (mySrc === "images/firefox-icon.png") {
        myImage.setAttribute("src", "images/firefox2.png");
        // Senão tiver igual (por já ter sido alterado) ele volta para o preset
    } else {
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    // Função Seta com o prompt() uma mensagem como a alert()
    // Sua diferença é que pede ao usuário que insira dados e a armazzene em uma var 
    const myName = prompt("Please enter your name.");
    if (!myName){
        // Se negação de myName(ou seja myName=null) faça novamente setUserName
        setUserName();
    } else {
        // Caso setUsername = não nulo a API para armazenar dados em web e recuperá-los posteriormente será ativa
        localStorage.setItem("name", myName);
    }   // Usamos o setItem para criar e armazenar um item name definindo seu valor para myName
        // Var essa que contém a entrada do usuário
    myHeading.textContent = `Mozilla is cool, ${myName}`;
    // Por fim anexamos o conteúdo de título para uma String, além do nome recém armazenado.
}

    // Verifica se há dados no name, caso não, é criado.
if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}
    // Função Para o Botão Change User
myButton.onclick = () => {
    setUserName();
};