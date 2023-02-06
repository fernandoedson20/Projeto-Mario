const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src


function alternarModal(){
    modal.classList.toggle("aberto");

}

console.log('mostrar o document', document);

//pegando o elemento do botao  

console.log(document.querySelector(".botao-trailer"));



console.log("mostrar o objeto da modal", modal);

botaoTrailer.addEventListener("click", () => {
 
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

//fechando a motal
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {


    alternarModal();
    video.setAttribute("src", "");
});
