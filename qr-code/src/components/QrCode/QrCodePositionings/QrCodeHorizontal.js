import { useEffect } from "react";
import QrCode from "qrcode";
import JsZip from "jszip";
import FileSaver from "file-saver";

function QrCodeHorizontal(props) {
  const {isOpenState, products} = props;
  const zip = new JsZip();

  // ITERATING OVER PRODUCTS
  // const printProducts = () => {
  //   products.map((value, index) => {
  //     let concatFullUrl = "";

  //     concatFullUrl += value.urlBeginningPart + value.urlMiddlePart;

  //     value.urlLastPart.map((value2, index2) => {
  //       concatFullUrl += value2.value;
  //     })
  //   })
  // }

  useEffect(() => {
    if (isOpenState) {
      qrCodePositionDemo();
    }
  }, [isOpenState]);

  const qrCodePositionDemo = () => {
    let canvas = document.getElementById("qr-code-horizontal");
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

  const downloadQrCodes = () => {
    products.map((value, index) => {
      value.urlLastPart.map((value2, index2) => {
        writePropertiesToCanvas(value.urlBeginningPart, value.urlMiddlePart, value2.value);
      })
    })
  }

  const writePropertiesToCanvas = (urlBeginningPart, urlMiddlePart, urlLastPart) => {
    let canvas = document.getElementById("qr-code-horizontal");
    let ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.rect(0, 0, 540, 180);
    ctx.fillStyle = "white";

    ctx.fill();
    ctx.closePath();

    QrCode.toDataURL(urlBeginningPart + urlMiddlePart + urlLastPart).then((data) => {
      let qrImage = new Image();
      qrImage.src = data;

      // console.log(qrImage);
      qrImage.onload = () => {
        ctx.drawImage(qrImage, 10, 10, 160, 160);
      }
    })

    // ctx.stroke();
  };

  return (
    <>
      <canvas
        id="qr-code-horizontal"
        width="540"
        height="180"
        style={{
          margin: "30px",
          marginRight: "0px",
          border: "1px solid grey",
          cursor: "pointer",
          backgroundColor: "white",
        }}
        onClick={downloadQrCodes}
      ></canvas>
    </>
  );
}

export default QrCodeHorizontal;
