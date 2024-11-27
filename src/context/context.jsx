import React, { createContext, useState, useContext } from "react";

const Resumecontext = createContext();

export const useResumeContext = () => useContext(Resumecontext);

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    },
    education: {
      institution: "",
      degree: "",
      year: "",
    },
    workExperience: [
      { company: "", role: "", duration: "", achievements: "" },
    ],
    skills: [],
    projects: [
      { title: "", description: "", technologies: "" },
    ],
    theme: "light",
    layout: "layout1",
  });

  const updateResumeData = (key, value) => {
    setResumeData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const updatePersonalInfo = (key, value) => {
    setResumeData((prevState) => ({
      ...prevState,
      personalInfo: {
        ...prevState.personalInfo,
        [key]: value,
      },
    }));
  };

  return (
    <Resumecontext.Provider value={{ resumeData, updateResumeData, updatePersonalInfo }}>
      {children}
    </Resumecontext.Provider>
  );
};
