import QrCodeHorizontal from "./QrCodeHorizontal";
import QrCodeVertical from "./QrCodeVertical";
import QrCodeSquare from "./QrCodeSquare";
import Dialog from "@mui/material/Dialog";

function QrCodeDownloadDialog(props) {
  const { isOpenState, setIsOpenState} = props;

  const linksArr = [];
  linksArr[0] = "https://www.youtube.com/watch?v=njeaCPYuDIg";
  linksArr[1] =
  "https://www.google.com/search?q=qr+code+react&oq=qr+code+react&aqs=chrome.0.0i395i512j0i22i30l6j69i61.2794j1j7&sourceid=chrome&ie=UTF-8";

  return (
    <>
      <Dialog open={isOpenState} onClose={() => setIsOpenState(false)}>
        <div style={{height: "750px", backgroundColor: "lightGray", overflow: "hidden"}}>
          <QrCodeHorizontal isOpenState={isOpenState} products={linksArr} />
          <QrCodeVertical isOpenState={isOpenState} products={linksArr} />
          <QrCodeSquare isOpenState={isOpenState} products={linksArr} />
        </div>
      </Dialog>
    </>
  );
}

export default QrCodeDownloadDialog;
