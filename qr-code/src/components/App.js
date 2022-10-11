import QrCodeDownloadDialog from "./QrCode/QrCodeDownloadDialog.js";
import { useState } from "react";

function App() {
  // VARIABLE DECLERATIONS
  const [isOpenState, setIsOpenState] = useState(false);

  return (
    <>
      <button onClick={() => {setIsOpenState(true)}}>Click to Open the Dialog</button>
      <QrCodeDownloadDialog
        isOpenState={isOpenState}
        setIsOpenState={setIsOpenState}
      />
    </>
  );
}

export default App;
