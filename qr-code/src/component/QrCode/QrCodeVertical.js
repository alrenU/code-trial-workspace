function QrCodeVertical() {
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
