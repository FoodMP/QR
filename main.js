const data = document.querySelector("#data");
const qr = document.querySelector("#qr");

data.addEventListener("keyup" , e =>{
    if(e.code === "Enter"){
    qr.innerHTML = "";
    const href = data.value;
    // size of the image
    const size = 360;

    new QRCode(qr , {
        text: href,
        width: size,
        height: size,

        colorDark: "#040404",
        colorLight: "#e9eef4"
    })
}
})

document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    alert("smh why u tryna see my scource code");
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    alert("smh why u tryna see my scource code");
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    alert("smh why u tryna see my scource code");
    return false;
  }
}, false);
