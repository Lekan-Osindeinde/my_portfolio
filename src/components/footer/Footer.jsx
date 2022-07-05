import "./footer.css";
const Footer = () => {
  return (
    <div className="copyright">
      <p className="copy">Osindeinde ©{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
