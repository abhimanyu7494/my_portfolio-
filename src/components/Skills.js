import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import skills from "./data/skills.json";
const Skills = () => {
    return (_jsxs("div", { className: "container skills", id: "skills", children: [_jsx("h1", { children: "SKILLS" }), _jsx("div", { className: "items", children: skills.map((data, index) => (_jsxs("div", { className: "item", "data-aos": "flip-left", "data-aos-duration": "1000", children: [_jsx("img", { src: `/assets/${data.imageSrc}`, alt: data.title }), _jsx("h3", { children: data.title })] }, index))) })] }));
};
export default Skills;
