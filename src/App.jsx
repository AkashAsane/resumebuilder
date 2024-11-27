import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import { ResumeProvider } from "./context/context";
import ResumeForm from "./components/form";
import ResumePreview from "./components/preview";

function App() {
  const resumeRef = useRef();

 
  const exportResumeAsPDF = () => {
    const doc = new jsPDF();

   
    const resumeContent = resumeRef.current;


    doc.html(resumeContent, {
      callback: (doc) => {
        doc.save("resume.pdf"); 
      },
      x: 10,
      y: 10,
      width: 180,
      windowWidth: 650,
    });
  };

  return (
    <ResumeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <header className="p-6 bg-indigo-600 text-white text-center">
          <h1 className="text-3xl font-bold">Interactive Resume Builder</h1>
        </header>

        <main className="flex flex-col items-center space-y-6 p-6">
          <div className="w-full max-w-4xl space-y-6">
          

            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <ResumeForm />

              <div className="flex justify-center space-x-4">
                <button
                  onClick={exportResumeAsPDF}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-500 transition"
                >
                  Export Resume
                </button>
              </div>
            </div>

            <div
              ref={resumeRef} 
              className="w-full bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-2xl font-semibold text-gray-800">Resume Preview</h2>
              <ResumePreview />
            </div>
          </div>
        </main>
      </div>
    </ResumeProvider>
  );
}

export default App;
