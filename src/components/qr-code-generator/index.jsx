import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
    const [qrCode, setQrCOde] = useState('');
    const [inout, setInput] = useState('');

    function handleGenerateQrCode() {
        setQrCOde(input);
    }
  return (
    <div>
 
      <h1>QR Code Generator</h1>
      {/* <div>
        <input onChange={(e) => setInput(e.target.value)} 
        type="text" 
        name="qr-code" 
        placeholder="Enter your value here" />

        <button 
        disabled={input && input.trim() !== "" ? false : true} 
        onClick={handleGenerateQrCode}>
            Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} bgColor="#fff" />
      </div> */}
    </div>
  );
}
