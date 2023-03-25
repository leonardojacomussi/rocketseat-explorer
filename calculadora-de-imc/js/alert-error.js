 const AlertError = {
  element: document.querySelector("div.alert-error"),
  open() {
    AlertError.element.classList.add("open");
  },
  close(){
    AlertError.element.classList.remove("open");
  }
 };

 export default AlertError;