let modal = document.getElementById("firstModal");
let modalContent = document.getElementById("firstModalContent");
let mainBlock = document.getElementById("main-block");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.classList.remove('modal');
    modalContent.style.display = "none";
    mainBlock.style.display = "block";
}