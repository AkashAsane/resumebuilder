import React from "react";
import { useResumeContext } from "../context/context";

const ResumeForm = () => {
  const { resumeData, updatePersonalInfo, updateResumeData } = useResumeContext();

  const handleInputChange = (e, field) => {
    updatePersonalInfo(field, e.target.value);
  };

  const handleSkillsChange = (e) => {
    const selectedSkills = Array.from(e.target.selectedOptions, (option) => option.value);
    updateResumeData("skills", selectedSkills);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">Personal Info</h2>
        <div className="space-y-4">
          <input
            type="text"
            value={resumeData.personalInfo.name}
            onChange={(e) => handleInputChange(e, "name")}
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            value={resumeData.personalInfo.email}
            onChange={(e) => handleInputChange(e, "email")}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            value={resumeData.personalInfo.phone}
            onChange={(e) => handleInputChange(e, "phone")}
            placeholder="Phone"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            value={resumeData.personalInfo.linkedin}
            onChange={(e) => handleInputChange(e, "linkedin")}
            placeholder="LinkedIn"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            value={resumeData.personalInfo.github}
            onChange={(e) => handleInputChange(e, "github")}
            placeholder="GitHub"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Education</h2>
          <input
            type="text"
            value={resumeData.education.institution}
            onChange={(e) => updateResumeData("education", { ...resumeData.education, institution: e.target.value })}
            placeholder="Institution"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            value={resumeData.education.degree}
            onChange={(e) => updateResumeData("education", { ...resumeData.education, degree: e.target.value })}
            placeholder="Degree"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            value={resumeData.education.year}
            onChange={(e) => updateResumeData("education", { ...resumeData.education, year: e.target.value })}
            placeholder="Year of Passing"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
          <select
            multiple
            onChange={handleSkillsChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="JavaScript">JavaScript</option>
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="CSS">CSS</option>
            <option value="HTML">HTML</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;
