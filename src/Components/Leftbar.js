const data = {
  languages: ["c++", "Jacascript", "Java"],
  database: ["MySql", "SQL", "Server", "MongoDB"],
  achievements: [
    "Attenting all film",
    "Highest package in college",
    "Firewall cracked and hacked",
  ],
  frameworks: ["Angular", "React", "Spring Boot"],
};

const education = [
  {
    course: "BTech",
    institute: "CEC",
    duration: "2018-2022",
    grade: "7.37",
    branch: "CSE",
  },
  {
    course: "Intermediate",
    institute: "KVs",
    duration: "2015-2017",
    grade: "6.3",
    branch: "MPC",
  },
  {
    course: "Full Stack",
    institute: "Acciojob",
    duration: "2023-2024",
    grade: "7",
  },
];

const Subsection = ({ title, points }) => {
  return (
    <div className="subsection">
      <p className="title">{title}</p>
      <ul>
        {points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const EducationCard = ({ details }) => {
  return (
    <div className="education-card">
      <h4>{details.institute}</h4>
      <p>{details.duration}</p>
      <p>{details.grade}</p>
      {details.branch && <p>{details.branch}</p>}
      <span className="course">~{details.course}</span>
    </div>
  );
};

const Leftbar = () => {
  return (
    <div className="leftbar-container">
      <div className="education">
        <h2>Education</h2>
        {education.map((item) => (
          <EducationCard details={item} />
        ))}
      </div>
      <Subsection title="Database" points={data.database} />
      <Subsection title="Languages" points={data.languages} />
      <Subsection title="Achievements" points={data.achievements} />
      <Subsection title="Frameworks" points={data.frameworks} />
    </div>
  );
};

export default Leftbar;
