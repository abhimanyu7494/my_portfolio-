import experience from "./data/experience.json";

const Experience = () => {
  return (
    <section id="experience" className="container ex" style={{ padding: "80px 20px" }}>
      <h1>Experience</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {experience.map((data) => (
          <div
            key={data.id}
            className="ex-items"
            data-aos="zoom-in"
            data-aos-duration="1000"
            style={{
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
            }}
          >
            <div className="left">
              <img
                src={`/assets/${data.imageSrc}`}
                alt={data.role}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>
                <span>{data.startDate} - {data.endDate}</span> |{" "}
                <span>{data.location}</span>
              </h4>
              {data.experiences.map((exp, i) => (
                <p key={i} style={{ margin: "5px 0", color: "#333" }}>
                  {exp}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
