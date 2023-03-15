import { PropTypes } from "prop-types";
import Item from "../Item";
import "./ItemList.scss";

const ItemList = ({ list }) => {
  return (
    <div className="item-list">
      {list?.map(({ name, id, author, image }) => {
        return (
          <Item key={id} name={name} id={id} author={author} image={image} />
        );
      })}
    </div>
  );
};

ItemList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.string,
      author: PropTypes.string,
      description: PropTypes.string,
      internalPage: PropTypes.bool,
    })
  ),
};
ItemList.defaultProps = {
  list: [],
};

export default ItemList;
