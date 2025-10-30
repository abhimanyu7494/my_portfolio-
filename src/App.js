import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Aos from "aos";
import "aos/dist/aos.css";
// 👇 WhatsApp Button import yaha karo
import WhatsAppButton from "./components/WhatsAppButton";
const App = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Navbar, {}), _jsxs("div", { className: "container", children: [_jsx(Home, {}), _jsx(About, {}), _jsx(Experience, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Contact, {})] }), _jsx(WhatsAppButton, {})] }));
};
export default App;
