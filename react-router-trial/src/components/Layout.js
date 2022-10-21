import { Outlet, Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

function Layout() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/qr-code-horizontal" target="_blank">{<ButtonComponent />}</Link>
          </li>
          <li>
            <Link to="/qr-code-horizontal">QR Code Horzontal</Link>
          </li>
          <li>
            <Link to="/qr-code-vertical">QR Code Vertical</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Layout;
