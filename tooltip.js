const toolTipElement = document.getElementById("tooltip-text");

class Tooltip{
    constructor({target, content,  classes, onOpen, onClose}) {
        this.target = target;
        this.content = content;
        this.classes = classes;
        this.onOpen  = onOpen;
        this.onClose = onClose;
    }
    onOpen() {
        this.onOpen ();
    }
   onClose() {
       this.onClose
   }
  show() {
       return this.target.addEventListener('mouseover', () => {
           toolTipElement.textContent = this.content;
           toolTipElement.classList.add(`${this.classes}`);
           toolTipElement.style.display = 'block';
      }, false);
   }
  hide() {
      return this.target.addEventListener('mouseleave', () => {
          toolTipElement.style.display = 'none';
      }, false);
   }
   destroy() {
       console.log('Tooltip will be destroyed!')
       return toolTipElement.remove();
   }
}

export default Tooltip;