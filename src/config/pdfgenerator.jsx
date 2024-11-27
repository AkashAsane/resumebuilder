import jsPDF from "jspdf";

export const generatePDF = (resumeData) => {
  const doc = new jsPDF();
  doc.text(`Name: ${resumeData.personalInfo.name}`, 10, 10);
  doc.text(`Email: ${resumeData.personalInfo.email}`, 10, 20);
  doc.save("resume.pdf");
};
