// function copyImage(value) {
//     function handler(event){
//         event.clipboardData.setData('text/plain', value);
//         event.preventDefault();
//         document.removeEventListner('copy', handler, true);
//     }
// document.addEventListner('copy', handler, true);
// document.execCommand('copy');
// }

function myFunction() {
    /* Get the text field */
    var copyText = document.getElementById("copy");
  
    /* Select the text field */
    copyText.select();
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }