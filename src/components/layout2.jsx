const LayoutOption2 = ({ data }) => {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
        <h2 className="text-3xl font-bold text-gray-800">{data.personalInfo.name}</h2>
  
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Contact Info</h3>
          <p className="text-gray-600">{data.personalInfo.email}</p>
          <p className="text-gray-600">{data.personalInfo.phone}</p>
        </div>
  
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Education</h3>
          <p className="text-gray-600">{data.education.institution}</p>
          <p className="text-gray-600">{data.education.degree} - {data.education.year}</p>
        </div>
  
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
          <ul className="list-disc pl-6 text-gray-600">
            {data.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default LayoutOption2;
  