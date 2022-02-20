var qrcode = document.getElementById('qrcode');
var input = document.getElementById('input');
var generateBtn = document.getElementById('generate');
var download = document.getElementById('download');


generateBtn.addEventListener("click", () => {
    var url = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${input.value}`;
    
    qrcode.src = url;
    // download.href = url;



});

download.addEventListener("click", ()=>{
    let imagePath = qrcode.getAttribute('src');
    let fileName = getFileName("qrCode");
    saveAs(imagePath , fileName);
})
function getFileName(str){
    return str.substring(str.lastIndexOf('/') + 1);
}

