import React from "react";
import { useResumeContext } from "../context/context";
import LayoutOption1 from "./layout1";
import LayoutOption2 from "./layout2";

const ResumePreview = () => {
  const { resumeData } = useResumeContext();

  const Layout = resumeData.layout === "layout1" ? LayoutOption1 : LayoutOption2;

  return (
    <div className="p-6">
      <Layout data={resumeData} />
    </div>
  );
};

export default ResumePreview;
