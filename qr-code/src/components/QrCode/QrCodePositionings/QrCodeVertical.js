import { useEffect } from "react";
import QrCode from "qrcode";

function QrCodeVertical(props) {
  const {isOpenState, products} = props;

  useEffect(() => {
    if (isOpenState) {
      qrCodePositionDemo();
    }
  }, [isOpenState]);

  const qrCodePositionDemo = () => {
    let canvas = document.getElementById("qr-code-vertical");
    let ctx = canvas.getContext("2d");
    let qrImage = new Image();
    
    ctx.translate(0,180)
    ctx.rotate(270 * Math.PI / 180)

    ctx.beginPath();
    ctx.rect(0, 0, 180, 540);
    
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    QrCode.toDataURL("https://kartelam.com/").then((data) => {
      qrImage.src = data;

      qrImage.onload = () => {
        ctx.drawImage(qrImage, 10, 10, 160, 160);
      }
    })
  }

  return (
    <>
      <canvas
        id="qr-code-vertical"
        width="540"
        height="180"
        style={{
          margin: "30px",
          marginTop: "0px",
          border: "1px solid grey",
          cursor: "pointer",
          backgroundColor: "white",
        }}
      ></canvas>
    </>
  );
}

export default QrCodeVertical;
