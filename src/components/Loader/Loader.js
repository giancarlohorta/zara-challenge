import "./Loader.scss";
const Loader = ({ loading }) => {
  return loading && <div data-testid="loader" className="loader"></div>;
};

export default Loader;
