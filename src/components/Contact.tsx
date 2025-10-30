import { FaInstagram, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail, SiWhatsapp } from "react-icons/si";

const Contact = () => {
  const icons = [
    {
      link: "https://www.instagram.com/",
      icon: <FaInstagram style={{ color: "#E4405F" }} />,
    },
    {
      link: "https://www.facebook.com/",
      icon: <CiFacebook style={{ color: "#1877F2" }} />,
    },
    {
      link: "https://www.linkedin.com/",
      icon: <CiLinkedin style={{ color: "#0077B5" }} />,
    },
    {
      link: "https://twitter.com/",
      icon: <FaSquareXTwitter style={{ color: "#000" }} />,
    },
    {
      link: "https://github.com/",
      icon: <FaGithubSquare style={{ color: "#171515" }} />,
    },
    {
      link: "mailto:sabhimanyu9263@gmail.com",
      icon: <SiGmail style={{ color: "#EA4335" }} />,
    },
    {
      link: "https://wa.me/919661104667",
      icon: <SiWhatsapp style={{ color: "#25D366" }} />,
    },
  ];

  return (
    <section id="contact" className="container" style={{ padding: "80px 20px" }}>
      <h1>Contact Me</h1>

      <div
        className="contact-icon"
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {icons.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
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
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.15)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(70, 240, 70, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
