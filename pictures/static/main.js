function copyImage(value){
    function handler(event){
        event.clipboardData.setData('text/plain', value);
        event.preventDefault();
        document.removeEventListner('copy', handler, true);
    }
document.addEventListner('copy', handler, true);
document.execCommand('copy');
}