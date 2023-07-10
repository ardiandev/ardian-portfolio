import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container mx-auto px-4 py-5">
      <p>
        <Link to="/">Ardian</Link> @copyright 2023
      </p>
    </div>
  );
};

export default Footer;
