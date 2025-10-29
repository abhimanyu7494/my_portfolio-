import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

const About = () => {
  // ✅ Skills list with icon and name
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "Express", icon: <SiExpress color="#000000" /> },
  ];

  // ✅ Experience list
  const experiences = [
    "Currently working at Dataline Imagin Pvt. Ltd. as a Full Stack Developer",
    "Completed 3 internships at: Internpe, ApexPlanet, PlaceLab",
  ];

  return (
    <div
      id="about"
      style={{
        padding: "100px 20px",
        backgroundColor: "#f9f9f9",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>About Me</h1>

      {/* Intro */}
      <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto 40px" }}>
        {/* Yaha apna personal intro daalo */}
        Hi, I’m Abhimanyu Kumar Pandey, a Full Stack Developer. I love building web applications and learning new technologies. {/* Tum apna custom intro yaha likh sakte ho */}
      </p>

      {/* Skills Section */}
      <h2 style={{ marginBottom: "20px" }}>My Skills</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100px",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div style={{ fontSize: "2.5rem" }}>{skill.icon}</div>
            <p style={{ marginTop: "10px", fontWeight: "bold" }}>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Experience Section */}
      <h2 style={{ marginBottom: "20px" }}>Experience</h2>
      <ul style={{ listStyle: "none", padding: 0, fontSize: "1.1rem", maxWidth: "700px", margin: "0 auto" }}>
        {experiences.map((exp, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>• {exp}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;
