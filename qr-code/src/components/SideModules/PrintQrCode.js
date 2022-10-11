import {useState, useEffect} from "react";
import QrCode from "qrcode";

function PrintQrCode(props) {
    const [srcState, setSrcState] = useState();

    useEffect(() => {
        QrCode.toDataURL(props.qrLink).then((data) => {
            setSrcState(data);
        })
    }, []);

    return (
        <img src={srcState}></img>
    );
}

export default PrintQrCode;