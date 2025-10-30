import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail, SiWhatsapp } from "react-icons/si";
const Contact = () => {
    const icons = [
        {
            link: "https://www.instagram.com/",
            icon: _jsx(FaInstagram, { style: { color: "#E4405F" } }),
        },
        {
            link: "https://www.facebook.com/",
            icon: _jsx(CiFacebook, { style: { color: "#1877F2" } }),
        },
        {
            link: "https://www.linkedin.com/",
            icon: _jsx(CiLinkedin, { style: { color: "#0077B5" } }),
        },
        {
            link: "https://twitter.com/",
            icon: _jsx(FaSquareXTwitter, { style: { color: "#000" } }),
        },
        {
            link: "https://github.com/",
            icon: _jsx(FaGithubSquare, { style: { color: "#171515" } }),
        },
        {
            link: "mailto:sabhimanyu9263@gmail.com",
            icon: _jsx(SiGmail, { style: { color: "#EA4335" } }),
        },
        {
            link: "https://wa.me/919661104667",
            icon: _jsx(SiWhatsapp, { style: { color: "#25D366" } }),
        },
    ];
    return (_jsxs("section", { id: "contact", className: "container", style: { padding: "80px 20px" }, children: [_jsx("h1", { children: "Contact Me" }), _jsx("div", { className: "contact-icon", style: {
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "20px",
                    marginTop: "30px",
                }, children: icons.map((item, index) => (_jsx("a", { href: item.link, target: "_blank", rel: "noopener noreferrer", style: {
                        backgroundColor: "white",
                        height: "70px",
                        width: "70px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50%",
                        border: "2px solid rgb(70, 240, 70)",
                        transition: "all 0.3s ease-in-out",
                        fontSize: "2rem",
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.transform = "scale(1.15)";
                        e.currentTarget.style.boxShadow =
                            "0 0 20px rgba(70, 240, 70, 0.6)";
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "none";
                    }, children: item.icon }, index))) })] }));
};
export default Contact;
