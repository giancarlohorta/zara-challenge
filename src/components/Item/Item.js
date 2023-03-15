import { PropTypes } from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./Item.scss";

const Item = ({ id, image, name, author, description, internalPage }) => {
  return (
    <Link className="item" to={`/podcast/${id}`} role="link">
      <img src={image} alt={name} />
      <h2 className="item__title">{name}</h2>
      <p className="item__author">Author: {author}</p>
      {internalPage && (
        <div>
          <p className="item__description--title">Descrition:</p>
          <p className="item__description--text">{description}</p>
        </div>
      )}
    </Link>
  );
};

Item.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  internalPage: PropTypes.bool,
};
Item.defaultProps = {
  id: "",
  image: "",
  name: "",
  author: "",
  description: "",
  internalPage: false,
};

export default Item;
