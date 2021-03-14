export default function OpenSesame(data) {
   // base64EncodedPDF -  variable from global-vars.js
   //                     but would normally be passed in dynamically
   var dataURI = data + base64EncodedPDF
   window.open(dataURI)

   // or try to download file
   //var link = document.createElement('a');
   //link.download = 'Test.pdf';
   //link.href= dataURI;
   //link.textContent = 'Download PDF';
   //link.click();
   //document.body.appendChild(link);
}

const openNew = (data) => {
   const dataURI = data + base64EncodedPDF
   window.open(dataURI)
}
