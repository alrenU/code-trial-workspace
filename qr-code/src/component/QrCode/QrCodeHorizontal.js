import { useEffect } from "react";

function QrCodeHorizontal(props) {
  // const [isOpenState, products] = props;

  // useEffect(() => {
  //   if (isOpenState) {
  //     writePropertiesToCanvas();
  //   }
  // }, [isOpenState]);

  // const writePropertiesToCanvas = () => {
  //   let canvas = document.getElementById("qr-code-horizontal");
  //   let ctx = canvas.getContext("2d");

  //   ctx.beginPath();
  //   ctx.rect(0, 0, 540, 180);
  //   ctx.fillStyle = "white";

  //   ctx.fill();
  //   ctx.closePath();
  // };

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
      ></canvas>
    </>
  );
}

export default QrCodeHorizontal;
