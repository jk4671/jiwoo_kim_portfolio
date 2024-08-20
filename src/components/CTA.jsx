import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Interested in working together? <br className="sm:block hidden" />
        Get in contact!
      </p>
      <a
        className="btn"
        href="mailto:jordjkim@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Contact
      </a>
    </section>
  );
};

export default CTA;
