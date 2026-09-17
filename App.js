import React from "react";

function App() {
  return (
    <div style={styles.page}>
      {/* Navigation Menu */}
      <nav style={styles.nav}>
        <h2 style={styles.logo}>&#11140;cbs kinigi</h2>

        <ul style={styles.menu}>
          <li><a href="#home" style={styles.link}>Home</a></li>
          <li><a href="#about" style={styles.link}>About Us</a></li>
          <li><a href="#school-info" style={styles.link}>School Information</a></li>
          <li><a href="#programs" style={styles.link}>Programs</a></li>
          <li><a href="#admission" style={styles.link}>Admission</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
          <a href="remember" style={styles.link}>remember</a>
        </ul>
      </nav>

      {/* Home */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <h1>Welcome to cbs kinigi</h1>
          <p>Education, Discipline, Faith and Excellence</p>

          <div style={styles.welcomeBox}>
            <h3>School Director</h3>
            <p>NIYIGABA jim</p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" style={styles.section}>
        <h2 style={styles.title}>About Us</h2>

        <div style={styles.contentBox}>
          <h3>CBS KINIGI</h3>

          <p>
            CNS KINIGI is a school dedicated to providing
            quality education and developing students academically, morally,
            socially and professionally.
          </p>

          <p>
            Our school provides a supportive learning environment where
            students are encouraged to work hard, respect others and prepare
            themselves for a successful future.
          </p>

          <p>
            The school is led by <strong>Niyigaba jim</strong>, who serves
            as the Director of Collège Baptiste de Ngarama.
          </p>
        </div>
      </section>

      {/* School Information */}
      <section id="school-info" style={styles.section}>
        <h2 style={styles.title}>School Information</h2>

        <div style={styles.cards}>
          <div style={styles.card}>
            <h3>Classes</h3>
            <h2>55</h2>
            <p>Total classes in the school</p>
          </div>

          <div style={styles.card}>
            <h3>Students</h3>
            <h2>800</h2>
            <p>Total number of students</p>
          </div>

          <div style={styles.card}>
            <h3>Boys</h3>
            <h2>400</h2>
            <p>Number of boys</p>
          </div>

          <div style={styles.card}>
            <h3>Girls</h3>
            <h2>400</h2>
            <p>Number of girls</p>
          </div>

          <div style={styles.card}>
            <h3>Teachers</h3>
            <h2>100</h2>
            <p>Total number of teachers</p>
          </div>

          <div style={styles.card}>
            <h3>Director</h3>
            <h2>Niyigaba jim</h2>
            <p>School Director</p>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" style={styles.section}>
        <h2 style={styles.title}>Our Programs</h2>

        <div style={styles.programGrid}>

          <div style={styles.programBox}>
            <h3>Trades</h3>
            <ul style={styles.list}>
              <li>Trades L3</li>
              <li>Trades L4</li>
              <li>Trades L5</li>
            </ul>
          </div>

          <div style={styles.programBox}>
            <h3>SOD school fees 250000rwf</h3>
            <ul style={styles.list}>
              <li>FASHION DESIGN L3</li>
              <li>FASHION DESIGN L4</li>
              <li>FASHION DESIGN L5</li>
            </ul>
          </div>

          <div style={styles.programBox}>
            <h3>TOR school fees 250000rwf</h3>
            <ul style={styles.list}>
              <li>TOURSIM L3</li>
              <li>TOURSIM L4</li>
              <li>TOURISML5</li>
            </ul>
          </div>

          <div style={styles.programBox}>
            <h3>ACC school fees 250000rwf</h3>
            <ul style={styles.list}>
              <li>FOOD PROCESSING L3</li>
              <li>FOOD PROCESSING L4</li>
              <li>FOOD PROCESSING L5</li>
            </ul>
          </div>

          {/* <div style={styles.programBox}>
            <h3>O-Level school fees 150000rwf</h3>
            <ul style={styles.list}>
              <li>S1</li>
              <li>S2</li>
              <li>S3</li>
            </ul>
          </div> */}

        </div>
      </section>

      {/* Admission */}
      <section id="admission" style={styles.section}>
        <h2 style={styles.title}>Admission</h2>

        <div style={styles.contentBox}>
          <h3>Student Admission</h3>

          <p>
            cbs kinigi welcomes students who are interested
            in receiving quality education in a disciplined and supportive
            environment.
          </p>

          <h3>Admission Requirements</h3>

          <ul style={styles.list}>
            <li>Completed registration form</li>
            <li>Previous school documents</li>
            <li>Student identification documents</li>
            <li>Required school fees</li>
            <li>Other documents requested by the administration</li>
          </ul>

          <p>
            For more information about admission and registration, please
            contact the school administration by email.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.contact}>
        <h2 style={styles.title}>Contact Us</h2>

        <div style={styles.contactBox}>
          <h3>cbs kinigi</h3>

          <p>Location: musanze, Rwanda</p>
          <p>Director: Niyigaba jim</p>
          <p>
            Email:{" "}
            <a
              href="mailto:collagebaptistedengarama@gmail.com"
              style={styles.email}
            >
              cbskinigi@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <h3> cbskinigi</h3>
        <p>Education, Discipline, Faith and Excellence</p>
        <p>Director: Niyigaba jim</p>
        <p>musanze, Rwanda</p>
        <p>cbskinigi@gmail.com</p>
        <p>© 2026 cbskinigi from<h1> &#33399;</h1>assante fontFamily</p>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    margin: 0,
    fontFamily: "Arial, sans-serif",
    color: "#ce1e5b",
    backgroundColor: "#2ebab3",
  },

  nav: {
    backgroundColor: "#850739",
    color: "white",
    padding: "18px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    margin: 0,
    fontSize: "24px",
  },

  menu: {
    display: "flex",
    gap: "25px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    flexWrap: "wrap",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  },

  hero: {
    minHeight: "500px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#d6b9cd",
    padding: "40px 20px",
  },

  heroContent: {
    maxWidth: "800px",
  },

  welcomeBox: {
    marginTop: "30px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(47, 120, 8, 0.12)",
  },

  section: {
    padding: "70px 10%",
    scrollMarginTop: "100px",
  },

  title: {
    textAlign: "center",
    color: "#11010f",
    fontSize: "32px",
    marginBottom: "35px",
  },

  contentBox: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    backgroundColor: "#09bda5",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(7, 111, 16, 0.08)",
    lineHeight: "1.8",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "25px",
  },

  card: {
    padding: "30px 20px",
    backgroundColor: "#0ea9ac",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 3px 10px rgba(5, 106, 15, 0.08)",
  },

  programGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    margin: "auto",
  },

  programBox: {
    padding: "25px",
    backgroundColor: "#1dcfbd",
    borderRadius: "12px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
    borderTop: "4px solid #20011c",
  },

  list: {
    lineHeight: "2",
    paddingLeft: "25px",
  },

  contact: {
    padding: "70px 10%",
    backgroundColor: "#e0f2fe",
    scrollMarginTop: "100px",
  },

  contactBox: {
    maxWidth: "700px",
    margin: "auto",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },

  email: {
    color: "#1a0117",
    textDecoration: "none",
    fontWeight: "bold",
  },

  footer: {
    textAlign: "center",
    padding: "35px 20px",
    backgroundColor: "#12020e",
    color: "white",
  },
};

export default App;