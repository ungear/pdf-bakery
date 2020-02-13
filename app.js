
toDataURL(
  'cat_1.jpeg',
  dataUrl => {
    var pdf = new jsPDF();
    pdf.text("Sample pdf text", 35, 25);
    pdf.addImage(dataUrl, "JPG", 15, 40, 180, 180);
    drawPdfInIframe(pdf);
  }
)
  
function toDataURL(src, callback, outputFormat) {
  var img = new Image();
  img.onload = function() {
    var canvas = document.createElement('CANVAS');
    var ctx = canvas.getContext('2d');
    var dataURL;
    canvas.height = this.naturalHeight;
    canvas.width = this.naturalWidth;
    ctx.drawImage(this, 0, 0);
    dataURL = canvas.toDataURL(outputFormat);
    callback(dataURL);
  };
  img.src = src;
  if (img.complete || img.complete === undefined) {
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
    img.src = src;
  }
}

function drawPdfInIframe(pdf){
  var iframe = document.createElement('iframe');
  iframe.setAttribute('style', 'position:absolute;right:0; top:0; bottom:0; height:100%; width:500px');
  document.body.appendChild(iframe);
  iframe.src = pdf.output('datauristring');
}