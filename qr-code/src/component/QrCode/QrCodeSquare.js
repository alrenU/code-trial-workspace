function QrCodeSquare() {
  return (
    <>
      <canvas
        id="qr-code-vertical"
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