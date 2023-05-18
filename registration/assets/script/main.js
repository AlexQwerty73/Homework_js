'use strict';

window.addEventListener('load', () => {
    let controller = new Controller();
    
    controller.activateLogin();
    controller.activatePass1();
    controller.activatePass2();
    controller.activateEmail();
    controller.activateBankCardNum();
    controller.activateSubmit();
});