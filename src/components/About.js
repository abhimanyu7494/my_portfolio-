import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
const About = () => {
    const skills = [
        { name: "HTML", icon: _jsx(FaHtml5, { color: "#E34F26" }) },
        { name: "CSS", icon: _jsx(FaCss3Alt, { color: "#1572B6" }) },
        { name: "JavaScript", icon: _jsx(FaJs, { color: "#F7DF1E" }) },
        { name: "React", icon: _jsx(FaReact, { color: "#61DAFB" }) },
        { name: "Node.js", icon: _jsx(FaNodeJs, { color: "#339933" }) },
        { name: "Express", icon: _jsx(SiExpress, { color: "#000000" }) },
    ];
    const experiences = [
        "Currently working at Dataline Imagin Pvt. Ltd. as a Full Stack Developer",
        "Completed 3 internships at: Internpe, ApexPlanet, PlaceLab",
    ];
    return (_jsxs("section", { id: "about", className: "container", style: { padding: "80px 20px" }, children: [_jsx("h1", { children: "About Me" }), _jsxs("p", { style: {
                    fontSize: "1.1rem",
                    maxWidth: "800px",
                    margin: "0 auto 40px",
                    lineHeight: "1.6",
                }, children: ["Hi, I\u2019m ", _jsx("strong", { children: "Abhimanyu Kumar Pandey" }), ", a Full Stack Developer. I love building responsive web applications and exploring new technologies to enhance performance and user experience."] }), _jsx("h2", { style: { marginBottom: "20px", fontSize: "2rem" }, children: "My Skills" }), _jsx("div", { style: {
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "25px",
                    marginBottom: "50px",
                }, children: skills.map((skill, index) => (_jsxs("div", { style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "90px",
                        padding: "10px",
                        borderRadius: "10px",
                        transition: "transform 0.3s, box-shadow 0.3s",
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.transform = "scale(1.1)";
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(0,0,0,0.2)";
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                    }, children: [_jsx("div", { style: { fontSize: "2.5rem" }, children: skill.icon }), _jsx("p", { style: { marginTop: "10px", fontWeight: "bold" }, children: skill.name })] }, index))) }), _jsx("h2", { style: { marginBottom: "20px", fontSize: "2rem" }, children: "Experience" }), _jsx("ul", { style: {
                    listStyle: "none",
                    padding: 0,
                    fontSize: "1.1rem",
                    maxWidth: "700px",
                    margin: "0 auto",
                    lineHeight: "1.8",
                }, children: experiences.map((exp, index) => (_jsxs("li", { children: ["\u2022 ", exp] }, index))) })] }));
};
export default About;
