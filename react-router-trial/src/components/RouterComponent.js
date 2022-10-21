import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import QrCodeHorizontal from "./QrCodeHorizontal";
import QrCodeVertical from "./QrCodeVertical";

function RouterComponent(props) {
  return (
    <>
      <BrowserRouter>
        {/* VERSION 1 */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/qr-code-horizontal">QR Code Horizontal Link</Link>
            </li>
            <li>
              <Link to="/qr-code-vertical">QR Code Vertical Link</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          {/* VERSION 2 */}
          {/* <Route path="/" element={<Layout />} />
          <Route path="qr-code-horizontal" element={<QrCodeHorizontal />} />
          <Route path="qr-code-vertical" element={<QrCodeVertical />} /> */}

          {/* VERSION 3 */}
          <Route path="/" element={<Layout />}>
            <Route path="qr-code-horizontal" element={<QrCodeHorizontal />} />
            <Route path="qr-code-vertical" element={<QrCodeVertical />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RouterComponent;
