import html2pdf from "html2pdf.js";

export function exportPdf() {
  const element = document.getElementById("report");
  if (!element) {
    console.log("Report Not Found");
    return;
}

  

  html2pdf()
    .set({
      margin: 8,

      filename: "JournalView.pdf",

      image: {
        type: "jpeg",
        quality: 1,
      },

      html2canvas: {
        scale: 2,
      },

      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    })
    .from(element)
    .save();
}