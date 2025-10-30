import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import project from "./data/projects.json";
const Projects = () => {
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "container projects my-3", id: "projects", children: [_jsx("h1", { children: "PROJECTS" }), _jsx("div", { className: "projects-grid", children: project.map((data) => (_jsx("div", { className: "project-card", "data-aos": "flip-right", "data-aos-duration": "1000", children: _jsxs("div", { className: "card bg-white text-black", children: [_jsx("div", { className: "img d-flex justify-content-center align-content-center p-3", children: _jsx("img", { src: data.imageSrc, className: "card-img-top", alt: data.title }) }), _jsxs("div", { className: "card-body text-center", children: [_jsx("h5", { className: "card-title", children: data.title }), _jsx("p", { className: "card-text", children: data.description }), _jsx("a", { href: data.demo, className: "btn btn-primary mx-2", children: "Demo" }), _jsx("a", { href: data.source, className: "btn btn-warning mx-2", children: "Code" })] })] }) }, data.key))) })] }) }));
};
export default Projects;
