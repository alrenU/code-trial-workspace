import QrCode from "qrcode";
import { jsPDF } from "jspdf";

const doc = new jsPDF({ orientation: "p", unit: "mm", format: [200.0, 200.0] });

function SecondFunction() {
  return (
    <>
      <div style={{backgroundColor: "gray", height: "350px"}}>
        <form>
          <button>Click Me 2</button>
        </form>
      </div>
    </>
  );
}

function PdfGeneration() {
  const submitHandler = (event) => {
    QrCode.toDataURL("https://artskydj.github.io/jsPDF/docs/jsPDF.html").then((data) => {
        // let image = new Image();
        // image.src = data;

        console.log(data);
        doc.addImage(data, "png", 10, 10, 75, 75);
    });

    doc.text("Hello world!", 150, 10);
    doc.save("trial.pdf");

    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <button>Click to Download PDF</button>
      </form>
    </>
  );
}

export default PdfGeneration;
export {SecondFunction};