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

export default ItemList;
