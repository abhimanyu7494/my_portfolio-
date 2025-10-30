import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
const Home = () => {
    const typedRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: [
                "Welcome to my profile",
                "My Name is Abhimanyu",
                "I'm full stack developer",
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
        };
        const typed = new Typed(typedRef.current, options);
        return () => {
            typed.destroy();
        };
    }, []);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "container home", id: "home", style: { display: "flex", flexWrap: "wrap" }, children: [_jsxs("div", { className: "left", "data-aos": "fade-up-right", "data-aos-duration": "1000", children: [_jsx("h1", { ref: typedRef }), _jsx("a", { href: pdf, download: "Resume.pdf", className: "btn btn-outline-warning my-3", children: "Download Resume" })] }), _jsx("div", { className: "right", children: _jsx("div", { className: "img", "data-aos": "fade-up-left", "data-aos-duration": "1000", children: _jsx("img", { src: `/assets/${hero.imgSrc}`, alt: "hero" }) }) })] }) }));
};
export default Home;
