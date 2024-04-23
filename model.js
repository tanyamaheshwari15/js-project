// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .OPEN-MODAL to modal-overlay
// when user clicks close-btn remove .OPEN-MODAL from modal-overlay

const modalBtn=document.querySelector(".modal-btn");
const closeBtn=document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
