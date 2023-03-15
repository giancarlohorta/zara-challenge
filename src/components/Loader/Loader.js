import { PropTypes } from "prop-types";
import "./Loader.scss";

const Loader = ({ loading }) => {
  return loading && <div data-testid="loader" className="loader"></div>;
};
Loader.propTypes = {
  loading: PropTypes.bool,
};
Loader.defaultProps = {
  loading: false,
};
export default Loader;
