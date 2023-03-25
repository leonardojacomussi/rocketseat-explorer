const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  btnClose: document.querySelector(".modal button.close"),
  open(message) {
    Modal.message.innerText = message;
    Modal.wrapper.classList.add("open");
  },
  close() {
    Modal.message.innerText = "";
    Modal.wrapper.classList.remove("open");
  },
};

Modal.btnClose.onclick = () => Modal.close();

export default Modal;