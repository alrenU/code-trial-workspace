// import QrCode from "qrcode";
// import JsZip from "jszip";
// import FileSaver from "file-saver";
// import QrCodeGenerateDialog from "./QrCode/QrCodeGenerateDialog";
// import { useState } from "react";

// // VARIABLE DECLERATIONS
// const zip = new JsZip();
// const [isOpenState, setIsOpenState] = useState(false);

// const linksArr = [];
// linksArr[0] = "https://www.youtube.com/watch?v=njeaCPYuDIg";
// linksArr[1] =
//   "https://www.google.com/search?q=qr+code+react&oq=qr+code+react&aqs=chrome.0.0i395i512j0i22i30l6j69i61.2794j1j7&sourceid=chrome&ie=UTF-8";

// FUNCTIONS
// const getQrCodes = () => {
//     linksArr.map((value, index) => {
//         QrCode.toDataURL(value).then((data) => {
//             zip.file(("deneme_"+index+".png"), (data.split(',')[1]), {base64: true})
//         })
//     });
// }

// const downloadQrCodes = async (event) => {
//     await getQrCodes();

//     zip.generateAsync({type:"blob"}).then(function(content) {
//         FileSaver.saveAs(content, 'QR_Codes.zip');
//     });

//     event.preventDefault();
// }

// RETURN SECTION
// const App = () => {
//   return (
//     <>
//       {/* <form onSubmit={downloadQrCodes}>
//                 <button type="submit">Click to See the QR Codes</button>
//             </form> */}

//       <button onClick={setIsOpenState(true)}></button>
//       <QrCodeGenerateDialog
//         isOpenState={isOpenState}
//         setIsOpenState={setIsOpenState}
//         products={linksArr}
//       />
//     </>
//   );
// };

// export default App;
