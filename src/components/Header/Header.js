import { PropTypes } from "prop-types";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StatusContext } from "../../StatusContext";
import { STATUS_FETCH } from "../../utils/constants";
import Loader from "../Loader";
import "./Header.scss";

const Header = () => {
  const { status } = useContext(StatusContext);
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
