import Tooltip from "./tooltip.js";

let myTooltip = new Tooltip({
    target: document.getElementById("tooltip-button"),
    content: 'This is a tooltip',
    classes: 'tooltip-text',
    onOpen: () => {
        console.log('Tooltip opened');
    },
    onClose: () => {
        console.log('Tooltip closed');
    }
});
let myTooltip2 = new Tooltip({
    target: document.getElementById("tooltip-button1"),
    content: 'This is a  new tooltip',
    classes: 'tooltip-text-new',
    onOpen: () => {
        console.log('Tooltip opened');
    },
    onClose: () => {
        console.log('Tooltip closed');
    }
});

myTooltip.onOpen();
myTooltip.onClose();
myTooltip.show();
myTooltip.hide();

myTooltip2.show()
myTooltip2.hide();
// myTooltip2.onClose()
// myTooltip.destroy();
