import QrCodeHorizontal from "./QrCodePositionings/QrCodeHorizontal.js";
import QrCodeVertical from "./QrCodePositionings/QrCodeVertical.js";
import QrCodeSquare from "./QrCodePositionings/QrCodeSquare.js";
import Dialog from "@mui/material/Dialog";

function QrCodeDownloadDialog(props) {
  const { isOpenState, setIsOpenState} = props;

  const products = [
    {
      urlBeginningPart: "https://",
      urlMiddlePart: "www.youtube.com/",
      urlLastPart: [{
        value: "watch?v=njeaCPYuDIg"
      }]
    },
    {
      urlBeginningPart: "https://",
      urlMiddlePart: "www.google.com/",
      urlLastPart: [{
        value: "search?q=qr+code+react&oq=qr+code+react&aqs=chrome.0.0i395i512j0i22i30l6j69i61.2794j1j7&sourceid=chrome&ie=UTF-8"
      }]
    }
  ];

  return (
    <>
      <Dialog open={isOpenState} onClose={() => setIsOpenState(false)}>
        <div style={{height: "750px", backgroundColor: "lightGray", overflow: "hidden"}}>
          <QrCodeHorizontal isOpenState={isOpenState} products={products} />
          <QrCodeVertical isOpenState={isOpenState} products={products} />
          <QrCodeSquare isOpenState={isOpenState} products={products} />
        </div>
      </Dialog>
    </>
  );
}

export default QrCodeDownloadDialog;
