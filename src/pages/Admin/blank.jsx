import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = () => {
  const pdfFileUrl = "/assets/1735631022014.pdf"; // Replace with your PDF file path

  return (
    <div style={{ height: "100vh" }}>
      <Worker workerUrl={"https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js"}>
        <Viewer fileUrl={pdfFileUrl} />
      </Worker>
    </div>
  );
};

export default PdfViewer;