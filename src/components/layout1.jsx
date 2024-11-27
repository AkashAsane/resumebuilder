const LayoutOption1 = ({ data }) => {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{data.personalInfo.name}</h1>
        <p className="text-gray-600">Email: {data.personalInfo.email}</p>
        <p className="text-gray-600">Phone: {data.personalInfo.phone}</p>
        <p className="text-gray-600">LinkedIn: {data.personalInfo.linkedin}</p>
        <p className="text-gray-600">GitHub: {data.personalInfo.github}</p>
  
        <h3 className="text-xl font-semibold text-gray-800">Education</h3>
        <p>{data.education.institution} - {data.education.degree} ({data.education.year})</p>
  
        <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
        <ul className="list-disc pl-6 text-gray-600">
          {data.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default LayoutOption1;
  