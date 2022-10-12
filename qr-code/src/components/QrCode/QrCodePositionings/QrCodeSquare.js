import { useEffect } from "react";
import QrCode from "qrcode";

function QrCodeSquare(props) {
  const {isOpenState, products} = props;

  useEffect(() => {
    if (isOpenState) {
      qrCodePositionDemo();
    }
  }, [isOpenState]);

  const qrCodePositionDemo = () => {
    let canvas = document.getElementById("qr-code-square");
    let ctx = canvas.getContext("2d");
    let qrImage = new Image();

    ctx.beginPath();
    ctx.rect(0, 0, 540, 180);
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
        id="qr-code-square"
        width="240"
        height="240"
        style={{
          margin: "30px",
          marginLeft: "180px",
          marginRight: 0,
          marginTop: 0,
          border: "1px solid grey",
          backgroundColor: "white",
          cursor: "pointer"
        }}
      ></canvas>
    </>
  );
}

export default QrCodeSquare;