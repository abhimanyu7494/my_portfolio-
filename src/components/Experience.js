import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import experience from "./data/experience.json";
const Experience = () => {
    return (_jsxs("section", { id: "experience", className: "container ex", style: { padding: "80px 20px" }, children: [_jsx("h1", { children: "Experience" }), _jsx("div", { style: {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "40px",
                }, children: experience.map((data) => (_jsxs("div", { className: "ex-items", "data-aos": "zoom-in", "data-aos-duration": "1000", style: {
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        backgroundColor: "white",
                        border: "1px solid rgb(70, 240, 70)",
                        boxShadow: "5px 5px 10px rgba(101,175,10,0.3)",
                        borderRadius: "10px",
                        padding: "20px",
                        width: "100%",
                        maxWidth: "800px",
                        textAlign: "center",
                    }, children: [_jsx("div", { className: "left", children: _jsx("img", { src: `/assets/${data.imageSrc}`, alt: data.role, style: {
                                    width: "120px",
                                    height: "120px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                } }) }), _jsxs("div", { className: "right", children: [_jsx("h2", { children: data.role }), _jsxs("h4", { children: [_jsxs("span", { children: [data.startDate, " - ", data.endDate] }), " |", " ", _jsx("span", { children: data.location })] }), data.experiences.map((exp, i) => (_jsx("p", { style: { margin: "5px 0", color: "#333" }, children: exp }, i)))] })] }, data.id))) })] }));
};
export default Experience;
