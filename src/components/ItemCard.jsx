import { Link } from "react-router-dom";

export function ItemCard({ stock }) {
  return (
    <div className="item-card">
      <Link to={`/shop/${stock._id}`} className="item-card-content">
        <div className="card-image">
          <img className="card-product-image" src={stock.imageId}></img>
        </div>
        <h3>{stock.description}</h3>
        <h3>{stock.price}</h3>
      </Link>
    </div>
  );
}
