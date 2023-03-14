import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { STATUS_FETCH } from "../../utils/constants";
import Loader from "../Loader";
import "./Header.scss";

const Header = ({ status }) => {
  return (
    <div className="container header">
      <Link to="/" className="header__logo">
        Podcaster
      </Link>
      <Loader loading={status === STATUS_FETCH.LOADING} />
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool,
};
Header.defaultProps = {
  loading: false,
};

export default Header;
